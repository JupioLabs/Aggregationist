class UsersList extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this._fetchUsers();
    }

    _fetchUsers() {
        axios.get('/data/mock_data.json').then((response) => this.setState({
            users: response.data
        })).catch(error => console.log(error));
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-head">
                    <h5>Developer Portal Users</h5>
                </div>
                {this.state.users.map((user) => 
                    <div className="item-row">
                        <span>{`${user.devUserFirst} ${user.devUserLast} (`} <a href={`mailto:${user.devUserEmail}`}>{user.devUserEmail}</a>{`)`}</span>
                    </div>
                    )}
            </div>
        );
    }
}

ReactDOM.render(
    <UsersList />, document.getElementById('users-react-mount')
);