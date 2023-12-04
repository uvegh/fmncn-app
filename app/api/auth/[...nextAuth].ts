
// import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
interface GoogleTypes{
    clientID:string;
    clientSecret:string
}
 const authOptions = {
 providers: [
  GoogleProvider({
    //@ts-ignore
   clientId: process.env.GOOGLE_ID,
//@ts-ignore
   clientSecret: process.env.GOOGLE_SECRET,
  }),
 ],
 session: {
  strategy: 'jwt',
 },
};
//@ts-ignore
export default NextAuth(authOptions);

// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { code, state } = req.query;

//   // Validate the state parameter to prevent CSRF attacks
//   //@ts-ignore
//   const storedState = req.session?.confluenceOAuthState;

//   // Validate the state parameter to prevent CSRF attacks
//   // if (state !== YOUR_USER_BOUND_VALUE) {
//   //   return res.status(400).json({ error: 'Invalid state parameter' });
//   // }

//   try {
//     // Exchange the authorization code for an access token
//     const response = await axios.post('https://auth.atlassian.com/oauth/token', {
//       grant_type: 'authorization_code',
//       client_id: process.env.CONFLUENCE_CLIENT_ID || "",
//       client_secret: process.env.CONFLUENCE_CLIENT_SECRET || '',
//       code,
//       redirect_uri: process.env.REDIRECT_URL || '', // Change this to your actual dashboard URL
//     });

//     // Handle the response (e.g., store the access token)
//     const accessToken = response.data.access_token;
//     // Do something with the access token, such as storing it in a session or database

//     // Redirect the user to the desired page
//     res.redirect('/dashboard');
//   } catch (error) {
//     console.error('Error exchanging code for access token:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }