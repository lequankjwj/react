import styles from '@scss/pages/contact-us/map.scss?type=scoped';

// const containerStyle = {
//   width: '1600px',
//   height: '400px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

export default function MapContact() {
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
          <div style={{ height: '100%', width: '100%' }}>
            {/* <LoadScript googleMapsApiKey="AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8">
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                Child components, such as markers, info windows, etc.
                <></>
              </GoogleMap>
            </LoadScript> */}
          </div>
        </div>
      </section>
    </>
  );
}
