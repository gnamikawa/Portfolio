export default async function handler(req, res) {
  const api = process.env.OPENWEATHERMAP_API;
  const [lat, lon] = [req.query.lat, req.query.lon];

  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`;
  const openWeatherSuccess = await fetch(endpoint).then((raw) => raw.json());

  res.setHeader("Content-Type", "application/json");
  res.send({
    openWeather: openWeatherSuccess,
  });
}
