
import Buttons from './Buttons'

function SideBar({categories, setActiveCategory}) {
  
  return (
      <aside>
          <h1>Dashboard des projets Dev</h1>
          <ul>
            {categories.map((category) => (
              <Buttons category={category} setActiveCategory={setActiveCategory}/>
            ))}
          </ul>
        </aside>
  );
}

export default SideBar;
