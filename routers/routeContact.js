const express = require("express");

const  routeContact = express.Router();
const controllerContact = require("../controllers/controllerContact");


routeContact.post("/contact", controllerContact.createContact);

module.exports = routeContact;