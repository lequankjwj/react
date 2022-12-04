import { OFFSHORE } from '@/constants';
import appStyle from '@/scss/components/mobile-menu.scss?type=scoped';
import ListMenu from '@components/primitive/ListMenu';
import { selectHeaderMenu } from '@redux/app/selecters';
import { useAppSelector } from '@redux/hooks';
import IconLogin from '@svg/account-menu.svg';
import Close from '@svg/close.svg';
import LogoOneIbc from '@svg/logo-oneibc-black.svg';
import Search from '@svg/search-menu.svg';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SelectForm } from '../GroupSelect';

const data = [
  {
    id: 1,
    value: 51561,
    label: 'EN',
  },
  {
    id: 2,
    value: 4,
    label: 'EN',
  },
];
const data2 = [
  {
    id: 1,
    value: 51561,
    label: 'Global',
    image: '../images/Language.png',
  },
  {
    id: 2,
    value: 4,
    label: 'English',
    image: '../images/Language.png',
  },
];
interface MenuMobileProps {
  isShow: boolean;
  onClose: () => void;
}
export default function MenuMobile({ isShow, onClose }: MenuMobileProps) {
  const menuList = useAppSelector(selectHeaderMenu);
  const [phoneCountry, setPhoneCountry] = useState(data[0].value);
  const [isFirstMenuShow, setIsFirstMenuShow] = useState(true);
  const [isSecondMenuShow, setIsSecondMenuShow] = useState(false);
  const [dataSecondMenu, setDataSecondeMenu] = useState<any>(null);
  const router = useRouter();

  const handleClickFirstItem = (item) => {
    if (isEmpty(item.url)) {
      setDataSecondeMenu(item);
      setIsFirstMenuShow(false);
      setIsSecondMenuShow(true);
      return;
    }
    router.push(item.url);
    onClose();
  };
  const handleClickSecondItem = () => {
    setIsFirstMenuShow(true);
    setIsSecondMenuShow(false);
  };
  const closeModal = () => {
    setIsFirstMenuShow(true);
    setIsSecondMenuShow(false);
    onClose();
  };

  return (
    <>
      <style jsx>{appStyle}</style>
      <nav className={classNames('ibc-mobile-sidebar', { 'ibc-mobile-sidebar__open': isShow })}>
        <div className="ibc-mobile-sidebar__container">
          <div
            className={classNames('ibc-mobile-sidebar__main', {
              'ibc-mobile-sidebar__open': true,
            })}
          >
            {/* first menu */}
            <div
              className={classNames('ibc-mobile-sidebar__first', {
                'ibc-mobile-sidebar__first--open': isFirstMenuShow,
              })}
            >
              <div className="ibc-mobile-sidebar__logo">
                <button onClick={closeModal}>
                  <Close />
                </button>
                <div className="ibc-mobile-sidebar__logo_box">
                  <LogoOneIbc />
                </div>
              </div>

              <div className="ibc-mobile-sidebar__menu">
                <div className="ibc-mobile-sidebar__menu__search">
                  <input type="text" placeholder="Services, News, Promotion..." />
                  <div className="icon-search">
                    <Search />
                  </div>
                </div>
                <div className="ibc-mobile-sidebar__menu_listmenu">
                  <ul>
                    {menuList.map((item: any) => (
                      <li key={item.name}>
                        <Link href={`/${item.url}`}>
                          <a
                            onClick={() => handleClickFirstItem(item)}
                            target="_self"
                            rel="noreferrer"
                            title={item.name}
                          >
                            {item.name}
                            <i className="fal fa-long-arrow-right"></i>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ibc-mobile-sidebar__menu_login">
                <div className="ibc-mobile-sidebar__menu_login_location">
                  <ul>
                    <li>
                      Language
                      <SelectForm
                        instanceId="select1"
                        OptionLIst={data}
                        onChange={(e: any) => setPhoneCountry(e.value)}
                        value={phoneCountry}
                      />
                    </li>
                    <li>
                      Location
                      <SelectForm
                        instanceId="select1"
                        OptionLIst={data2}
                        onChange={(e: any) => setPhoneCountry(e.value)}
                        value={phoneCountry}
                      />
                      <img src="" alt="" />
                    </li>
                  </ul>
                </div>
                <div className="ibc-mobile-sidebar__menu_login_btn">
                  <button className="bassic">
                    <IconLogin />
                    <a href={`${OFFSHORE}/login`} target="_blank" rel="noreferrer">
                      Log In
                    </a>
                  </button>
                  <button className="medium">
                    <Link href="/make-an-enquiry">
                      <a onClick={closeModal}>Make an Enquiry</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={classNames('ibc-mobile-sidebar__second', {
                'ibc-mobile-sidebar__second--open': isSecondMenuShow,
              })}
            >
              <div className="ibc-mobile-sidebar__logo">
                <button onClick={closeModal}>
                  <Close />
                </button>
                <div className="ibc-mobile-sidebar__logo_box">
                  <LogoOneIbc />
                </div>
              </div>
              <div className="ibc-mobile-sidebar_submenu">
                <div className="ibc-mobile-sidebar_submenu_back">
                  <button onClick={handleClickSecondItem}>
                    <i className="far fa-chevron-left"></i>Main Menu
                  </button>
                </div>
                <div className="ibc-mobile-sidebar_submenu_list">
                  <div className="header_menu">
                    <a onClick={() => handleClickFirstItem(false)} target="_self">
                      {dataSecondMenu?.name}
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                  <div className="ibc-mobile-sidebar_submenu_list_item">
                    <ListMenu listSubMenu={dataSecondMenu} closeModal={closeModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="overlay" onClick={closeModal}></section>
    </>
  );
}
