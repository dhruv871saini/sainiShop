import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './view.css';  // Import custom CSS for additional styling
import Nav from '../nav/Nav';

const Views = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        category: ''
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setData(res.data);
                toast.success('Product data loaded successfully!');
            })
            .catch((err) => {
                toast.error('Failed to load product data.');
            });
    }, [id]);

    const handleAddToCart = () => {
        toast.success('Product added to cart!');
        // Implement your add-to-cart logic here
    };

    return (<>

        <div className="sticky-top-nav"><Nav /></div>
        <div className="container mt-5">
            <Toaster />
            <div className="row">
                <div className="col-md-6 mb-4">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Product Image',
                            isFluidWidth: true,
                            src: data.image
                        },
                        largeImage: {
                            src: data.image,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-3">{data.title}</h2>
                    <p className="mb-3">{data.description}</p>
                    <h4 className="mb-3">Price: ${data.price}</h4>
                    <span className="badge bg-secondary mb-4">{data.category}</span>
                    
                    <div className="d-flex flex-column">
                        <button className="btn btn-primary mb-2" onClick={handleAddToCart}>
                            <i className="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        {/* <button className="btn btn-outline-primary mb-2" onClick={handleAddToCart}>
                            <i className="bi bi-cart-plus"></i> Add to Cart (Outline)
                        </button> */}
                        {/* <button className="btn btn-success mb-2" onClick={handleAddToCart}>
                            <i className="bi bi-cart-check"></i> Add to Cart (Success)
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Views;
