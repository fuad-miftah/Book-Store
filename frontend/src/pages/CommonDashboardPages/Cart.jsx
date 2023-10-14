import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';
import {Link} from 'react-router-dom';

export default function Cart() {
    // Access the cart state from Redux
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Function to remove an item from the cart
    const removeFromCart = (bookId) => {
        // Dispatch the 'remove' action with the bookId to remove the item from the cart
        dispatch(remove(bookId));
    };

    return (
        <div className="bg-gray-100 py-20 font-serif">
            <h1 className='text-5xl font-bold mx-20 pb-4 text-center font-serif'>Your Cart</h1>
            {cart.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                    <p className='text-xl font-medium m-20'>Your cart is empty</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            ) : (
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {cart.map((item) => (

                        <div key={item.bookId} className="shadow-lg shadow-gray-600 mx-10 grid-cols-2 grid gap-5 bg-white rounded-2xl">
                            <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={item.coverImg} alt={item.title} />
                            </div>
                            <div className='m-3 space-y-4 md:m-8'>
                                <h2 className='text-4xl font-medium'>{item.title}</h2>
                                <p className="text-xl">Price: ${item.price}</p>
                                <p className="text-xl">Quantity: {item.quantity}</p>
                                <p className="text-xl">Total: ${item.totalPrice}</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => removeFromCart(item.bookId)}>Remove</button>
                            </div>
                        </div>                     
                    ))}
                </ul>
            )}
        </div>
    );  
}
