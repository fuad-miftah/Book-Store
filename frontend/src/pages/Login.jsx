import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { setCredentials } from '../store/authSlice';
import { loginAsync } from "../store/authapiSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await dispatch(loginAsync(data)).unwrap();
      dispatch(setCredentials(response));
      toast.success("Logged in successfully");
      navigate('/');
    } catch (err) {
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error("An error occurred while logging in");
        console.error("An error occurred while logging in:", err);
      }
    } finally {
      setIsLoading(false); // Set loading state back to false after login attempt
    }
  };

  return (
    <div className="w-full min-h-screen px-4 pt-12 pb-8 md:px-8 bg-white flex flex-col justify-start items-center gap-8">
      <div className="h-[562px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-[146px] flex-col justify-start items-center gap-6 flex">
          <div className="h-[146px] flex flex-col justify-center items-center gap-6 relative">
            <div className="shadow justify-start items-start inline-flex">
              <div className="w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" />
              <div className="w-6 h-6 left-[12px] top-[12px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
              <div className="w-12 h-6 left-1/2 transform -translate-x-1/2 top-[24px] absolute bg-white bg-opacity-20 rounded-bl-xl rounded-br-xl backdrop-blur-[7.50px]" />
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-center text-gray-900 text-3xl font-semibold leading-[38px]">
              Log in to your account
            </div>
            <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
              Welcome back! Please enter your details.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="self-stretch h-[332px] rounded-xl flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-40 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[70px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Username
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          {...register("username", {
                            required: true,
                          })}
                          aria-invalid={errors.username ? "true" : "false"}
                          placeholder="Enter your username"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
                        {errors.username && (
                          <p role="alert">Username is required.</p>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[70px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Password
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          {...register("password", {
                            required: true,
                            minLength: 5,
                            message:
                              "password must be greater than 8 charachters",
                          })}
                          type="password"
                          placeholder="Enter your password"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
                        {errors.password && (
                          <p role="alert">{errors.password?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 relative bg-white rounded border border-gray-300"
                  />
                </div>
                <div className="text-slate-700 text-sm font-medium leading-tight">
                  Remember for 30 days
                </div>
              </div>
              <div className="self-stretch justify-start items-start flex">
                <div className="justify-center items-center gap-2 flex">
                  <button className="text-violet-700 text-sm font-semibold leading-tight">
                    Forgot password
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
              {isLoading ? ( // Conditionally render the spinner if loading is true
                <div className="flex justify-center items-center">
                  <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
                </div>
              ) : (
                <div className="self-stretch rounded-lg justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex">
                    <button
                      type="submit"
                      className="text-white text-base font-semibold leading-normal"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              )}
              <div className="self-stretch h-11 flex-col justify-center items-center gap-3 flex">
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <button className="text-slate-700 text-base font-semibold leading-normal">
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="self-stretch justify-center items-start gap-1 inline-flex">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Don’t have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
