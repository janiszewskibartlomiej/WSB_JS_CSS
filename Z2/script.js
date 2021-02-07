document.addEventListener("DOMContentLoaded", function (event) {

    const dogType = document.getElementById("dog_type");

    const amount = document.getElementById("amount");

    axios.get("https://dog.ceo/api/breeds/list").then(response => {
        response.message.forEach(c => {
            const option = createOption(c);
            dogType.append(option);
        })
    });
    [1, 2, 3, 4, 5].forEach(c => {
        const option = createNumberOption(c);
        amount.append(option)
    })
});

function createOption(val) {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = val;
    return option;
}

function createNumberOption(list) {
    const option = document.createElement("option");
    option.value = list;
    option.innerText = list;
    return option;
}

function createImage(src) {
    const image = document.createElement("img");
    image.src = src;

    return image;
}

function createJokeDiv(joke) {
    const div = document.createElement("div");
    div.innerText = joke;
    return div;
}

function generateJoke() {

    const category = document.getElementById("categories").value;
    const jokeDiv = document.getElementById("joke-div");

    jokeDiv.innerHTML = "";

    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(response => {

        const image = createImage(response.data.icon_url);
        const joke = createJokeDiv(response.data.value);

        jokeDiv.append(image);
        jokeDiv.append(joke);
    })
}

