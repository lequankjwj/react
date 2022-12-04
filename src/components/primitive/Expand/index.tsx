import mainStyle from '@/scss/components/expand.scss?type=scoped';
import Arrow from '@svg/arrow-right.svg';

export default function Expand() {
  return (
    <>
      <style jsx>{mainStyle}</style>
      <div className="ibc-btn-group__expand">
        <div className="ibc-btn-group__arrow">
          <Arrow />
        </div>
        <span className="ibc-btn-group__text"></span>
      </div>
      <div className="ibc-btn-group__arrow">
        <Arrow />
      </div>
    </>
  );
}
