import React from "react";

const Appointmentdetails = ({slotDetails, setTreatment}) => {
  const { name, slots } = slotDetails;
  return (
    <div className="m-6 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-secondary font-bold"> {name}</h2>
          <p>  { slots.length>0 ? slots[0] : 'Try Another Day'} </p>
          <p>  { slots.length>0 ? slots[1] : ''} </p>
          <p> { slots.length} {slots.length > 1 ? 'spaces ' : 'space'} </p>
          <div className="card-actions">
            
            <label  onClick={()=> setTreatment(slotDetails) } className="btn btn-primary" htmlFor="booking-modal">Book Appoinment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointmentdetails;
