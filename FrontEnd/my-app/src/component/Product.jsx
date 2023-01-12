import React, { useState, useEffect } from "react";
import { useParams } from "react-router"
import Skeleton from "react-loading-skeleton"

import { NavLink } from "react-router-dom";
import axios from "axios"

import NavBar from "./NavBar"


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const getProduct = async () => {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getProduct()
    }, [])

    const Loadingg = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark">
                        Add To Cart
                    </button>
                    <button className="btn btn-dark ms-2 px-3 py-2">
                        Go To Cart
                    </button>
                    <NavLink to="/" className="btn btn-outline-dark ms-2 px-3 py-2">
                        Back To Home
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <NavBar />
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loadingg /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product

