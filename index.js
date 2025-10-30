const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3001; 
app.get("/", (req, res) => { 
res.send(" moh lwahch howa les hommees"); 
}); 
app.listen(PORT, () => { 
console.log(`Serveur lancé sur le port ${PORT}`); 
});