"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_React$Component) {
    _inherits(UsersList, _React$Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        var _this = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this));

        _this.state = {
            users: []
        };
        return _this;
    }

    _createClass(UsersList, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._fetchUsers();
        }
    }, {
        key: "_fetchUsers",
        value: function _fetchUsers() {
            var _this2 = this;

            axios.get('/data/mock_data.json').then(function (response) {
                return _this2.setState({
                    users: response.data
                });
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "panel" },
                React.createElement(
                    "div",
                    { className: "panel-head" },
                    React.createElement(
                        "h5",
                        null,
                        "Developer Portal Users"
                    )
                ),
                this.state.users.map(function (user) {
                    return React.createElement(
                        "div",
                        { className: "item-row" },
                        React.createElement(
                            "span",
                            null,
                            user.devUserFirst + " " + user.devUserLast + " (",
                            " ",
                            React.createElement(
                                "a",
                                { href: "mailto:" + user.devUserEmail },
                                user.devUserEmail
                            ),
                            ")"
                        )
                    );
                })
            );
        }
    }]);

    return UsersList;
}(React.Component);

ReactDOM.render(React.createElement(UsersList, null), document.getElementById('users-react-mount'));