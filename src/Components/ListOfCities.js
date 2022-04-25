import React, { useState } from 'react'
import AddCityPopup from './AddCityPopup'
import './ListOfCities.scss'
import WeatherPopUp from './WeatherPopUp'


export const ListOfCities = () => {
    const [isWeatherPopupShow, setIsWeatherPopupShow] = useState(false)
    const [isAddCityPopupShow, setIsAddCityPopupShow] = useState(false)
    const [abc, setAbc] = useState(0)
    const [caret, setCaret] = useState('down')
    
    const [city,setCity] = useState(['Mumbai','Delhi','Bangalore','Pune','Jaipur','Hyderabad']);
    const [cityData,setCityData] = useState({});
    

    function getWeather(e, city){
        setIsWeatherPopupShow(true);
        let fetchApi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6185f7adfba54b79c975e00447d3e92f`)
        fetchApi
            .then(res =>{
                return res.json()
                })
            .then((data) => {
                console.log(data)
                setCityData(data);
                })
            .catch((error) => {return console.log(error)
            })
    }

    function deleteCity(e,cityname){
        let deletedarray = city.filter((city) => city!==cityname )
        setCity(deletedarray)
    }



    const updateCityName = (e,newCity) => {
        setCity([...city,newCity])
        hideAddCityPopup()
        
    }
    
    const showAddCityPopup = () => {
        setIsAddCityPopupShow(true);
      };
    
      const hideAddCityPopup = () => {
        setIsAddCityPopupShow(false);
      };
    
      const hideWeatherPopup = () => {
        setIsWeatherPopupShow(false);
      };


      
      const sortCities = () => {
          let sortedCities = city.sort();
          console.log(abc);
          if(abc==1){
            sortedCities = sortedCities.reverse();
            setAbc(0)
            setCaret('down')
          } else {
            setAbc(1)
            setCaret('up')
          }
          setCity([...sortedCities])
          
      };


    return (
        <>
            <div className='container'  >
                <div className='row'>

                    <div className='col-md-4 head-title'>
                        <h2 className='new-h1'>List of cities</h2>
                    </div>

                    <div className='col-md-8 search-section'>
                        <div className="search-option">
                            <input placeholder='Search'/>
                            <i className="bi bi-search"></i> 
                        </div>
                        <div>
                            <button onClick={showAddCityPopup} className='button'>+ Add New</button>
                        </div>
                    </div>
                
                </div>
            </div>

        <div className="container background-task">
            <div className='row add-head-spacing'>
                <div className='col-1'>
                    No.
                </div>
                <div className='col-11' onClick={sortCities}>
                    Name<i className={'bi bi-caret-'+caret+'-fill'} ></i>
                </div>
            </div>
        </div>
        <div className="container background-task">
        {city.map( (city,index) =>  {return (
        <div className='row add-spacing'  key={index}  >
                <div className='col-1'>
                    {index+1}
                </div>
                <div className='col-10' onClick={(e) => getWeather(e,city)}>
                    {city}
                </div>
                <div className='col-1 text-right'>
                    <button className='dustbin' onClick={(e) => deleteCity(e,city)} ><i className='bi bi-trash-fill'></i></button>    
                </div>
        </div>
        )}  )}
        </div>
        <AddCityPopup hideAddCityPopup={hideAddCityPopup} isAddCityPopupShow={isAddCityPopupShow} updateCityName={updateCityName}/>
        <WeatherPopUp cityData={cityData} hideWeatherPopup={hideWeatherPopup} isWeatherPopupShow={isWeatherPopupShow} />
        </>
    )
}

export default ListOfCities

