import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import MediaQuery from 'react-responsive';

let center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

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
      data: [30.836, 30.789, 30.694, 30.6, 30.528, 30.422, 30.349]
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
      data: [30.94, 30.901, 30.807, 30.72, 30.652, 30.572, 30.49]
    }
  ]
};

class CusChart extends Component {
  render() {
    return (
      <div style={center}>
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
    );
  }
}

export default CusChart;
