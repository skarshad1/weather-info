import React from 'react'
import Modal from "react-bootstrap/Modal";

function WeatherPopUp(props) {

  const { cityData, hideWeatherPopup, isWeatherPopupShow } = props

  // const WeatherPopupLoaded = () => {
  //   console.log('I am wetherPopupLoaded')
  // };

  return (
    <Modal show={isWeatherPopupShow} onHide={() => hideWeatherPopup()} >
      <Modal.Header>
        <Modal.Title>{cityData.name} Climate Data:</Modal.Title>
        <button onClick={() => hideWeatherPopup()}>X</button>
      </Modal.Header>
      <Modal.Body>
        <p>Temperature {cityData.main == null ? "" : cityData.main.temp} deg Farenhite </p>
        <p>Date:  {new Date().toLocaleString() + ""}</p>

        {
          cityData.weather == null ? '' : cityData.weather.map(
            (weather, index) => {
              return (
                <p key={index}>{weather.description == 'overcast clouds' ? <i className="bi bi-cloud-hail increase-size"></i> : ''}</p>
              )
            })
        }

        <p>Wind: {cityData.wind == null ? "" : cityData.wind.speed}m/s
          Humidity: {cityData.main == null ? "" : cityData.main.humidity}%</p>
        <p>Sunsrise: {cityData.sys == null ? "" : new Date(cityData.sys.sunrise * 1000).toLocaleTimeString()}</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => hideWeatherPopup()}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default WeatherPopUp