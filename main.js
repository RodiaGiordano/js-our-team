
const wayneBarnet = {
    name: 'Wayne Barnett',
    jobRole: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
    
}

const angelaCarroll = {
    name: 'Angela Caroll',
    jobRole: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
}


const walterGordon = {
    name: 'Walter Gordon',
    jobRole: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
}


const angelaLopez = {
    name: 'Angela Lopez',
    jobRole: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
}


const scottEstrada = {
    name: 'Scott Estrada',
    jobRole: 'Developer',
    photo: 'scott-estrada-developer.jpg'
}


const barbaraRamos = {
    name: 'Barbara Ramos',
    jobRole: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
}
const teamGuys = [wayneBarnet, angelaCarroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos];



const container = document.getElementById('wrapper');



for(let i = 0; i <= teamGuys.length; i++){

        
        const name = teamGuys[i].name
        
        const jobRole = teamGuys[i].jobRole

        const photo = teamGuys[i].photo
        


        container.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="./img/${photo}" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">${name}</p>
          <p class="card-text">${jobRole}</p>
          </div>
      </div>`


    
}

 
