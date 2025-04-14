import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getAccountByUserId, getUserById} from "@/features/actions/users/user";
import { db } from "@/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db as any),
  session: { strategy: "jwt" },
  pages : {
    error : "/error"
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (!user || !account) return false;
        const existingUser = await db.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          const newUser = await db.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              emailVerified : new Date(),
              isOnboarded : false,
              isAdmin : false,

              accounts: {
                // @ts-ignore
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  refresh_token: account.refresh_token,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                  session_state: account.session_state,
                },
              },
            },
          });
          if (!newUser) return false;
        } else {
          const existingAccount = await db.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
          });

          if (!existingAccount) {
            await db.account.create({
              data: {
                userId: existingUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                // @ts-ignore
                session_state: account.session_state,
              },
            });
          }
        }
        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({ token, user, account }) {
      if (!token.sub) return token;
      const existingUserData = await getUserById(token.sub);
      if (existingUserData.error) return token;

      const existingUser = JSON.parse(existingUserData.user as string);
      if (!existingUser) return token;

      const exisitingAccount = await getAccountByUserId(existingUser.id);
      if (exisitingAccount.error) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token;
    },

    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      console.log("this is the session : ", session);
      return session;
    },
  },

});