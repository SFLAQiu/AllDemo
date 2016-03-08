/// <reference path="build/React.js" />
var HelloMessage=React.createClass({
    render:function() {
        return <div>SB {this.props.name}</div>;
    }
});

React.render(
  <HelloMessage name="yyq"/>,
  document.getElementById('example')
);