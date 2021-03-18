// Snack 1)
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
$(document).ready(function(){
    var bici = [
        {
            "nome" : "francesca",
            "peso" : 25,
        },
        {
            "nome" : "carla",
            "peso" : 45,
        },
        {
            "nome" : "giulia",
            "peso" : 10,
        },
        {
            "nome" : "leopolda",
            "peso" : 100,
        }
        
    ]
    let bikie = bici[0];
    bici.forEach((element) => {
        if ( element.peso < bikie.peso) {
            bikie = element;
        }
    });
    const {nome, peso} = bikie;
    console.log(`${nome} ${peso}`);



// Snack2) Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    var squadre = [
        {
            nm : "juve",
            puntiFatti : 0, 
            falliSubiti : 0,
        },
        {
            nm : "inter",
            puntiFatti : 0,
            falliSubiti : 0,
        },
        {
            nm : "milan",
            puntiFatti : 0,
            falliSubiti : 0,
        },
    ]
    var teamArray = [];
    squadre.forEach((element) => {
        var {nm, puntiFatti, falliSubiti} = element;
        puntiFatti = rdmNum(100, 1);
        falliSubiti = rdmNum(100, 1);
        teamArray.push({falliSubiti});
        teamArray.push({nm});
        
    }); 
    console.log(teamArray);

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

    var nArray = [1,2,3,4,5,6,7,8,9,10];
    
    console.log(exmpl(nArray, 1, 10));





});

function exmpl(array, a, b) {   
    const filtered = array.filter((element) => {
        return element > a && element < b;
    }); return filtered;
};
                          
function rdmNum(max, min){
    var rdm =Math.floor(Math.random()*(max - min + 1)) - min;
    return rdm;
};