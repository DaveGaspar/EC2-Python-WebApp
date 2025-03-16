from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    data = None
    if request.method == "POST":
        city = request.form.get("city")
        match city:
            case "Maralik":
                city_id = 1
            case "Panik":
                city_id = 2
            case "Azatan":
                city_id = 3
            case "Artik":
                city_id = 4
            case "Yerevan":
                city_id = 8
            case "Sevan":
                city_id = 9
            case "Gavar":
                city_id = 6
        response = requests.get(f"https://emvnh9buoh.execute-api.us-east-1.amazonaws.com/getData?device_id={city_id}")
        if response.status_code == 200:
            json_data = response.json()

            keys = json_data['keys']
            first_data_element = json_data['data'][0]
            data = {}

            for key, value in zip(keys, first_data_element):
                data[key] = value
            return jsonify(data)
        else:
            return jsonify({"error": "Failed to fetch data"}), 400
    return render_template("home.html", data=data)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)