let tag = document.getElementById("joke-display");

const fetchJoke = async () => {
    try {
        const response = await fetch(
            'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
        );
        const data = await response.json();

        if (data.type === "single") {
            tag.innerHTML = data.joke; 
        } else {
            tag.innerHTML = `${data.setup} - ${data.delivery}`; 
        }

        console.log(data);
    } catch (error) {
        console.error("Error fetching joke:", error);
        tag.innerHTML = "Oops! Couldn't fetch a joke right now.";
    }
};
