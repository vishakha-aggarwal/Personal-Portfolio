const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;
const path  = require("path");

app.use(cors());
app.use(express.json());
app.use("/", router);

if (process.env.NODE_ENV !== "PRODUCTION")  
  require("dotenv").config({ path: "config.env" });

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) 
    console.log(error);
  else 
    console.log("Ready to Send");
});

router.post("/api/contact", (req, res) => {

  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) 
      res.json(error);
    else 
      res.json({ code: 200, status: "Message Sent" });
  });
});

app.listen(PORT, () => {
  console.log("Server Running")
});

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/frontend/build/index.html"));
});
