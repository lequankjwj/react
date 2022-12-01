import {
  CACHE_HOME_BANNER,
  CACHE_HOME_DIFFERENCE,
  CACHE_HOME_INFO,
  CACHE_HOME_LIST_INSIGHT,
  CACHE_HOME_METHODOLOGY,
  CACHE_HOME_METHODOLOGY_JS,
  CACHE_INTELLIGENCE_NETWORK,
  CACHE_LIST_SERVICE,
} from '@/constants';
import { readCache } from '@/lib/readCache';
import { IGetBanner, IGetInsightHome, IGetService } from '@/models';
import { MainLayout } from '@components/compound';
import HomePage from '@containers/Home';
import withCommon from '@hoc/withCommon';
import homeService from '@services/home';
import { coverObj } from '@utils/helpers';

const Index = (props: any) => <HomePage {...props} />;

export const getServerSideProps = withCommon({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  callback: async (store, _, region) => {
    const reqDataInsight: IGetInsightHome = {
      isHome: 'Y',
      limit: 4,
      ...region,
    };

    const reqDataGetBanner: IGetBanner = {
      controller: 'index',
      ...region,
    };

    const reqDataGetService: IGetService = {
      language: region.lang,
      countryCode: region.country,
    };

    const promises = [
      readCache(CACHE_HOME_BANNER) ?? homeService.getBanner(reqDataGetBanner),
      readCache(CACHE_HOME_LIST_INSIGHT) ?? homeService.getListInsight(reqDataInsight),
      readCache(CACHE_LIST_SERVICE) ?? homeService.getServiceData(reqDataGetService),
      readCache(CACHE_INTELLIGENCE_NETWORK) ?? homeService.getIntelligence(region),
      readCache(CACHE_HOME_DIFFERENCE) ?? homeService.getDifference(region),
      readCache(CACHE_HOME_METHODOLOGY) ?? homeService.getMethodologyOfApproach(region),
      readCache(CACHE_HOME_METHODOLOGY_JS) ?? homeService.getMethodologyOfApproachJS(region),
      readCache(CACHE_HOME_INFO) ?? homeService.getInfoHomePage(reqDataGetService),
    ];

    const response = await Promise.allSettled(promises);
    const data = await response.map((item) =>
      item.status === 'fulfilled' ? item.value ?? [] : null,
    );
    const ar = [
      'banner',
      'listInsight',
      'listService',
      'intelligenceNetwork',
      'difference',
      'appRoach',
      'appRoachJS',
      'infoPage',
    ];
    return {
      props: {
        ...coverObj(ar, data),
      },
    };
  },
});

Index.Layout = MainLayout;
export default Index;
