var React = require('react');
var DefaultLayout = require('../layouts/default');

class UsersIndex extends React.Component {
    render() {
        return (
            <DefaultLayout pageName={this.props.pageName} user={this.props.user} title={this.props.title} menuItems={this.props.menuItems}>
                <div className="row">
                    <div className="columns" id="users-react-mount">
                        
                    </div>
                </div>
                <script type="text/javascript" src="/js/app/dist/userList.js"></script>
            </DefaultLayout>
        );
    }
}

module.exports = UsersIndex;