var React = require('react');

function renderMenu(menuItems, user) {
    return (
        <ul className="menu vertical" data-accordion-menu="">
        {
            menuItems.map((item) => {
                if (item.children.length > 0) {
                    if (item.viewable.indexOf((user && user.userType) || "anonymous") > -1) {
                        return (
                            <li>
                                <a href={item.url}>{item.name}</a>
                                <ul className="vertical menu nested">
                                    {renderMenu(item.children, user)}
                                </ul>
                            </li>
                        );
                    }
                }
                else {
                    if (item.viewable.indexOf((user && user.userType) || "anonymous") > -1) {
                        return (
                            <li><a href={item.url}>{item.name}</a></li>
                        );
                    }
                }
            })
        }
        </ul>
    );
}

class Navigation extends React.Component {
    render() {
        let menuItems = this.props.menuItems || [];
        return (
            <div className="off-canvas position-left reveal-for-medium" data- id="oc_MainNavigation" data-transition="overlap" data-off-canvas>
                {renderMenu(menuItems, this.props.user)}
            </div>
        );
    }
}

module.exports = Navigation;