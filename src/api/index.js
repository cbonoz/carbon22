import axios from 'axios'

const BASE_URL = 'https://grnsft.org/hack22/api'

// https://carbon-aware-api.azurewebsites.net/swagger/index.html

export const getForecastForRegions = (regions, dataStartAt, dataEndAt) => {
    const params = {
        regions,
        dataStartAt,
        dataEndAt
    }
    const url =`${BASE_URL}/emissions/forecasts/current`
    return axios.get(url, { params });
}
