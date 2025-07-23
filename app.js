const tag = document.getElementById("joke-display");

const fetchJoke = async () => {
  try {
    tag.innerHTML = `<em>Loading a fresh joke... 🤔</em>`;
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );
    const data = await response.json();

    let jokeContent = "";

    if (data.type === "single") {
      jokeContent = `<p>${data.joke}</p>`;
    } else {
      jokeContent = `<p>${data.setup}</p><hr/><p><strong>${data.delivery}</strong></p>`;
    }

    tag.innerHTML = jokeContent;
  } catch (error) {
    tag.innerHTML =
      "<p>😢 Oops! Couldn't fetch a joke right now. Try again later.</p>";
    console.error("Error fetching joke:", error);
  }
};
