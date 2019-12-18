const models = require('../models')
const Article = models.articles
const category = models.category
const users = models.users

exports.index = (req, res) => {
    Article.findAll({
        include: [{
            model: category,
            as: "category"
        }, {
            model: users,
            as: "users"
        },]
    }).then(article => res.send(article))
        .catch(err => res.send(err))
}

exports.create = (req, res) => {
    const data = req.body
    console.log(data)
    Article.create({
        id: data.id,
        title: data.title,
        category_id: data.category_id,
        content: data.content,
        img: data.img,
        author_id: data.author_id
    }).then(article => res.send(article))
        .catch(err => {
            res.send(err)
        })
}

exports.lastest = (req, res) => {
    Article.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        include: [{
            model: category,
            as: "category"
        }, {
            model: users,
            as: "users"
        },],
        limit: 10,
    }).then(article => res.send(article))
        .catch(err => res.send(err))
}

exports.perCategory = (req, res) => {
    Article.findAll({
        where: { category_id: req.params.id },
        include: [{
            model: category,
            as: "category"
        }, {
            model: users,
            as: "users"
        },]
    })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

