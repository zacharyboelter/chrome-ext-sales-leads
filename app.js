//Dom Elements
const inputBtn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

let myLeads = [];
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

// Click button push to array
inputBtn.addEventListener("click", function () {
    myLeads.unshift(inputEl.value);
    //clear input field
    inputEl.value = '';
    //set leads to local storage by converting array to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    renderLeads();

    console.log( localStorage.getItem("myLeads") )
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