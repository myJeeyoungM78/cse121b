/* W05: Programming Tasks */

/* Declare and initialize global variables */
const emojiElement = document.getElementById('emojis');
const filterGroupElement = document.getElementById('filterGroup');
const filterCategoryElement = document.getElementById('filterCategory');


let emojiList = new Array;
let emojiGroups = new Array;
let emojiCategory = new Array;
/* async displayTemples Function */
const displayEmojis = (emojis) => {

    emojis.forEach((element) => {
        const article = document.createElement('article');
        const t_name = document.createElement('h3');
        t_name.innerText=element.name;
        const e_img = document.createElement('h1');
        e_img.innerHTML=element.htmlCode;

        const tip = document.createElement('span');
        tip.setAttribute('class', 'tooltiptext');
        tip.innerText=element.unicode;
        article.appendChild(t_name);
        article.appendChild(e_img);
        article.appendChild(tip);
        emojiElement.appendChild(article);
    });
}

const getEmojiGroups = (emojis) => {

    console.log('process emoji groups');
    console.log(emojis);

    emojis.forEach((element) => {
        if (!emojiGroups.includes(element.group))
        {
            emojiGroups.push(element.group);
        }

        if (!emojiCategory.includes(element.category))
        {
            emojiCategory.push(element.category);
        }
    });
}

const setGroupFilters = (groups) => {

    groups.forEach((element) => {
        const filter = document.createElement('option');
        filter.setAttribute('value', element);
        filter.innerText=element;

        filterGroupElement.appendChild(filter);
    })
}

const setCategoryFilters = (category) => {

    category.forEach((element) => {
        const filter = document.createElement('option');
        filter.setAttribute('value', element);
        filter.innerText=element;

        filterCategoryElement.appendChild(filter);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://emojihub.yurace.pro/api/all');

    if (response.ok)
    {
        const t_list = await response.json();
        emojiList = t_list;
        getEmojiGroups(emojiList);
        setGroupFilters(emojiGroups);
        setCategoryFilters(emojiCategory);
        displayEmojis(emojiList);
    }
}

/* reset Function */
function reset(filterID){
    document.getElementById(filterID).selectedIndex=0;
    while(emojiElement.firstChild)
    {
        emojiElement.removeChild(emojiElement.lastChild)
    }
}

/* filterTemples Function */

function filterEmojiGroup(emojis) {
    console.log('Filtering emoji group page');
    reset('filterCategory');
    let filter = document.getElementById('filterGroup').value;
    let list = emojis.filter(emoji => emoji.group.includes(filter));
    updateTitle(list);
    displayEmojis(list);
}

function filterEmojiCategory(emojis) {
    console.log('Filtering emoji category page');
    reset('filterGroup');
    let filter = document.getElementById('filterCategory').value;
    let list = emojis.filter(emoji => emoji.category.includes(filter));
    updateTitle(list);
    displayEmojis(list);
}

function updateTitle(emojis){
    const e_html= emojis[(Math.floor(Math.random()*emojis.length))];
    const h2=document.getElementById('gridly').getElementsByTagName('h2').item(0);
    h2.innerHTML=e_html.name + e_html.htmlCode;
    document.getElementById('gridly').getElementsByClassName('scrolling-text').item(0).innerHTML=e_html.htmlCode;
    scrollleft();
}

function scrollleft() {
    setTimeout(scrollleft, 25);
}

getTemples();


/* Event Listener */
document.querySelector("#filterGroup").addEventListener("change", () => {filterEmojiGroup(emojiList)});
document.querySelector("#filterCategory").addEventListener("change", () => {filterEmojiCategory(emojiList)});

