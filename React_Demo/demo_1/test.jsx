var LoginBox=React.createClass({
    getInitialState:function() {
        return {
            Welcome:"你好！！~~",
            UserName:""
        }
    },
    login:function(){
        this.setState({UserName:this.refs.username.getDOMNode().value});
    },
    render:function(){

        return (
            <div>
                <div>用户名:<input type="text" ref="username"/></div>
                <div>密码:<input type="passport" ref="passport"/></div>
                <input type="button" onClick={this.login} value="登陆"/>
                <div ref="info">
                  <MessageBox datas={this.state} go="test"/>
                </div>
            </div>
        )
    },
});

var MessageBox=React.createClass({
     componentWillReceiveProps:function(nextProps) {
            console.log(nextProps);
    },
    render:function(){
        var datas=this.props.datas;
        return (
            <div>
               {datas.Welcome} {datas.UserName} {this.props.go}
            </div>
        );

    }
});

React.render(
    <LoginBox/>,
    document.getElementById("example")
)