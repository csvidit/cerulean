import { useAuth } from "@/AuthContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";

interface SignupType {
  email: string;
  password: string;
  password_confirm: string;
}

const Signup = () => {
  const methods = useForm<SignupType>({ mode: "onBlur" });

  const { signup } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: SignupType) => {
    try {
        await signup(data.email, data.password);
        router.push("/");
      } catch (error: any) {
        console.log(error.message);
      }
  };

  return (
    <>
      <Head>
        <title>Signup - ToDo</title>
        <meta name="description" content="A Vidit Khandelwal Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Header />
        <MainContent>
          <FormProvider {...methods}>
            <form
              action=""
              className="w-80 self-center justify-self-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 text-neutral-200">
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`bg-purple-900 bg-opacity-50 rounded-full ring:0 focus:ring-0 focus:outline-none border-gray-400 text-purple-200 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 text-neutral-200">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`bg-purple-900 bg-opacity-50 rounded-full ring:0 focus:ring-0 focus:outline-none border-gray-400 text-purple-200 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 text-neutral-200">
                    Confirm Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password_confirm", {
                    required: "Verify your password",
                  })}
                  className={`bg-purple-900 bg-opacity-50 rounded-full ring:0 focus:ring-0 focus:outline-none border-gray-400 text-purple-200 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password_confirm && (
                  <p className="text-red-400">
                    {errors.password_confirm.message}
                  </p>
                )}
              </div>
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="flex flex-row space-x-1 items-center pt-1 pb-1 pl-3 pr-3 text-2xl rounded-full bg-purple-900 bg-opacity-50 text-purple-200 hover:bg-slate-900"
                >
                  <span className="text-purple-500">
                    <HiOutlineChevronDoubleRight />
                  </span>
                  <p>sign up</p>
                </button>
              </div>
            </form>
          </FormProvider>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Signup;
