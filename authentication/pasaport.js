import passport from "passport";
import { Strategy } from "passport-discord";
import dotnev from 'dotenv';

dotnev.config();
const keyDiscord = JSON.parse(process.env.MY_DISCORDKEYS);

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((obj, done) => {
    done(null, obj)
})
console.log(keyDiscord.clientID);
passport.use(new Strategy({
    clientID : keyDiscord.clientID,
    clientSecret : keyDiscord.clientSecret,
    callbackURL : keyDiscord.callbackURL,
    scope : ["identify"],
}, (accestoken, refreshtoken, profile, cb) =>{
    process.nextTick(() => {
        return cb(null, profile)
    })
}))
export default passport