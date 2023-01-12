import React from 'react'
import Axios from "axios"
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';

import NavScrollExample from "../component/NavBar"
import ControlledCarousel from './Carousel'
import Home from './Home';

import minus from "../asset/minus.jpg"



function LandingPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const result = await Axios.get("http://localhost:2000/users/findallproduct")
    setProducts(result.data)
  }

  return (
    <div className='semua'>
      <NavScrollExample />
      <Home/>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Products Hot From Database</h1>
            <img className='minus' src={minus}  alt="" />
            
          </div>
        </div>
      </div>
       <div className='semua-card'>
      {/* <ControlledCarousel /> */}
        {products.map((item, index) => (
        <Card style={{ width: '18rem' }}>
          <div className='card'>
          <Card.Img variant="top" src={item.image} />
          </div>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.deskripsi}
            </Card.Text>
            <Button variant="primary">{item.price}</Button>
          </Card.Body>
        </Card>
        ))}
      </div> 
    </div>
  )
}

export default LandingPage
