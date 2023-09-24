let incredients = [{
    "headline" : "Butter Chicken",
    "image" : "./img/butter_chicken.jpg",
    "time" : "30",
    "totalTime" : "180",
    "difficulty" : "normal",
    "date" : "16.09.2023",
    "profile" : "./img/kevin.jpg",
    "autor" : "Kevin"
},
{
    "number" : "0.25",
    "unit" : "",
    "incredient" : "Limette(n)"
},
{
    "number" : "0.025",
    "unit" : "TL",
    "incredient" : "Salz"
},
{
    "number" : "0.25",
    "unit" : "TL",
    "incredient" : "Cayennepfeffer"
},
{
    "number" : "25",
    "unit" : "g",
    "incredient" : "Joghurt"
},
{
    "number" : "0.25",
    "unit" : "TL",
    "incredient" : "Kurkumapulver"
},
{
    "number" : "0.5",
    "unit" : "",
    "incredient" : "Knoblauchzehe(n)"
},
{
    "number" : "0.25",
    "unit" : "TL",
    "incredient" : "Garam Masala"
},
{
    "number" : "0.5",
    "unit" : "Stück(e)",
    "incredient" : "Ingwerwurzel, gerieben"
},
{
    "number" : "150",
    "unit" : "g",
    "incredient" : "Hänchenbrust"
},
{
    "number" : "13.5",
    "unit" : "g",
    "incredient" : "Butter"
},
{
    "number" : "150",
    "unit" : "g",
    "incredient" : "Tomaten, passiert"
},
{
    "number" : "25",
    "unit" : "g",
    "incredient" : "Sahne"
}
];

let textOfPreparation = `Für die Marinade den Ingwer reiben und den Knoblauch pressen, beides in einer Schüssel vermischen. 
                        <br>
                        Das Fleisch in mundgerechte Stücke schneiden und mindestens 2 Stunden in die Marinade legen.
                        <br><br>
                        25g Butter in einer großen Pfanne schmelzen, erst dann das Fleisch dazugeben und rundherum braten. 
                        <br>
                        Das Fleisch aus der Pfanne nehmen und zur Seite legen.
                        <br><br>
                        Für die Sauce:
                        <br>
                        Die Zwiebel würfeln. Den Ingwer reiben. Butter in die Pfanne geben und die Zwiebeln darin andünsten. 
                        <br>
                        Die restlichen Gewürze dazugeben und anrösten. Mit den passierten Tomaten ablöschen und 
                        <br>
                        20 Minuten bei schwacher Hitze kochen lassen.
                        <br><br>
                        Die Sauce anschließend mit Stabmixer pürieren. Die Sahne hinzugeben.
                        <br>
                        Das Fleisch hinzugeben und 10 Minuten ziehen lassen.`



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
    document.getElementById("totalTime").innerHTML = `Gesamtzeit ca. ${incredients[0].totalTime} Minuten`;

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
    let amountPerLine = "";
    let incredientPerLine = "";

    for(let i = 1; i != incredients.length; i++){

        if(parseFloat(incredients[i].number) > 0){
            let amount =  parseFloat(incredients[i].number) * portions
            amount = amount.toFixed(2);
            amountPerLine = amount + " " + incredients[i].unit;
            incredientsPerLine = incredients[i].incredient;
        }
        else{
            // textPerLine = incredients[i].unit + " " + incredients[i].incredient;
            amountPerLine = "";
            incredientsPerLine = incredients[i].unit + " " + incredients[i].incredient;

        }
        

        if(color == "gray"){
            // document.getElementById("ingredientsContainer").innerHTML += `<div class="grayLine"><p>${textPerLine}</p></div>`;
            document.getElementById("ingredientsContainer").innerHTML += `
                <tr class="grayLine">
                    <td class="tableRadiusLeft">${amountPerLine}</td>
                    <td class="tableRadiusRight">${incredientsPerLine}</td>
                </tr>`;
            color = "white";
        }
        else{
            // document.getElementById("ingredientsContainer").innerHTML += `<div class="whiteLine"><p>${textPerLine}</p></div>`;
            document.getElementById("ingredientsContainer").innerHTML += `
                <tr class="whiteLine">
                    <td class="tableRadiusLeft">${amountPerLine}</td>
                    <td class="tableRadiusRight">${incredientsPerLine}</td>
                </tr>`;
            color = "gray";
        }
    }
    
}

