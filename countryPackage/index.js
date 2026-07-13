const express = require("express");
const cors = require("cors");

const locationRoutes = require("./routes/location.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/location", locationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});