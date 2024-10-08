/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

let resultsarea = document.querySelector(".resultsbox")

let eternals = [
    {
        name: "Sersi",
        pic: "sersi.png",
        skillset: [
            "Immortality",
            "Science Expert",
            "Combat Expert",
            "Multilingual",
        ]
    },
    {
        name: "Kingo",
        pic: "kingo.png",
        skillset: [
            "Immortality",,
            "Multilingual",
            "Master Marksman",
        ]
    },
    {
        name: "Sprite",
        pic: "sprite.png",
        skillset: [
            "Immortality",
            "Combat Expert",
            "Knife Specialist"
        ]
    },
    {
        name: "Phastos",
        pic: "phastos.png",
        skillset: [
            "Immortality",
            "Master Engineer",
            "Combat Expert",
            "Science Expert",
            "Expert Marksman",
            "Multilingual"
        ]
    },
    {
        name: "Makkari",
        pic: "makkari.png",
        skillset: [
            "Immortal",
            "Combat Expert",
            "Master Accrobat"
        ]
    }
]

function createCard(Hero) {
    resultsarea.innerHTML+= `<div classname = 'card'> <h3> ${Hero.name}</h3> <p>${Hero.skillset.join(" - ")}</p><img src = "${Hero.pic}"> </img> </div>`
    return
}

function displayResults(Ability) {
    resultsarea.innerHTML = ""
    eternals.forEach((Hero) => 
    {   
     Hero.skillset.forEach((skill) => 
        {
            if(skill == Ability){
                createCard(Hero)
            }
        });
    });
    return
}

function resetInputArea() {
    let inputarea = document.querySelector(".inparea")
    if(inputarea.value != "search abilities here." && inputarea.value == "") {
        inputarea.value = "search abilities here."
    }
    return
}