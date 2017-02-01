var React = require('react');
var DefaultLayout = require('../layouts/default');

class AuthRegister extends React.Component {
    render() {
        return (
            <DefaultLayout pageName={this.props.pageName} flash={this.props.flash} title={this.props.title} menuItems={this.props.menuItems}>
                <div className="row align-center">
                    <div className="small-12 medium-8 large-6 columns">
                        <div className="panel">
                            <div className="panel-head">
                                <h4>Sign Up</h4>
                            </div>
                            <form method="POST">
                                <div className="row">
                                    <div className="columns">
                                        <label for="firstName">First Name</label>
                                        <input type="text" name="firstName" />
                                    </div>
                                    <div className="columns">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" name="lastName" />
                                    </div>
                                </div>
                            
                                <label for="email">Email</label>
                                <input type="email" name="email" />

                                <label for="password">Password</label>
                                <input type="password" name="password" />

                                <label for="vPassword">Verify Password</label>
                                <input type="password" name="vPassword" />

                                <button className="button expanded" type="submit">Sign Up</button>
                            </form>
                            <span>Already registered? <a href="/auth/login">Login</a></span>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = AuthRegister;