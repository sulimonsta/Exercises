const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// search function takes the search string str and returns matching fruit names and converts
// it to lower case for case-sensitivity and uses filter to find fruits includes in search string

function search(str) {
    let results = [];

    if (str) {
        str = str.toLowerCase();
        results = fruit.filter(fruit => fruit.toLowerCase().includes(str));
    }

    return results;
}

// searchhandler function is event listeneer for input. grabs the value the user enters and uses 
// search function above to get list of names and uses show suggestions to show the results

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

// this function displays the suggestions. it clears the content of suggestions by setting innerhtml
// to an empty string. if matching results a new li is made which contains a fruit name
// if there are suggestions it adds has-suggestions and if not it is removed to hhide the list.

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            suggestions.appendChild(li);
        });
        suggestions.classList.add('has-suggestions');
    } else {
        suggestions.classList.remove('has-suggestions');
    }
}

// an event listener for clicks on suggestions list.

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.classList.remove('has-suggestions');
    }
}

// add event listeners to input field and suggestions list

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
