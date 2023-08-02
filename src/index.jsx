import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

React
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-1hvrl6f8kcp1fug2.us.auth0.com"
  clientId="9SZJjLW7US1MU3ng9rMWDDyKugL64tnM"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>
);
