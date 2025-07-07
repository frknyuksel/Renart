const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const calculatePrice = require("../utils/priceCalculator");
require("dotenv").config();

const GOLD_API_URL = "https://www.goldapi.io/api/XAU/USD";
const GOLD_API_KEY = process.env.GOLD_API_KEY;

let cachedGoldPrice = 2200; // fallback ons fiyatı USD
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 dakika

async function fetchGoldPrice() {
    const now = Date.now();
    if (cachedGoldPrice && now - lastFetchTime < CACHE_DURATION) {
        return cachedGoldPrice;
    }
    try {
        const response = await fetch(GOLD_API_URL, {
            method: "GET",
            headers: {
                "x-access-token": GOLD_API_KEY,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) throw new Error(`GoldAPI hata: ${response.status}`);
        const data = await response.json();
        cachedGoldPrice = data.price;
        lastFetchTime = now;
        return cachedGoldPrice;
    } catch (error) {
        console.error("GoldAPI fetch error:", error.message);
        return cachedGoldPrice;
    }
}

router.get("/", async (req, res) => {
    try {
        const filePath = path.join(__dirname, "../data/product.json");
        const raw = fs.readFileSync(filePath, "utf-8");
        const products = JSON.parse(raw);

        const goldPriceOunce = await fetchGoldPrice();

        const result = products.map((p) => {
            const price = calculatePrice(p.popularityScore, p.weight, goldPriceOunce);
            const rating = (p.popularityScore * 5).toFixed(1);

            return {
                name: p.name,
                weight: p.weight,
                price: parseFloat(price),
                rating: parseFloat(rating),
                images: p.images,
                popularityScore: p.popularityScore,
            };
        });

        res.json(result);
    } catch (error) {
        console.error("Ürün verisi okunamadı:", error.message);
        res.status(500).json({ error: "Sunucu hatası" });
    }
});

// Ek olarak goldprice endpoint'i
router.get("/goldprice", async (req, res) => {
    const goldPrice = await fetchGoldPrice();
    res.json({ goldPriceOunce: goldPrice });
});

// fetchGoldPrice fonksiyonunu export et ki server.js kullanabilsin (opsiyonel)
module.exports = router;
