import BreadcrumbsComponent from '@components/primitive/Breadcrumb';
import { useEffect, useRef, useState } from 'react';

export default function DetailContent() {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current.clientHeight) setHeight(contentRef.current.clientHeight - 100 || 0);

    // const heightElement = document.getElementById('ibc-content')?.clientHeight;
    const heightElement1 = document.getElementsByClassName('ibc-services__content')[0];
    // const heightElement2 = document.getElementsByClassName('ibc-services__base')[0];

    console.log(heightElement1.clientHeight);
  }, []);
  return (
    <section className="ibc-main">
      <div className="ibc-services__base" style={{ minHeight: `${height}px` }}>
        <div className="ibc-services__content" ref={contentRef} id="ibc-content">
          <div className="ibc-services__wrapper">
            <div className="ibc-services__breadcrumb">
              <BreadcrumbsComponent></BreadcrumbsComponent>
            </div>
            <div className="ibc-services__detail">
              <div className="ibc-services__description">
                <h1>Create your growth strategy with One IBC</h1>
                <div>
                  <div className="ibc-services__description--image">
                    <a href="">
                      <img src="/images/service-top-detail.jpg" alt="#" width="585" height="660" />
                    </a>
                  </div>
                  <div className="ibc-services__description--label">
                    <p>
                      Organizations at all stages of their life cycle have visions for the future,
                      including medium to long-term performance goals. The leaders should also have
                      a clear vision of how to achieve the defined goals and maximize the potential
                      value creation. At One IBC, we offer comprehensive consulting services that
                      cover all aspects of Corporate Strategy. We believe that developing a clear
                      strategy that plays to your strengths is the best and most efficient way.
                      Strategic planning, which represents the output of decisions made regarding an
                      s future strategy, is an essential component of this process. Having support
                      from professional advisors in making strategic decisions ensures that
                      conclusions drawn are based on solid foundations, including comparison of
                      alternative options, which should result in better choices for the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ibc-services__item">
              <div>
                <h2 style={{ color: 'red' }}>What We Provide</h2>
                <p>
                  We understand the struggles of conducting an in-depth analysis of your business
                  goals and objectives to build a corporate strategy. We provide an outside, expert
                  perspective on your business challenges. Our services offer professional advice on
                  difficult issues and ensure that your business grow in the right direction.
                </p>
              </div>

              <ul>
                <li>
                  <img src="/images/service-slide-1.png" alt="" />
                  <div>
                    <h3>Market Entry Research</h3>
                    <p>
                      Conducting Market Research is the very first and crucial step before entering
                      new markets. A Market Entry Plan is vital for getting a clear picture of your
                      objectives. Therefore, having support from a professional consultant will
                      guide you to achieve your goals when entering a new market. We are confident
                      that we can provide you with an easier way to succeed.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="/images/service-slide-1.png" alt="" />
                  <div>
                    <h3>Market Entry Research</h3>
                    <p>
                      Conducting Market Research is the very first and crucial step before entering
                      new markets. A Market Entry Plan is vital for getting a clear picture of your
                      objectives. Therefore, having support from a professional consultant will
                      guide you to achieve your goals when entering a new market. We are confident
                      that we can provide you with an easier way to succeed.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="/images/service-slide-1.png" alt="" />
                  <div>
                    <h3>Market Entry Research</h3>
                    <p>
                      Conducting Market Research is the very first and crucial step before entering
                      new markets. A Market Entry Plan is vital for getting a clear picture of your
                      objectives. Therefore, having support from a professional consultant will
                      guide you to achieve your goals when entering a new market. We are confident
                      that we can provide you with an easier way to succeed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
