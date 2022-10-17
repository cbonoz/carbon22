import React from "react";
import { Area, Line } from '@ant-design/charts';
import { DEMO_DATA } from "../constants/forecast";


export const CarbonChart = ({data}) => {
    const config = {
        data: data || DEMO_DATA,
        height: 400,
        xField: 'timestamp',
        yField: 'value',
        xAxis: {
            range: [0, 1],
            tickCount: 5,
          },
          areaStyle: () => {
            return {
              fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
          },
          // https://charts.ant.design/zh/examples/component/annotation#region-and-data-marker
          annotations: [
            {
                type: 'region',
                start: ['2022-10-17T22:20:00+00:00', 'min'],
                end: ['2022-10-17T22:45:00+00:00', 'max'],
              },
          ]

      };

    // https://charts.ant.design/en/docs/manual/getting-started
    return <div>
        <Area {...config}/>
    </div>
}