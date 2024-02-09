function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceElement = document.getElementById('advice');
            adviceElement.textContent = data.slip.advice;
        })
        .catch(error => {
            console.log(error);
        });
}
