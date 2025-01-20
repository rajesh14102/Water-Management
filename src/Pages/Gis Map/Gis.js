import React, { useRef } from "react";
import { GoogleMap, Marker, Polyline, MarkerClustererF } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const containerStyle = {
    width: "100vw",
    height: "100vh",
};

const highlightedLocations = [
    { name: "RWPH", lat: 11.303439, lng: 76.896206 },
    { name: "CWPH", lat: 11.209835, lng: 76.90597 },
    { name: "MST-Pannimadai (New)", lat: 11.098496, lng: 76.906302 },
    { name: "MBR-Valarmathi Nagar (New)", lat: 11.072357, lng: 76.931042 },
    { name: "MSR - Ramakrishnapuram I (Existing)", lat: 11.051611, lng: 76.993409 },
    { name: "MSR - Ramakrishnapuram II (NEW)", lat: 11.054591, lng: 76.998006 },
];

const otherLocations = [
    { name: "Head Work to WTP", lat: 11.294726, lng: 76.912151 },
    { name: "Head Work to WTP", lat: 11.283777, lng: 76.919915 },
    { name: "Head Work to WTP", lat: 11.274504, lng: 76.908026 },
    { name: "Head Work to WTP", lat: 11.261091, lng: 76.893633 },
    { name: "Head Work to WTP", lat: 11.233845, lng: 76.899696 },
    { name: "Head Work to WTP", lat: 11.216927, lng: 76.904616 },
    { name: "WTP to MST", lat: 11.19738, lng: 76.912829 },
    { name: "WTP to MST", lat: 11.172162, lng: 76.914954 },
    { name: "WTP to MST", lat: 11.131346, lng: 76.923421 },
    { name: "WTP to MST", lat: 11.106356, lng: 76.920574 },
    { name: "WTP to MST", lat: 11.09898, lng: 76.906337 },
    { name: "MST to Bharathi Park MBR", lat: 11.084632, lng: 76.910684 },
    { name: "MST to Bharathi Park MBR", lat: 11.072357, lng: 76.931038 },
    { name: "MST to Bharathi Park MBR", lat: 11.059894, lng: 76.923552 },
    { name: "MST to Bharathi Park MBR", lat: 11.02694, lng: 76.933639 },
    { name: "MST to Ramakrishnapuram MBR", lat: 11.078134, lng: 76.948517 },
    { name: "MST to Ramakrishnapuram MBR", lat: 11.075859, lng: 76.951714 },
    { name: "MST to Ramakrishnapuram MBR", lat: 11.062088, lng: 76.958427 },
    { name: "MST to Ramakrishnapuram MBR", lat: 11.049702, lng: 76.965311 },
    { name: "MST to Ramakrishnapuram MBR", lat: 11.047705, lng: 76.975753 },
    { name: "MST to Pillayarpuram MBR", lat: 11.001725, lng: 76.89372 },
    { name: "MST to Pillayarpuram MBR", lat: 11.021029, lng: 76.884553 },
    { name: "MST to Pillayarpuram MBR", lat: 11.045659, lng: 76.895181 },
    { name: "MST to Pillayarpuram MBR", lat: 11.069282, lng: 76.909545 },
    { name: "MST to Pillayarpuram MBR", lat: 11.085621, lng: 76.907812 },
    { name: "MST to Pillayarpuram MBR", lat: 10.983211, lng: 76.910107 },
    { name: "MST to Pillayarpuram MBR", lat: 10.969992, lng: 76.930799 },
    { name: "MST to Pillayarpuram MBR", lat: 10.953905, lng: 76.930054 },
    { name: "MST to Pillayarpuram MBR", lat: 10.933991, lng: 76.950233 },
    { name: "MST to Pillayarpuram MBR", lat: 10.931507, lng: 76.957617 },
    { name: "Pillayarpuram to Press Enclave", lat: 10.950468, lng: 76.928688 },
    { name: "Pillayarpuram to Press Enclave", lat: 10.942893, lng: 76.924819 },
];

const Gis = () => {

    const mapRef = useRef(null);
    const navigate = useNavigate();

    const allLocations = [...highlightedLocations, ...otherLocations];

    const path = allLocations.map((location) => ({
        lat: location.lat,
        lng: location.lng,
    }));

    const fitBounds = () => {
        if (mapRef.current) {
            const bounds = new window.google.maps.LatLngBounds();
            allLocations.forEach((loc) => bounds.extend({ lat: loc.lat, lng: loc.lng }));
            mapRef.current.fitBounds(bounds);
        }
    };

    const handleMarkerClick = (locationName) => {
        if (locationName === "RWPH") {
            navigate("/rwph");
        }
    };

    return (
        <div>
            <Header />
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={(map) => {
                    mapRef.current = map;
                    fitBounds();
                }}
            >
                {/* Highlighted Markers */}
                {highlightedLocations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        label={{
                            text: location.name,
                            color: "#ee1d24",
                            fontSize: "15px",
                            fontWeight: "bold",
                        }}
                        icon={{
                            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                            labelOrigin: new window.google.maps.Point(15, -10),
                        }}
                        onClick={() => handleMarkerClick(location.name)}
                    />
                ))}

                {/* Clustered Markers for Other Locations */}
                <MarkerClustererF>
                    {(clusterer) =>
                        otherLocations.map((location, index) => (
                            <Marker
                                key={index}
                                position={{ lat: location.lat, lng: location.lng }}
                                clusterer={clusterer}
                                label={{
                                    text: location.name,
                                    color: "#ee1d24",
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                }}
                                icon={{
                                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                    labelOrigin: new window.google.maps.Point(15, -10),
                                }}
                            />
                        ))
                    }
                </MarkerClustererF>

                {/* Polyline for All Locations */}
                <Polyline
                    path={path}
                    options={{
                        strokeColor: "#ee1d24",
                        strokeOpacity: 0.8,
                        strokeWeight: 3,
                    }}
                />
            </GoogleMap>
        </div>

    );
};

export default Gis;