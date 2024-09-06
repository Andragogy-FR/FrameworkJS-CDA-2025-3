import jwt from 'jsonwebtoken'
const privateKey = 'HelloThere'

export const createToken = (req, res, next) => {
    if(req?.user?.username && req?.user?.password){
        const token = jwt.sign({
            username : req.user.username,
            role : 'user'
        },privateKey)
        if(token)req.token = token && next()
        else res.status(500).json({token : false, login: true, message:'Problem Server with the Token'})
    }
    else res.status(403).json({login: false, message:'argument(s) missing'})
}

export const sendToken = (req, res) => console.log(req?.token) && typeof req?.token === "string" 
    ? res.json({token : true, value : req.token})
    : res.status(500).json({token : false, login: true, message:'Problem Server'})

// REQuête => RESponse
// REQuête => middleware NEXT => middleware NEXT => RESponse

/* 

                             => ids bon => middleware NEXT => RESponse
REQuête => middleware NEXT =>                create Token
             Connexion       => ids mauvais => RESponse

*/