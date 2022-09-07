

// Lager array
const shoppinglist = [
    "Melk",
    "Egg",
    "Brød",
    "Epler",
    "Ost"
]
// gjør klar variabel med tom tekst-streng klar for print out
let printout = "" 


/*bruker metoden .map for å gå igjennom alle radene i arrayen Også adde på utskriften <li>item</li> til variabelen printout med tom tekststreng
Inne i parentesene til .map() lager vi en arrow-funksjon, hvor syntaxen ser slik ut:
(parameter eller navnet på funksjonen) => { //kode som kjører, kan bruke parameter }
*/

shoppinglist.map(
    (itemsinlist) => {
        printout += `<li>${itemsinlist}</li> `
    }
)

// skriver ut til ID shoppinglist 

document.getElementById("shoppingList").innerHTML = printout


