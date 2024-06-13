const express = require("express")
const route = express.Router();
const NewArticleController = require("../controller/NewArticleController")
const ListArticlesController = require("../controller/ListArticlesController")
const routerFunctions = require("../controller/routerFunctions.js");

route.get("/newArticle",NewArticleController.newArticle)
route.post("/addArticle",NewArticleController.newArticlePost)

route.get("/listArticles", ListArticlesController.listArticles)



//get the full article
route.get("/article/:id", routerFunctions.getFullArticle)

//editing the article page
route.get("/edit/article/:id", routerFunctions.getEditArticlePage)
route.post("/update/article/:id", routerFunctions.updateArticle)


//route for deleting
route.get("/delete/article/:id", routerFunctions.deleteArticle)
module.exports = route;

