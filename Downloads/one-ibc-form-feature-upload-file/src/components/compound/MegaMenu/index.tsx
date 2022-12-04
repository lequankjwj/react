import styleMenu from '@scss/components/mega-menu.scss?type=scoped';
import Link from 'next/link';

interface MegaMenuProps {
  data: any;
}

export default function MegaMenu({ data }: MegaMenuProps) {
  return (
    <>
      <style jsx>{styleMenu}</style>
      <section>
        <ul className="ibc-mega-menu__container">
          {data.map((item, index) => (
            <li className="ibc-mega-menu__item" key={`${index}`.toString()}>
              <ul>
                <li>
                  <Link href={`/${item.url}`}>
                    <a title={item.name} target="_self">
                      {item.name}
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
