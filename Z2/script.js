document.addEventListener("DOMContentLoaded", function (event) {

    const dogType = document.getElementById("dog_type");

    const breed = document.getElementById("breed");

    axios.get("https://dog.ceo/api/breeds/list").then(response => {
        response.data.message.forEach(c => {
            const option = createOption(c);
            dogType.append(option);
        })
    });
    axios.get("https://dog.ceo/api/breed/hound/list").then(response => {
        response.data.message.forEach(c => {
            const option = createOption(c);
            breed.append(option)
        })
    });

    function createOption(val) {
        const option = document.createElement("option");
        option.value = val;
        option.innerText = val;
        return option;
    }


    function createImage(src) {
        const image = document.createElement("img");
        image.src = src;

        return image;
    }

    function createDiv(txt) {
        const div = document.createElement("div");
        div.innerText = txt;
        return div;
    }

    function addImg() {

        const dog = document.getElementById("dog_type").value;
        const imgDiv = document.getElementById("img-div");

        imgDiv.innerHTML = "";

        let string = `https://dog.ceo/api/breed/${dog}/images/random`

        axios.get(string).then(response => {
            console.log(response)
            const image = createImage(response.data.message);
            const txt = createDiv(response);

            imgDiv.append(image);
            imgDiv.append(txt);
        })
    }
})

