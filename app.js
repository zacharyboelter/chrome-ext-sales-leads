//Dom Elements
const inputBtn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');

let myLeads = [];
// convert string back to array from local storage and store in var
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));

// if local is truthy, display the leads
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// Click button push to array
inputBtn.addEventListener("click", function () {
    myLeads.unshift(inputEl.value);
    //clear input field
    inputEl.value = '';
    //set leads to local storage by converting array to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);

    console.log( localStorage.getItem("myLeads") )
})


// button that captures the current url page using chrome API
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
        
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// return and display array values
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=`
                    <li>
                        <a href='${leads[i]}' target="_blank">
                            ${leads[i]}
                        </a>
                     </li>
    `;
    }
    ulEl.innerHTML = listItems;
}