import axios from 'axios'
import qs from 'qs'

// const BASE_URL = 'https://grnsft.org/hack22/api'
const baseURL = 'https://carbon-aware-api.azurewebsites.net'

let carbonAxios = axios.create({
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
})

// https://carbon-aware-api.azurewebsites.net/swagger/index.html

export const getForecastForRegions = (location, dataStartAt, dataEndAt) => {
    const params = {
        location,
        dataStartAt,
        dataEndAt
    }
    const paramString = qs.stringify(params, {arrayFormat: 'repeat'})
    const url =`${baseURL}/emissions/forecasts/current?${paramString}`
    console.log('getForecast', url, params)
    return axios.get(url)
}
