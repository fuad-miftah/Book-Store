import React from 'react'
import { toggleCreateAccount, updateField, } from '../../store/checkoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';


const BillingForm = () => {
    const dispatch = useDispatch();

    const initialValue = useSelector((state) => ({
        firstName: state.checkout.firstName,
        lastName: state.checkout.lastName,
        country: state.checkout.country,
        streetAddress: state.checkout.streetAddress,
        townCity: state.checkout.townCity,
        state: state.checkout.state,
        postcode: state.checkout.postcode,
        phoneNumber: state.checkout.phoneNumber,
        emailAddress: state.checkout.emailAddress,
        createAccount: state.checkout.createAccount,
        errors: {},
        touched: {},
    }))
    const validationSchemas = Yup.object().shape({
        firstName: Yup.string().required("First Name is Required"),
        lastName: Yup.string().required("Last Name is Required"),
        country: Yup.string().required("Country is Required"),
        townCity: Yup.string().required("Town or City is Required"),

        streetAddress: Yup.string().required("Street Address is Required"),
        state: Yup.string().required("State is Required"),
        postcode: Yup.string().required("Postcode is Required"),
        phoneNumber: Yup.string().required("phone is Required"),
        emailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
        createAccount: Yup.string().required("Check Box Should be Marked"),


    })

    const handleSubmit = (field, value) => {
        dispatch(updateField({ field, value }));

        console.log(`Form submitted with values: ${field} : `, value);

    };

    const handleToggleCreateAccount = () => {
        dispatch(toggleCreateAccount());
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchemas,
        onSubmit: handleSubmit,

    })
    const toggleFormik = useFormik({
        validationSchema: validationSchemas,
        onSubmit: handleToggleCreateAccount,
    })


    return (
       <Formik
       handleSubmit={handleSubmit}
        initialValue={initialValue}
        validationSchemas={validationSchemas} >

         <form onSubmit={formik.handleSubmit} >
            
            <div className="flex flex-row left-[104px] right-[520px]  top-[392px] absolute ">
            
                <div className="flex-initial border-spacing-1 w-[206px] absolute h-[997px] text-zinc-800 text-2xl font-normal leading-9 font-sans-serif tracking-tight">
                    Billing Details
                    <div className="w-96 h-20 left-0 top-[80px] absolute">
                        <div className="left-0 top-0 absolute text-slate-900 text-base font-normal font-sans-serif leading-tight tracking-tight">
                            First Name
                        </div>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="mt-8 p-2 w-[400px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-red-500 text-[16px]'> {formik.errors.firstName}  </div>
                        ) : null
                        }
                    </div>
                    <div className="w-96 h-20 left-[416px] top-[85px] absolute">

                        <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                            Last Name
                        </div>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="mt-8 p-2 w-[400px] h-[51px]placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='text-red-500 text-[16px] '> {formik.errors.lastName}  </div>
                        ) : null
                        }
                    </div>
                    <div className="w-96 h-20 left-0 top-[195px] absolute">
                        <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                            Country
                        </div>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                        />
                        {formik.touched.country && formik.errors.country ? (
                            <div className='text-red-500 text-[16px]'> {formik.errors.country}  </div>
                        ) : null
                        }
                    </div>
                    <div className="w-96 h-20 left-0 top-[305px] absolute">
                        <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                            Street Address
                        </div>
                        <input
                            type="text"
                            name="streetAddress"
                            id="streetAddress"
                            placeholder="House Number or No Apt"
                            className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.streetAddress}
                        />
                        {formik.touched.streetAddress && formik.errors.streetAddress ? (
                            <div className='text-red-500 text-[16px]'> {formik.errors.streetAddress}  </div>
                        ) : null
                        }
                        </div>
                        <div className="w-96 h-20 left-0 top-[415px] absolute">
                            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                                Town/City
                            </div>
                            <input
                                type="text"
                                name="townCity"
                                id="townCity"
                                className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.townCity}
                            />
                            {formik.touched.townCity && formik.errors.townCity ? (
                                <div className='text-red-500 text-[16px]'> {formik.errors.townCity}  </div>
                            ) : null
                            }
                        </div>
                            
                        <div className="w-96 h-20 left-0 top-[525px] absolute">
                            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                                State
                            </div>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                            />
                            {formik.touched.state && formik.errors.state ? (
                                <div className='text-red-500 text-[16px]'> {formik.errors.state}  </div>
                            ) : null
                            }
                        </div>
                        <div className="w-96 h-20 left-0 top-[635px] absolute">
                            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                                Postcode
                            </div>
                            <input
                                type="text"
                                name="postcode"
                                id="postcode"
                                className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.postcode}
                            />
                            {formik.touched.postcode && formik.errors.postcode ? (
                                <div className='text-red-500 text-[16px]'> {formik.errors.state}  </div>
                            ) : null
                            }
                        </div>
                        <div className="w-96 h-20 left-0 top-[745px] absolute">
                            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                                Phone Number
                            </div>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <div className='text-red-500 text-[16px]'> {formik.errors.phoneNumber}  </div>
                            ) : null
                            }
                        </div>
                        <div className="w-96 h-20 left-0 top-[855px] absolute">
                            <div className="left-0 top-0 absolute text-slate-900 text-base font-normal leading-tight tracking-tight">
                                Email Address
                            </div>
                            <input
                                type="text"
                                name="emailAddress"
                                id="emailAddress"
                                className="mt-8 p-2 w-[816px] h-[51px] placeholder-gray-500::placeholder text-[16px] font-400 font-sans-serif border border-gray-300 rounded-md"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailAddress}
                            />
                            {formik.touched.emailAddress && formik.errors.emailAddress ? (
                                <div className='text-red-500 text-[16px]'> {formik.errors.emailAddress}  </div>
                            ) : null
                            }
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
                                    checked={formik.createAccount}
                                    onChange={toggleFormik.handleToggleCreateAccount}
                                    // onChange={formik.handleChange}
                                    onBlur={toggleFormik.handleBlur}
                                    value={formik.values.createAccount}
                                />
                                {formik.touched.createAccount && formik.errors.createAccount ? (
                                    <div className='text-red-500 text-[16px]'> {formik.errors.createAccount}  </div>
                                ) : null
                                }

                                <i className="far fa-square text-gray-500 text-2xl"></i>
                            </label>
                            <div className="left-[40px] text-zinc-800 text-base font-normal leading-tight tracking-tight text-[16px] font-400 font-sans-serif line-[19.2px letter-[0.08px] ">
                                Create an account?
                            </div>
                        </div>
                    </div>
                </div>
        </form>
       </Formik>
    )
}

export default BillingForm;