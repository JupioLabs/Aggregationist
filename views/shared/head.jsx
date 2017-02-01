var React = require('react');

class HeaderContent extends React.Component {
    render() {
        return (
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="text/css" href="/css/fonts.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/main.min.css" />
                <script
                    src="https://code.jquery.com/jquery-3.1.1.min.js"
                    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                    crossOrigin="anonymous" />
                <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.js" />
                <script type="text/javascript" src="/js/axios.min.js" />
                <script type="text/javascript" src="/js/es6-promise.mauto.min.js" />
                <script type="text/javascript" src="/js/react.min.js" />
                <script type="text/javascript" src="/js/react-dom.min.js" />
            </head>
        );
    }
}

module.exports = HeaderContent;