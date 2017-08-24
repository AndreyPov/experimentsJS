const assert = require('assert');
let fetch = require('node-fetch');

function getAnimals(fetch, id){
    return fetch('http://api.animalfarmgame.com/animals/' + id)
        .then(response => response.json())
        .then(data => data.results[0])
        //.catch(err => console.log(err));
}
//console.log(getAnimals(fetch, 123));

describe('getAnimals',()=> {
    it('checks the url', ()=>{
        const fakeFetch = url => {
            assert(url === 'http://api.animalfarmgame.com/animals/123')
            return new Promise(function(resolve){
            })
        }
        getAnimals(fakeFetch, 123)
    })

    it('checks the result', (done)=>{
        const fakeFetch = () => {
            return Promise.resolve({
                json: () => Promise.resolve({
                results: [
                    { name: 'dragon' }
                ]   
            })
        })
    }
    getAnimals(fakeFetch, 12345)
        .then(result => {
            assert(result.name === "dragon")
            done();
        })
    
    
    })
})