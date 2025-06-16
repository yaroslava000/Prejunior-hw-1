const characters = [
    {
    name: "Ellie",
    age: 19,
    isImmune: true,
    location: { city: "Jackson", zone: "+-Safe" },
    aging() {
        this.age += 1;
    }
    },
    {
    name: "Joel",
    age: 50,
    isImmune: false,
    location: { city: "Boston", zone: "Quarantine" },
    aging() {
        this.age += 1;
    }
    }
];
characters.shift();
characters.push({
    name: "Dina",
    age: 20,
    isImmune: false,
    location: { city: "Jackson", zone: "+-Safe" },
    aging() {
        this.age += 1;
    }
})
const charactersIndex = characters.map((char, index) => ({...char, id: index}));
const filtered = charactersIndex.filter(char => char.isImmune);
filtered.forEach(char => {
    console.log(`${char.id}. ${char.name}`);
});
const sum = charactersIndex.reduce((acc, char) => acc + char.age, 0);
console.log("Total age:", sum);
const someFunc = () => {
    const fetchData = async () => {
        console.log("start")
        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const data = await result.json()
            console.log(data)
        } catch(e) {
            console.log("error:", e)
        }

        console.log("finish")
    }

    fetchData()
}

someFunc()