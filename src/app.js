import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Configuration for Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests only from the specified origin (stored in environment variable)
    credentials: true, // Allow cookies and authentication headers in cross-origin requests
  })
);

// Middleware to parse incoming JSON payloads with a size limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Middleware to serve static files (like images, CSS, JS) from the 'public' folder
app.use(express.static("public")); // This means files inside 'public' can be accessed directly via the browser

// Middleware to parse cookies from incoming HTTP requests
// It makes cookies available in 'req.cookies' for easy access in routes or middleware
app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js'



// routes declaration.
app.use('/api/v1/users', userRouter)

export { app };
