let a = document.querySelector(".a");
// a.classList.add("block");

// a.append("adadsd");

// var lineBreak = a.append('<br/>');
// document.documentElement.scroll
let ip= document.getElementById("ip");
let js= document.getElementById("js");



var person = {
    
    "Speakers":
    [{
        name: "John",
        lastName : "Doe",
        id       : 5566
    },
    {
        name: "John",
        lastName : "Doe",
        id       : 5566
    },
    {
        name: "John",
        lastName : "Doe",
        id       : 5566
    },
    {
    name: "John",
    lastName : "Doe",
    id       : 5566 
}]


  };

//   let sq=person.Speakers.map(myFunc);
  for(let item in person.Speakers){
      
      a.appendChild('<li>' + person.Speakers[item].name+'</li>');

   

 }
