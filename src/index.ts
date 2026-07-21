import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routesrouter } from "./routes/route.routes";
import { busrouters } from "./routes/bus.routes";
import { avrouter } from "./routes/availability.routes";
import { bookingrouter } from "./routes/booking.routes";
import { confirmrouter } from "./routes/confirm-booking.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "server is alive!",
  });
});

app.use("/routes", routesrouter);
app.use("/buses", busrouters);
app.use("/availability", avrouter);
app.use("/booking", bookingrouter);
app.use("/confirm-booking", confirmrouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server connected on port: http://localhost:${PORT}`);
});
