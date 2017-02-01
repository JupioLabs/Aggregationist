var React = require('react');
var DefaultLayout = require('./layouts/default');

class ErrorMessage extends React.Component {
    render() {
        return (
            <DefaultLayout user={this.props.user} title={this.props.title} menuItems={this.props.menuItems}>
                <div className="row">
                    <div className="columns"><strong>{this.props.message}</strong></div>
                    <br />
                </div>
                <div className="row">
                    <div className="columns">{this.props.error.stack}</div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = ErrorMessage;