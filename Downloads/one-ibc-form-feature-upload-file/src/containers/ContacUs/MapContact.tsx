import { useLoadScript } from '@react-google-maps/api';
import styles from '@scss/pages/contact-us/map.scss?type=scoped';
import Map from './Map';
// const containerStyle = {
//   width: '1600px',
//   height: '400px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

export default function MapContact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '', // Add your API key
  });
  return (
    <>
      <style jsx>{styles}</style>
      <section className="ibc_touch ibc-main ibc-map ">
        <div className=" ibc-map_title">
          <div className="ibc-difference__content">
            <h2>One IBC Group</h2>
            <p>Check out our branches and representative offices around the world.</p>
          </div>
        </div>
        <div className=" ibc-map_select">
          <div style={{ height: '100%', width: '100%' }}>{isLoaded ? <Map /> : null}</div>
        </div>
      </section>
    </>
  );
}
