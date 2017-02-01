var React = require('react');
var DefaultLayout = require('./layouts/default');

class Dashboard extends React.Component {
    render() {
        return (
            <DefaultLayout pageName={this.props.pageName} user={this.props.user} title={this.props.title} menuItems={this.props.menuItems}>
                <div className="row">
                    <div className="columns">
                        
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Dashboard;