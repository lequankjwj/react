import { IListServices } from '@/models/service-page';
import Breadcrumb from '@components/primitive/Breadcrumb';
import ArrowSmall from '@svg/arrow-small.svg';
import { get } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ServicesListProps {
  configFuture: {
    title: string;
    description: string;
    label: string;
  };
  listServices: IListServices;
}

export default function ServicesList({ configFuture, listServices }: ServicesListProps) {
  const configFutureData = JSON.parse(get(configFuture, 'config.content', null));
  const listServicesData = get(listServices, 'services', []);
  const router = useRouter();

  return (
    <section className="ibc-main">
      <div className="ibc-services__base">
        <div className="ibc-services__list">
          <div className="ibc-services__wrapper">
            <div className="ibc-services__breadcrumb">
              <Breadcrumb></Breadcrumb>
            </div>
            <div className="ibc-services__description">
              <div>
                <h1>{configFutureData.title}</h1>
              </div>
              <div>
                <p>{configFutureData.description}</p>
              </div>
            </div>

            <div className="ibc-services__items">
              <div className="ibc-services__title">
                <h2>{configFutureData.label}</h2>
              </div>

              <div className="ibc-services__all">
                {listServicesData.length > 0 &&
                  listServicesData.map((item) => (
                    <div className="ibc-services__all--detail" key={item.id}>
                      <img
                        src={item.icon}
                        alt={item.name}
                        width="360"
                        height="80"
                        title={item.name}
                      />
                      <div className="ibc-services__all--description">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <h3>
                            <Link href={{ pathname: `${router.asPath}/${item.keyword}` }}>
                              <a target="_self" title={item.name}>
                                {item.name}
                              </a>
                            </Link>
                          </h3>
                          <p>{item.summary}</p>
                        </div>
                        <div>
                          <Link
                            href={{ pathname: `${router.asPath}/${item.keyword}` }}
                            target="_self"
                          >
                            <div title="View more" className="ibc-view-more">
                              <span>
                                <ArrowSmall />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
