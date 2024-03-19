"use client";
import React from "react";
import { contactMeText } from "../data/data";
import Form from "./components/Form";

const ContactMePage = () => {
  return (
    <div className="page-container">
      <h2> CONTACT ME</h2>
      <div className="flex flex-row w-9/12 content-center m-auto bg-grey-light p-20 gap-20">
        <div className="fle flex-col w-2/4 ">
          <h3 className="text-2xl mb-10">{contactMeText.title}</h3>
          <p>{contactMeText.body}</p>
        </div>

        <div className="bg-white ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
