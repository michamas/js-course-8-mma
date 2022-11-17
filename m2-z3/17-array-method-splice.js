// array method splice

const ns = [1,2,3,4,5];


// deleting
// let deleted = ns.splice(0,3) // deletes elements from <0, 3) (non inclusive)
// let deleted = ns.splice(-2) // deletes last two elements

// console.log(deleted,ns)


// adding
ns.splice(2, 0, 'jestem nowy') // add a new element at index 2
// ns.splice(2, 0, 'jestem nowy', 'ja też') // add 2 new elements starting index 2

// ns.splice(2,1,'jestem nowy') // change one
// ns.splice(2,1,'jestem nowy', 'ja też') // change one and add another
// ns.splice(2,2,'jestem nowy', 'ja też') // change two
// ns.splice(2,2,'jestem nowy') // changes one, and deletes another
console.log(ns)
