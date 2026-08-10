// src/server.js  ← SOLO para desarrollo local
import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Local en http://localhost:${PORT}`);
});