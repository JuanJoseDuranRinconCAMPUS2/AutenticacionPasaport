import passport from "passport";
import { Strategy as DiscordStrategy} from "passport-discord";
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
passport.use(new DiscordStrategy({
    clientID : keyDiscord.clientID,
    clientSecret : keyDiscord.clientSecret,
    callbackURL : keyDiscord.callbackURL,
    scope : ['identify', 'email', 'connections', 'guilds', 'guilds.join', 'gdm.join']
}, (accestoken, refreshtoken, profile, cb) =>{
    process.nextTick(() => {
        return cb(null, profile)
    })
}))
export default passport