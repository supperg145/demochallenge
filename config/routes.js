const express = require("express");
const router = express.Router();
const routerFunctions = require("../controller/routerFunctions.js");


//get the full article
router.get("/article/:id", routerFunctions.getFullArticle)

//editing the article page
router.get("/edit/article/:id", routerFunctions.getEditArticlePage)
router.post("/update/article/:id", routerFunctions.updateArticle)

module.exports = router;
