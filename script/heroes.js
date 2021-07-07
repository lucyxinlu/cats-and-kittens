//Grab a reference to the header tag in the HTML file
const header = document.querySelector('header');
//Grab a reference to the section tag in the HTML file
const section = document.querySelector('section');
/ Get the URL for the JSON file
08
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
09
     
10
// Create a request object
11
let request = new XMLHttpRequest();
12
     
13
// Set the request to GET that data from the URL
14
request.open('GET', requestURL);
15
     
16
// Tell the request that we want it back in JSON format (not a text string, but a JSON Object)
17
request.responseType = 'json';
18
     
19
// Send the request
20
request.send();
21
     
22
//Since we do not know when the request will complete, we will wait for it.
23
// When the request returns (or 'loads') we will continue processing the request
24
     
25
request.onload = function() {
26
  // Store the JSON object in superHeroes
27
  const superHeroes = request.response;
28
       
29
  // Pass superHeroes to a function to parse the header
30
  populateHeader(superHeroes);
31
       
32
  // Pass superHeroes to a function to parse the individual heroes
33
  showHeroes(superHeroes);
34
}
function populateHeader(jsonObj) {
02
  // Create a <h1> HTML element
03
  const myH1 = document.createElement('h1');
04
   
05
  // Set the text value to Super Hero Squad
06
  // by grabbing the JSON object value that corresponds to squadName
07
  myH1.textContent = jsonObj['squadName'];
08
   
09
  // Update the HTML file
10
  header.appendChild(myH1);
11
 
12
  // Create a <p> element
13
  const myPara = document.createElement('p');
14
   
15
  //Set the text value to Hometown: Metro City // Formed: 2016
16
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
17
   
18
  // Update the HTML file
19
  header.appendChild(myPara);
20
}
function showHeroes(jsonObj) {
02
 
03
  // Grab the array that contains the squads members
04
  // Once we have the array we can treat this like an ordinary array just like we did on
05
  // the page Object, Class, and Array Practice
06
  const heroes = jsonObj['members'];
07
       
08
  // Loop through the heores object array
09
  // Add information for each hero on a a time
10
  for (let i = 0; i < heroes.length; i++) {
11
   
12
    // We need to create the HTML objects that they will appear in HTML file
13
     
14
    // Create article element in the HTML file
15
    // We use the article element to create a card that will hold all of the hero's information
16
    const myArticle = document.createElement('article');
17
     
18
    // Create a <H2> heading for the hero's name
19
    const myH2 = document.createElement('h2');
20
     
21
    // Create paragraphs for the hero's secret identity, age, and superpowers
22
    const myPara1 = document.createElement('p');
23
    const myPara2 = document.createElement('p');
24
    const myPara3 = document.createElement('p');
25
     
26
    // Create a bulleted list to contain the hero's superpowers   
27
    const myList = document.createElement('ul');
28
 
29
    // Grab the hero's secret identity, age, and superpowers from the JSON Object and
30
    // update the HTML elements
31
    myH2.textContent = heroes[i].name;
32
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
33
    myPara2.textContent = 'Age: ' + heroes[i].age;
34
    myPara3.textContent = 'Superpowers:';
35
     
36
    // Grab the array that contains the hero's superpowers   
37
    const superPowers = heroes[i].powers;
38
     
39
    // Loop through the array grabbing each individual power and adding it to a bulleted list
40
    for (let j = 0; j < superPowers.length; j++) {
41
      const listItem = document.createElement('li');
42
      listItem.textContent = superPowers[j];
43
      myList.appendChild(listItem);
44
    }
45
 
46
    // Add the HTML objects in the order that they will appear in HTML article
47
    myArticle.appendChild(myH2);
48
    myArticle.appendChild(myPara1);
49
    myArticle.appendChild(myPara2);
50
    myArticle.appendChild(myPara3);
51
    myArticle.appendChild(myList);
52
     
53
    // Add the article to the HTML file
54
    section.appendChild(myArticle);
55
  }
56
}
