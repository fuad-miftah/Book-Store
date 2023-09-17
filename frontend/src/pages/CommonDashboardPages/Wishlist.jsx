import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../store/wishlistSlice';

export default function Whishlist() {
    // Access the cart state from Redux
    const cart = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    // Function to remove an item from the cart
    const removeFromWishlistHandler = (bookId) => {
        // Dispatch the 'remove' action with the bookId to remove the item from the cart
        dispatch(removeFromWishlist(bookId));
    };

    return (
        <div>
            <h1 className='text-4xl font-bold mx-20'>Your Wishlist</h1>
            {cart.length === 0 ? (
                <p className='text-xl font-medium m-20'>Your Wishlist is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <div key={item.bookId} className="flex flex-row flex-wrap mx-10">
                            <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={item.coverImg} alt={item.title} />
                            </div>
                            <div className='m-3 space-y-4 md:m-8'>
                                <h2 className='text-4xl font-medium'>{item.title}</h2>
                                <p className="text-xl">Price: ${item.price}</p>
                                <p className="text-xl">Quantity: {item.quantity}</p>
                                <p className="text-xl">Total: ${item.totalPrice}</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => removeFromWishlistHandler(item.bookId)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
