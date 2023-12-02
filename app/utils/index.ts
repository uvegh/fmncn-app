interface ConfluenceOAuthConfigType {
    audience: string;
    client_id: string;
    redirect_uri: string;
    scope: string;
    state: string;
  }

  const generateRandomAlphabeticString = (length: any) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    return result;
  };
  const url_state = generateRandomAlphabeticString(7);


export const confluenceOAuthConfig: ConfluenceOAuthConfigType = {
    audience: 'api.atlassian.com',
    client_id: process.env.CONFLUENCE_CLIENT_ID || '',
    redirect_uri: process.env.REDIRECT_URL || '', 
    scope: 'write:confluence-content',
    state: Math.random().toString(36).substring(7), 
  };
  
  // Function to initiate Confluence OAuth flow
   export const initiateConfluenceOAuth = () => {
    // Convert ConfluenceOAuthConfigType to Record<string, string>
    const queryParams: Record<string, string> = {
      audience: confluenceOAuthConfig.audience,
      client_id: confluenceOAuthConfig.client_id,
      redirect_uri: confluenceOAuthConfig.redirect_uri,
      scope: confluenceOAuthConfig.scope,
      state: confluenceOAuthConfig.state,
    };
  
    const authorizationUrl = `https://auth.atlassian.com/authorize?${new URLSearchParams(queryParams).toString()}&response_type=code&prompt=consent`;
  
    // Redirect the user to the Confluence authorization URL
    window.location.href = authorizationUrl;
  };
  

  export const confluenceAuthUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=HVD0eQUowBXTkpK7yVjecSzLcC75Tl9n&scope=write%3Aconfluence-content&redirect_uri=https%3A%2F%2Ffmcn.vercel.app%2Fdashboard&state=${encodeURIComponent(url_state)}&response_type=code&prompt=consent`

  export const  BASE_URL=" https://fmcn-owl-api.vercel.app"