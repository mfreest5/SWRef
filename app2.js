const error =  document.getElementById('error')
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZj60I1A4yZSp2PYR_xi2o0Tn2p8ybZnzDXK8RGMYnHjK66eqg/exec'
const form = document.querySelector('form')
const feedback = document.getElementById('feedback')

// feedback is using this event listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (feedback.value == "No") {
        error.innerText = 'Please provide feedback'                
    } else {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .then(() => {
                document.querySelector('#email').value = ""
                document.querySelector('#fname').value = ""
                document.querySelector('#lname').value = ""
                document.querySelector('#feedback').value = ""              

        })
        .catch(error => console.error('Error!', error.message))
    }
})