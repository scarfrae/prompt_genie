//authorization
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from '@utils/database';
import User from '@models/user';

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })

const handler = NextAuth({
    providers: [
        //only provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        //get session
        async session({ session }) {
            const userSession = await User.findOne ({
                email: session.user.email //finds current user email
            })
            //update online user
            session.user.id = userSession._id.toString();
            return session;
        },
        //get signin
        async signIn({ profile }) {
            try {
                await connectToDB();
                //check if user already exists
                const userExists = await User.findOne ({
                    email: profile.email
                });
                if(!userExists){
                    await User.create ({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
                //else...
            } catch (error) {
                console.log(error);
                return false;     
            }

        }
    }   
})
//process for nextjs
export { handler as GET, handler as POST };