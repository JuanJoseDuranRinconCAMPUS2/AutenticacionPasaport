import passport from "passport";
import { Strategy } from "passport-discord";

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((obj, done) => {
    done(null, obj)
})

passport.use(new Strategy({
    clientID,
    clientSecret,
    callbackURL,
    scope
}, (accestoken, refreshtoken, profile, cb) =>{
    process.nextTick(() => {
        return cb(nulll, profile)
    })
}))

module.exports = passport