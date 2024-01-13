import React from 'react'
import { useState } from 'react';
import productservice from '../service/productservice';

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    }

    const ProductRegister = (e) => {
        e.preventDefault();
        productservice
        .saveProduct(product)
        .then((res) => {
            console.log("Product Added Successfully");
            setMessage("Product Added Successfully");
            setProduct({
                productName: "",
                description: "",
                price: "",
                status: ""
            });
        })
    }
    return (
        <>
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">  Add Product</div>
                            {
                                message && 
                                <p className='fs-4 text-center text-success'>{message}</p>
                            }
                            <div className="card-body">
                                <form action="" onSubmit={(e) => ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label htmlFor="">Enter Product Name</label>
                                        <input
                                            type="text"
                                            name='productName'
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={product.productName}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="">Enter Description</label>
                                        <input
                                            type="text"
                                            name='description'
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={product.description}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="">Price</label>
                                        <input
                                            type="text"
                                            name='price'
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={product.price}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="">Enter Status</label>
                                        <input
                                            type="text"
                                            name='status'
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={product.status}
                                        />
                                    </div>

                                    <button className='btn btn-primary col-md-12'> Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
