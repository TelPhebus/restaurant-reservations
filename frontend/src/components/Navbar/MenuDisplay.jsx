import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { categoryItem, product } from '../../assets/assets'
import './MenuDisplay.css'

const MenuDisplay = () => {
  const {products}= useContext(ShopContext)
  const [category, setCategory] = useState("All")

  return (
    <div className='menu-display-container'>

      <div className="menu-header">
        <h1 className="menu-h1">Discover Our Special Cuisine</h1>
      </div>

            {/* It will show the display for the items in the menu*/}
      <div className='category-display'>
        <h2>Explore Our Menu</h2>
        <ul className="category-list">
          {categoryItem.map((item, index) => (
            <li key={index} onClick={()=> setCategory((prev) => prev === item.category_title ? "All" : item.category_title) } 
            className={`category-style ${category === item.category_title ? 'active' : ''}`}
            >{item.category_title}</li>
          ))}

        </ul>
      </div>

  {/* in  the display it will show the category list of Site */}
      <div className='menu-display'>
        {
          products.length > 0 ? (
            products.filter((product) => category === "All" || category === product.category).map((product) => (
              <div key={product._id} className='menu-product'>
                <img src={product.image} alt={product.name}  className='menu-image'/>
                <div className='menu-pn'>
                  <div>
                    <h3>
                      {product.name}
                    </h3>
                    <span className='menu-span'>
                      <span>${product.price}</span>
                    </span>
                    <p className='menu-ml'>A Delicious Meal</p>
                  </div>
                </div>

              </div>
            ) )
          ) : (
            <p className='menu-nl'>No products available</p>
          )
        }
      </div>
    </div>
  )
}

export default MenuDisplay