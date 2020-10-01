import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "./index.css";
import { showDataOnMap } from "./../../utils";

function Map({ center, zoom, countries, casesType }) {
    return (
        <div className="map" data-test="map">
            <LeafletMap center={center} zoom={zoom} data-test="map__leafletmap">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenstreetMap<a/> contributors' />
                {/* Loop through and draw circles on the screen             */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
};


Map.propTypes = {
    casesType: PropTypes.string,
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    countries: PropTypes.array,
    zoom: PropTypes.number
};

export default Map
