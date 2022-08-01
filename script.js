const API_LINK = "https://api.adviceslip.com/advice";
const adviceNum = document.getElementById('num')
const adviceText = document.getElementById('text')
const fetchBTN = document.getElementById('button')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    return advice
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;

    adviceNum.textContent = `A D V I C E #${id}`
    adviceText.textContent = `"${advice}"`;
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;
            
    renderAdvice(advice)
};

window.addEventListener('DOMContentLoaded', () =>{
    fetchBTN.addEventListener('click', generateNewAdvice)
})