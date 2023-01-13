import './css/styles.css';
// import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

function fetchCountries(query ='Ukraine') {
    const BASE_URL = 'https://restcountries.com/v2/all'

    return fetch(`${BASE_URL}?fields=name=${query},capital,population,flags,languages`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
    return resp.json()
    }
    );
};

const input= document.querySelector('#search-box');
input.addEventListener('input', countrySearch);



function countrySearch(evt) {
    const query = evt.currentTarget.value.trim();

    console.log(query);

    fetchCountries(query).then(data => console.log(data))
}

