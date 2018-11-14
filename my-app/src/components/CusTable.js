import React, { Component } from 'react';
import { connect } from "react-redux";
import { Table, Icon } from 'antd';
import CountUp from "react-countup";
import '../styles/CusTable.scss';

const { Column, ColumnGroup } = Table;

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

const renderBuyColumn = (recentArray, value, prop, defaultday) => {
  if (!recentArray.length || value === 0) {
    return <span>{value}</span>;
  }
  let obj = recentArray.find(x => x.key === prop.country);
  let differ = (value - obj[defaultday]["買入"]).toFixed(4);
  return differ > 0 ? (<CaretUp value={value} differ={Math.abs(differ)} />) : (<CaretDown value={value} differ={Math.abs(differ)} />);
}

const renderSellColumn = (recentArray, value, prop, defaultday) => {
  if (!recentArray.length || value === 0) {
    return <span>{value}</span>;
  }
  let obj = recentArray.find(x => x.key === prop.country);
  let differ = (value - obj[defaultday]["賣出"]).toFixed(4);
  return differ > 0 ? (<CaretDown value={value} differ={Math.abs(differ)} />) : (<CaretUp value={value} differ={Math.abs(differ)} />);
}

class CusTable extends Component {
  render() {
    const { loading, dataSource, forex, twd, status, defaultday } = this.props;
    let recentArray = dataSource.map((v) => {
      let obj = {
        'key': v.country,
        'day_10': v.recent[0],
        'day_30': v.recent[1],
        'day_60': v.recent[2],
        'day_90': v.recent[3],
        'day_120': v.recent[4],
        'day_150': v.recent[5],
        'day_180': v.recent[6],
      };
      return obj;
    });

    console.log(recentArray)
    return (
      <Table
        scroll={{ x: 1100, y: 570 }}
        dataSource={dataSource}
        loading={loading}
        rowKey={x => x.country}
        pagination={false}>
        <Column title="幣別" dataIndex="icon"
          key="icon" fixed="left" align="center" width={100}
          render={(value, prop) => (<img src={value} alt={prop.country} />)} />
        <ColumnGroup title="現金匯率">
          <Column title="銀行買入" dataIndex="cashbuy"
            key="cashbuy" width={150} align="center"
            render={(value, prop) => { return renderBuyColumn(recentArray, value, prop, defaultday) }} />
          <Column title="銀行賣出" dataIndex="cashsell"
            key="cashsell" width={150} align="center"
            render={(value, prop) => { return renderSellColumn(recentArray, value, prop, defaultday) }} />
        </ColumnGroup>
        <ColumnGroup title="即期匯率">
          <Column title="銀行買入" dataIndex="datebuy"
            key="datebuy" width={150} align="center"
            render={(value, prop) => { return renderBuyColumn(recentArray, value, prop, defaultday) }} />
          <Column title="銀行賣出" dataIndex="datesell"
            key="datesell" width={150} align="center"
            render={(value, prop) => { return renderSellColumn(recentArray, value, prop, defaultday) }} />
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
