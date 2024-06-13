const express = require("express")
const route = express.Router();
const NewArticleController = require("../controller/NewArticleController")
const ListArticlesController = require("../controller/ListArticlesController")
const routerFunctions = require("../controller/routerFunctions.js");

route.get("/newArticle",NewArticleController.newArticle)
route.post("/addArticle",NewArticleController.newArticlePost)

route.get("/listArticles", ListArticlesController.listArticles)



//get the full article
router.get("/article/:id", routerFunctions.getFullArticle)

//editing the article page
router.get("/edit/article/:id", routerFunctions.getEditArticlePage)
router.post("/update/article/:id", routerFunctions.updateArticle)


//route for deleting
router.get("/delete/article/:id", routerFunctions.deleteArticle)
module.exports = router;

