import User from "../models/User.js"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const login = (req, res, next) => {
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

export const register =  (req, res, next) => { 
    if(typeof req?.body?.email === "string" && typeof req?.body?.password === "string" &&  emailRegex.test(req.body.email)){
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        })
        newUser.save()
            .then(newUserSaved => {
                req.responseData = newUserSaved
                next()
            })
            .catch(err => {
                console.error(err)
                res.status(500).send('J\' ai un problème dans ma plantation !')
            })
    }
    else res.status(403).json({login: false, message:'argument(s) missing or incorrect'})
}

export const listUser = (req,res, next) => {
    User.find()
    .then(res => console.log(res)&&next())
    .catch(err => console.error(err)&&res.status(500))
}

export const replaceUser = (_,res, next) => {
    User.findOneAndReplace(
        { password : "abcd@12345" }, 
        {
        email: "kid@catbugler.fr",
        password: "johezfnljn@&kfe"
        }
    )
    .then(res => console.log(res)&&next())
    .catch(err => console.error(err)&&res.status(500))
}