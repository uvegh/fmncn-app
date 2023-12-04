// pages/api/atlassian/callback.js
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';

export default async function handler(req:any, res:any) {
  try {
    const { code } = req.query;

    // Exchange code for access token
    const response = await axios.post(
      'https://auth.atlassian.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: process.env.ATLAS_CLIENT_ID,
        client_secret: process.env.ATLAS_CLIENT_SECRET,
        code,
        redirect_uri: process.env.ATLAS_REDIRECT_URI,
      }
    );

    const { access_token } = response.data;

    // Store the access token in a cookie
    setCookie({ res }, 'atlassian_access_token', access_token, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    res.redirect('/');
  } catch (error) {
    console.error('Atlassian authentication error:', error);
    res.status(500).end('Internal Server Error');
  }
}
