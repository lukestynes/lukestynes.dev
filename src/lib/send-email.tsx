import { FormData } from "@/components/contact-form";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
  //   console.log(data);
}