import s from './PeopleList.module.css'
const PeopleList=({people})=> {
    return (
           <ul className={s.listContainer}>
            {people.map(({name, id, img})=> 
            <li key={id} className={s.listItem}>
            <a href='#'>
            <img src={img} alt={name} className={s.photo}/>
            <p>{name}</p>
            </a>
            </li>)}
            </ul>
    )

}
export default PeopleList