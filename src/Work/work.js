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
      desc: '할일을 입력, 수정, 삭제할 수 있는 to-do-list',
      thumbnail: '/thumbnail-images/todolist-thumbnail.gif',
      gitHub: 'https://github.com/rlatpks77/To-do-list',
      address: '',
    },
    {
      id: '2',
      title: 'Prototype shop',
      subtitle: 'prototype design shop',
      desc: 'This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.',
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
      <div data-aos="fade-up" data-aos-duration="1000" className="work">
        <h4>Work</h4>
        <span className="text-color-red">
          다양한 프로젝트를 경험하고 기록하는 중입니다.
        </span>
      </div>

      {workArray.map((work) => {
        const { id, title, desc, thumbnail, gitHub, address } = work;

        return (
          <div className="work-container text-color-white" key={id}>
            <div className="work-info">
              <img data-aos="fade-up-right" src={thumbnail} alt="thumbnail" />
              <div data-aos="fade-left" className="work-title">
                {title}
              </div>
              <div data-aos="fade-left" className="work-link">
                <a href={gitHub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={address} target="_blank" rel="noopener noreferrer">
                  Web
                </a>
              </div>
              <div data-aos="fade-up" className="work-desc">
                {desc}
              </div>
            </div>
          </div>
        );
      })}
      <div data-aos="fade-down-right" className="link-container to-contact">
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
