import React, { Component } from 'react';
import { Chart, Line, Scale, Guide ,ScrollBar} from 'f2reactize';


const data = [
  {
    "reportDateTimestamp": 1529856000000,
    "codeType": "INDEX_CODE",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1529942400000,
    "codeType": "INDEX_CODE",
    "rate": 0.0082
  },
  {
    "reportDateTimestamp": 1530028800000,
    "codeType": "INDEX_CODE",
    "rate": 0.0284
  },
  {
    "reportDateTimestamp": 1530115200000,
    "codeType": "INDEX_CODE",
    "rate": -0.0385
  },
  {
    "reportDateTimestamp": 1530201600000,
    "codeType": "INDEX_CODE",
    "rate": -0.0139
  },
  {
    "reportDateTimestamp": 1530460800000,
    "codeType": "INDEX_CODE",
    "rate": -0.0428
  },
  {
    "reportDateTimestamp": 1530547200000,
    "codeType": "INDEX_CODE",
    "rate": 0.0425
  },
  {
    "reportDateTimestamp": 1529856000000,
    "codeType": "PRODUCT_ID",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1529942400000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0075
  },
  {
    "reportDateTimestamp": 1530028800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0264
  },
  {
    "reportDateTimestamp": 1530115200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0355
  },
  {
    "reportDateTimestamp": 1530201600000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0113
  },
  {
    "reportDateTimestamp": 1530460800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0383
  },
  {
    "reportDateTimestamp": 1530547200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0377
  },
  {
    "reportDateTimestamp": 1549856000000,
    "codeType": "INDEX_CODE",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1559942400000,
    "codeType": "INDEX_CODE",
    "rate": 0.0082
  },
  {
    "reportDateTimestamp": 1560028800000,
    "codeType": "INDEX_CODE",
    "rate": 0.0284
  },
  {
    "reportDateTimestamp": 1570115200000,
    "codeType": "INDEX_CODE",
    "rate": -0.0385
  },
  {
    "reportDateTimestamp": 1580201600000,
    "codeType": "INDEX_CODE",
    "rate": -0.0139
  },
  {
    "reportDateTimestamp": 1590460800000,
    "codeType": "INDEX_CODE",
    "rate": -0.0428
  },
  {
    "reportDateTimestamp": 1600547200000,
    "codeType": "INDEX_CODE",
    "rate": 0.0425
  },
  {
    "reportDateTimestamp": 1619856000000,
    "codeType": "PRODUCT_ID",
    "rate": 0
  },
  {
    "reportDateTimestamp": 1629942400000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0075
  },
  {
    "reportDateTimestamp": 1630028800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0264
  },
  {
    "reportDateTimestamp": 1640115200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0355
  },
  {
    "reportDateTimestamp": 1650201600000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0113
  },
  {
    "reportDateTimestamp": 1660460800000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0383
  },
  {
    "reportDateTimestamp": 1670547200000,
    "codeType": "PRODUCT_ID",
    "rate": -0.0377
  }
]


class LineDemo extends Component {
  render() {
    return (
      <div>
        <Chart source={data} width="400" height="200" pixelRatio={window.devicePixelRatio}>
          <Line position="reportDateTimestamp*rate" color="codeType"/>
          <Scale field="reportDateTimestamp" range={[0, 1]} tickCount={3} type="timeCat" mask="MM-DD" />
          <Scale field="rate" tickCount={5} formatter={(rate) => `${(rate*100).toFixed(2)}%`} />
          <Guide type="tag" position={[1530028800000, 0.0284]} content="买入" />
          <ScrollBar mode="reportDateTimestamp"       xStyle={ {
            backgroundColor: '#e8e8e8',
            fillerColor: '#808080',
            offsetY: -2
          }} />
        </Chart>
      </div>
    );
  }
}

export default LineDemo;
