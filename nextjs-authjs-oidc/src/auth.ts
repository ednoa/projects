import NextAuth from "next-auth"
//import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    //GitHub, // Example when using existing provider from next-auth
    {
      id: 'custom_oidc_provider', // Unique identifier for the provider
      name: 'Custom OIDC Provider', // Name of the provider
      type: 'oidc', // Provider type
      issuer: process.env.AUTH_OIDC_ISSUER, // Issuer URL from environment variable
      clientId: process.env.AUTH_OIDC_CLIENT_ID, // Client ID for authentication from environment variable
      clientSecret: process.env.AUTH_OIDC_CLIENT_SECRET, // Client Secret for authentication from environment variable
      profile(profile) {
        // Log essential information when a user logs in
        console.log('User logged in', { userId: profile.sub });
        return {
          id: profile.sub, // User ID from the profile
          username: profile.sub?.toLowerCase(), // Username (converted to lowercase)
          name: `${profile.given_name} ${profile.family_name}`, // Full name from given and family names
          email: profile.email, // User email
        };
      }
    }
  ],
  pages: {
    error: '/sign-in', // Redirect to the home page (or other page) on error
    signIn: '/sign-in', // Redirect to the home page (or other page) for sign-in
    signOut: '/sign-in', // Redirect to the home page (or other page) after sign-out
  },
  callbacks: {
    jwt({ token, user }) {
      if(user) token.username = user.username
      return token
    },
    session({ session, token }) {
      session.user.username = token.username
      return session
    }
  }
})