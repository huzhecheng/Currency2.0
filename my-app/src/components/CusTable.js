import React, { Component } from 'react';
import { connect } from "react-redux";
import { Table } from 'antd';
import CountUp from "react-countup";
import '../styles/CusTable.scss';

const { Column, ColumnGroup } = Table;

class CusTable extends Component {
  render() {
    const { loading, dataSource, forex, twd, status } = this.props;
    console.log(this.props)
    return (
      <div>
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
              key="cashbuy" width={150} align="center" />
            <Column title="銀行賣出" dataIndex="cashsell"
              key="cashsell" width={150} align="center" />
          </ColumnGroup>
          <ColumnGroup title="即期匯率">
            <Column title="銀行買入" dataIndex="datebuy"
              key="datebuy" width={150} align="center" />
            <Column title="銀行賣出" dataIndex="datesell"
              key="datesell" width={150} align="center" />
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
      </div>
    )
  }
}

const mapStateToProps = ({ submitValue }) => ({
  forex: submitValue.forex,
  twd: submitValue.twd,
  status: submitValue.status
});

export default connect(mapStateToProps)(CusTable);
