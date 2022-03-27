//middleware
const isLogged = (req, res, next) => {
    let logged = true
    if (logged) {
        next()
    }else{
        res.send('debe logearse')
    }
}

exports.isLogged = isLogged