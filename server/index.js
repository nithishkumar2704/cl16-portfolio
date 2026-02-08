import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// gracefully handle connection failure for demo purposes
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cl16_portfolio');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log("⚠️ MongoDB NOT FOUND. Running in MOCK DATA mode.");
        // process.exit(1); // Don't crash for this demo, just log it
    }
};

connectDB();

// Mock Data (Fallback if DB fails)
const MOCK_DATA = {
    race: {
        gp: "FORMULA 1 GRAND PRIX DE MONACO 2026",
        circuit: "Circuit de Monaco",
        date: "24 MAY 2026",
        days: "14",
        hours: "08",
        mins: "42"
    },
    shop: [
        { name: "CL16 CAP", edition: "MONACO SPECIAL", price: "€45.00", material: "100% COTTON", status: "AVAILABLE", icon: "Crown" },
        { name: "SCUDERIA TEE", edition: "ROSSO CORSA", price: "€60.00", material: "PERFORMANCE MESH", status: "AVAILABLE", icon: "Shirt" },
        { name: "GRANDSTAND HOODIE", edition: "TIFOSI EDITION", price: "€120.00", material: "HEAVYWEIGHT FLEECE", status: "SOLD OUT", icon: "Tag" }
    ],
    news: [
        { id: 1, headline: "POLE POSITION IN MONZA - TIFOSI ERUPT", date: "2 HRS AGO" },
        { id: 2, headline: "CONTRACT EXTENSION: 2029 SIGNED", date: "1 DAY AGO" },
        { id: 3, headline: "NEW FERRARI HYPERCAR UNVEILED", date: "3 DAYS AGO" },
        { id: 4, headline: "CHARLES LECLERC X ARMANI CAMPAIGN", date: "1 WEEK AGO" }
    ],
    stats: [
        { gp: "BAHRAIN", pos: "P3", pts: 15 },
        { gp: "SAUDI ARABIA", pos: "P2", pts: 18 },
        { gp: "AUSTRALIA", pos: "P1", pts: 26 }, // Fastest Lap
        { gp: "JAPAN", pos: "P4", pts: 12 },
        { gp: "CHINA", pos: "P2", pts: 18 },
        { gp: "MIAMI", pos: "P2", pts: 18 },
        { gp: "EMILIA ROMAGNA", pos: "P1", pts: 25 }, // Win for Tifosi
        { gp: "MONACO", pos: "P1", pts: 25 } // Home Win
    ]
};

// Routes
app.get('/', (req, res) => {
    res.send('CL.16 API Running...');
});

app.get('/api/race-data', async (req, res) => {
    res.json(MOCK_DATA.race);
});

app.get('/api/shop', async (req, res) => {
    res.json(MOCK_DATA.shop);
});

app.get('/api/news', async (req, res) => {
    res.json(MOCK_DATA.news);
});

app.get('/api/stats', async (req, res) => {
    res.json(MOCK_DATA.stats);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
