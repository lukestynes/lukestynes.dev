"use client";
import { sendContactForm } from "@/lib/api";
import Image from "next/image";
import React, { useState, type ChangeEvent } from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues };

export default function ContactForm() {
  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const { values } = state;

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { target } = event;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setShowSuccess(false);
    setShowFailure(false);

    event.preventDefault();
    const res = await sendContactForm(values);

    if (res.ok) {
      setLoading(false);
      setShowSuccess(true);
      setShowFailure(false);
      setState(initState);
    } else {
      setLoading(false);
      setShowSuccess(false);
      setShowFailure(true);
    }
  };

  return (
    <div>
      <div className="flex  justify-center">
        {showSuccess && (
          <div
            role="alert"
            className="alert alert-success max-w-5xl text-white"
          >
            <Image src="/icons/tick-white.svg" alt="" width="24" height="24" />
            <span>Your message has been sent!</span>
          </div>
        )}
        {showFailure && (
          <div role="alert" className="alert alert-error max-w-3xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Something went wrong, please try again!</span>
          </div>
        )}
      </div>

      <form className="mx-auto w-full max-w-5xl" onSubmit={onSubmit}>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Full Name</span>
          </div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full rounded-none text-lg placeholder-black focus:outline-none"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full rounded-none text-lg placeholder-black focus:outline-none"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered textarea-lg min-h-40 w-full rounded-none px-4 py-2 placeholder-black focus:outline-none"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <div className="flex justify-center">
          <button
            className="btn btn-primary mt-5 rounded-3xl font-normal text-white"
            disabled={loading}
          >
            Send Message
            {loading && <span className="loading loading-spinner"></span>}
          </button>
        </div>
      </form>
    </div>
  );
}
