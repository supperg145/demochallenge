const article = require("../model/articles");

//functions to get the full article
getFullArticle = (req, res) => {
    console.log("Get req for full article page sent")
    article.findById(req.params.id)
    .then(() => {
        res.render("fullArticle", {
            article: result
        })
    })
    .catch(err => {
        console.log(err)
    })
}

//Functions for updating the article
getEditArticlePage = (req, res) => {
  console.log("Get req for edit article page sent.");
  article
    .findById(req.params.id)
    .then((result) => {
      res.render("editArticle", {
        article: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

updateArticle = (req, res) => {
  console.log("Request to update article sent.");
  article
    .findByIdAndUpdate(req, params.id, req.body)
    .then((result) => {
      res.render("editArticle", {
        article: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};



module.exports = {
  getEditArticlePage,
  updateArticle,
  getFullArticle
};
