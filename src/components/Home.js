import React, {useState, } from 'react'
import { getForecastForRegions, } from '../api'
import { CarbonMap } from './CarbonMap'
import { Button, notification, Drawer, Space, Select, Spin, Row, Col } from 'antd';
import { APP_NAME, DURATION_OPTIONS, IS_LOCAL } from '../constants/constants';
import { CarbonChart } from './CarbonChart';
import { AZURE_REGIONS } from '../constants/regions';
const { Option } = Select;

export const Home = () => {
    const [chartData, setChartData] = useState()
    const [loading, setLoading] = useState(false)
    const [regions, setRegions] = useState([])
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [duration, setDuration] = useState(15)
    const [error, setError] = useState()
    const [showDrawer, setShowDrawer] = useState(false)


    async function getForecasts() {
        const regionValues = regions.map(x => x.value)
        setLoading(true)
        setError(undefined)
        try {
            let {data} = await getForecastForRegions(regionValues, duration, start, end)
            console.log('forecast', data)
            setChartData(data)
        } catch (e) {
            setError(e)
            const msg = e.response.data.detail
            console.error('error getting forecast', e)
            setError(`Error getting forecast (${msg}). One or more of your selected regions may be temporarily unsupported.`)
            notification.error({
              message: `Error getting forecast`,
              description:`One or more of your selected regions may be temporarily unsupported (${msg})`,
              placement: 'top',
            });
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (value) => {
        // console.log(`Selected: ${JSON.stringify(value)}`);
        setRegions(value)
      };

    const close = () => {
      setShowDrawer(false)
      setChartData(undefined)
    }

    return  <div className='home-section'>
      <Row className='home-section'>
        <Col span={12}>
        <div className='prompt-section'>
          <p>I have a <a href="https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs" target="_blank"><b>job</b></a> that runs on&nbsp;
          <Select disabled defaultValue="Azure" style={{ width: 120 }} />
          &nbsp;
          </p>

          <p>that should take about <Select value={duration} onChange={e => setDuration(e)}>
            {DURATION_OPTIONS.map((d, i) => {
              return <Option key={d} value={d}>{d} minutes</Option>
            })}
            </Select></p>
        <p>and could run in the following regions:</p>
        <Select
              labelInValue="test"
        mode="multiple"
        size={'large'}
        placeholder="Select regions of interest"
        value={regions}
        
        onChange={handleChange}
        style={{
            width: '80%',
          }}
      >
        {AZURE_REGIONS.map((r, i) => {
            return <Option
                key={r.name}>{r.displayName}</Option>
        })}
      </Select>&nbsp;
      </div>
      <div>
            <Button className='standard-btn' size="large" type="primary" disabled={regions.length === 0} onClick={() => setShowDrawer(true)}>
              Predict
            </Button>
          &nbsp;
            <Button type="secondary" className='standard-btn' size="large" disabled={regions.length === 0} onClick={() => setRegions([])}>
              Clear
            </Button>
      </div>
        </Col>
        <Col span={12}>
        <CarbonMap
            activeRegions={regions}
        />
        </Col>
      </Row>
           
      
        <Drawer
        title={`${APP_NAME} Job Analysis`}
        mask={true}
        placement="right"
        size={'large'}
        afterOpenChange={(open) => {
            if (open) {
                getForecasts()
            }
        }}
        destroyOnClose
        closable
        onClose={close}
        open={showDrawer}
        extra={
          <Space>
            <Button type="secondary" onClick={() => {
              close()
            }}>Close</Button>
          </Space>
        }
      >
        {loading && <Spin/>}
        {!loading && chartData && <CarbonChart data={chartData} activeRegions={regions} duration={duration}/>}
        {error && <p className='error-text'>{error}</p>}
        </Drawer>
    </div>

}