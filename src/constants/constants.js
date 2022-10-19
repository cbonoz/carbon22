export const APP_NAME = 'CarbonOracle'
export const APP_DESC = 'Carbon footprint optimization for developers'

export const DURATION_OPTIONS = [
    15,
    30,
    60,
    120
]

const hostname = window.location.hostname
export const IS_LOCAL = hostname.indexOf("localhost") !== -1