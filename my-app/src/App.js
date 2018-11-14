import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactJson from 'react-json-view'
import { Tabs, Button, Select, Switch, Icon, InputNumber } from 'antd';
import CusTable from "./components/CusTable";
import { fetchCurrency, submitValue } from './actions/currencyAction'
import './App.scss';

const { TabPane } = Tabs;
const { Option } = Select;


let expectTree = {
  'USD': {
    "買進": 29,
    "賣出": 31
  },
  'AUD': {
    "買進": 21,
    "賣出": 23
  },
  'JPY': {
    "買進": 0.25,
    "賣出": 0.28
  },
  'ZAR': {
    "買進": 2.0,
    "賣出": 2.3
  },
  'CNY': {
    "買進": 4.3,
    "賣出": 4.7
  },
}

class App extends Component {
  state = {
    twd: 100,
    forex: 100,
    status: true,
    defaultday: 'day_10'
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrency);
  }

  render() {
    const { loading, currencys: dataSource } = this.props;

    return (
      <div className="wrapper">
        <header className="header">
          <div className="block">
            <h4><Icon type="dollar" theme="twoTone" twoToneColor="#d48806" />&nbsp;&nbsp;設定金額</h4>
            <Switch checkedChildren="即期" unCheckedChildren="現金"
              defaultChecked style={{ marginBottom: "20px" }}
              onChange={checked => { this.setState({ status: checked }) }} />
            <br />
            <InputNumber style={{ marginBottom: "20px", width: "100%" }}
              min={1} max={1000000} step={100} defaultValue={this.state.twd}
              formatter={value => `台幣 $ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={value => value.replace(/\$\s?|(,*)/g, "").replace(/台幣\s?|(,*)/g, "")}
              onChange={value => { this.setState({ twd: value }); }} />
            <p><small>Ex : 台幣 $ 100 可換 US$ 3.3 美元</small></p>
            <InputNumber
              style={{ marginBottom: "20px", width: "100%" }}
              min={1} max={1000000} step={100} defaultValue={this.state.forex}
              formatter={value => `外幣 $ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={value => value.replace(/\$\s?|(,*)/g, "").replace(/外幣\s?|(,*)/g, "")}
              onChange={value => { this.setState({ forex: value }); }} />
            <p><small>Ex : 美元 US$ 100 可換 $ 3000 台幣</small></p>
            <Button type="dashed" onClick={() => { this.props.dispatch(submitValue(this.state)) }}>計算</Button>
          </div>
          <div className="block">
            <h4><Icon type="pound" style={{ color: "#d48806" }} />&nbsp;&nbsp;設定遠期天數差</h4>
            <Select defaultValue={this.state.defaultday} style={{ width: "100%" }}
              onChange={(value) => { this.setState({ defaultday: value }); }}>
              <Option value="day_10">10天</Option>
              <Option value="day_30">30天</Option>
              <Option value="day_60">60天</Option>
              <Option value="day_90">90天</Option>
              <Option value="day_120">120天</Option>
              <Option value="day_150">150天</Option>
              <Option value="day_180">180天</Option>
            </Select>
          </div>
          <div className="block" style={{ maxHeight: "250px" }}>
            <h4><Icon type="euro" theme="twoTone" twoToneColor="#d48806" />&nbsp;&nbsp;設定期望值</h4>
            <p>
              <small>Ex : 期望銀行美元兌台幣 1：29 買進</small>
              <br />
              <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期望銀行美元兌台幣 1：31 賣出</small>
            </p>
            <ReactJson src={expectTree} name={false}
              displayDataTypes={false} displayObjectSize={false}
              onEdit={true} collapsed={1} />
          </div>
        </header>
        <section className="section">
          <Tabs defaultActiveKey="0">
            <TabPane tab={<span><Icon type="pay-circle-o" />即時匯率</span>} key="0">
              <CusTable loading={loading} dataSource={dataSource} defaultday={this.state.defaultday} />
            </TabPane>
            <TabPane tab={<span><Icon type="line-chart" />走勢分析</span>} key="1">
            </TabPane>
          </Tabs>
        </section>
        {/* <footer className="footer">
          <p>
            <small>
              Hosted on GitHub Pages
              <br />
              — Base by <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a>
              <br />
              — Base Design by <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">Ant Design</a>
            </small>
          </p>
        </footer> */}
      </div >
    );
  }
}

const mapStateToProps = ({ currencyFetch }) => ({
  currencys: currencyFetch.items,
  loading: currencyFetch.loading,
  error: currencyFetch.error
});

export default connect(mapStateToProps)(App);
