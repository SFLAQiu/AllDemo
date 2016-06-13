var MessageBox=React.createClass({
    getInitialState:function(){
      return {
        count:0,
      };
    },
    addCount:function(){
        this.setState({count:++this.state.count});
    },
    render:function() {
        return (
            <div>
                <p>点我</p>
                <p>你一共点击了{this.state.count}</p>
                <a href="javascript:;" onClick={this.addCount}>点击我</a>
            </div>
        )
    }
});

React.render(
    <MessageBox />,
    document.getElementById("example"),
    function () {
        console.log("渲染完成了");
    }
);