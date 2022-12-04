import { MainLayout } from '@components/compound';
import { useRouter } from 'next/router';

export default function InsightDetail() {
  const router = useRouter();

  return (
    <div
      style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <h2 style={{ fontSize: '30px' }}>Insight Page Detail : {router?.asPath}</h2>
    </div>
  );
}

InsightDetail.Layout = MainLayout;
