var messageBox=function(){
    //留言板
    var MessageInput=React.createClass({
        getInitialState:function() {
            return {datas:[]}
        },
        clickHandle:function() {
          var userName=React.findDOMNode(this.refs.username).value;
          var contentStr=React.findDOMNode(this.refs.content).value;
         this.state.datas.push({
              username:userName,
              content:contentStr
          });
          this.setState({
              datas:this.state.datas
          });
        },
        render:function() {
            return(
            <div>
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
        }
    });
    //初始化
    this.init=function () {
        React.render(
            <MessageInput/>,
            document.getElementById("example"),
            function() {
                console.log("渲染完成！！");
            }
        );
    }
}
new messageBox().init();