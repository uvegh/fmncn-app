    // Function to initiate Confluence OAuth flow
   export const initiateConfluenceOAuth = () => {
    // Manually build auth url
       
    const client_id = process.env.CONFLUENCE_CLIENT_ID || '',
    const app_state = Math.random().toString(36).substring(7),
    const authorizationUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${client_id}&scope=write%3Aconfluence-content%20read%3Aconfluence-content.all%20readonly%3Acontent.attachment%3Aconfluence&redirect_uri=https%3A%2F%2Ffmncn-app.vercel.app%2Fdashboard&state=${app_state}&response_type=code&prompt=consent`
  
    // Redirect the user to the Confluence authorization URL
    window.location.href = authorizationUrl;
  };
