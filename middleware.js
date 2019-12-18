const isLogginIN = true

exports.authenticated = (req, res, next) => {
    if (isLogginIn)
        next()
    else {
        res.send({
            message: "You Are Unauthenticated!"
        })
    }
}