import HomeBadge from '../homeBadge/homeBadge';
// import useScroll from '../hooks/scrollHook';
import useHover from '../hooks/useHook';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../aos-master/dist/aos.css';
import { useEffect } from 'react/cjs/react.development';

const About = () => {
  const [hoverRef, isHovered] = useHover();
  const [hoverRef2, isHovered2] = useHover();

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  return (
    <div className="text-color-white about-container">
      <HomeBadge />

      <div className="about-margin">
        <p>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-title">
              안녕하세요. <br />
              개발하며 개발되는 개발자 <br />
              김세찬입니다.
            </h1>
          </div>
        </p>
        <div data-aos="fade-left" className="about-bg-img"></div>

        <h2 data-aos="fade-up">About</h2>
        <span className="text-color-red about-develop" data-aos="fade-up">
          Develop [ dɪˈveləp ]
        </span>
        <p className="about-desc">
          <p data-aos="fade-up">
            1. (소프트웨어 등) 개발하다. <br />
            2. (기술·능력·자질 등이[을]) 개발되다[하다], 발전[진전]하다[시키다]
          </p>
          <br /> <br />
          <p data-aos="fade-left">
            위의 뜻을 제외하고도 Develop이라는 단어가 내포하고 있는 의미는
            굉장히 많습니다.
            <br />
            단순한 뜻의 개발이 아닌 Develop의 수많은 의미를 흡수하는 Developer가
            되도록 노력하겠습니다.
            <br /> <br />
            "선한 영향력을 최대한 많이 끼치자" <br />
            저의 삶의 목표입니다. 저로 인해서 많은 사람들의 삶의 질이 향상
            되었으면 하는 소망이 있습니다. <br />
            제가 만든 서비스로 다양한 연령층과 몸이 불편하신 분들도 어려움 없이
            편리하게 이용할 수 있게 선한 영향력을 펼쳐보고 싶습니다. <br />{' '}
            <br />
            현재 저는 독학으로 프론트엔드 개발자가 되기위하여 HTML, CSS,
            Javascript, React를 위주로 공부 하였고,
            <br />더 나아가 SASS/SCSS, Typescript, nodeJS 등 프론트엔드의 역량을
            끌어올린 뒤 백엔드 부분도 접점을 만들어 풀스택 개발자로 진화하기
            위해 더욱 노력할 것입니다.
          </p>
        </p>

        <div className="about-skill" data-aos="fade-right">
          <h2>Skills</h2>
          <ul className="skill-img-container">
            <li className="html-img">
              <div className="graph-80" data-aos="skill-graph-80"></div>
              <div></div>
            </li>
            <li className="css-img">
              <div className="graph-70" data-aos="skill-graph-70"></div>
              <div></div>
            </li>
            <li className="javascript-img">
              <div className="graph-60" data-aos="skill-graph-60"></div>
              <div></div>
            </li>
            <li className="react-img">
              <div className="graph-60" data-aos="skill-graph-60"></div>
              <div></div>
            </li>
          </ul>
        </div>

        <div className="link-container text-color-white" data-aos="fade-down">
          <Link
            to="/Work"
            ref={hoverRef}
            className={`link-to-work ${isHovered ? 'text-color-red' : ''}`}
          >
            <span>GO Work</span>
          </Link>
          <br />
          <Link
            to="/Contact"
            ref={hoverRef2}
            className={`link-to-contact ${isHovered2 ? 'text-color-red' : ''}`}
          >
            <span>GO Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
