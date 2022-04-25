# Getting Started with React App

npm install react@17.0.0 react-dom@17.0.0
npm start

# I have used bootstrap & bootstrap Ions & Sass modules in this application.

npm install bootstrap
npm i bootstrap-icons
npm install -g sass


# Component Interactions: 

I used **openweathermap api** to get the climate data.

I have created **3 functional components** in this weather application
i)   ListOfCities - To show the list of cities (Parent)
ii)  AddCityPopup - To show the popup when clicked on Add New button (Child Of ListOfCities)
iii) WeatherPopup - To show the weather popup when clicked on city (Child Of ListofCities)


# AddCityPopup Component
Props: 
1. method to updated city name {updateCityName}
2. method to hide popup {hideAddCityPopup}
3.State (this says whther clicked on add button)  {isAddCityPopupShow}

returns:
UI of AddCityPoup
city name typed in popup

# WeatherPopup Component
Props:
1. State which has Object of weather Data which got from API  {cityData}
2. method to hide popup  {hideWeatherPopup}
3. State (this ultimately tells whether clicked on city)  {isWeatherPopupShow}

returns:
UI of WeatherPopup


# Status of Project Completion
As per the UI design, I made UI for showing listofcities & addcitypopup.
Weatherpopup functionalities I completed, showed the data but UI design needs to be completed. 
Since weatherPopup UI is complex need more time to complete that
