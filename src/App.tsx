import { ImplicitCallback, Security } from '@okta/okta-react';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

import './App.css';

const config = {
  client_id: '0oaewvc1eup0kzz7K0h7',
  issuer: 'https://dev-476741.oktapreview.com/oauth2/default',
  redirect_uri: `${window.location.origin}/implicit/callback`
};

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <Route path="/" exact={true} component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </BrowserRouter>
    );
  }
}

export default App;
