import React from 'react';

const ContactCard = ({ data }) => {
  if (!data) {
    return <div>No data provided</div>;
  }

  const { name, description, icon, bgClass } = data || {};

  return (
    <div className={ `px-6 card card-side bg-base-100 shadow-xl text-white bg-info h-40 `}>
      <figure>
        <img src={icon}  alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name || 'Unknown name'}</h2>
        <p>{description || 'No description provided'}</p>
        
      </div>
    </div>
  );
};

export default ContactCard;
