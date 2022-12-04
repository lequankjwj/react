import { CACHE_MAIN_SERVICES_BANNER, CACHE_MAIN_SERVICES_CONFIG_FUTURE } from '@/constants';
import { readCache } from '@/lib/readCache';
import { IGetBanner } from '@/models';
import { MainLayout } from '@components/compound';
import ConsultingService from '@containers/ConsultingServices';
import withCommon from '@hoc/withCommon';
import commonService from '@services/common';
import oneIbcServices from '@services/servicesPage';
import { coverObj } from '@utils/helpers';

const Index = (props: any) => <ConsultingService {...props} />;

export const getServerSideProps = withCommon({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  callback: async (store, _, region) => {
    const reqDataGetBanner: IGetBanner = {
      controller: 'consulting-services',
      ...region,
    };
    const promises = [
      readCache(CACHE_MAIN_SERVICES_BANNER) ??
        commonService.getBanner(reqDataGetBanner, CACHE_MAIN_SERVICES_BANNER),
      readCache(CACHE_MAIN_SERVICES_CONFIG_FUTURE) ?? oneIbcServices.getConfigFuture(region),
    ];
    const response: any = await Promise.allSettled(promises);
    const data = await response.map((item) =>
      item.status === 'fulfilled' ? item.value ?? [] : null,
    );

    const ar = ['banner', 'configFuture'];

    return {
      props: {
        ...coverObj(ar, data),
      },
    };
  },
});

Index.Layout = MainLayout;
export default Index;
