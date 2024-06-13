const Article = require('../model/articles')


const listArticles = (req, res) => {

    //get all articles from mongo db 


    Article.find().then((articles) => {
        res.render("fullArticle", {
            allArticles: articles
        })
    })

        .catch((err) => { console.log(err); });

}


module.exports = {
    listArticles
}