var messageBox=function(){
    //留言板
    var MessageInput=React.createClass({
        getInitialState:function() {
            return {datas:[]}
        },
        clickHandle:function() {
          var userName=this.refs.username.getDOMNode().value;
          var contentStr=this.refs.content.getDOMNode().value;//React.findDOMNode(this.refs.content).value;
         this.state.datas.push({
              username:userName,
              content:contentStr
          });
          this.setState({
              datas:this.state.datas
          });
        },
        componentWillMount:function () {
            if(this.state.datas.length<=0){
                this.state.datas.push({
                    username:"BBB",
                    content:"楼主"
                });
            }
        },
        render:function() {
            return(
            <div>
                <div>{this.props.title}:{this.props.desc}</div>
                <textarea ref="content"></textarea>
                <div>
                    <input ref="username" type="text" />
                </div>
                <div>
                    <input type="button" onClick={this.clickHandle} value="提交"/>
                </div>
                <div>
                   <MessageList datas={this.state.datas}/>
                </div>
            </div>
            );
        },
        componentDidMount:function(p1,p2) {
            console.log("componentDidMount:"+this.getDOMNode().innerHTML);
        },
        componentWillReceiveProps:function(nextProps) {
            //console.log(nextProps);
        },componentWillUpdate:function(nextprops,nextState) {
            if(nextState.datas.length==4){
                nextState.datas.push({username:"系统",content:"禁止继续发言"});
            }
            if(nextState.datas.length>5){
               nextState.datas.pop()
            }
        }
    });
    //留言块
    var MessageList=React.createClass({
        messageItem:function(datas) {
            var itemHtmls=datas.map(function(dataItem) {
                return (
                <li>
                    <span>用户：{dataItem.username}</span>
                    <span>:</span>
                    <span>留言：{dataItem.content}</span>
                </li>
                );
            })
            return itemHtmls;
        },
        render:function () {
            var datas=this.props.datas;
            var datasCount=datas.length;
            return(
               <ul> 
                <li>
                    <span>总数：{datasCount}</span>
                </li>
                {this.messageItem(datas)}
               </ul>
            );
        },
        componentWillReceiveProps:function(nextProps) {
            console.log("-----------------[componentWillReceiveProps start]----------------------");
            if(nextProps.datas && nextProps.datas.length>0){
                for (var i = 0; i < nextProps.datas.length; i++) {
                    var element = nextProps.datas[i];
                    if(element.username=="BBB"){
                        console.log("修改BBB=B你妹");
                        element.username="B你妹";
                    }
                }
            }
            console.log("-----------------[componentWillReceiveProps end]----------------------");
        },
        shouldComponentUpdate:function(nextprops,nextState){
            console.log("-----------------[shouldComponentUpdate start]----------------------");
            console.log("nextprops：");
            console.log(nextprops);
            console.log("nextState：");
            console.log(nextState);
            if(nextprops.datas.length>5){
                console.log("props 达到极限！！！5个");
                return false;
            }
            console.log("-----------------[shouldComponentUpdate end]----------------------");
            return true;
        }
    });
    //初始化
    this.init=function () {
        var props={title:"留言组件",desc:"YYQ的测试"};
        React.render(
            <MessageInput {...props}/>,
            document.getElementById("example"),
            function() {
                console.log("渲染完成！！");
            }
        );
    }
}
new messageBox().init();