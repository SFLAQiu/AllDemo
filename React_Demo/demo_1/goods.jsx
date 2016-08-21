var GoodsItems = React.createClass({
    getInitialState: function () {
        return {};
    },
    goodsHtml: function (datas) {
        if (!datas) return;
        var html = datas.map(function (proInfo) {
            if (!proInfo) return;
            return (
                <li className="list-pro">
                    <a href="javascript:;" class="link-box">
                        <span className="left_box">
                            <img src={proInfo.ImageUrl+'!240.240'} alt="" className="ui-imglazyload"/>
                            <label htmlFor="">
                                <em>今日</em>
                            </label>
                        </span>
                        <span className="right_box">
                            <span className="goods_title">
                                <i>{proInfo.Title}</i>
                            </span>
                            <span className="price_box">
                                <s>{proInfo.OriginalPrice}</s>
                                <br/>
                                <strong>
                                    <em>¥</em>
                                    {proInfo.PresentPrice.toFixed(2).replace(/0$/, '').replace(/\.0$/, '') }
                                </strong>
                            </span>
                        </span>
                        <div>
                            <img src="http://image.fanhuan.com/chaogaofan_mall/taobao_2.png" alt=""/>
                            <br/>
                            <span className="num_buyed">{proInfo.SellCount}人抢购</span>
                        </div>
                    </a>
                </li>);
        });
        return html;
    },
    componentDidMount: function () {},
    render: function () {
        return (
            <ul id="good_main" className="wf_col">
                {this.goodsHtml(this.props.datas) }
            </ul>
        );
    }
});

var Goods = React.createClass({
    getInitialState: function () {
        return {
            goods: [],
            pageIdex: 1,
            loading: false
        };
    },
    loadData: function (pageIndex) {
        var _this = this;
        $.getJSON("http://gw.fanhuan.com/zhi/GetJiuJiuProducts?fps=10&ps=30&p=" + pageIndex + "&cid=-1&callback=?", function (result) {
            if (!result || result.code != "100" || !result.rt) return;
            _this.setState({
                goods: _this.state.goods.concat(result.rt),
                loading:false
            });
        });
    },
    handleScroll: function () {
        var sTop = window.scrollY;
        var loadHeight = window.innerHeight + sTop + 100;
        var height = document.getElementById("good_main").offsetHeight;
        if (loadHeight > height) {
            if (this.state.loading) return;
            this.setState({ pageIdex: this.state.pageIdex + 1,loading: true });
            this.loadData(this.state.pageIdex);
            console.log("翻页");
            
        }
    },
    componentDidMount: function () {
        this.loadData(1);
        document.addEventListener('scroll', this.handleScroll);
    },
    render: function () {
        return (
            <GoodsItems ref="aaaa" datas={this.state.goods}/>
        );
    }
});

React.render(<Goods/>, document.getElementById("good_box"));