import { CACHE_MAIN_SERVICES_BANNER } from '@/constants';
import { readCache } from '@/lib/readCache';
import { IGetBanner } from '@/models';
import { MainLayout } from '@components/compound';
import ConsultingServiceDetail from '@containers/ConsultingServiceDetail';
import withCommon from '@hoc/withCommon';

import commonService from '@services/common';
import { coverObj } from '@utils/helpers';

const Index = (props: any) => <ConsultingServiceDetail {...props} />;

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
    ];
    const response: any = await Promise.allSettled(promises);
    const data = await response.map((item) =>
      item.status === 'fulfilled' ? item.value ?? [] : null,
    );

    const ar = ['banner'];

    return {
      props: {
        ...coverObj(ar, data),
      },
    };
  },
});
Index.Layout = MainLayout;
export default Index;
