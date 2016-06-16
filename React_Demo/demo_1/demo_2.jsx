var MessageBox=React.createClass({
    render:function() {
        var sublist=[];
        for(var i=0;i<10;i++){
            sublist.push(<SubMessage key={"submessage"+i}/>);
        }
        return (
            <div>
                <h1>你好世界</h1>
                {sublist}
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
React.render(
    <MessageBox />,
    document.getElementById("example"),
    function () {
        console.log("渲染完成了");
    }
);