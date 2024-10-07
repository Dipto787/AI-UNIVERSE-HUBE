let loadData= async data=>{
    let res=await fetch('https://openapi.programming-hero.com/api/ai/tools');
    let getData=await res.json();
    let finalData=getData.data.tools;
    showDataInDisplay(finalData)
    
}

let showDataInDisplay=data=>{ 
    let dataContainer=document.getElementById('container');
    data.forEach(res => {
        console.log(res
        );
        let div=document.createElement('div');
        div.classList='card bg-base-100  border border-2 p-5';
        div.innerHTML=`
              <figure>
    <img onclick="learnMore(${res.id})"
      src="${res.image}"
      alt="Shoes" />
  </figure>
  <div class="mt-2">
    <h2 class="card-title">Features</h2>
    <p class="mb-1 font-semibold">1.${res.features[0]} </p>
    <p class="mb-1 font-semibold">2. ${res.features[1]}</p>
    <p  class="font-semibold">3. ${res.features[2]}</p>
   <div class="mt-2"> <hr><hr></div>
    <h2 class="text-xl font-bold mt-2">${res.name}</h2>
    
    <div class="card-actions justify-between  mt-3">
     <div class="flex"><img src="Frame.svg" /> <p>${res.published_in}</p></div>
     <img src="Group 31.svg" />
    </div>
   
  </div> 
        `;

        dataContainer.appendChild(div)
        
    });
    
}


let learnMore=async id=>{
    console.log(id);
    
    let res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    let data=await res.json();
    console.log(data.data);
    
    learn_more.showModal() 

}


loadData()