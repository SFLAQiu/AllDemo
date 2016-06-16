var MessageBox=React.createClass({
    alertMe:function(){
        alert("点你妹");
    },
    render:function() {
        return (<h1 onClick={this.alertMe} >你好世界</h1>)
    }
});
React.render(
    <MessageBox />,
    document.getElementById("example"),
    function () {
        console.log("渲染完成了");
    }
);