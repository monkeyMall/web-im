var React = require("react");
var ReactDOM = require('react-dom');
var Avatar = require('../common/avatar');


var TextMsg = React.createClass({

    render: function () {
        var icon = this.props.className === 'left' ? 'H' : 'I';

        return (
            <div className={'rel ' + this.props.className}>
                <Avatar src={this.props.src} className={this.props.className} />
                <p className={this.props.className}>{this.props.name} {this.props.time}</p>
                <div className='webim-msg-value'>
                    <span className='webim-msg-icon font'>{icon}</span>
                    <pre dangerouslySetInnerHTML={{__html: this.props.value}}></pre>
                </div>
            </div>
        );
    }
});

module.exports = function ( options, sentByMe ) {
    var props = {
        src: options.avatar || 'demo/images/group_user.png',
        time: options.time || new Date().toLocaleDateString(),
        value: options.value || '',
        name: options.name
    };

    var node = document.createElement('div');
    node.className = 'webim-msg-container rel';
    options.wrapper.appendChild(node);

    return ReactDOM.render(
		<TextMsg {...props} className={sentByMe ? 'right' : 'left'} />,
	    node	
	);
};