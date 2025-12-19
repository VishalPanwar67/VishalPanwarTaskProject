import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectMongoDB from "./db/connectMongoDB.js";

import projectRoutes from "./routes/project.routes.js";
import clientRoutes from "./routes/client.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://vishalproject-indol.vercel.app"],
    credentials: true,
  })
);
app.use(express.json({ limit: "2mb" }));

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "Flipr API running" });
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// app.listen(port, () => {
//   connectToMongoDB();
//   console.log(`Server listening on port ${port}`);
// });

connectMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port :: ${port}`);
    });
    app.on("error", (error) => {
      console.error(`Server error :: ${error}`);
      throw error;
    });
  })
  .catch((error) => {
    console.error(`index.js :: connectDB connection failed :: ${error}`);
  });
