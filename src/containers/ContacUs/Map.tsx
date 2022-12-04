import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const markers = [
  {
    id: 1,
    name: 'Chicago, Illinois',
    position: { lat: 41.881832, lng: -87.623177 },
  },
  {
    id: 2,
    name: 'Denver, Colorado',
    position: { lat: 39.739235, lng: -104.99025 },
  },
  {
    id: 3,
    name: 'Los Angeles, California',
    position: { lat: 34.052235, lng: -656565.7684684 },
  },
  {
    id: 4,
    name: 'New York, New York',
    position: { lat: 40.712776, lng: -74.005974 },
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    console.log('dsgmvfkldn', bounds);
  };

  // const iconMarker = new window.google.maps.MarkerImage(
  //   'https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300',
  //   null /* size is determined at runtime */,
  //   null /* origin is 0,0 */,
  //   null /* anchor is bottom center of the scaled image */,
  //   new window.google.maps.Size(32, 32),
  // );
  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: '100vw', height: '100vh' }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          // icon={iconMarker}
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;
