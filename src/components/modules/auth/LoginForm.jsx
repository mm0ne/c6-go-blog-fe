
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

const LoginForm= () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur", //validate whenever user click outside of input field
    defaultValues: {
      email :'',
      password : ''
    },
  });

  
  const onSubmit = async (data) => {

    setIsLoading(true)
    const {email, password} = data;

    //const res = await registerAccount(username, fullname, email, gender, birthdate, password);

    setTimeout( () => {

      setIsLoading(false)
      toast.error("incorrect password or username", {
        style: {
          border: '1px solid #ff5b24',
          padding: '16px',
          color: '#ff5b24',
        },
        iconTheme: {
          primary: '#ff5b24',
          secondary: '#FFFAEE',
        },
      })

      toast.success("login successfull", {
        style: {
          border: '1px solid #089c0d',
          padding: '16px',
          color: '#089c0d',
        },
        iconTheme: {
          primary: '#089c0d',
          secondary: '#FFFAEE',
        },
      })
    },2000)
    // empty all of the input fields

  };

  return (
    <section className={`flex flex-col gap-y-10 items-center bg-[#F7FAFC] lg:bg-white ` }>
      {/*actual body*/}
      <div className="relative flex flex-col mb-20 lg:mb-0 gap-y-4 lg:gap-y-3 w-11/12 max-w-md lg:w-full lg:max-w-full">
        {/*page header and back button for smaller device*/}
        <div className="lg:hidden w-screen flex flex-row items-center gap-x-3 mt-20">
          <IoArrowBack
            className="ml-2 mb-1 w-[20px] h-[20px]"
            onClick={() => {}}
          />
          <h1 className=" font-[700] text-md text-gray-700 ">Login</h1>
        </div>

        <h1 className="hidden lg:block font-[700] text-[24px] text-gray-700 ">
          Login
        </h1>

        {/* <UpdateProfilePicture /> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3 mx-2 lg:mx-0"
        >
         
          {/*email form input*/}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-semibold text-[16px] text-gray-600"
            >
              Email<span className="text-red-600">&#42;</span>
            </label>
            <input
              type="text"
              className={
                "input h-[40px] rounded-[3px] focus:outline-none border border-[#DFE1E6] focus:border-blue-300 bg-[#FAFBFC] text-[16px] text-gray-600" +
                (errors.email && " border-red-600")
              }
              {...register("email", {
                required: "Data ini wajib diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "email tidak valid",
                }
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            ></input>

            {errors.email && (
              <span className="text-[13px] text-red-600 mt-1">
                {"*" + errors.email?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="font-semibold text-[16px] text-gray-600"
            >
              Password<span className="text-red-600">&#42;</span>
            </label>
            <input
              type="password"
              className={
                "input h-[40px] rounded-[3px] focus:outline-none border border-[#DFE1E6] focus:border-blue-300 bg-[#FAFBFC] text-[16px] text-gray-600" +
                (errors.password && " border-red-600")
              }
              {...register("password", {
                required: "please input your password",
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            ></input>

            {errors.password && (
              <span className="text-[13px] text-red-600 mt-1">
                {"*" + errors.password?.message}
              </span>
            )}
          </div>

          {/*submit button; disabled when form is not filled (!isDirty) or input is invalid (!isvalid)*/}
          <div className="mt-2 w-full flex flex-row justify-center">
            <button
              disabled={!isDirty || !isValid || isLoading}
              type="submit"
              className={
                "w-full lg:w-auto cursor-pointer text-white text-base p-6 py-3 rounded-md transition-all duration-200 shadow-lg" +
                (!isDirty || !isValid || isLoading
                  ? " bg-gray-400"
                  : " bg-[#30b465] hover:bg-[#27884e]") +  (isLoading ? ' cursor-wait' : "")
              }
            >
              login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;