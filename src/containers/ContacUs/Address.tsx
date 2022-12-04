import { IOfficesContact } from '@/models/contact-us';
import appStyle from '@/scss/pages/contact-us/address.scss';
import HK from '@svg/HK.svg';
import MapIcon from '@svg/map.svg';
import TimeIcon from '@svg/time.svg';
import { get } from 'lodash';



interface ServicesListProps {
  officesService :IOfficesContact
}
export function Address({ officesService }: ServicesListProps) {
  const listServicesData = get(officesService, 'offices', []);
  return (
    <>
      <style jsx>{appStyle}</style>
      <section className="ibc_touch ibc-main ibc-contact">
        <div className="ibc-contact_list">
          <ul>
          {listServicesData.length > 0 &&
            listServicesData.map((item) => (    <li key={item.id}>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <HK></HK>
                  <p>{item.name}</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li>))}
            {/* <li>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <HK></HK>
                  <p>Hong Kong Office</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <SG></SG>
                  <p>Hong Kong Office</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <US></US>
                  <p>Hong Kong Office</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <VN></VN>
                  <p>Hong Kong Office</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="ibc-contact_list_item">
                <div className="ibc-contact_list_item_title">
                  <LT></LT>
                  <p>Hong Kong Office</p>
                </div>
                <div className="ibc-contact_list_item_address">
                  <MapIcon viewBox="0 0 13 14"></MapIcon>
                  <p>
                    Unit 1411, 14/Floor, Cosco Tower, 183 Queens Road Central, Sheung Wan, Hong
                    Kong.
                  </p>
                </div>
                <div className="ibc-contact_list_item_time">
                  <TimeIcon viewBox="0 0 13 14"></TimeIcon>
                  <p>9AM - 6PM GMT+8 (Mon – Fri)</p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
