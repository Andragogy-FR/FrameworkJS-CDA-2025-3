const login = (req, res, next) => {
    if(typeof req?.body?.username === "string" && typeof req?.body?.password === "string"){
        if(req?.body?.username === "Sofiane" && req?.body?.password === "abcd@12345"){
            req.user = {
                username : "Sofiane",
                password : "abcd@12345"
            }
            next()
        }
        else res.status(401).json({login: false, message:'bad login'})
    }
    else res.status(403).json({login: false, message:'argument(s) missing'})
}

const user = {
    login
}

export default user