import Card from "./Card"
import "../styles/App.scss";

function DataTable({projects, activeCategory}) {
  return (
        <main>
        {projects.map((project) => activeCategory === project.category ? <Card key={project.title} project={project}/> : null)}
      </main>
      )
      }
      
      export default DataTable;
