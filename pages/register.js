import Hero from "@/components/subComponents/Hero/Hero";
import LoginForm from "@/components/subComponents/LoginForm";
import RegisterForm from "@/components/subComponents/RegisterForm";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

function Register() {
  const router = useRouter();

  useEffect(() => {
    const Rtoken = Cookies.get("refreshToken");
    if (Rtoken) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] max-w-[450px] md:w-[60%]">
          <RegisterForm />
        </div>
      </div>
      ;
    </>
  );
}

export default Register;
