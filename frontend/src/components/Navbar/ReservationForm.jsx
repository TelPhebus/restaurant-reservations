import React, { useState } from 'react'
import './ReservationForm.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { backendUrl } from "../../config";
import axios from 'axios';



const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    guests: "1", // it automatically default to 1 guest
  })

  const handleChanges = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  // Update form data as user types/selects

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/reservations/create`, formData);
      if (response.data.success) {
        alert("Reservation created successfully!");
        // Reset form to initial values after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          time: "",
          date: "",
          guests: "1",
        });
      } else {
        alert(response.data.message || "Failed to create reservation");
      }
    } catch (error) {
      console.error("Reservation Error:", error);
      alert("An error occurred while creating the reservation.");
    }
  };

  // Generate time slot options dynamically
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";

      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";

      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  }

  return (
    <div id="reservation-section" className="reservation-container">
      <div className="reservation-content">

                {/* The Reservation Form */}
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="reservation-title">Reservation For A Table</h2>
          <h1 className="reservation-header">Join for a Diner with your Family! - <span className="reservation-highlight">Reserve Now</span></h1>
              {/* Form the Fields for the reservation*/}
          <div className="form-fields-wrapper">
            <div className="form-group-name">
              <label htmlFor="" className='font-name'>Full Name</label>
              <input type="text" placeholder='Full Name' name="name" value={formData.name} onChange={handleChanges} className='form-input' required />
            </div>
            <div className="form-group-email">
              <label htmlFor="" className='font-name'>Email</label>
              <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChanges}  className='form-input' required/>
            </div>
            <div className="form-group-phone">
              <label htmlFor="" className='font-name'>Phone Number</label>
              <input type="tel" placeholder='Phone Number' name="phone" value={formData.phone} onChange={handleChanges} className='form-input' required />
            </div>
            <div className="form-group-date">
              <label htmlFor="" className='font-name'>Reservation Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChanges} className='form-input' required />
            </div>
            <div className="form-group-time">
              <label htmlFor="" className='font-name'>Reservation Time</label>
              <select name="time" value={formData.time} onChange={handleChanges} className='form-input' required>
                <option value="">Select Time</option>
                {generateTimeSlots().map((slot, index)=> (
                  <option value={slot} key={index}>{slot} </option>
                ))}
              </select>
            </div>
            <div className="form-group-guests">
              <label htmlFor="" className='font-name'>Number of Guests</label>
              <select name="guests" value={formData.guests} className='form-input' onChange={handleChanges}>
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} Guest(s)</option>
                ))}
              </select>
            </div>
          </div>
               {/* The Submit Button to Send the Reservation to the Admin*/}
          <button type="submit" className='form-submit-btn'>Book Now</button>
        </form>
                {/*The Restaurant Info Section */}
        <div className='reservation-info'>
          <div className='reservation-text'>
            <h3>Address</h3>
            <p>Sumstreet 43, Greece, Athens-Thesaloniki-Crete</p>
          </div>
          <div className='reservation-text'>
            <h3>Open Time</h3>
            <p>Mon - Wend: 11:30 AM - 10:30 PM</p>
            <p>Fri - Sun: 9:20 AM - 11:30 PM</p>
          </div>
          <div className='reservation-text'>
            <h3>Contact</h3>
            <p>Phone: +(000) 000-GrecoRest</p>
            <p>Email: Restaurant@gmail.com</p> 
          </div>
          <div className='reservation-text-mn'>
            <h3>Stay Connected and Tuned!</h3>
          </div>
           {/* The Social Media Icons That Appear in the Field */}
          <div className='social-icons'>
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FiInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm;