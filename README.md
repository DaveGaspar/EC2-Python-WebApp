# 🌦️ ClimateNet - IoT Climate Monitoring System

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey?logo=flask)](https://flask.palletsprojects.com/)

A Flask-based web application for monitoring climate data across multiple cities, with IoT integration.


## ✨ Features

- **Real-time Sensor Data**  
  UV index, temperature, humidity, PM2.5, wind speed, and rainfall monitoring
- **Multi-City Support**  
  Compare climate data across Armenian cities
- **Professional Portfolio**  
  Integrated developer profile showcasing skills and experience
- **Responsive Design**  
  Works flawlessly on desktop and mobile devices
- **Secure Deployment**  
  Nginx + Gunicorn on AWS EC2 with HTTPS encryption

## 🛠️ Tech Stack

| Category       | Technologies Used |
|----------------|-------------------|
| **Frontend**   | HTML5, CSS3, JavaScript, Jinja2 |
| **Backend**    | Python, Flask |
| **DevOps**     | AWS EC2, Nginx, Gunicorn |
| **IoT**        | Raspberry Pi |

## 🚀 Installation

### Local Development
```bash
# Clone repository
git clone https://github.com/DaveGaspar/EC2-Python-WebApp.git climatenet
cd climatenet

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run development server
flask run --host=0.0.0.0 --port=5000

# Production deployment with Gunicorn
gunicorn app:app -w 4 -b 127.0.0.1:5000

climatenet/
├── app.py                # Flask application entry
├── static/
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── images/           # Application images
│   └── docs/             # PDFs and documents
├── templates/
│   ├── home.html         # Dashboard
│   ├── about.html        # Developer profile
│   ├── contact.html      # Contact information
│   └── city.html         # City data view
├── requirements.txt      # Python dependencies
└── README.md             # This file

