"use client";
import React, { useState } from "react";

const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Uppdatera formulärdatan när användaren skriver i inputfälten
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // En fetch-begäran skickas till /api/contact-rutten med POST-metoden och data skickas som JSON i begäranens kropp.
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Om begäran lyckas, loggas det returnerade svaret till konsolen.
      if (!response.ok) {
        throw new Error("HTTP error! status " + response.status);
      }
      setMessageSent(true);
      // Rensa formulärdatan när meddelandet har skickats
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      // Om det uppstår ett fel, loggas felmeddelandet till konsolen.
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <div className="mb-4">
        <label className="label-form" htmlFor="name">
          Namn:{" "}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-form"
          required
          minLength={3}
          maxLength={200}
        />
      </div>
      <div className="mb-4">
        <label className="label-form" htmlFor="email">
          Email:{" "}
        </label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-form"
          required
          minLength={3}
          maxLength={200}
        />
      </div>
      <div className="mb-4">
        <label className="label-form" htmlFor="company">
          Företag:{" "}
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="input-form"
        />
      </div>
      <div className="mb-4">
        <label className="label-form" htmlFor="message">
          Meddelande:{" "}
        </label>
        <input
          id="message"
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="input-form"
          required
          minLength={10}
          maxLength={800}
        />
      </div>
      <button
        type="submit"
        className="bg-blue rounded-lg text-white hover:text-blue hover:border-2 border-blue-500  hover:bg-white min-w-100 px-3 h-12"
      >
        Skicka meddelande
      </button>
      {isMessageSent && (
        <p className="text-sm pt-2">Meddelandet har skickats</p>
      )}
    </form>
  );
};

export default Form;
