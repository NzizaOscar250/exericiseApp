const axios = require('axios/dist/browser/axios.cjs');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'ff96a67380msh75f2615b7e8a290p1b32eejsnd5fd814ae9b6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const Home=async()=>{
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

Home();