const SWAPI_ROOt = 'https://swapi.dev/api/'
const SWAPI_PEOPLE = 'people'
export const getApiResourse = (url) => {
   fetch(url)
   .then(res => res.json())
   .then(body => console.log(body))
   .catch(error => console.log(error))
}
getApiResourse(SWAPI_ROOt+SWAPI_PEOPLE)