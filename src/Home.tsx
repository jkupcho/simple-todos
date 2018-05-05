import { withAuth } from '@okta/okta-react';
import * as React from 'react';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { authenticated: null };

    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  public async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  public async componentDidUpdate() {
    this.checkAuthentication();
  }

  public async componentDidMount() {
    this.checkAuthentication();
  }

  public async login() {
    // Redirect to '/' after login
    this.props.auth.login('/');
  }

  public async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  public render() {
    if (this.state.authenticated === null) {
      return null;
    }
    return this.state.authenticated ? (
      <button onClick={this.logout}>Logout</button>
    ) : (
      <button onClick={this.login}>Login</button>
    );
  }
}

export default withAuth(Home);
