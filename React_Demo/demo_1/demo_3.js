var MessageBox=React.createClass({
    getInitialState:function(){
      return {
        isVisible:true,
        titleMessage:"你好世界(来着state哦)",
      };
    },
    render:function() {
        var styleOjb={
            display:this.state.isVisible?"block":"none",

        };
        return (
            <div>
                <h1 style={styleOjb}>{this.state.titleMessage}</h1>
            </div>
        )
    }
});

var SubMessage=React.createClass({
    render:function() {
        return (
            <p>写代码真有意识 <Footer/></p>
        )
    }
});

var Footer=React.createClass({
    render:function() {
        return (<small>lalalala</small>)
    }
});
var Mesasge=React.render(
    <MessageBox />,
    document.getElementById("example"),
    function () {
        console.log("渲染完成了");
    }
);