let incredients = [{
    "headline" : "Griechischer Bauernsalat",
    "image" : "./img/salad.jpg",
    "time" : "20",
    "difficulty" : "simpel",
    "date" : "29.09.2020",
    "profile" : "./img/kevin.jpg",
    "autor" : "Kevin"
},
{
    "number" : "0.25",
    "unit" : "",
    "incredient" : "Salatgurke (n)"
},
{
    "number" : "0.5",
    "unit" : "",
    "incredient" : "Paprikaschot(n), rot und grün"
},
{
    "number" : "125",
    "unit" : "g",
    "incredient" : "Tomate (n)"
},
{
    "number" : "0.5",
    "unit" : "",
    "incredient" : "Zwiebel(n)"
},
{
    "number" : "50",
    "unit" : "g",
    "incredient" : "Schafskäse"
},
{
    "number" : "1",
    "unit" : "Glas",
    "incredient" : "Oliven. Schwarze ca. 25g"
},
{
    "number" : "",
    "unit" : "",
    "incredient" : "Salz und Pfeffer"
},
{
    "number" : "0.25",
    "unit" : "",
    "incredient" : "Zitrone(n)"
},
{
    "number" : "30",
    "unit" : "ml",
    "incredient" : "Olivenöl"
},
{
    "number" : "",
    "unit" : "",
    "incredient" : "Oregano"
}

];

let textOfPreparation = `Die Hähnchenbrust in Stücke schneiden. Aus 1 TL Paprikapulver, 

                        <br>
                        1 EL Limonen-bzw. Zitronensaft, 1 TL Salz, 1 Becher Joghurt, 1 TL Cayennepfeffer,  
                        <br>
                        1 EL Garam Masala Pulver, 1 Stück Ingwer und 1 Knoblauchzehe eine Marinade 
                        <br>
                        herstellen. Das Fleisch mit der Marinade mischen.
                        <br>
                        <br>
                        Mindestens eine Stunde einziehen lassen. Besser ist es, das Fleisch bereits am 
                        <br>
                        Vortag zu marinieren und über Nacht in den Kühlschrank zu stellen.
                        <br>
                        Den Ofen auf 200 °C Ober-/Unterhitze vorheizen dann das Fleisch in einer Auflaufform 
                        <br>
                        für 25 Minuten garen.
                        <br>
                        <br>
                        Die Zwiebel klein hacken und in 2 EL Butter glasig anschwitzen. Die passierten Tomaten,
                        <br>
                        den Zimt, 1 TL Salz, 2 TL Cayennepfeffer, 1 Stück Ingwer und 1 Knoblauchzehe hinzugeben.
                        <br>
                        Alles 20 Minuten mit Deckel und bei niedriger Temperatur köcheln lassen. Gelegentlich 
                        <br>
                        umrühren. Nun die restlichen 2 EL Butter, den Honig und die Sahne 
                        <br>
                        hinzufügen, weitere 3 Minuten köcheln. Das Fleisch aus der Marinade nehmen, in die
                        <br>
                        Soße geben, kurz umrühren und 2 Minuten mitköcheln lassen.
                        <br>
                        <br>
                        Dazu passt Reis oder Naan.
                        <br>
                        <br>
                        Wer gerne Koriandergrün mag, der kann ganz am Ende noch ein 
                        <br>
                        paar frisch gehackte Blätter hinzufügen. `



function render(){
    // Headline
    document.getElementById("headline").innerHTML = `${incredients[0].headline}`;

    // Main Image
    document.getElementById("mainImage").setAttribute("src",`${incredients[0].image}`);

    // Time - Difficulty - Date
    document.getElementById("time").innerHTML = `${incredients[0].time}Min`;
    document.getElementById("difficulty").innerHTML = `${incredients[0].difficulty}`;
    document.getElementById("date").innerHTML = `${incredients[0].date}`;

    // List of ingredients
    document.getElementById("ingredientsContainer").innerHTML = '';
    setIncredientsList();
    
    // Time - total Time
    document.getElementById("preparationTime").innerHTML = `ca. ${incredients[0].time} Minuten`;
    document.getElementById("totalTime").innerHTML = `Gesamtzeit ca. ${incredients[0].time} Minuten`;

    // Preparation Text
    document.getElementById("preparationText").innerHTML = `<p>${textOfPreparation}</p>`

    // Profile Picture and Name
    document.getElementById("profilePicture").setAttribute("src",`${incredients[0].profile}`);
    document.getElementById("autor").innerHTML = `${incredients[0].autor}`;
}




function setIncredientsList(){
    let portions = document.getElementById("inputPortions").value;
    let color = "gray";
    let textPerLine = "";

    for(let i = 1; i != incredients.length; i++){

        if(parseFloat(incredients[i].number) > 0){
            textPerLine = parseFloat(incredients[i].number) * portions + " " + incredients[i].unit + " " + incredients[i].incredient;
        }
        else{
            textPerLine = incredients[i].unit + " " + incredients[i].incredient;
        }
        

        if(color == "gray"){
            document.getElementById("ingredientsContainer").innerHTML += `<div class="grayLine"><p>${textPerLine}</p></div>`;
            color = "white";
        }
        else{
            document.getElementById("ingredientsContainer").innerHTML += `<div class="whiteLine"><p>${textPerLine}</p></div>`;
            color = "gray";
        }
    }
    
}

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}