import React, {useState, useEffect} from 'react'
import { getForecastForRegions } from '../api'
import { CarbonMap } from './CarbonMap'
import { Button, Drawer, Space, Select } from 'antd';
import { APP_NAME } from '../constants/constants';
import { CarbonChart } from './CarbonChart';
import { AZURE_REGIONS } from '../constants/regions';
const { Option } = Select;

export const Home = () => {
    const [results, setResults] = useState()
    const [loading, setLoading] = useState(false)
    const [regions, setRegions] = useState([])
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [error, setError] = useState()
    const [showDrawer, setShowDrawer] = useState(false)


    async function getForecasts() {
        setError(false)
        setLoading(true)
        try {
            const {data} = await getForecastForRegions(regions, start, end)
            console.log('forecast', data)
            setResults(data)
        } catch (e) {
            setError(e)
            console.error('error getting forecast', e)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
        setRegions(value)
      };

    return  <div>
              <Select
        mode="multiple"
        size={'large'}
        placeholder="Please select"
        defaultValue={regions}
        
        onChange={handleChange}
        style={{
            width: '100%',
          }}
      >
        {AZURE_REGIONS.map((r, i) => {
            return <Option
                key={r.name}>{r.displayName}</Option>
        })}
      </Select>
      <Button type="primary" disabled={regions.length === 0} onClick={() => setShowDrawer(true)}>
        Predict
      </Button>
        <CarbonMap
            activeRegions={regions}
        />
        <Drawer
        title={APP_NAME}
        mask={false}
        placement="right"
        size={'large'}
        afterOpenChange={(open) => {
            if (open) {
                getForecasts()
            }
        }}
        destroyOnClose
        closable
        onClose={() => setShowDrawer(false)}
        open={showDrawer}
        extra={
          <Space>
            <Button type="secondary" onClick={() => setShowDrawer(false)}>Close</Button>
          </Space>
        }
      >
        {JSON.stringify(results || {})}
        <CarbonChart/>
        </Drawer>
    </div>

}