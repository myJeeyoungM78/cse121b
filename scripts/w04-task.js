/* LESSON 3 - Programming Tasks */
// let photoElement = document.querySelector('#photo');
// photoElement.src = myProfile.photo.src;
// photoElement.alt = myProfile.photo.alt;
/* Profile Object  */

let myProfile = {
    name: 'Jeeyoung Madsen',
    photo: {
        src: 'images/jeeyoung.png',
        alt: 'My Profile Picture'
    },

    favoriteFoods: [
        'Kimch',
        'Seafood',
        'Sushi',
        'Korean food',
        'Noodle',
        'Ramen'
    ],

    hobbies: [
        'Watching TV',
        'Crochet',
        'Sewing',
        'Drawing',
    ],

    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
let places = [
    {
        place: 'Seoul, Korea', 
        length: '29 years'
    },

    {
        place: 'Salt Lake, UT',
        length: '2years'
    },

    {
        place: 'Moab, UT',
        length: '1years'
    },

    {
        place: 'Orem, UT',
        length: '12years'
    },
];

places.forEach(place => {
    myProfile.placesLived.push(place);
});
console.log(myProfile.placesLived);




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
}
);

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}
);

