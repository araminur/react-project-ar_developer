import React, { useState } from "react";

export default function CONTACT() {
  const [formData, setData] = useState({
    name: "",
    phone: "",
    email: "",
    massage: "",
  });

  const inputHandeler = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const { name, phone, email, massage } = formData;

  const formSubmit = (eve) => {
    eve.preventDefault();

    alert(
      `Name : ${name}, Phone No : ${phone} , Email : ${email} , Massage : ${massage} , Submit then press "OK "`
    );
  };

  return (
    <>
    <div className="contact-Section container mb-5">
      <div className="mt-5 pt-5">
        <h1 className="text-center cHeading fw-bold mt-5"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit} >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name "
                  name="name"
                  value={name}
                  onChange={inputHandeler}
                  placeholder=" ex jone "
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={inputHandeler}
                  placeholder="+88017XXXXXXXX"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={inputHandeler}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Massage
                </label>
                <textarea
                  className="form-control "
                  id="massage"
                  rows="3"
                  name="massage"
                  value={massage}
                  onChange={inputHandeler}
                ></textarea>
              </div>
              <div className="col-12 ">
                <button className="btn btn-outline-warning submitBtn" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
