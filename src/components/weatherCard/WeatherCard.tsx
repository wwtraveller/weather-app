import styles from './weatherCard.module.css'

interface WeatherCardProps {
    city: string;
    temperature: number;
    description?: string;
    icon: string;
  }

  function WeatherCard({city, temperature, description, icon}: WeatherCardProps) {
 
    return (
        <div className={styles.weathercard}>
          <h2>{city}</h2>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
          {/* <p>{description}</p> */}
          <h3>{temperature}°C</h3>
        </div>
      );
}
export default WeatherCard;
