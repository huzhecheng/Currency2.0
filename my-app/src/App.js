import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tabs, Button, Switch, Icon, InputNumber } from 'antd';
import CusTable from "./components/CusTable";
import { fetchCurrency, submitValue } from './actions/currencyAction'
import './App.scss';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    twd: 100,
    forex: 100,
    status: true
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
            <h4><Icon type="euro" theme="twoTone" twoToneColor="#d48806" />&nbsp;&nbsp;設定期望值</h4>
          </div>
        </header>
        <section className="section">
          <Tabs defaultActiveKey="0">
            <TabPane tab={<span><Icon type="pay-circle-o" />即時匯率</span>} key="0">
              <CusTable loading={loading} dataSource={dataSource} />
            </TabPane>
            <TabPane tab={<span><Icon type="line-chart" />走勢分析</span>} key="1">
            </TabPane>
          </Tabs>
        </section>
        <footer className="footer">
          <p>
            <small>
              Hosted on GitHub Pages
              <br />
              — Base by <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a>
              <br />
              — Base Design by <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">Ant Design</a>
            </small>
          </p>
        </footer>
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
