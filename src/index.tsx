import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app/App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import WeatherCard from './components/weatherCard/WeatherCard';
import WeatherApp from './components/weatherApp/WeatherApp';
// import HomePage from './components/homePage/HomePage';
import Layout from './components/layout/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<WeatherApp />} />
        <Route path='/weather' element={<WeatherCard city={''} temperature={0} icon={''} />}></Route>
        <Route path='*' element ={<h1>Error 404</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

