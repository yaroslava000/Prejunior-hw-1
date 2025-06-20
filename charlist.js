let characters = [];
let nextId = 1;

const form = document.getElementById('character-form');
const input = document.getElementById('character-input')
const list = document.getElementById('character-list');
const renderCharacters = () => {
    list.innerHTML = '';
    characters.forEach(character => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${character.name}</span>
        <button class="delete-button" onclick="deleteCharacter(${character.id})">delete</button>
        `;
        list.appendChild(li);
    });
}
const addCharacter = (name, id = nextId++) => {
    const character = {id, name};
    characters.unshift(character);
    renderCharacters();
}
const deleteCharacter = (id) => {
    characters = characters.filter(char => char.id !== id);
    renderCharacters();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = input.value.trim();
    if (name) {
        addCharacter(name);
        input.value = '';
    }else {
        alert('this form cant be empty');
    }
});

const loadCharactersFromAIP = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        const data = await response.json();
        characters = data.map(user => ({
            id: user.id,
            name: user.name
        }));
        nextId = Math.max(...characters.map(c => c.id)) + 1;
        renderCharacters();
    }catch (error) {
        alert('failed to load');
    }
}

document.addEventListener('DOMContentLoaded', loadCharactersFromAIP);