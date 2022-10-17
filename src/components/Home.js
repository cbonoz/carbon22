import React, {useState, useEffect} from 'react'
import { Graticule } from 'react-simple-maps'
import { getForecastForRegions } from '../api'
import { CarbonMap } from './CarbonMap'
import { Button, Drawer, Space } from 'antd';
import { APP_NAME } from '../constants/constants';

export const Home = () => {
    const [results, setResults] = useState()
    const [loading, setLoading] = useState(false)
    const [regions, setRegions] = useState()
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

    return  <div>
        <CarbonMap/>
        <Drawer
        title={APP_NAME}
        placement="right"
        size={'large'}
        onClose={() => setShowDrawer(false)}
        open={() => setShowDrawer(true)}
        extra={
          <Space>
            <Button type="secondary" onClick={() => setShowDrawer(false)}>Close</Button>
          </Space>
        }
      >
        <p>Test</p>

        </Drawer>
    </div>

}