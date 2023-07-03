const url = 'https://exercisedb.p.rapidapi.com/exercises';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff96a67380msh75f2615b7e8a290p1b32eejsnd5fd814ae9b6',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
//exercise container

const exerciseContainer=document.querySelector("#exercises-container");

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
// body part lists
async function getData(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        const exercises=JSON.parse(result);
console.log(exercises);
        exercises.filter((d,key)=>key < 40).map((datas,key)=>{
           // console.log(key);
            exerciseContainer.innerHTML += `
            <div class="box-1 bg-white rounded-md shadow-md">
            <div class="image">
               <img src="${datas.gifUrl}" alt="${datas.equipment}" class="rounded-md">
            </div>
            <div class="content px-3 py-2">
               <div class="tags">
                <span>Equipment: </span>   <span class="text-xs bg-gray-500 rounded-full px-2 py-1 text-gray-100">${datas.equipment}</span>
               </div>
               <h2 class="title text-md font-semibold text-gray-500 py-3">${datas.name}</h2>
               <p></p>
            </div>
       </div>`;


        })






        console.log()
    } catch (error) {
        console.error(error);
    }
}

getData()




// async function getAllExerices(){
//     try{
//         const response = await fetch(url, options);
//         const {data}=response
//         console.log(data);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// getAllExerices()





