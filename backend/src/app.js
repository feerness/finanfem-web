import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import foroRoutes from "./routes/forum.routes.js";


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/foro", foroRoutes);


export default app;