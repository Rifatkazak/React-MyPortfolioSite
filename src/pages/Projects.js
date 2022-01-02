import * as React from 'react';

import weatherApp from "../assets/WeatherApp.jpg"
import BlogApp from "../assets/BlogApp.jpg"
import ContactsApp from "../assets/ContactsApp.jpg"
import RecipeApp from "../assets/RecipeApp.jpg"
import TaskTracker from "../assets/TaskTracker.jpg"
import ToDoList from "../assets/ToDoList.jpg"


export default function TitlebarBelowImageList() {
  return (
    <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ToDoList} class="d-block w-100" alt="1" />
    </div>
    <div class="carousel-item">
      <img src={weatherApp} class="d-block w-100" alt="1" />
    </div>
    <div class="carousel-item">
      <img src={BlogApp} class="d-block w-100" alt="1" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-info" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-info" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* <div className='swiper-container'>
    <div className='swiper-wrapper'>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={ToDoList}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>To Do List</h1>
              <p>I structured my own To Do List HTML5, CSS3, Javascript</p>
          </div>
        </div>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={weatherApp}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>Wheather App</h1>
              <p>I structured my own Weather App HTML5, CSS3, Javascript, React.js. I received API information from Openweather. I used context structure and styled module CSS.</p>
          </div>
        </div>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={BlogApp}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>Blog App</h1>
              <p>I structured my own Blog app HTML5, CSS3, Javascript, React.js, Bootstrap. I create realtime database with firebase and ı deploy it with Heroku.</p>
          </div>
        </div>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={RecipeApp}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>Recipe APP</h1>
              <p>I structured my own To Do List HTML5, CSS3, Javascript</p>
          </div>
        </div>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={TaskTracker}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>Task Tracker</h1>
              <p>I structured my own contacts app HTML5, CSS3, Javascript, React.js, Bootstrap. I create realtime database with firebase and ı deploy it with Heroku.</p>
          </div>
        </div>
        <div className='slider-item swiper-slide'> 
          <div className='slider-image-wrapper'> 
              <img className='slider-image' src={ContactsApp}> </img>
          </div>
          <div className='slider-item-content'>
              <h1>Contacts App</h1>
              <p>I structured my own contacts app HTML5, CSS3, Javascript, React.js, Bootstrap. I create realtime database with firebase and ı deploy it with Heroku.</p>
          </div>
        </div>
    </div>
</div> */}
<h2 className="text-center mt-4 ">My Projects</h2>
<div class=" d-flex justify-content-center flex-wrap mt-5 mb-3 " >
  
{data_list.map((item) => {
  return (
    <div class="card me-3 ms-2 mb-3" style={{width: "18rem"}}>
        <img src={item.image} class="card-img-top" alt={item.title}/>
        <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.content}</p>
        </div>
    </div>
  )
})}
</div>
</div>
  );
}


const data_list = [{
  image : weatherApp,
  title : "Wheather App",
  content : "I structured my own Weather App HTML5, CSS3, Javascript, React.js. I received API information from Openweather. I used context structure and styled module CSS."
},
{
  image : BlogApp,
  title : "Blog App",
  content : "I structured my own Blog app HTML5, CSS3, Javascript, React.js, Bootstrap. I create realtime database with firebase and ı deploy it with Heroku."

},
{
  image : ContactsApp,
  title : "Contacts App",
  content : "c"
},
{
  image : TaskTracker,
  title : "Task Tracker",
  content : "I structured my own contacts app HTML5, CSS3, Javascript, React.js, Bootstrap. I create realtime database with firebase and ı deploy it with Heroku."
},
{
  image : RecipeApp,
  title : "Recipe APP",
  content : "I structured my own To Do List HTML5, CSS3, Javascript"
},
{
  image : ToDoList,
  title : "To Do List",
  content : "I structured my own To Do List HTML5, CSS3, Javascript"
}
]
