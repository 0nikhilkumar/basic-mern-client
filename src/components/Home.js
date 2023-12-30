import React, { useEffect, useState } from "react";

const Home = () => {

  const [userName, setUserName] = useState('')
  const [show, setShow] = useState(false)

  const getHomePage = async ()=>{
    try {
      const res = await fetch("https://basic-mern-server.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      setUserName(data.name)
      setShow(true)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getHomePage();
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>{show ? 'Happy, to see you back' : 'We Are The MERN Developer'}</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
