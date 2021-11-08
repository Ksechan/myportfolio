import React, { useEffect } from 'react';
import HomeBadge from '../homeBadge/homeBadge';
import { Link } from 'react-router-dom';
import useHover from '../hooks/useHook';
import AOS from 'aos';
import '../aos-master/dist/aos.css';

function Work() {
  const [hoverRef, isHovered] = useHover();

  const workArray = [
    {
      id: '1',
      title: 'To Do List',
      subtitle: 'todo check app',
      desc: '할일을 입력, 수정, 삭제할 수 있는 to-do-list  ',
      desc2: 'API를 통해 현재 위치를 가져와 날씨 표시 및 현재 시간 표시',
      desc3: 'javascript와 css를 이용한 작업',
      thumbnail: '/thumbnail-images/todolist-thumbnail.gif',
      gitHub: 'https://github.com/rlatpks77/To-do-list',
      address: '',
    },
    {
      id: '2',
      title: 'Prototype shop',
      subtitle: 'prototype design shop',
      desc: 'prototype 디자인을 보고 구매할 수 있는 shop',
      desc2: '장바구니 추가, 수정 삭제 기능 구현',
      desc3: 'react와 css를 이용한 작업',
      thumbnail: '/thumbnail-images/prototypeshop-thumbnail.gif',
      gitHub: 'https://github.com/rlatpks77/prototype-shop',
      address: '',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  return (
    <div className="text-color-white work-margin">
      <HomeBadge />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="work title-border"
      >
        <h4>Work</h4>
        <span className="text-color-red">
          다양한 프로젝트를 경험하고 기록하는 중입니다.
        </span>
      </div>

      {workArray.map((work) => {
        const { id, title, desc, desc2, desc3, thumbnail, gitHub, address } =
          work;

        return (
          <div className="work-container text-color-white" key={id}>
            <div className="work-info">
              <img
                data-aos="fade-up-right"
                src={process.env.PUBLIC_URL + thumbnail}
                alt="thumbnail"
                className="work-thumbnail"
              />
              <div data-aos="fade-up" className="work-title">
                {title}
              </div>
              <div data-aos="fade-up" className="work-link">
                <a href={gitHub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={address} target="_blank" rel="noopener noreferrer">
                  Web
                </a>
              </div>
              <div data-aos="fade-right" className="work-desc">
                <span>
                  <span className="text-color-red">&#35;</span> {desc}
                </span>
                <br />
                <span>
                  <span className="text-color-red">&#35;</span> {desc2}
                </span>
                <br />
                <span>
                  <span className="text-color-red">&#35;</span> {desc3}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
        className="link-container work-link-to-contact"
      >
        <Link
          to="/Contact"
          ref={hoverRef}
          className={` ${isHovered ? 'text-color-red' : ''}`}
        >
          <span>GO Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Work;
