import React from 'react'
import './Console.css';

export default function Console({console}) {
  return (

    <div class='console_container'>
        <div class='image-container'>
            <img src={console.image}  height="200" width="200"></img>
        </div>
        <span>
            <h3 class="title">{console.name}</h3>
            <br/>
            <h3 class="year">Year Released: {console.Year}</h3>
            
            <div class='description'>{console.Description}</div>
        </span>
        <div class='buttons_container'><button class='delete'>Edit Console Information</button><button class='delete'>Delete Console Information</button></div>
        <br/>
        <a href={console.info} target="_blank">More Information</a>
    </div>

  )
}
