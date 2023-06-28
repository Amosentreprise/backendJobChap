const express = require("express");
const sequelize = require("./config/database");
const bodyParser = require("body-parser")
const path = require("path")

//Importer les routes
const routeDemande = require("./routers/routeDemande");
const routeService = require("./routers/routeService");
const routePrestataire = require("./routers/routePrestataire");
const routeContact = require("./routers/routeContact");
//Initialisation SERVEUR DE BASE DE DONNES

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
//Initialisation SERVEUR D'APPLICATION
const app = express();

/*l'erreur cors*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname,'images')));
app.use("/api", routeDemande);
app.use("/api", routePrestataire);
app.use("/api", routeService);
app.use("/api", routeContact);
const port = 5000;

app.listen(port, () => {
  console.log(`Le serveur est allumé sur le port ${port}`);
});
