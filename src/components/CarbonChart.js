import React from "react";
import { Area, Line } from '@ant-design/charts';
import { processForecastData } from "../api";
import { addMinutes, formatDate } from "../util";
import { Card } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";


export const CarbonChart = ({data, duration, activeRegions=[]}) => {
  const regionNames =activeRegions.map(x => x.label)

  const annotations = (data || []).map((x, i) => {
    return x.optimalDataPoints.map(pt => ({...pt, location: regionNames[i]}))
  }).flat().map(x => {
    const start = new Date(x.timestamp)
    return {
      ...x,
      type: 'region',
      start: [formatDate(start), 'min'],
      end: [formatDate(addMinutes(x.duration, start)), 'max']
    }
  })

  console.log('annotations', annotations)

    const config = {
        data: processForecastData(data || [], regionNames),
        height: 400,
        seriesField: 'location',
        xField: 'timestamp',
        yField: 'value',
        yAxis: {
          label: {
            formatter: (v) => `${v} gCO2/kWh`
          },
        },
        // xAxis: {
        //   label: {
        //     // rotate: ,
        //     // offset: 65
        //   }
        // },
        legend: {
          position: 'top',
        },
        smooth: true,
        animation: {
          appear: {
            animation: 'path-in',
            duration: 2000,
          },
        },
        // https://charts.ant.design/zh/examples/component/annotation#region-and-data-marker
        // annotations: [
        //   {
        //       type: 'region',
        //       start: ['2022-10-17T22:20:00+00:00', 'min'],
        //       end: ['2022-10-17T22:45:00+00:00', 'max'],
        //     },
        // ]
        annotations

      };

    // https://charts.ant.design/en/docs/manual/getting-started
    // https://charts.ant.design/en/examples/line/multiple#line-label
    return <div>
        <h1>Carbon Forecast</h1>
        <h3>Regions: {regionNames.join(',')}</h3>
        <span>Showing forecast for next 24 hours. Duration {duration} minutes. Best forecasted time windows highlighted below.</span>
        <Line {...config}/>
        <br/>
        <br/>
        <div className="site-card-border-less-wrapper">
          <h2>Results - lower score is better</h2>
        <p>Based on the selected regions, the following times would work best for your run:</p>
          {[...annotations].sort((a, b) => a.value > b.value ? 1 : -1).map((result, i) => {
            const title = <span>
              #{i+1} {result.location} ({result.value.toFixed(2)} gCO2/kWh)&nbsp;{i === 0 && <CheckCircleTwoTone twoToneColor="#52c41a" />}
            </span>
            return <span style={{display: 'inline-block'}} key={i}>
              <Card title={title} style={{ width: 300, margin: 10 }} key={i}>
              <b>Start:</b> {result.start[0]}<br/>
              <b>End:</b> {result.end[0]} <br/>
              <b>Duration:</b> {result.duration} minutes
            </Card>
          </span>
          })}
          </div>
    </div>
}