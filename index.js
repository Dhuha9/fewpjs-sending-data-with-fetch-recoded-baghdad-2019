// Add your code here
function submitData(name, mail) {
    let formData = {
        userName: name,
        email: mail
    };
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObject).then(res => res.json()).then(obj => {
        let div = document.createElement("div")
        div.innerHTML = obj.id
        document.getElementsByTagName("body")[0].appendChild(div)
    }).catch(error => {
        let div = document.createElement("div")
        div.innerHTML = error
        document.getElementsByTagName("body")[0].appendChild(div)
    })
}