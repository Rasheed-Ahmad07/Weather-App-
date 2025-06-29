# Weather App

## Description
A simple Node.js and Express web application that fetches real-time weather data for a given city using the OpenWeatherMap API. It uses EJS for templating and displays the temperature dynamically with a clean and modern UI.

## Features
- Search weather by city name
- Displays current temperature in Celsius
- Error handling for invalid city names
- Responsive and elegant UI design

## Technologies Used
- Node.js
- Express
- EJS (Embedded JavaScript templates)
- OpenWeatherMap API
- dotenv for environment variables
- CSS for styling

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Rasheed-Ahmad07/Weather-App.git
cd Weather-App
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your API key:

```env
API_KEY=your_openweathermap_api_key
PORT=3000
```

4. Start the application:

```bash
npm start
```

## Usage

- Open `http://localhost:3000` in your browser.
- Enter the city name and click **Get Weather** to view the current temperature.

## License

This project is licensed under the MIT License.
