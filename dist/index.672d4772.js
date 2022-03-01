'use scrict';
const cardBox = document.querySelector('.card');
const btnRoll = document.querySelector('.rollDice');
const titleAdv = document.querySelector('.adviceTitle');
const textAdv = document.querySelector('.advicePiece');
const API_URL = 'https://api.adviceslip.com/advice';
const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then((response)=>{
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};
const getAdvice = function() {
    getJSON(`${API_URL}`).then((data)=>{
        const id = data.slip.id;
        const advice = data.slip.advice;
        titleAdv.textContent = `advice #${id}`;
        textAdv.textContent = `${advice}`;
    }).catch((err)=>console.error(`${err.message} 💥`)
    );
};
btnRoll.addEventListener('click', function() {
    getAdvice();
});

//# sourceMappingURL=index.672d4772.js.map
