import React, { useEffect } from "react";
import { setRoutes } from "../routeSlice";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumb from "../components/Breadcrumb";

import BillingForm from "../components/Checkout/BillingForm";
import AdditionaInfo from "../components/Checkout/AdditionaInfo";
import Orders from "../components/Checkout/Orders";
import Pagination from "../components/Pagination/Pagination";


export default function Checkout() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkout);



  useEffect(() => {
    dispatch(setRoutes(["Home", "Gala Apples"]));
  }, [dispatch]);

  return (
    <div className="h-[1850px] mx-auto flex flex-wrap items-center">
      <Breadcrumb routes={["Home", "Gala Apples"]} />
      <div className="lg:w-3/5 md:w-1/2 h-[58px] left-[104px] top-[270px] absolute text-zinc-800 text-4xl font-normal font-Muslish leading-10  tracking-tight">
        Checkout
      </div>
      <BillingForm />
      <AdditionaInfo />
      <Orders />
    </div>

  );
}