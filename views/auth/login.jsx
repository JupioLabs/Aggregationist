var React = require('react');
var DefaultLayout = require('../layouts/default');

class AuthLogin extends React.Component {
    render() {
        return (
            <DefaultLayout pageName={this.props.pageName} flash={this.props.flash} title={this.props.title} menuItems={this.props.menuItems}>
                <div className="row align-center">
                    <div className="small-12 medium-8 large-4 columns">
                        <div className="panel">
                            <div className="panel-head">
                                <h4>Login</h4>
                            </div>
                            <form method="POST">
                                <label for="email">Email Address</label>
                                <input name="email" type="email" />
                                <label for="password">Password</label>
                                <input name="password" type="password" />
                                <button className="button expanded" type="submit">Login</button>
                            </form>
                            <span>Not registered? <a href="/auth/register">Sign Up</a></span>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = AuthLogin;