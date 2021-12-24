const dev = document.querySelector('.team');


devs.map(data => {
    dev.innerHTML +=`

<div class="team-item">
    <img src="${data.photo}" alt="">
    <h2>${data.name}</h2>
    <p>Age : ${data.age}</p>
    <span>${data.skill}</span>
    <P>Lorem ipsum dolor sit amet.</P>
    <p>${data.location}</p>
</div>

    `;
});

const stud =document.querySelector('.stu');

student.map(data =>{
    stud.innerHTML +=`

    <div class="stu-item">
    <img src="${data.photo}" alt="">
    <h5>Roll : ${data.roll}</h5>
    <h3>${data.name}</h3>
    <p>Age : ${data.age} </p>
    <p>Location : ${data.location}</p>  

</div>
`;
});

const familly = document.querySelector(".familly-phone");
phone.map(data=>{

  familly.innerHTML +=(`
  <div class="familly-data">
  <img src="${data.img}" alt="">
  <div class="familly-detiles">
    <h1>Serial Number : ${data.sl}</h1>
    <h2>Name:${data.name} </h2>
    <h3>Age: ${data.age} </h3>
    <h3>Location: ${data.location}</h3>
    <h3>Phone : ${data.phoneBook} </h3>
    <h3>Relation : ${data.relation} </h3>
</div>
</div>
  
  `)

})