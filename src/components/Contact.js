// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className='contact-card'>
      <div className='img'>
        <img src={photo} alt='Profile Photo' />
      </div>

      <div className='info'>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
