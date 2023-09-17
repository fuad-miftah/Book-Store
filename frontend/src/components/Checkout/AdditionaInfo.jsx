import React from 'react'
import { updateField, toggleCreateAccount, updateOrderNotes } from '../../store/checkoutSlice';
import { useDispatch, useSelector } from "react-redux";

import Pagination from '../Pagination/Pagination';





const AdditionaInfo = () => {
    const dispatch = useDispatch();
    const orderNotes = useSelector((state) => state.checkout.orderNotes);

    return (
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
       {/*  just to check the pagination ...should be add inside search and seacrh effect page */}
            <Pagination/>

        </div>

    )
}

export default AdditionaInfo;