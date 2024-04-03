import "../styles/App.scss"
import "../styles/Card.css"

function Card({ project }) {

    const { title, description, img, teamName, projectLink } = project;

    return (

        <article>
            <h2>{title}</h2>
            <img src={img} alt={description} />
            <p> Equipe :</p>
            <ul>
                {teamName.map(member => <li>{member}</li>)}
            </ul>
            <p>{description}</p>
            <a href={projectLink}>{title}</a>
        </article>
    )
}
export default Card;