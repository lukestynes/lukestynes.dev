import { type ContactResponse } from "@/types/api";

export const sendContactForm = async (data: ContactResponse) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return res;
};
