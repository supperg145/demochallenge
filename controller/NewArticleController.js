
const Article = require('../model/articles')

const newArticle = (req, res) => {
    res.render("newArticle")
}

const newArticlePost = (req, res) => {

    console.log(req.body);


    const Data = new Article(req.body);
    Data.save().then(() => {

    }).catch((err) => {
        console.log(err)
    })



    res.redirect("/listArticles")
}



module.exports = {
    newArticle,
    newArticlePost
}