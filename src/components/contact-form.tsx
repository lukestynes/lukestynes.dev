"use client";

import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-col justify-center">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
          {...register("name", { required: true })}
        />
      </div>
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
        {...register("email", { required: true })}
      />
      <textarea
        className="textarea textarea-bordered textarea-lg mb-2 min-h-40 w-full px-4 py-2 text-primary placeholder-primary focus:outline-none"
        placeholder="Your message"
        {...register("message", { required: true })}
      ></textarea>
      <div className="flex justify-center">
        <button className="btn btn-primary mt-5 rounded-3xl font-normal text-white">
          Send Message
        </button>
      </div>
    </form>
  );
}
