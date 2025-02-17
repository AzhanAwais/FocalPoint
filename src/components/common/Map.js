'use client'
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import worldjson from '../../map/world.json'
import australiajson from '../../map/australia.json'

const Map = () => {
    const [geoJsonData, setGeoJsonData] = useState(null);
    const highlightedCountries = ['Canada', 'Egypt', 'Saudi Arabia', 'Pakistan']

    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.name) {
            layer.on('mouseover', () => {
                if (highlightedCountries.includes(feature.properties.name)) {
                    layer.bindPopup(`<b>${feature.properties.name}</b>`, { closeButton: false }).openPopup();
                }
            });

            layer.on('mouseout', () => {
                layer.closePopup();
            });
        }
    };

    const getCountryStyle = (feature) => {
        const countryColors = highlightedCountries.reduce((acc, country) => {
            acc[country] = '#725D80'; 
            return acc;
        }, {});

        return {
            fillColor: countryColors[feature.properties.name] || '#CABDE1', // Default color if not specified
            color: 'white', // Border color
            weight: 1,
            fillOpacity: 0.8,
        };
    };

    useEffect(() => {
        // Fetch both GeoJSON files and combine them
        const fetchGeoJSON = async () => {
            // Combine both GeoJSON datasets
            const combinedGeoJSON = {
                type: "FeatureCollection",
                features: [
                    ...worldjson.features,
                    ...australiajson.features,
                ],
            };

            setGeoJsonData(combinedGeoJSON);
        };

        fetchGeoJSON();
    }, []);

    return (
        <MapContainer
            className='bg-transparent'
            style={{ height: "100vh", width: "100%" }}
            center={[40.2744, 22.5]} // Adjust longitude to move left (was 133.7751)
            zoom={2}
            zoomControl={false} // Remove zoom controls
            scrollWheelZoom={false} // Disable zooming with the scroll wheel
            dragging={false} // Allow dragging
            doubleClickZoom={false} // Disable double-click zooming
            attributionControl={false} // Remove attribution
        >
            {/* Add OpenStreetMap tiles */}
            {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            /> */}
            {/* Render GeoJSON data */}
            {geoJsonData && <GeoJSON style={getCountryStyle} data={geoJsonData} onEachFeature={onEachFeature} />}
        </MapContainer>
    );
};

export default Map;
