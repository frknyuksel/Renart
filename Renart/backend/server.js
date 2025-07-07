require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productsRoute = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use("/api/products", productsRoute);

// DİKKAT: Burada router yok, sadece app kullanılır.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
