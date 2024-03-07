export const createScoreElement = (score) => {
    const element = document.createElement('div');
    element.classList.add("scoreResult");
    element.innerHTML = String.raw`
    <h2 id="show-score">${`Your result is ${score}`}</h2>`;
    return element ;
}