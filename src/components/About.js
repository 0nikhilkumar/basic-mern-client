import React, { useEffect, useState } from "react";
import profilePic from "../assets/nikhil.jpg";
import defaultPic from "../assets/defaultPic.jpeg";
import {useNavigate} from "react-router-dom"

const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});


  const callAboutPage = async ()=>{
    try {
      const res = await fetch("https://basic-mern-server.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }


    } catch (error) {
      console.log(error);
      navigate("/login")
    }
     
  }


  useEffect(()=>{
    callAboutPage();
  }, [])

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={userData.name === "Nikhil Kumar"? profilePic : defaultPic} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="proile-rating mt-3 mb-5">
                  RANKING : <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
                id=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINKS</p>
                <a href="#github" target="_blank">
                  Github
                </a>
                <br />
                <a href="#github" target="_blank">
                  Github
                </a>
                <br />
                <a href="#github" target="_blank">
                  Github
                </a>
                <br />
                <a href="#github" target="_blank">
                  Github
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel">
                  <div className="row px-3">
                    <div className="col-md-6">
                      <div>User Id</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className="row px-3 mt-2">
                    <div className="col-md-6">
                      <div>Name</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row px-3 mt-2">
                    <div className="col-md-6">
                      <div>Email</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row px-3 mt-2">
                    <div className="col-md-6">
                      <div>Phone</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row px-3 mt-2">
                    <div className="col-md-6">
                      <div>Profession</div>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
