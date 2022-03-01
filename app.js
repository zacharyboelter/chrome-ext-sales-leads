const inputBtn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

function printLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
    }
}

printLeads();