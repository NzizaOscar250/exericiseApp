const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff96a67380msh75f2615b7e8a290p1b32eejsnd5fd814ae9b6',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


//normal settings


 const mobileNavigationView=document.querySelector("#mobile-menu");
const searchContainer=document.querySelector("#search")
 // const btn=document.querySelector("#mobile-button");

function mobileView(){
    mobileNavigationView.classList.toggle("hidden");
}
function Search(){
    searchContainer.classList.toggle("hidden");
}

async function getData(){
    try {
        const response = await fetch(url, options);
        const result = await response;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData()