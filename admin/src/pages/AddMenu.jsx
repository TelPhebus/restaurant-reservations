import React, { useState } from 'react'
import upload_img from '../assets/upload_area.png'
import './AddMenu.css';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';


const AddMenu = ({ token }) => {

  const [image, setImage] = useState(null) ;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("All");

    const OnSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      if(image) formData.append("image", image)

        const response = await axios.post(`${backendUrl}/api/product/add`, formData, {headers: { token } })
        if (response.data.success){
          toast.success(response.data.message)
          setName("")
          setDescription("")
          setPrice("")
          setImage(null)
          setCategory("All");

        } else {
          toast.error(response.data.message)
        }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]) 
    }
  }

  return (
     <div className='add'>
      <form  onSubmit={OnSubmitHandler} className='flex-col' >
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              
              <img src={!image ? upload_img : URL.createObjectURL(image)} alt="upload preview" />
              
              <input
                type="file"
                id="image"
                hidden
                onChange={handleImageChange} 
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div className='add-name flex-col'>
          <p>Product Name</p>
          <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter product name' required />
        </div>
        <div className='add-description flex-col'>
          <p>Product Description</p>
          <textarea value={description} onChange={(e)=> setDescription(e.target.value)} name="description" rows="6" placeholder='Enter product description' required />
        </div>

        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product Category</p>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Salad">Salad</option>
              <option value="Delicacy">Delicacy</option>
              <option value="Desert">Desert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div className='add-price flex-col' >
            <p>Product Price</p>
            <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" placeholder='40' />
          </div>
        </div>
        <button type="submit" className='add-btn'>Add Menu</button>
      </form>
    </div>
  )
}

export default AddMenu