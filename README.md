# useless-website

Just a website to play with some APIs and Vue.js. There are two views: one for the weather and other one for the public transport timing.  

## Frontend 
Frontend is written using Vue.js and Typescript.

## Backend
At start, I just wanted it to be a frontend only app. But the Wienerlinien doesn't want to provide CORS header. Therefore, I needed to setup  
a proxy server using Node.js. 


## To launch this webapp
1. Go into the frontend directory and run this command: ` npm run serve`. 
2. Go into the backend directory and run this command: `node App.js`. 

## Weather

A simple weather displayer. Type a city name and get the temperature and get the description of the weather.  




![Default](./Images/Default.png)   


![Clouds](./Images/Clouds.png)  


![Rainy](./Images/Rainy.png)


## Train Time

Get the time of the train/bus/metro easily. Just type the start station, line and direction.   

![Metro](./Images/Metro.png)  

![Tram](./Images/Tram.png)