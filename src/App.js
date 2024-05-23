import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/PanelClima';


function App() {
  return (
    <div className="App">

      <NavBar />
      <WeatherPanel />
     

    </div>
  );
}

export default App;