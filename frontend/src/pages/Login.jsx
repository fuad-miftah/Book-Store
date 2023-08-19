import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logger } from "../userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(logger);
    } else {
      console.log("enter valid input");
    }
  };
  return (
    <div className="w-[1440px] h-[960px] px-8 pt-24 pb-12 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className="h-[562px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-[146px] flex-col justify-start items-center gap-6 flex">
          <div className="shadow justify-start items-start inline-flex">
            <div className="w-12 h-12 relative bg-gradient-to-b from-white to-gray-300 rounded-xl border border-gray-300">
              <div className="w-12 h-12 left-0 top-0 absolute" />
              <div className="w-6 h-6 left-[12px] top-[12px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
              <div className="w-12 h-6 left-0 top-[24px] absolute bg-white bg-opacity-20 rounded-bl-xl rounded-br-xl backdrop-blur-[7.50px]" />
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
        <form>
          <div className="self-stretch h-[332px] rounded-xl flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-40 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[70px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Email
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter your email"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
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
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Enter your password"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
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
              <div className="self-stretch rounded-lg justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex">
                  <button
                    onSubmit={handleSubmit}
                    className="text-white text-base font-semibold leading-normal"
                  >
                    Sign in
                  </button>
                </div>
              </div>
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
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
