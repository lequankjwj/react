import { IListCalls } from '@/models/contact-us';
import styles from '@scss/pages/contact-us/call-us.scss?type=scoped';
import { get } from 'lodash';
interface ServicesListProps {
  listServices: IListCalls;
}
export default function CallUs({ listServices }: ServicesListProps) {
  const listServicesData = get(listServices, 'services', []);
  console.log('tesst ', listServicesData);
  // const [href, setHref] = useState({});

  return (
    <>
      <style jsx>{styles}</style>
      <div className="ibc-call-us">
        <h3>Customer Services Center</h3>
        <ul>
          {listServicesData.length > 0 &&
            listServicesData.map((item) => (
              <li key={item.id}>
                <div className="ibc-call-us_item">
                  <div className="ibc-call-us_item_text">
                    <div className="ibc-call-us_item_text_icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h5>{item.name}</h5>
                  </div>
                  <div className="ibc-call-us_item_phone">
                    {item.contents.map((contents) => (
                      <div key={contents.content}>
                        {contents.content.split(',').map(([igg]) => igg).length > 1
                          ? // contents.content.split(',', [1]).map((it, dex) => (
                            //     <a href={contents.link.split(',', [1]).map((li) => li)} className="">
                            //       {it}
                            //     </a>
                            //   )) &&
                            contents.content.split(',').map((a) => a).length == 2
                            ? contents.content.split(',', 1).map((b) => (
                                <a href={contents.link.split(',', 2).map((li) => li)} className="">
                                  {b}
                                </a>
                              ))
                            : 451654
                          : contents.content.split(',').map((it) => (
                              <a href={contents.link.split(',').map((li) => li)} className="">
                                {it} jhbvufd
                              </a>
                            ))}
                        {/* {contents.content.split(',', [1]).map((it) => (
                          <a href={contents.link.split(',', [1]).map((li) => li)} className="">
                            {it}
                          </a>
                        ))} */}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}

          {/* <li>
            <div className="ibc-call-us_item">
              <div className="ibc-call-us_item_text">
                <div className="ibc-call-us_item_text_icon">
                  <ReactLogo></ReactLogo>
                </div>
                <h5>WhatsApp</h5>
              </div>
              <div className="ibc-call-us_item_phone">
                <h4>support@oneibc.com</h4>
                <h4>support@oneibc.com</h4>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
}
