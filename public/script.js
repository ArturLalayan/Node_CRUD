function sendData() {
    let nameInput = document.getElementById('name').value;
    let ageInput = document.getElementById('age').value;
        fetch('/addName', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name : nameInput, age : ageInput})
        })
    

        
}



// btn = document.getElementById("sumbit").addEventListener("click", myFunction);
// input = document.getElementsByName('name');

// function myFunction() {
//     console.log(input.value);
//   }