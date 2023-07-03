

const phoneHunter = (search, phoneFive) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data,phoneFive))
}
const displayPhone = (phones,phoneFive) =>{
    console.log(phones)

    if(phoneFive && phones.length>5){
        phones = phones.slice(0,5)
       }

    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.innerHTML ='';

     


    phones.forEach( phone =>{
        console.log(phone)
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML =`
        <div class="card h-100">
        <img  src=${phone.image} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title">${phone.phone_name}</p>
          <p class="">This is a longer card with supporting text. This content is a little bit longer.</p>
          
          <!-- Button trigger modal -->
            <button onclick="handleModal('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>


        </div>
      </div>

        `;
        phoneContainer.appendChild(phoneDiv);
    })
    toggleSpinner(true)
}
  
const searchPhone = () =>{
    console.log('fjsddsklj')
    showFiveData(5)
    // const inputField = document.getElementById('input-field').value;
    // phoneHunter(inputField)   showFiveData

}
const handleModal = (slugId) =>{
  console.log(slugId)
  const url = ` https://openapi.programming-hero.com/api/phone/${slugId}`
  fetch(url)
  .then(res => res.json())
  .then(data => handleDisplayModal(data.data)) 
}
const handleDisplayModal = (display) =>{
    console.log(display)
    const exampleModalLabel = document.getElementById('exampleModalLabel')
    exampleModalLabel.innerText = display.name;
    document.getElementById('modal-body').innerHTML = `
    <img  src=${display.image} alt="...">
    <p>${display.mainFeatures.storage} </p>

    `
  
}
 const showFiveData = (limit) =>{
    toggleSpinner(true)
    const inputField = document.getElementById('input-field').value;
    phoneHunter(inputField,limit)
 }

 const showmore = () =>{
    toggleSpinner(true)
    showFiveData();
 }

 const toggleSpinner = (isLoding) =>{
  const spinet = document.getElementById('spinner');
  if (isLoding){
    spinet.classList.remove('d-none')
  } 
  else{
    spinet.classList.add('d-none')
  }
 }


phoneHunter('oppo');


//loca;
localStorage.setItem("myCat", "Tom");
localStorage.removeItem("myCat");
localStorage.clear();
const cat = localStorage.getItem("myCat");
console.log(cat)