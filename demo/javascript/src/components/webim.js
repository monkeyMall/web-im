var React = require("react");
var ReactDOM = require('react-dom');
var SignIn = require('./sign/signin');
var SignUp = require('./sign/signup');
var Chat = require('./chat/chat');
var Loading = require('./common/loading');


module.exports = React.createClass({
    getInitialState: function () {

        return {
            signIn: true,
            signUp: false,
            chat: false,
            loadingStatus: false
        };
    },

	update: function ( state ) {
		this.setState({
			signIn: state.signIn,
			signUp: state.signUp,
			chat: state.chat,
			loadingStatus: state.loadingStatus,
			content: state.content,
			status: state.status
		});
	},

	loading: function ( status ) {
		this.setState({ loadingStatus: status });
	},

    render: function () {

        return (
            <div className='webim'>
                <img className={'webim-logo' + (!this.state.signIn && !this.state.signUp ? ' hide' : '')} src='demo/images/logo.png' />
                <SignIn show={this.state.signIn} {...this.props} update={this.update} loading={this.loading} />
                <SignUp show={this.state.signUp} {...this.props} update={this.update} loading={this.loading} />
                <Chat show={this.state.chat} {...this.props} update={this.update} loading={this.loading} close={this.props.close} />
                <Loading show={this.state.loadingStatus} />
            </div>
        );
    }
});