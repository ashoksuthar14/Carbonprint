from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os
from PIL import Image

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key='AIzaSyDtj4fVBSHa4s6WdVupOoegQBCAzQ-XQwY')
# Update to use the latest model version
model = genai.GenerativeModel('gemini-1.5-flash')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'})
    
    image = request.files['image']
    img = Image.open(image)

    # Convert image to RGB if it's not
    if img.mode != 'RGB':
        img = img.convert('RGB')

    prompt = """Identify the item in the image and provide a concise analysis in the following format:
    Item: [Item name]
    Carbon Footprint: [Specific amount in kg CO2e/year]
    Impact: [1-2 sentences about environmental impact]
    Alternative: [Specific eco-friendly alternative]
    Potential Savings: [Amount of CO2e saved per year]
    
    If exact numbers aren't available, provide reasonable estimates based on similar items and indicate that it's an estimate."""

    try:
        response = model.generate_content([prompt, img])
        return jsonify({'analysis': response.text})
    except Exception as e:
        print(f"Analysis error: {str(e)}")
        return jsonify({'error': str(e)}), 500

# Add this at the top level of your file
chat_history = []

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        question = data.get('question')
        
        if not question:
            return jsonify({'error': 'No question provided'}), 400

        # Create a chat model
        chat_model = genai.GenerativeModel('gemini-pro')
        
        # Prepare the context for environmental questions
        context = """You are an expert in environmental science and carbon footprint analysis. 
        Provide concise, factual answers about environmental impact, carbon footprint, and sustainable alternatives. 
        If you're not sure about specific numbers, provide reasonable estimates and indicate that they are estimates."""
        
        # Combine context with the user's question
        prompt = f"{context}\n\nQuestion: {question}\nAnswer:"
        
        # Generate response
        response = chat_model.generate_content(prompt)
        
        if response.text:
            # Store the conversation
            chat_history.append({
                'question': question,
                'answer': response.text
            })
            
            return jsonify({'response': response.text})
        else:
            return jsonify({'error': 'No response generated'}), 500
            
    except Exception as e:
        print(f"Chat error: {str(e)}")
        return jsonify({'error': 'Failed to process your question'}), 500

if __name__ == '__main__':
    app.run(debug=True)