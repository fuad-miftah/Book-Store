import { useForm } from "react-hook-form";
import { useState } from "react";
import { email } from "../constants";

const Siginup = () => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = [];
  const {
    register,

    formState: { errors },
  } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[1440px] h-[562px] px-8 flex-col justify-start items-center inline-flex">
      <div className="h-[562px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-[74px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-gray-900 text-3xl font-semibold leading-[38px]">
            Sign up
          </div>

          <div className="self-stretch text-gray-500 text-base font-normal leading-normal">
            Start your 30-day free trial.
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="self-stretch h-[404px] rounded-xl flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[276px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[70px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Name*
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          {...register("name", {
                            required: true,
                            message: "Enter your name",
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                          placeholder="Enter your name"
                        />
                        {errors.name?.type === "required" && (
                          <p role="alert">name is required</p>
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
                      Email*
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          type="email"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder="Enter your email"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
                        {errors.mail && (
                          <p role="alert">{errors.mail?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-24 flex-col justify-start items-start flex">
                <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Password*
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          type="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            message:
                              "password must be greater than 8 charachters",
                          })}
                          aria-invalid={errors.password ? "true" : "false"}
                          placeholder="Create a password"
                          className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
                        />
                        {errors.password && (
                          <p role="alert">{errors.password?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">
                    Must be at least 8 characters.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch rounded-lg justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex">
                  <button
                    type="submit"
                    className="text-white text-base font-semibold leading-normal"
                  >
                    Create account
                  </button>
                </div>
              </div>
              <div className="self-stretch h-11 flex-col justify-center items-center gap-3 flex">
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <button className="text-slate-700 text-base font-semibold leading-normal">
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="self-stretch justify-center items-start gap-1 inline-flex">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Already have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siginup;
