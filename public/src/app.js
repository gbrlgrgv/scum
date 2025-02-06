const tablica = document.getElementById("tablica");
const todayDate = document.getElementById("todayDate");
const tcells = document.querySelectorAll("#tablica tbody tr td");
const button = document.getElementById("add8days");


let firstData = new Date(2025,1,5);
const today = new Date();
// console.log(firstData);
// console.log(today.toISOString().split("T")[0]);

todayDate.textContent = `Днешна дата: ${today.getDate()}.${today.getMonth()+1}  / Час: ${today.getHours()}:${today.getMinutes()}`;

function color (){
tcells.forEach(element => { 
    element.classList.remove("normal");
    element.classList.remove("active");
    element.classList.remove("unactive");
    element.classList.remove("next");

    if(element.textContent === ""){
        element.classList.add("normal");
    } else if(element.textContent === `${today.getDate()}.${today.getMonth()+1}`){
        element.classList.add("active");
    } else if (element.textContent === `${today.getDate()+1}.${today.getMonth()+1}`) {
        element.classList.add("next");
    } else {
        element.classList.add("unactive");  
    }
});
}

color();

button.addEventListener("click", () => {
    tcells.forEach(element => {
        if(element.textContent !== ""){
            let elDateText = element.textContent.split(".");
            let elDate = new Date(2025, elDateText[1]-1, elDateText[0]);
            
            // element.textContent = `${elDate.getDate()+8}.${elDate.getMonth()+1}`
            let newDate = new Date(2025, elDate.getMonth(), elDate.getDate()+8);
            
           element.textContent = `${newDate.getDate()}.${newDate.getMonth()+1}`;
        }
    });
    color();
});