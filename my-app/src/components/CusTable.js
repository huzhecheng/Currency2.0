import React, { Component } from 'react';
import { connect } from "react-redux";
import { Table, Icon } from 'antd';
import CountUp from "react-countup";
import '../styles/CusTable.scss';

const { Column, ColumnGroup } = Table;

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

const CaretUp = ({ value, differ }) => {
  return (
    <div>
      {value}
      <span style={{ color: "red", fontSize: "12px", paddingLeft: "8px" }}>
        <Icon type="rise" />
      </span>
      <span style={{ color: "red", fontSize: "6px" }}> {differ}</span>
    </div>
  );
};

const CaretDown = ({ value, differ }) => {
  return (
    <div>
      {value}
      <span style={{ color: "green", fontSize: "12px", paddingLeft: "8px" }}>
        <Icon type="fall" />
      </span>
      <span style={{ color: "green", fontSize: "6px" }}> {differ}</span>
    </div>
  );
};

const renderBuyColumn = (value, prop) => {
  if (expectTree[prop.country] === undefined || value === 0) {
    return <span>{value}</span>;
  }
  let differ = (value - expectTree[prop.country]["賣出"]).toFixed(4);
  return differ > 0 ? (<CaretUp value={value} differ={Math.abs(differ)} />) : (<CaretDown value={value} differ={Math.abs(differ)} />);
}

const renderSellColumn = (value, prop) => {
  if (expectTree[prop.country] === undefined || value === 0) {
    return <span>{value}</span>;
  }
  let differ = (value - expectTree[prop.country]["買進"]).toFixed(4);
  return differ > 0 ? (<CaretDown value={value} differ={Math.abs(differ)} />) : (<CaretUp value={value} differ={Math.abs(differ)} />);
}

class CusTable extends Component {
  render() {
    const { loading, dataSource, forex, twd, status } = this.props;
    return (
      <Table
        scroll={{ x: 1100, y: 550 }}
        dataSource={dataSource}
        loading={loading}
        rowKey={x => x.country}
        pagination={false}>
        <Column title="幣別" dataIndex="icon"
          key="icon" fixed="left" align="center" width={110}
          render={(value, prop) => (<img src={value} alt={prop.country} />)} />
        <ColumnGroup title="現金匯率">
          <Column title="銀行買入" dataIndex="cashbuy"
            key="cashbuy" width={150} align="center"
            render={(value, prop) => { return renderBuyColumn(value, prop) }} />
          <Column title="銀行賣出" dataIndex="cashsell"
            key="cashsell" width={150} align="center"
            render={(value, prop) => { return renderSellColumn(value, prop) }} />
        </ColumnGroup>
        <ColumnGroup title="即期匯率">
          <Column title="銀行買入" dataIndex="datebuy"
            key="datebuy" width={150} align="center"
            render={(value, prop) => { return renderBuyColumn(value, prop) }} />
          <Column title="銀行賣出" dataIndex="datesell"
            key="datesell" width={150} align="center"
            render={(value, prop) => { return renderSellColumn(value, prop) }} />
        </ColumnGroup>
        <ColumnGroup title="匯率試算">
          <Column title="台幣換外幣" dataIndex="country"
            key="countrybuy" width={150} align="center"
            render={(country, prop) => {
              let value = (twd / parseFloat(status ? prop.datesell : prop.cashsell)).toFixed(2);
              return (
                <span>{prop.mark} {isFinite(value) ?
                  <CountUp
                    start={value / 10}
                    end={Number(value)}
                    duration={1.5}
                    separator={","}
                    decimals={2}
                    ref={countUp => { this.myCountUp = countUp; }} /> : (0.0).toFixed(2)}</span>)
            }} />
          <Column title="外幣換台幣" dataIndex="country"
            key="countrysell" width={150} align="center"
            render={(country, prop) => {
              let value = (forex * parseFloat(status ? prop.datebuy : prop.cashbuy)).toFixed(2);
              return (
                <span>NT$ {isFinite(value) ?
                  <CountUp
                    start={value / 10}
                    end={Number(value)}
                    duration={1.5}
                    separator={","}
                    decimals={2} /> : (0.0).toFixed(2)}</span>)
            }} />
        </ColumnGroup>
      </Table>
    )
  }
}

const mapStateToProps = ({ submitValue }) => ({
  forex: submitValue.forex,
  twd: submitValue.twd,
  status: submitValue.status
});

export default connect(mapStateToProps)(CusTable);
