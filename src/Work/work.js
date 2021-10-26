import HomeBadge from '../homeBadge/homeBadge';

const workArray = [
  {
    id: '1',
    title: 'To Do List',
    desc: 'This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.',
    thumbnail: '/thumbnail-images/todolist-thumbnail.gif',
  },
  {
    id: '2',
    title: 'Prototype shop',
    desc: 'This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.',
    thumbnail: '/thumbnail-images/prototypeshop-thumbnail.gif',
  },
];

function Work() {
  return (
    <div className="text-color-white work-margin">
      <HomeBadge />
      <div className="work-container text-color-white">
        {workArray.map((work) => {
          const { id, title, desc, thumbnail } = work;
          return (
            <div className="works" key={id}>
              <img src={thumbnail} alt="thumbnail" />
              <div>{title}</div>
              <div>{desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
