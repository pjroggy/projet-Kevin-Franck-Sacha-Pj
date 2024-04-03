import '../styles/App.scss'

function Buttons({setActiveCategory, category}){

    return(
        <li key={category} className='project'><button type="button" value={category} onClick={(() => setActiveCategory(category))}>{category}</button></li>
    )
}
export default Buttons