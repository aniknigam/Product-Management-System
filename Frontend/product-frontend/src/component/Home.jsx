import React, { useEffect } from 'react'
import productservice from '../service/productservice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [productList, setProductList] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        init();
    }, []);

   const init = () =>
    {
        productservice.getAllProducts().then((res) => {
            console.log(res.data);
            setProductList(res.data);
        }).catch((err) => {
            console.log(err);
        });
   }

  const deleteProducts = (id) => {
    productservice.deleteProduct(id).then((rest) => {
      console.log("Product Deleted Successfully");
      setMessage("Product Deleted Successfully");
        init();
    }).catch((err) => {
      console.log(err);
    })
  }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center"> 
                            Product List
                            {
                                message &&  <p className='fs-4 text-center text-success'>{message}</p>
                            }
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((p, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                        <Link to={"editProduct/"+ p.id} className='btn btn-primary'>Edit</Link>
                                                        <button onClick={() => deleteProducts(p.id)} className='btn btn-danger ms-1'>Delete</button>
                                                    </td>
                                                </tr>
                                            ))  //map end   
                                        }
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
