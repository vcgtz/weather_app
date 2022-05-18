# Weather App
This script show you the current temperature based on the location of your public IP address.

## How to install this project?
Clone this repo:
```bash
git clone git@github.com:vcgtz/weather_app.git
```

Install dependencies:
```bash
cd weather_app

npm install
```

Then you need to generate a `.env` file:
```bash
cp .env.example .env
```

This project uses the following APIs:
  - [Open Weather](https://openweathermap.org/)
  - [Ipify](https://www.ipify.org/)
  - [IPStack](https://ipstack.com/)

So, before run this app, you need to get an API KEY from Open Weather and IPStack and set them in your `.env` file.


## How to run this project?
Just run this command:
```bash
node index.js
```
And you'll see something like this:
![image](https://user-images.githubusercontent.com/55886451/169101381-53c73e54-8c0e-4087-89f0-f925efe2555b.png)

## Notes
The location is not exact, it is based on your public IP address. If you're using a proxy or VPN, you'll see a different location than where you are.
