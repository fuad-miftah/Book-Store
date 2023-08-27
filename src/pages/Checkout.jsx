import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoutes } from "../routeSlice";
import Breadcrumb from "../components/Breadcrumb";
import orderData from "../orderData.json"
import { setOrderDetails } from "../store/orderSlice";
import {
  updateField,
  toggleCreateAccount,
  updateOrderNotes,
} from "../store/checkoutSlice";



export default function Checkout() {

  const itemWithSubtotal = orderData.orderDetails.items.map(item=>({
    ...item,
    subtotal: (item.price * item.quantity).toFixed(2),
  }));
 const  subtotal = orderData.orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
 
 const total = subtotal + orderData.orderDetails.shipping; 
 const orderNotes = useSelector((state) => state.checkout.orderNotes);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkout);
 
 
  dispatch(setOrderDetails(orderData.orderDetails.items));

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleToggleCreateAccount = () => {
    dispatch(toggleCreateAccount());
  };
  useEffect(() => {
    dispatch(setRoutes(["Home", "Gala Apples"]));
  }, [dispatch]);

  return (
    <div className="flex-col h-[1850px]">
      <Breadcrumb routes={["Home", "Gala Apples"]} />

      <div className="w-[216px] h-[58px] left-[104px] top-[270px] absolute">
        <div className="flex left-0 top-0 absolute text-zinc-800 text-4xl font-normal font-Muslish leading-10  tracking-tight">
          Checkout
        </div>
      </div>

      <div className="flex flex-row left-[104px] right-[520px]  top-[392px] absolute ">
        <div className="flex-initial border-spacing-1 w-[206px] absolute h-[997px] text-zinc-800 text-2xl font-normal leading-9 font-Mulish tracking-tight">
          Billing Details
          <div className="w-96 h-20 left-0 top-[80px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal font-Mulish leading-tight tracking-tight">
              First Name
            </div>
            <input
              type="text"
              value={data.firstName}
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
              className="mt-8 p-2 w-[400px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-[416px] top-[85px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Last Name
            </div>
            <input
              type="text"
              value={data.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
              className="mt-8 p-2 w-[400px] h-[51px]placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[195px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Country
            </div>
            <input
              type="text"
              value={data.country}
              onChange={(e) => handleFieldChange("country", e.target.value)}
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[305px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Street Address
            </div>
            <input
              type="text"
              value={data.streetAddress}
              onChange={(e) =>
                handleFieldChange("streetAddress", e.target.value)
              }
              placeholder="House Number or No Apt"
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[415px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Town/City
            </div>
            <input
              type="text"
              value={data.townCity}
              onChange={(e) => handleFieldChange("townCity", e.target.value)}
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[525px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              State
            </div>
            <input
              type="text"
              value={data.state}
              onChange={(e) => handleFieldChange("state", e.target.value)}
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[635px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Postcode
            </div>
            <input
              type="text"
              value={data.postcode}
              onChange={(e) => handleFieldChange("postcode", e.target.value)}
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[745px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Phone Number
            </div>
            <input
              type="text"
              value={data.phoneNumber}
              onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-96 h-20 left-0 top-[855px] absolute">
            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
              Email Address
            </div>
            <input
              type="text"
              value={data.emailAddress}
              onChange={(e) =>
                handleFieldChange("emailAddress", e.target.value)
              }
              className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-Mulish border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-[184px] h-[24px] left-0 top-[973px] absolute flex items-center">
            <label
              htmlFor="toggle"
              className="cursor-pointer flex items-center"
            >
              <input
                type="checkbox"
                id="toggle"
                className="w-[24px] h-[24px] mr-2"
                checked={data.createAccount}
                onChange={handleToggleCreateAccount}
              />
              <i className="far fa-square text-gray-500 text-2xl"></i>
            </label>
            <div className="left-[40px] text-zinc-800 text-base font-normal leading-tight tracking-tight text-[16px] font-400 font-Mulish line-[19.2px letter-[0.08px] ">
              Create an account?
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[464px] absolute left-[936px] top-[396px] rounded border border-zinc-300">
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
       
        {item.price.toFixed(2)} x{ item.quantity}
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
    onClick={() => console.log("paid successfully")} 
    className="w-80 h-12 px-14 py-3 left-[24px] top-[384px] absolute bg-green-700 rounded-lg justify-center items-center gap-2.5 inline-flex"
  >
    <div className="text-center text-white text-sm font-normal leading-none tracking-tight">
      Continue to Payment
    </div>
  </button>
</div>

      <div className="flex flex-col h-[316px] w-[816px] top-[1453px] left-[104px] absolute ">
        <div className="flex h-[37px] w-[339px] top-0 absolute text-zinc-800 text-[31px] font-normal font-700 line-37.2px leading-9 tracking-tight ">
          Additional Information
        </div>
        <div className=" block mt-[24px]">
          <label
            htmlFor="message"
            class="block mt-[24px]  text-sm font-medium text-gray-900 dark:text-white"
          >
            Order Notes (Optional)
          </label>
          <textarea
            id="message"
            rows="4"
            value={orderNotes}
            onChange={(e) => dispatch(updateOrderNotes(e.target.value))}
            class="block p-2.5 mt-[16px] w-full h-[220px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 resize-none flex-shrink-0 stroke-[1px] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" Notes about your order"
          ></textarea>
        </div>{" "}
      </div>
    </div>
  );
}