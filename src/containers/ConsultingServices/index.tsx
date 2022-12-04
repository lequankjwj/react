import { IServicesBannerProps } from '@/models/service-page';
import { GroupGetInTouch } from '@components/compound/GroupGetInTouch';
import { GroupGetUpdate } from '@components/compound/GroupGetUpdate';
import { selectServices } from '@redux/app/selecters';
import { useAppSelector } from '@redux/hooks';
import appStyle from '@scss/pages/consulting-services/index.scss';
import Hero from './Hero';
import ServicesList from './ServicesList';

export default function ConsultingService({ banner, configFuture }: IServicesBannerProps) {
  const listServicesStore: any = useAppSelector(selectServices);

  return (
    <>
      <style jsx>{appStyle}</style>
      <main className="ibc-service">
        <Hero banner={banner} />
        <ServicesList configFuture={configFuture} listServices={listServicesStore} />
        <GroupGetUpdate />
        <GroupGetInTouch bannerImage="/images/get-in-touch.jpg" />
      </main>
    </>
  );
}
