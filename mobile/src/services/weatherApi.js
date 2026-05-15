// Note: You will need an API key from https://openweathermap.org/
const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace this later

export const fetchWeather = async (lat, lon) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.main) {
      return {
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
        city: data.name
      };
    }
    return null;
  } catch (error) {
    console.error("Weather API Error: ", error);
    return null;
  }
};

// AI function to generate farming tips based on weather
export const getWeatherTip = (condition, temp) => {
  if (condition === 'Rain') return 'Aaj barish ka imkan hai, spray na karein.';
  if (temp > 35) return 'Garmi zyada hai, fasal ko paani dene ka intezam karein.';
  if (condition === 'Clear' && temp < 30) return 'Mausam saaf hai, khaad ya spray ke liye behtareen waqt hai.';
  return 'Mausam normal hai, apne aam kamo ko jari rakhein.';
};
