
const Article = require('../model/articles')

const newArticle = (req, res) => {
    res.render("newArticle")
}

const newArticlePost = (req, res) => {

    console.log(req.body);
    const { title, description } = req.body;

     if (!title || title.length > 25) {
        return res.status(400).send("Title is required and should be a maximum of 25 characters.");
    }

    if (!description || description.length > 100) {
        return res.status(400).send("Description is required and should be a maximum of 100 characters.");
    }

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