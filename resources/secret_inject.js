function secretInjectKey() {
    fetch('secret.txt')
        .then(response => response.text())
        .then(secretkey => {
            document.getElementById('tokenInput').value = secretkey;
        }).catch(error => {
            console.error('Error reading the secret key file:', error);
        });
}

window.addEventListener("load", () => {secretInjectKey()})