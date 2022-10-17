import React from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Marker, ZoomableGroup } from "react-simple-maps"
import { REGION_MARKERS } from '../constants/regions'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const CarbonMap = (activeRegions, setActiveRegions) => {

    return <ComposableMap  projectionConfig={{ scale: 100 }}>>
    <ZoomableGroup center={[0, 0]} zoom={1}>

    <Graticule stroke="#F53" />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography 
          fill="#EAEAEC"
          stroke="#D6D6DA"
          key={geo.rsmKey} 
          geography={geo} />
        ))
      }
    </Geographies>
    {REGION_MARKERS.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
  </ComposableMap>


}