const express = require("express")
const route = express.Router();
const NewArticleController = require("../controller/NewArticleController")
const ListArticlesController = require("../controller/ListArticlesController")


route.get("/newArticle",NewArticleController.newArticle)
route.post("/addArticle",NewArticleController.newArticlePost)

route.get("/listArticles", ListArticlesController.listArticles)

module.exports=route

