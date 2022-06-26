let appleShelf = document.querySelector('.apple-shelf');
let orangeShelf = document.querySelector('.orange-shelf');
let sortButton = document.querySelector('.sort');
let isEmpty = true

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]


sortButton.addEventListener('click', () => {
    if(isEmpty === true){
        run()
    }
})

function run(){
    for(i=0; i <fruit.length; i++){
        let apple = fruit[i]
        let orange = fruit[i]
 
        if(apple === "🍎"){
         appleShelf.textContent += apple
         isEmpty = false
        }
        else if (orange === "🍊"){
         orangeShelf.textContent += orange
         isEmpty = false
        }
     }
}