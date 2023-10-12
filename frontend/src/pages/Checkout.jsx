import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import BillingForm from "../components/Checkout/BillingForm";
import AdditionaInfo from "../components/Checkout/AdditionaInfo";
import Orders from "../components/Checkout/Orders";

export default function Checkout() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkout);

  const location = useLocation();
  const paths = location.pathname.split("/");
  const newPaths = paths.filter((path) => path !== "");


  newPaths.unshift("Home");
  const newPath = newPaths.join(" > ");

  return (
    <div className="h-[1850px] mx-auto flex flex-wrap items-center">
      <div class="h-[86px] left-0 right-0 top-[104px] absolute bg-green-100">
        <div class="flex flex-row flex-wrap left-[104px] top-[32px] absolute text-green-700 text-lg text-[18px] font-normal leading-snug tracking-tight">
          <p>{newPath}</p>
        </div>
      </div>
      <div className="lg:w-3/5 md:w-1/2 h-[58px] left-[104px] top-[270px] absolute text-zinc-800 text-4xl font-normal font-Muslish leading-10  tracking-tight">
        Checkout
      </div>
      <BillingForm />
      <AdditionaInfo />
      <Orders />
    </div>

  );
}