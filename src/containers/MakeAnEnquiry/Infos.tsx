import styles from '@scss/pages/make-an-enquire/info.scss?type=scoped';
import ReactLogo from '@svg/successful.svg';

export default function Infos() {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="ibc-info-us">
        <ul>
          <li>
            <div className="ibc-info-us_item">
              <div className="ibc-info-us_item_text">
                <div className="ibc-info-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>Global Support with expert consultants all over the world</h5>
              </div>
            </div>
          </li>
          <li>
            <div className="ibc-info-us_item">
              <div className="ibc-info-us_item_text">
                <div className="ibc-info-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>Variety of consulting services on all aspects of businesses</h5>
              </div>
            </div>
          </li>
          <li>
            <div className="ibc-info-us_item">
              <div className="ibc-info-us_item_text">
                <div className="ibc-info-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>Time and cost saving with cutting-edge digital operating system</h5>
              </div>
            </div>
          </li>
          <li>
            <div className="ibc-info-us_item">
              <div className="ibc-info-us_item_text">
                <div className="ibc-info-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>Our services are trusted by 10,000+ corporate clients globally</h5>
              </div>
            </div>
          </li>
          <li>
            <div className="ibc-info-us_item">
              <div className="ibc-info-us_item_text">
                <div className="ibc-info-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>We commit to the highest level of confidentiality to protect your data</h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
