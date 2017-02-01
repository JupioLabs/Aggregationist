var React = require('react');

function getSafeName(user) {
    if (typeof user === "undefined") {
        return "[Logged Out]";
    }
    else {
        return `${user.firstName} ${user.lastName}`;
    }
}

class TopBar extends React.Component {
    render() {
        
        return (
            <nav>
                <div className="top-bar">
                    <div className="row align-middle">
                        <div className="columns shrink">
                            <a href="/" className="topbar-logo">
                                
                            </a>
                        </div>
                        <div className="columns">
                            <h5>{this.props.pageName}</h5>
                        </div>
                        <div className="columns shrink">
                            <span>{getSafeName(this.props.user)}</span>
                        </div>
                    </div>
                </div>
            </nav>    
        );
    }
}

module.exports = TopBar;