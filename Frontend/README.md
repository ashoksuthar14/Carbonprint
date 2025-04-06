# Carbon Footprint Calculator

A modern, animated website for calculating and analyzing carbon footprints. Built with Flask, featuring responsive design, interactive visualizations, and smooth animations.

## Features

- Interactive carbon footprint calculator
- Detailed analysis and visualization of environmental impact
- Educational content about carbon emissions
- Donation system with impact tracking
- Dark/light mode toggle
- Responsive design for all devices
- Smooth animations and transitions

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/carbon-footprint.git
cd carbon-footprint
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

1. Start the Flask development server:
```bash
python app.py
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
carbon-footprint/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── static/               # Static files
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── images/          # Image assets
└── templates/           # HTML templates
    ├── base.html        # Base template
    ├── index.html       # Home page
    ├── about.html       # About page
    ├── calculate.html   # Calculator page
    ├── analyze.html     # Analysis page
    └── donate.html      # Donation page
```

## Adding Images

1. Place your images in the `static/images/` directory
2. Required images:
   - hero-bg.jpg (Home page background)
   - about-bg.jpg (About page background)
   - analyze-bg.jpg (Analyze page background)
   - donate-bg.jpg (Donate page background)
   - testimonial1.jpg (Testimonial profile)
   - testimonial2.jpg (Testimonial profile)

## Customization

- Colors: Edit the CSS variables in `static/css/style.css`
- Content: Modify the HTML templates in the `templates/` directory
- Animations: Adjust GSAP animations in `static/js/main.js`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- GSAP for animations
- Chart.js for data visualization 