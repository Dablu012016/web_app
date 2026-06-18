require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const contactRout = require("./router/contact-router")
const serviceRoute = require("./router/service-router");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://web-app-8sy8.onrender.com",
    "https://web-qxfddj7w9-dablu-kumars-projects-a9f604e2.vercel.app/"
  ],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));


app.use(express.json());



app.use("/api/auth", router);
app.use("/api/form", contactRout);
app.use("/api/data", serviceRoute);
app.use(errorMiddleware);


connectDb().then(() => {
  let PORT = 5000;
  app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
  );
});


