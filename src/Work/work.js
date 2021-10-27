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
      {/* div 태그가 필요없어지면 지워라 */}
      <div>
        <ul className="work-list">
          <li>
            <h4 className="work-list-title">ToDoList</h4>
            <span className="work-list-subtitle text-color-red">
              todo check app
            </span>
          </li>
          <li>
            <h4 className="work-list-title">Prototype Shop</h4>
            <span className="work-list-subtitle text-color-red">
              prototype design shop
            </span>
          </li>
        </ul>
      </div>
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
