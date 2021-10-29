import React from 'react';
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

  return (
    <div className="text-color-white work-margin">
      <HomeBadge />

      {workArray.map((work) => {
        const { id, title, desc, thumbnail } = work;
        return (
          <div>
            <div className="work-container text-color-white" key={id}>
              <div className="work-info">
                <img src={thumbnail} alt="thumbnail" />
                <div className="idid">asdklfjskladjflk</div>
                <div className="work-title">{title}</div>
                <div className="work-desc">{desc}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
