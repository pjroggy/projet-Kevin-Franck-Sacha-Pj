import MyButton from './MyButton'

function SideBar({categories, activeCategory, setActiveCategory}) {
  return (
    <>
      <aside>
          <h1>Dashboard des projets Dev</h1>
          <ul>
            <li><button>Liste des eleves</button></li>
            <li><button className='project'>Projet 1</button></li>
            <li><button className='project'>Projet 2</button></li>
            <li><button className='project'>Projet 3</button></li>
          </ul>
        </aside>
    </>
  );
}

export default SideBar;
