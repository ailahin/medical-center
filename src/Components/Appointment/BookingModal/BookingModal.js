
import { format } from 'date-fns';
import React, { useState } from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment || {};
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');


  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  };

  const handleInput4Change = (event) => {
    setInput4Value(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form= event.target;
    const name= form.name.value;
    const  email= form.email.value;
    const slot= form.slot.value;
    const phone= form.phone.value;
    const message= form.message.value;

    const booking ={
      AppointmentDate: date,
      slot,
      tretaement: name,
      patient: name,
      email,
      phone,
      message,

    }
    console.log(booking);
    setTreatment(null)
    // Do something with the form data
  };

  const date = format(selectedDate, 'PP');

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
          <h3 className="text-lg font-bold">{name || 'No treatment selected'}</h3>

          <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleSubmit}>
            <input type="text"  disabled value={date} placeholder="Type here" className="input input-bordered w-full " />
            <select name='slot' className="select select-bordered w-full ">
              {
                slots.map(slot=>  <option >{slot}</option> )
              }
           
        </select>
            <input name='name' type="text" value={input1Value} placeholder="Your Name" className="input input-bordered w-full " onChange={handleInput1Change} />
            <input  name='email' type="email" value={input2Value} placeholder=" Your Email" className="input input-bordered w-full " onChange={handleInput2Change} />
            <input name='phone' type="text" value={input3Value} placeholder=" Your Phone Number" className="input input-bordered w-full " onChange={handleInput3Change} />
            <input  name= 'message' type="text" value={input4Value} placeholder="Your Message" className="input input-bordered w-full " onChange={handleInput4Change} />
           
            <input type="submit" value="submit" className="btn btn-primary w-full " />
          </form>
        </div>
      </div>
    </>
  );
};


export default BookingModal;