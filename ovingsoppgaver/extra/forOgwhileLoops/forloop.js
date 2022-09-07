const names = [
  "Niklas",
  "Haugland",
  "Mailén",
  "Amundsen",
  "Maria",
  "Eliza",
  "Harry",
  "Potter",
];

document.getElementById("utskrift").innerHTML = names.join(" <-> ");

for (name of names) {
  console.log(name);
  if (name === "Maria") {
    console.log("maria is in my list!");
    break;
  }
}

let loading = 0 

while(loading < 100){
    console.log("Loading a 100 times...")

    loading++ 
}


