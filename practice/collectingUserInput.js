document.querySelector(".saveBTN").addEventListener("click", event => {
  const creator = document.querySelector("#lego__creator").value
  const color = document.getElementById("colors").value
  const shape = document.getElementById("lego__shape").value
  const creation = document.getElementById("lego__creation").value

  const legoToSave = {
      lego__creator: creator,
      lego__color: color,
      lego__shape: shape,
      lego__creation: creation
  }

  fetch("http://localhost:3000/legocreations",{
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(legoToSave)

  })
})

