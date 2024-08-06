import React from "react";
import Hero from "./assets/asproplogo.png";
const Login = () => {
  return (
    <section class="shadow-xl rounded-xl flex flex-col-reverse  md:grid grid-cols-2 w-full md:max-w-5xl">
      <section class="bg-gray-100 p-4 h-full rounded-xl lg:rounded-tl-xl lg:rounded-bl-xl">
        <div class="px-8 flex flex-col justify-between gap-4 h-full">
          <div>
            <h2 class="font-bold text-4xl font-primary-color">Welcome back</h2>
            <p class="text-md font-primary-color">
              Sign in if you are already a member
            </p>
          </div>
          <form
            action="submit"
            class="flex flex-col gap-4">
            <input
              class="p-2 rounded-xl border"
              type="text"
              placeholder="Username"
            />
            <div class="relative">
              <input
                class="p-2 rounded-xl border w-full"
                type="password"
                placeholder="Password"
              />
            </div>

            <button class="bg-primary rounded-xl font-bold text-white py-2">
              Log in
            </button>
          </form>
          <div class="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr class="border-gray-500" />
            <p class="text-center text-sm">Or</p>
            <hr class="border-gray-500" />
          </div>

          <div>
            <button class="bg-primary rounded-xl font-bold text-white py-2 w-full">
              Sign up
            </button>
          </div>

          <div>
            <p class="text-sm font-primary-color text-center opacity-50 hover:cursor-pointer hover:opacity-100 transition-opacity delay-100">
              Forgot your password?
            </p>
          </div>
        </div>
      </section>

      <section class="bg-primary flex flex-col gap-4 justify-between items-center p-4 rounded-xl lg:rounded-tr-xl lg:rounded-br-xl">
        <div class="text-center">
          <h1 class="text-white text-4xl font-bold flex items-center gap-2">
            <i class="bx bx-bar-chart-alt"></i>
            AsPropManager
          </h1>
          <p className="text-white">Your tool for all administrative needs</p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-xl aspect-square w-1/2 md:w-3/4"
            src={Hero}
            alt="hero image"
          />
        </div>
        <div className="sm:block hidden">
          <p class="text-white text-xs flex gap-2 items-center">
            Copyright
            <i class="fa-regular fa-copyright fill-white text-white text-sm"></i>
            AsPropManager 2024
          </p>
        </div>
      </section>
    </section>
  );
};

export default Login;
