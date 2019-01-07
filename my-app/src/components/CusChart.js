import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';
import '../styles/CusChart.scss';

const data = {
  labels: ['10天', '30天', '60天', '90天', '120天', '150天', '180天'],
  datasets: [
    {
      label: '買入',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: '賣出',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(161,67,242,0.4)',
      borderColor: 'rgba(161,67,242,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(161,67,242,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(161,67,242,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

class CusChart extends Component {
  render() {
    const { dataSource } = this.props;

    let icons = [];
    let chartdata = dataSource.map((v) => {
      icons.push(v.icon);
      let buy = [];
      let sell = [];
      v.recent.forEach((val) => {
        buy.push(val.買入);
        sell.push(val.賣出);
      });
      let obj = {
        key: v.country,
        buy: buy,
        sell: sell
      }
      return obj;
    });

    return (
      <div>
        <div className="icon-box">
          {icons.map((v, index) => {
            return <img style={{ padding: '0 10px' }} src={v} alt={index} key={index} />
          })}
        </div>
        <div className="chart-box">
          <MediaQuery query="(min-width: 768px)">
            <Line data={data} width={720}
              height={360}
              options={{
                maintainAspectRatio: false,
                responsive: false
              }} />
          </MediaQuery>
          <MediaQuery query="(max-width: 767px)">
            <Line data={data} width={720}
              height={360} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default CusChart;
