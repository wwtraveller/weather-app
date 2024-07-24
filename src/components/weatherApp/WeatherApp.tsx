import { Field, Form, Formik } from 'formik';
import WeatherCard from '../weatherCard/WeatherCard';
import styles from './weatherApp.module.css'
import { useEffect, useState } from 'react';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const apiKey = '41cec3385cd086ddf5a26d690baebfea';
  
    const fetchWeather = async (city: string) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
        setWeatherData(null);
      }
    };
  
    // useEffect to fetch weather data whenever weatherData changes
    useEffect(() => {
        // fetchWeather()
    if (weatherData) {
        // This could be useful for other side effects or logging
      }
    }, [weatherData]);
  
    return (
      <div className="weather-app">
        <h1>Weather App</h1>

        <Formik
          initialValues={{ city: '' }}
          validate={values => {
            const errors: { city?: string } = {};
            if (!values.city) {
              errors.city = 'Required';
            } else if (!/^[a-zA-Z\s]+$/.test(values.city)) {
              errors.city = 'Invalid city name';
            }
            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
            fetchWeather(values.city);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <Field type="text" name="city" placeholder="Enter city name" />
              {errors.city && <div className="error">{errors.city}</div>}
              <button type="submit" disabled={isSubmitting}>Search</button>
            </Form>
          )}
        </Formik>
        {error && <p className="error">{error}</p>}
        <div className='card'>
          {weatherData && (        
            <WeatherCard
              city={weatherData.name}
              temperature={weatherData.main.temp}
              description={weatherData.weather[0].description}
              icon={weatherData.weather[0].icon}
            />
          )}
        </div>
      </div>
    );
  };

export default WeatherApp;
