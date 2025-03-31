# 🌦️ ClimateNet - IoT Climate Monitoring System

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey?logo=flask)](https://flask.palletsprojects.com/)
[![Gunicorn](https://img.shields.io/badge/Gunicorn-20.0%2B-green?logo=gunicorn)](https://gunicorn.org)
[![Nginx](https://img.shields.io/badge/Nginx-1.18%2B-brightgreen?logo=nginx)](https://nginx.org)
[![AWS EC2](https://img.shields.io/badge/AWS_EC2-Latest-orange?logo=amazon-aws)](https://aws.amazon.com/ec2/)

# 🚀 EC2 Python WebApp Deployment  
*A Flask web application deployed on AWS EC2 using Nginx and Gunicorn.*  

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

---

## 🛠️ Technologies Used  
| Component       | Purpose                          | Documentation |
|----------------|----------------------------------|---------------|
| **Python**     | Backend language                 | [python.org](https://www.python.org/) |
| **Flask**      | Micro web framework              | [flask.palletsprojects.com](https://flask.palletsprojects.com/) |
| **Gunicorn**   | Production WSGI server           | [gunicorn.org](https://gunicorn.org/) |
| **Nginx**      | Reverse proxy & load balancer     | [nginx.org](http://nginx.org/) |
| **AWS EC2**    | Cloud server hosting             | [AWS EC2 Docs](https://aws.amazon.com/ec2/) |

---

## 📂 Project Structure
```bash
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
└── README.md             # You are here :)
```


## 🚀 Deployment Guide  

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
flask run --host=0.0.0.0 --port=5000 # Runs on http://127.0.0.1:5000

# Production deployment with Gunicorn
gunicorn app:app -w 4 -b 127.0.0.1:5000
```
Note: Press Ctrl + C in the terminal to stop the Flask development server.

