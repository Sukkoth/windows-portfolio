import { Position, Weather } from "./types";

export async function GET_WEATHER(position: Position | null) {
  if (position === null) throw "Location required";

  const { latitude, longitude } = position;

  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8fcd7cd501fb4f2eb1570427240206&days=7&aqi=no&alerts=no&q=${latitude},${longitude}`
  );

  const data = (await res.json()) as Weather;

  return data;
}
