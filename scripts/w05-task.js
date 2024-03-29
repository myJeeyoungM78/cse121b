/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = new Array;
/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((element) => {
        const article = document.createElement('article');
        const t_name = document.createElement('h3');
        t_name.setAttribute("templeName", element.templeName);
        const t_img = document.createElement('img');
        t_img.setAttribute('src', element.imageUrl);
        t_img.setAttribute('alt', element.location);
    
        article.appendChild(t_name);
        article.appendChild(t_img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response.ok)
    {
        const t_list = await response.json();
        templeList = t_list;
        displayTemples(templeList);
        console.log(templeList);
    }
}

/* reset Function */
function reset(){
    while(templesElement.firstChild)
    {
        templesElement.removeChild(templesElement.lastChild)
    }
}

/* filterTemples Function */

function filterTemples(temples) {
    console.log('Filtering temple page');
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case'utah':
        let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes('utah'));
        displayTemples(utahTemples);
        break;
        case'notutah':
        let notUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes('utah'));
        displayTemples(notUtahTemples);
        break;
        case'older':
        let oldDate = new Date(1950, 0, 1);
        let older = temples.filter(temple =>{
            let date = new Date(temple.dedicated);
            return date < oldDate;
        });
        displayTemples(older);
        break;
        case'all':
        displayTemples(templeList);
        break;
        case'alphabetically':
        let alpha = temples.sort(function(a,b){return a.templeName.localeCompare(b.templeName);});
        displayTemples(alpha);
        break;

    }
}

getTemples();


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
