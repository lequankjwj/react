import { InfoPage, ResponseBanner, ResponseConfig, ResponseListInsight } from '@/models';
import appStyle from '@/scss/pages/home/index.scss';
import { GroupGetUpdate } from '@components/compound/GroupGetUpdate';
import HeadSEO from '@components/primitive/HeadSEO';
import { Consulting } from './Consulting';
import { Difference } from './Difference';
import { Hero } from './Hero';
import { Intelligence } from './Intelligence';
import { Methodology } from './Methodology';
import { Touch } from './Touch';
import { Trending } from './Trending';

interface HomePageProps {
  banner: ResponseBanner;
  listInsight: ResponseListInsight;
  intelligenceNetwork: ResponseConfig;
  difference: ResponseConfig;
  appRoach: ResponseConfig;
  appRoachJS: ResponseConfig;
  infoPage: InfoPage;
}

export default function HomePage(props: HomePageProps) {
  const { banner, listInsight, intelligenceNetwork, difference, appRoach, appRoachJS, infoPage } =
    props;

  return (
    <>
      <HeadSEO title="oneibc homepage" {...infoPage.page}></HeadSEO>
      <main>
        <style jsx>{appStyle}</style>
        {banner && <Hero bannerList={banner} />}
        {listInsight && <Trending listInsight={listInsight} />}
        {intelligenceNetwork && <Intelligence intelligenceNetwork={intelligenceNetwork} />}
        <Consulting />
        {difference && <Difference difference={difference} />}
        {appRoach && <Methodology appRoach={appRoach} appRoachJS={appRoachJS} />}
        <GroupGetUpdate />
        <Touch />
      </main>
    </>
  );
}
