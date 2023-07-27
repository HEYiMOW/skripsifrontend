"use client"

import { useState } from "react";
import axios from "axios";
import styles from './form.module.css'
import cs from "public/cs.png"
import Image from "next/image";

const Header = () => {
  const [coffeeshop_name, setCoffeshop_name] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data register ke API
      const response = await axios.post("https://skripsibackend-production.up.railway.app/v1/api/add", {
        coffeeshop_name,
        desc,
        address,
        img
      });

      setCoffeshop_name("")
      setDesc("")
      setAddress("")

      setMessage(response.data.message);
      
      if (response.data.message === 
        alert("sukses")
        ) {

      }
    } catch (error) {
      setMessage("Terjadi kesalahan pada server");
    }
  };

  return (
    <div id="todo-header" className={styles.container}>
      <h1 className={styles.title}>Isikan data Coffeeshopmu!</h1>
      <div className={styles.content}>
      <div className={styles.img}>
        <Image 
        src={cs}
        alt=""
        fill="true"
        className={styles.image}
        />

      </div>
      


      <form className={styles.form}>
	  <input 
      className={styles.input}
		  type="text"
      placeholder="Nama Coffeshop"
		  value={coffeeshop_name}
		  onChange={(e) => setCoffeshop_name(e.target.value)}
	  />
    <input 
    className={styles.input}
		  type="text"
      placeholder="Nama Pemilik Coffeeshop"
		  value={desc}
		  onChange={(e) => setDesc(e.target.value)}
	  />
    <input 
		  type="text"
      placeholder="Alamat Coffeeshop"
      className={styles.input}
		  value={address}
		  onChange={(e) => setAddress(e.target.value)}
	  />
      <button className={styles.button} type="submit" onClick={handleSubmit}>Kirim!</button>
      </form>
      </div>
    </div>
    
  );
};

export default Header;