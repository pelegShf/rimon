import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {
    const defaultProps = {
        center: {
            lat:  31.375048683799736,
            lng: 34.857361029819266
        },
        zoom: 14
    };

    return (
        // Important! Always set the container height explicitly
        <div className='mapDiv' >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDQ3ZzJ9giiV4hjks5dbqOqHtA7OzK06Uk" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={{
                    styles:[
                        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                        {
                          featureType: "administrative.locality",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "poi",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "geometry",
                          stylers: [{ color: "#263c3f" }],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#6b9a76" }],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry",
                          stylers: [{ color: "#38414e" }],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry.stroke",
                          stylers: [{ color: "#212a37" }],
                        },
                        {
                          featureType: "road",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#9ca5b3" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "geometry",
                          stylers: [{ color: "#746855" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "geometry.stroke",
                          stylers: [{ color: "#1f2835" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#f3d19c" }],
                        },
                        {
                          featureType: "transit",
                          elementType: "geometry",
                          stylers: [{ color: "#2f3948" }],
                        },
                        {
                          featureType: "transit.station",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "water",
                          elementType: "geometry",
                          stylers: [{ color: "#17263c" }],
                        },
                        {
                          featureType: "water",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#515c6d" }],
                        },
                        {
                          featureType: "water",
                          elementType: "labels.text.stroke",
                          stylers: [{ color: "#17263c" }],
                        },
                      ],
                }}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default Map