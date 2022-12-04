import { useRouter } from 'next/router';

export default function IndustriesDetail() {
  const router = useRouter();
  return (
    <div
      style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <h2 style={{ fontSize: '30px' }}>IndustriesDetail Page 123123123: {router?.asPath}</h2>
    </div>
  );
}
