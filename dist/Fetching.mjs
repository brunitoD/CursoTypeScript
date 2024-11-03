//fetching de datos muy basico
const API_URL = "https://api.github.com/search/repositories?q=javascript";
const response = await fetch(API_URL); // para que esto funcione debemos de tener formato .mts!!!!!!
if (!response.ok) {
    throw new Error("request failed");
}
const data = await response.json();
const repos = data.items.map(repo => {
    console.log(repo);
});
export {};
