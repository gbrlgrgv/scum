const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Сервираме статичните файлове от папката "public"
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});