import { INSIGHTS } from '@/constants';
import { ResponseListInsight } from '@/models';
import Link from 'next/link';

interface IntelligenceProps {
  listInsight: ResponseListInsight;
}

export function Trending({ listInsight }: IntelligenceProps) {
  const { insights } = listInsight;
  return (
    <section className="ibc-trending ibc-container-layout">
      <h2>TRENDING INSIGHTS</h2>
      <ol className="ibc-trending__container">
        {insights?.map((item) => (
          <li className="ibc-trending__item" key={item.insightId}>
            <Link href={`${INSIGHTS}/${item.insightKeyword}`}>
              <a title={item.insightName} target="_self">
                {item.insightName}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
