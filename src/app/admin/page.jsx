"use client"

import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "public/logo.png"
import Image from "next/image";

const FormLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    if (name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://skripsibackend-production.up.railway.app/v1/api/login", formData);

      if (response.status === 200) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("userData", JSON.stringify(response.data.data));
        Cookies.set("accessToken", response.data.data.accessToken);
        router.push("/");
     
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  
  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInSession = sessionStorage.getItem("isLoggedIn");
    if (isLoggedInSession === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("userData");
      Cookies.remove("accessToken");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (isLoggedIn && userData) {
      const parsedUserData = JSON.parse(userData);
      // Lakukan apa pun yang perlu Anda lakukan dengan data pengguna, misalnya menyimpannya dalam state
      console.log(parsedUserData);
    }
  }, [isLoggedIn]);

  return (
    
    <div className={styles.formlogin}>
      <div className={styles.masuk}>
        <b className={styles.masuk1}>Masuk</b>
      </div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className={styles.inner} onSubmit={handleSubmit}>
          <div className={styles.input}>
          <div className={styles.img}>
        <Image 
        src={logo}
        alt=""
        className={styles.image}
        />

      </div>

            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.inputChild}
              
              placeholder="Username"
              required
            />
          </div>
          <div className={styles.input}>
            <div className={styles.textpassword}>
              <div className={styles.password}>Password</div>
            
            </div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.forminput}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} type="submit"
            onClick={() => router.push("/admindb")}>
              <div className={styles.terbitkan}>Masuk</div>
            </button>
          </div>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        
          {isLoggedIn && (
            <button
              onClick={() => router.push("/show")}
              className={styles.akunButton}
            >
              Lihat Akun
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default FormLogin; //hayo
