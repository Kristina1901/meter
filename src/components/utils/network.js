export const SWAPI_ROOT = 'swapi.dev/api/'
export const SWAPI_PEOPLE = 'people'
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE ='characters'
const GUIDE_IMG_EXTENSION ='.jpg'
const HTTP = 'http://'
const HTTPS = 'https://'
const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE
export async function getApiResourse () {
   let response = await fetch(HTTPS+SWAPI_ROOT+SWAPI_PEOPLE)
    if (response.ok) {
        let people = await response.json();
        return people
        
      } else {
        return false
      }
    
}
const getId = (url, category) => {
  const id = url.replace(HTTPS+SWAPI_ROOT+category, '')
  .replace(/\//g, '')
  return id

}
export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`