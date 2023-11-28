interface ConfluenceOAuthConfigType {
    client_id: string;
    redirect_uri: string;
    scope: string;
    state: string;
  }
export const confluenceOAuthConfig: ConfluenceOAuthConfigType = {
    client_id: process.env.CONFLUENCE_CLIENT_ID || '',
    redirect_uri: process.env.REDIRECT_URL || '', 
    scope: 'write:confluence-content',
    state: Math.random().toString(36).substring(7), 
  };
  
  // Function to initiate Confluence OAuth flow
   export const initiateConfluenceOAuth = () => {
    // Convert ConfluenceOAuthConfigType to Record<string, string>
    const queryParams: Record<string, string> = {
      client_id: confluenceOAuthConfig.client_id,
      redirect_uri: confluenceOAuthConfig.redirect_uri,
      scope: confluenceOAuthConfig.scope,
      state: confluenceOAuthConfig.state,
    };
  
    const authorizationUrl = `https://auth.atlassian.com/authorize?${new URLSearchParams(queryParams).toString()}&response_type=code&prompt=consent`;
  
    // Redirect the user to the Confluence authorization URL
    window.location.href = authorizationUrl;
  };