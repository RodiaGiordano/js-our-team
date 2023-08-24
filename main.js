/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/


// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg




const wayneBarnet = {
    name: 'Wayne Barnett',
    jobRole: 'Founder & CEO',
    photo: `<img src="./img/wayne-barnett-founder-ceo.jpg" alt="">`
    
}

const angelaCarroll = {
    name: 'Angela Caroll',
    jobRole: 'Chief Editor',
    photo: `<img src="./img/angela-caroll-chief-editor.jpg" alt="">`,
}


const walterGordon = {
    name: 'Walter Gordon',
    jobRole: 'Office Manager',
    photo: `<img src="./img/walter-gordon-office-manager.jpg" alt="">`,
}


const angelaLopez = {
    name: 'Angela Lopez',
    jobRole: 'Social Media Manager',
    photo: `<img src="./img/angela-lopez-social-media-manager.jpg" alt="">`,
}


const scottEstrada = {
    name: 'Scott Estrada',
    jobRole: 'Developer',
    photo: `<img src="./img/scott-estrada-developer.jpg" alt="">`,
}


const barbaraRamos = {
    name: 'Barbara Ramos',
    jobRole: 'Graphic Designer',
    photo: `<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">`,
}
const teamGuys = [wayneBarnet, angelaCarroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos];

// console.log(scottEstrada)
// console.log(teamGuys)

// MILESTONE 0:

//---

// MILESTONE 1:

// const person1 = document.getElementById('person1')
// const person2 = document.getElementById('person2')
// const person3 = document.getElementById('person3')
const container = document.getElementById('wrapper');

//MILESTONE 2:

for(let i = 0; i <= teamGuys.length; i++){

        const member = teamGuys[i]
        

        let informationGuy = "";

    for(let attribute in teamGuys[i]){

        informationGuy += member[attribute];
        // console.log(' ')
    }
    
    
    container.innerHTML += `<div id="guy${i}">${informationGuy}</div>`
    
}

 
