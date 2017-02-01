var React = require('react');
var Navigation = require('../shared/nav');
var HeadContent = require('../shared/head');
var TopBar = require('../shared/topbar');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <HeadContent title={this.props.title} />
                <body>
                    <Navigation user={this.props.user} menuItems={this.props.menuItems} />
                    <div className="off-canvas-content" data-off-canvas-content>
                        <TopBar pageName={this.props.pageName} user={this.props.user} />
                        <main>
                            <div className="row">
                                <div className="columns">
                                    {this.props.flash}
                                </div>
                            </div>
                            {this.props.children}
                        </main>
                        <footer>

                        </footer>
                    </div>
                    <script dangerouslySetInnerHTML={{__html: '$(document).foundation();'}}></script>
                </body>
            </html>
            );
    }
}

module.exports = DefaultLayout;