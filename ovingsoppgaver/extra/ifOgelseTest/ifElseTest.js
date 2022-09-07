// variabler for å lagre personal info
const alder = 29;
const harForerKort = true;

// html elementer som sklal manipuleres

const over18 = document.getElementById("over18");
const forerKort = document.getElementById("forer-kort");

// if test for å sjekke om alder er over 18

if (alder >= 18) {
  over18.innerHTML = "Ja";

  // hvis betingelsene er møtt over, kan personen muligens også ha førerkort
  // ny if test for å sjekke om personen har førerkort inni første if-test

  if (harForerKort === true) {
    forerKort.innerHTML = "ja";
  } else {
    forerKort.innerHTML = "nei";
  }
} else {
  over18.innerHTML = "Nei";
}
