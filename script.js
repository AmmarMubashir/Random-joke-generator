const jokeContainer = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";


const getJoke = async function(){
    let item = await fetch(url);
    const data = await item.json();
    jokeContainer.textContent = `${data.joke}`;
}

btn.addEventListener('click' , getJoke);