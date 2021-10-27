import { useCallback } from 'react';
import { useEffect, useState, useRef } from 'react/cjs/react.development';
import HomeBadge from '../homeBadge/homeBadge';

function Work() {
  const workArray = [
    {
      id: '1',
      title: 'To Do List',
      subtitle: 'todo check app',
      desc: 'This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.',
      thumbnail: '/thumbnail-images/todolist-thumbnail.gif',
    },
    {
      id: '2',
      title: 'Prototype shop',
      subtitle: 'prototype design shop',
      desc: 'This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.',
      thumbnail: '/thumbnail-images/prototypeshop-thumbnail.gif',
    },
  ];

  const clickWorkId = useRef(null);

  const goScroll = (finded) => {
    console.log(finded.thumbnail);
    const targetScroll = window.pageYOffset;
    console.log(targetScroll);
    window.scrollTo({ top: 80, left: 0, behavior: 'auto' });
  };

  const scrollToWork = useCallback((id) => {
    const currentId = id;
    console.log(currentId);
    const finded = workArray.find((work) => work.id === currentId);

    if (finded === undefined) {
      return null;
    } else {
      goScroll(finded);
    }
  });

  return (
    <div className="text-color-white work-margin">
      <HomeBadge />
      {workArray.map((work) => {
        const { id, title, subtitle } = work;
        const click = () => {
          scrollToWork(id);
          console.log(id);
        };
        return (
          <div>
            <ul className="work-list">
              <li key={id} onClick={click}>
                <h4 className="work-list-title">{title}</h4>
                <span className="work-list-subtitle text-color-red">
                  {subtitle}
                </span>
              </li>
            </ul>
          </div>
        );
      })}

      {workArray.map((work) => {
        const { id, title, desc, thumbnail } = work;
        return (
          <div>
            <div className="work-container text-color-white">
              <div className="works" key={id}>
                <img src={thumbnail} alt="thumbnail" ref={clickWorkId} />
                <div>{title}</div>
                <div>{desc}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
