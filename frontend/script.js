console.log('hello');

const API_KEY = 'iFJicMgqV8OhtthZYViR4wZhJiMQdoHcjlC0rC7o';
const API_DATE = `2023-05-10`;
const rootElement = document.querySelector("#root");

/*const fetchApod = async function () {
   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date${API_DATE}`)
   const apodData = await response.json()
   console.log(apodData)

   const h1 = document.createElement('h1');
   h1.innerText = apodData.title;

   const img = document.createElement('img');
   img.src = apodData.url;

   rootElement.append(h1, img)
   /*console.log (response);

   if (response.status === 200) {
    console.log('fetch was succesful');

    const messageDiv = document.createElement('div');
    messageDiv.innerText = "fetch was succesful";
    rootElement.append(messageDiv);

    const apodData = response.json();

   } else {
    console.log('fetch was unsuccesful');

    const messageDiv = document.createElement('div');
    messageDiv.innerText = "fetch was unsuccesful";
    rootElement.append(messageDiv);
   } itt volt a komment zárója
}

fetchApod();*/

/*const fetchApod2 = function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date${API_DATE}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (apodData) {
        const h1 = document.createElement('h1');
        h1.innerText = apodData.title;

        const img = document.createElement('img');
        img.src = apodData.url;

        rootElement.append(h1, img);
    })
}
fetchApod2();*/

const fetchApod = async function(url) {
    const response = await fetch(url)
    const apodData = await response.json() 
    return apodData
  }
  
  const fetchApod2 = async function(url) {
    return fetch(url)
            .then((response) => response.json())
            .then((apodData) => apodData)
  }
  
  const createApodElement = function(title, url) {
    const h1 = document.createElement('h1')
    h1.innerText = title
  
    const img = document.createElement('img')
    img.src = url
  
    rootElement.append(h1, img)
  }
  
  const init = async function() {
    const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
    createApodElement(apodData.title, apodData.url)
  }
  
  init()