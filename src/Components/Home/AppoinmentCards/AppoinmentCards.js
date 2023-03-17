import React from "react";
import image1 from "../../../assets/images/doctor.png"
import image2 from "../../../assets/images/doctor.png"
import image3 from "../../../assets/images/doctor.png"
import image4 from "../../../assets/images/doctor.png"
import image5 from "../../../assets/images/doctor.png"

const AppoinmentCards = () => {
  return (

    <div className="card lg:card-side bg-base-100 shadow-xl mr-5  mt-28 bg-blue-900 ">
  <figure className=" h-[400px]">
  <div className="carousel w-[1400px]     space-x-4  rounded bg-cyan-500 hover:bg-cyan-600 ">
<div className="carousel-item ">
  <img
    src={image1}
    className="rounded-box  "
  />
</div>
<div className="carousel-item">
  <img
    src={image1}
    className="rounded-box"
  />
</div>
<div className="carousel-item">
  <img
    src={image1}
    className="rounded-box"
  />
</div>
<div className="carousel-item">
  <img
    src={image1}
    className="rounded-box"
  />
</div>
<div className="carousel-item">
  <img
    src={image1}
    className="rounded-box"
  />
</div>
</div>
    </figure>
  <div className="card-body  w-full text-white ">
    <h1 className="card-title mt-24 text-4xl">Book an Appointment today! </h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis pariatur labore quasi, et explicabo dolores atque necessitatibus error vero est sed eligendi hic ex saepe accusantium nam corrupti maiores.</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
   
 
        
  
 
  );
};




export default AppoinmentCards;
