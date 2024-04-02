import MyButton from './MyButton'

function SideBar({categories, activeCategory, setActiveCategory}) {
  return (
    <aside>
      <h1>Le lourd Dashboard des projets DeV</h1>
      <MyButton></MyButton>
      <button>Liste des eleves</button>
      <button>Projet 1</button>
      <button>Projet 2</button>
      <button>Projet 3</button>
    </aside>
  );
}

export default SideBar;