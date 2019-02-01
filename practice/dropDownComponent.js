
   fetch("http://localhost:3000/colors")
      .then(response => response.json())
      .then(parsedColors => {
        parsedColors.forEach(color => {
        console.log(parsedColors)
        let dropDown = document.querySelector("#colors")
        dropDown.innerHTML += `<option value="${color.id}">${color.name}</option>`
        })
      })

