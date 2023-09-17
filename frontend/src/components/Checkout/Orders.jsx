import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setOrderDetails } from "../../store/orderSlice";

import orderData from "..//../orderData.json"

const Orders = () => {
  const itemWithSubtotal = orderData.orderDetails.items.map(item => ({
    ...item,
    subtotal: (item.price * item.quantity).toFixed(2),
  }));
  const subtotal = orderData.orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + orderData.orderDetails.shipping;

  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    dispatch(setOrderDetails(orderData.orderDetails.items));
    setIsSubmitted(true);

    // check the console wether working or not
    console.log('Order submitted successfully');
  }

  return (

    <div className="w-[400px] h-[464px] absolute left-[936px] top-[396px] rounded border border-zinc-300">
      <form onSubmit={handleSubmit}>

        <div className="left-[24px] top-[32px] absolute text-zinc-800 text-3xl font-bold leading-9 tracking-tight">
          Your Order
        </div>
        <div className="w-80 h-24 left-[24px] top-[110px] absolute">
          {itemWithSubtotal.map((item, index) => (
            <div key={index} className="w-60 h-16 left-0 top-0 absolute">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-200 rounded" />
              <div className="w-36 h-12 left-[88px] top-[7px] absolute">
                <div className="left-0 top-0 absolute text-slate-900 text-base font-semibold leading-tight tracking-tight">
                  {item.name}
                </div>
                <div className="left-0 top-[27px] absolute text-green-700 text-normal font-normal leading-snug tracking-tight">

                  {item.price.toFixed(2)} x{item.quantity}
                </div>
                {/* <div className="left-0 top-[50px] absolute text-neutral-500 text-normal font-normal  tracking-tight">
      Total: {item.subtotal}
    
    </div> */}
              </div>
            </div>
          ))}
          <div className="w-80 h-px left-0 top-[96px] absolute border border-zinc-300"></div>
        </div>
        <div className="w-80 h-32 left-[24px] top-[230px] absolute">
          <div className="w-80 h-px left-0 top-[84px] absolute border border-zinc-300"></div>
          <div className="w-80 h-5 left-0 top-0 absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-sm font-normal leading-tight tracking-tight">
              Sub Total
            </div>
            <div className="left-[303px] top-0 absolute text-right text-zinc-800 text-[16px] font-normal leading-snug tracking-tight">
              {subtotal.toFixed(2)}
              {/* ${orderData.orderDetails.subTotal.toFixed(2)} */}
            </div>
          </div>
          <div className="w-80 h-5 left-0 top-[38px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-sm font-normal leading-tight tracking-tight">
              Shipping
            </div>
            <div className="left-[303px] top-0 absolute text-right text-zinc-800 text-[16px] font-normal leading-snug tracking-tight">
              ${orderData.orderDetails.shipping.toFixed(2)}
            </div>
          </div>
          <div className="w-80 h-5 left-0 top-[100px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-sm font-normal leading-tight tracking-tight">
              Total
            </div>
            <div className="left-[293px] top-0 absolute text-right text-zinc-800 text-[16px] font-normal leading-snug tracking-tight">
              {total.toFixed(2)}
              {/* ${orderData.orderDetails.total.toFixed(2)} */}
            </div>
          </div>
        </div>
        <button
          className="w-80 h-12 px-14 py-3 left-[24px] top-[384px] absolute bg-green-700 rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-white text-sm font-normal leading-none tracking-tight">
            {isSubmitted ? 'Order Submitted' : 'Continue to Payment'}
          </div>
        </button>
      </form>
    </div>
  )
}

export default Orders