// lager Objekt med string, nummer, boolean og array

const user = {
  name: "Niklas",
  alder: 29,
  gift: false,
  kjop: ["Fanta", 
        "Dopapir", 
        "Nesespray"],
  
  
        // lager funksjon inne i objektet, kaller den for sayName og console.logger this
  sayName: function () {
    // THIS refererer til navnet på objektet og blir ikke definert før vi kjører funksjonen sayName()
    console.log(this.name);
  },
};


// kjører funksjonen med navnet på objektet og navnet på fuksjonen inni objektet
user.sayName();

// skriver ut til html elementet med id utskrift
document.getElementById("utskrift").innerHTML =
  user.name + " er " + user.alder + " År ";

// THIS
