const express = require("express");
const cors = require("cors");

const app = express();

// Force CORS to allow all requests for testing
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins for testing
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, X-Requested-With, Accept");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.get("/api/merch", async (req, res) => {
    try {
        const response = await fetch("https://api.printful.com/store/products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer YOUR_PRINTFUL_API_KEY"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch merch");
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching merch:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
