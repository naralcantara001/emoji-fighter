const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button,
    let fighter1 = fighters[Math.floor(Math.random() * fighters.length)]
    let fighter2 = fighters[Math.floor(Math.random() * fighters.length)]
    stageEl.textContent = fighter1 + " VS" + fighter2
    // pick two random 
    // emoji fighters and display them as i.e. 
    //"🦀 vs 🐢" in the "stage" <div>.  
})

