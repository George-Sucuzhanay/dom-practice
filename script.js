
// #### Part 7

// Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h1>` with text, and a new `<p>` with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.


let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.getElementById("main-title").innerHTML = "Welcome to Tom's Website";
  // Part 2
  document.querySelector("body").style.backgroundColor = "purple";
  // Part 3
  let myList = document.getElementById("favorite-things");
  myList.removeChild(myList.lastElementChild);
  // Part 4
  function changeStyling() {
    let thisClass = document.querySelectorAll("special-title");
    for(i = 0; i < thisClass.length; i++){
      thisClass[i].style.fontSize = "2rem";
    }
  }
  changeStyling()

  // Part 5
  function removeChild(){
    let thisList = document.getElementById("past-races");
    thisList.removeChild(thisList.children[3]);
  }
  removeChild();

  // Part 6
  function newCity() {
    let newItem = document.createElement("li");
    let text = document.createTextNode("New York");
    newItem.appendChild(text);
    document.getElementById("past-races").appendChild(newItem);
  }
  newCity()  
    // Part 7
  function newBlogPost() {
    let myDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    myDiv.className = "blog-post purple";
    h1.innerHTML = "New York";
    p1.innerHTML = "I did an awesome donut on a helipad in NYC!";
    myDiv.appendChild(h1);
    myDiv.appendChild(p1);
    let mainDiv = document.getElementsByClassName("main")[0];
    mainDiv.appendChild(myDiv);
  }
  
  newBlogPost();
}