import { IServicesBannerProps } from '@/models/service-page';
import { GroupGetInTouch } from '@components/compound/GroupGetInTouch';
import { GroupGetUpdate } from '@components/compound/GroupGetUpdate';
import appStyle from '@scss/pages/consulting-services-detail/index.scss';
import DetailContent from './DetailContent';
import Hero from './Hero';

export default function ConsultingService({ banner }: IServicesBannerProps) {
  return (
    <>
      <style jsx>{appStyle}</style>
      <main className="ibc-service">
        <Hero banner={banner} />
        <div>
          <DetailContent></DetailContent>
        </div>
        <GroupGetUpdate />
        <GroupGetInTouch bannerImage="/images/get-in-touch.jpg" />
      </main>
    </>
  );
}
