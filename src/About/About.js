import react from 'react';
import HomeBadge from '../homeBadge/homeBadge';

function About() {
  return (
    <div className="text-color-white work-container">
      <HomeBadge />
      <div className="work-margin">
        <p>
          <div className="work-grow-title">
            <p className="work-title">
              안녕하세요. <br />
              개발하며 개발되는 개발자 <br />
              김세찬입니다.
            </p>
          </div>
        </p>
        <div className="work-bg-img"></div>
        {/* 스크롤에 맞춰서 효과를 넣을 예정 */}
        <span className="text-color-red">Develop [ dɪˈveləp ]</span>
        <p>
          1. (소프트웨어 등) 개발하다. <br />
          2. (기술·능력·자질 등이[을]) 개발되다[하다], 발전[진전]하다[시키다]
        </p>
        위와 별개로 Develop이라는 단어가 내포하고 있는 의미는 굉장히 많습니다.
        <br />
        단순한 뜻의 개발이 아닌 Develop의 수많은 의미를 흡수하는 Developer가
        되도록 노력하겠습니다.
      </div>
    </div>
  );
}

export default About;
