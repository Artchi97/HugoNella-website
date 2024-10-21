require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
(async () => {
  const fetch = (await import("node-fetch")).default;

  const app = express();

  app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

  app.get("/api/sheets", async (req, res) => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Feed?key=${process.env.API_KEY}`
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Błąd pobierania danych z Google Sheets API:", error);
      res.status(500).json({ message: "Błąd serwera" });
    }
  });

  app.get("/api/shows", async (req, res) => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Shows?key=${process.env.API_KEY}`
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Błąd pobierania danych z API Shows:", error);
      res.status(500).json({ message: "Błąd serwera" });
    }
  });

  app.get("/api/litters", async (req, res) => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Litters?key=${process.env.API_KEY}`
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Błąd pobierania danych z API Litters:", error);
      res.status(500).json({ message: "Błąd serwera" });
    }
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Serwer proxy działa na porcie ${PORT}`);
  });
})();
