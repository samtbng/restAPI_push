const models = require('../models')
const cat = models.category

exports.index = (req, res) => {
    cat.findAll({ attributes: ['id', 'name_category'] })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

exports.create = (req, res) => {
    const input = req.body
    console.log(input)
    cat.create({
        name_category: input.name
    }).then(data => {
        res.send(data)
    })
        .catch(err => {
            res.send(err)
        })
}

// const key = Object.keys(data).filter(item => {
//     if(item !== 'createdAt' || item !== 'updatedAt'){
//         return item
//     }
// })

// const result = key.map(prop => {
//     return data[prop]
// })