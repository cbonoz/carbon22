import React from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Marker, ZoomableGroup } from "react-simple-maps"
import { REGION_MARKERS } from '../constants/regions'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const CarbonMap = ({activeRegions}) => {
    // const regionSet = new Set(activeRegions.map(x => x.name))
    const regionSet = new Set((Array.isArray(activeRegions) ? activeRegions : []).map(x => x.value))
    console.log('regionSet', regionSet)

    // For rendering order.
    const sortedMarkers = REGION_MARKERS.sort(x => regionSet.has(x.name) ? 1 : -1)

    return <div>
      {/* <p>Hello: {JSON.stringify(activeRegions)}</p> */}
      <ComposableMap  projectionConfig={{ scale: 150 }}>
    <ZoomableGroup center={[0, 0]} zoom={1}>
    <Graticule stroke="#F53" />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography 
          fill={"#EAEAEC"}
          stroke="#D6D6DA"
          key={geo.rsmKey} 
          geography={geo} />
        ))
      }
    </Geographies>
    {sortedMarkers.map(({ name, displayName, coordinates, markerOffset }) => {
        const selected = regionSet.has(name)
        const markerColor = selected ? '#F00' : '#DDD';

        return <Marker key={displayName} coordinates={coordinates}>
          <circle r={12} fill={markerColor} stroke="#fff" strokeWidth={2}/>
          {/* <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text> */}
        </Marker>}
      )}
      </ZoomableGroup>
  </ComposableMap>
</div>


}