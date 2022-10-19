import axios from 'axios'
import qs from 'qs'
import {MD5} from 'crypto-js'
import { formatDate } from '../util'
import { IS_LOCAL } from '../constants/constants'

// const BASE_URL = 'https://grnsft.org/hack22/api'

const baseURL = IS_LOCAL ? 'http://localhost:3001' : 'https://carbon-aware-api.azurewebsites.net'
const PROXY_URL = 'https://http-proxy.fly.dev/proxy'

// https://carbon-aware-api.azurewebsites.net/swagger/index.html

export const getForecastForRegions = (location, windowSize, dataStartAt, dataEndAt) => {
    const params = {
        location,
        dataStartAt,
        windowSize,
        dataEndAt
    }
    const paramString = qs.stringify(params, {arrayFormat: 'repeat'})
    const url =`${baseURL}/emissions/forecasts/current?${paramString}`
    console.log('getForecast', url, params)
    if (IS_LOCAL) {
        return axios.get(url)
    }
    return axios.post(PROXY_URL, {
        url,
        type: 'GET',
        hash: MD5(window.location.origin).toString()
    })
}
// [{"generatedAt":"2022-10-18T20:50:00+00:00","requestedAt":"2022-10-18T20:51:54.8377929+00:00","location":"eastus","dataStartAt":"2022-10-18T20:55:00+00:00","dataEndAt":"2022-10-19T20:55:00+00:00","windowSize":5,"optimalDataPoints":[{"location":"PJM_ROANOKE","timestamp":"2022-10-19T09:55:00+00:00","duration":5,"value":538.9647994546058}],"forecastData":[...]},]
export const processForecastData = (data, regionNames) => {
    const results = []
    data.forEach((d, i) => {
        const location = regionNames[i];
        const forecastData = d.forecastData.map(x => ({...x, location}))
        results.push(forecastData);
    })
    
    return results.flat().map(x => ({...x, timestamp: formatDate(x.timestamp)}))
}

