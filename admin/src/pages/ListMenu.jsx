import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const ListMenu = () => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list', {headers: {token}})
      if(response.data.success){
        setList(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(()=> {
    fetchList()
  },[])
  return (
    <div>
      <p>Menu List</p>
      <div>
        <div>
          <b>Image</b>
          <b>Name</b>
          <b>Action</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

      </div>
    </div>
    
  )
}

export default ListMenu