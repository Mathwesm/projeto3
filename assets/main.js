function createGame(player1, hour, player2) {
  return `
   <li>
              <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li> `
}

let delay = -0.3
function creatCard(date, day, games) {
  delay = delay + 0.5
  return `  
  <div class="card" style="animation-delay: ${delay}s">
   
            <h2>${date}<span>${day}</span></h2>
          <ul>
          ${games}
          
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML = `

 
      
      ${creatCard(
        "24/11",
        "quinta",
        createGame("brasil", "16:00", "suiça") +
          createGame("brasil", "12:00", "argentina")
      )}
      ${creatCard(
        "28/11",
        "segunda",
        createGame("brasil", "00:00", "argentina") +
          createGame("france", "05:00", "argentina")
      )}
        ${creatCard(
          "02/12",
          "sexta",
          createGame("brasil", "10:00", "france") +
            createGame("france", "18:00", "suiça")
        )}
       ${creatCard(
         "02/12",
         "sexta",
         createGame("belgium", "10:00", "france") +
           createGame("belgium", "18:00", "suiça")
       )}
      `
