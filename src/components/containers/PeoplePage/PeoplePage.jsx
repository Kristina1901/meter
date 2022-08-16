import {useState, useEffect} from  'react';
import {getApiResourse}  from '../../utils/network'
import{getPeopleId, getPeopleImage}  from '../../utils/network'
import PeopleList from './PeopleList';
const PeoplePage = () => {
    const [people, setPeople] = useState(null);
    const [errorApi, setErrorApi] = useState(false);
    const getResource = async() => {
        const res = await getApiResourse().then(data => data.results)
        if (res) {
         const peopList = res.map(({name, url}) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)
          
            return {
               id,
                name,
               img
            }
           
    })
    setPeople(peopList)
    setErrorApi(false)
}
else {
    setErrorApi(true)
}
    
}
     useEffect (()=> {
        getResource()
    }, [])
    return (
        <>
        {errorApi? <h2>Error</h2>: (<> <h1>Navigation</h1>{people && <PeopleList people={people}/>} </>)
    }
        </>
    )
}
export default PeoplePage