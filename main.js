import { API } from './config/API';

try {
    await API.get('countries')
    .then(response => {
        const allCountries = response.data.response;
        console.log(allCountries)
        allCountries.forEach(country => {
            var tag = document.createElement("option");
            tag.innerHTML = country;
            var element = document.getElementById("countries")
            element.appendChild(tag);
        });
    })
} catch (error) {
    console.error(error);
}
const selector = document.getElementById('countries');
selector.addEventListener('input', (e) => {
    API.get('/statistics', {params: {country: e.target.value}}) 
    .then(response => {
        console.log(response.data.response[0])
    })
    console.log(e.target.value)
})