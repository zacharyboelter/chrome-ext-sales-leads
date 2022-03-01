//Dom Elements
const inputBtn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

let myLeads = [];


// Click button push to array
inputBtn.addEventListener("click", function () {
    myLeads.unshift(inputEl.value);
    console.log(myLeads);
    inputEl.value = '';
    renderLeads();
})


// return and display array values
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=`
                    <li>
                        <a href='${myLeads[i]}' target="_blank">
                            ${myLeads[i]}
                        </a>
                     </li>
    `;
    }
    ulEl.innerHTML = listItems;
}