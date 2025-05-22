import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import './AdminTable.css';

const AdminTable = () => {

  const[reservations,setReservations] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/reservations/delete/${id}`)
      setReservations(prev => prev.filter(r => r._id !== id))
      toast.success("Reservation Removed")
    } catch (error) {
      console.log("Error Delete Reservations");
    }
  }


  useEffect(()=> {

    const fetchReservations = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/reservations/get')
        setReservations(response.data.reservations || [])
        console.log(response.data);

      } catch (error) {
        console.log("Error fetching reservations", error);
        
      }
    }

    fetchReservations()
  },[])

  return (
    <div className='admin-table-container'>
      <h2>
        Restaurant Reservations
      </h2>

      <div className='admin-table'>
        <table className='admin-table-field'>
          <thead>
            <tr className='admin-table-header'>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              reservations.length === 0 ? (
                <tr>
                  <td colSpan="7" className='admin-reservation'>No Reservations Found</td>
                </tr>
              ) : (
                reservations.map((res, index)=> (
                  <tr key={index}>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.date}</td>
                    <td>{res.time}</td>
                    <td>{res.guests}</td>
                    <td>
                      <button className='admin-delete' onClick={() => handleDelete(res._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTable