function store(key, value){
    localStorage.setItem(key, value);
}

function get(key){
    return localStorage.getItem(key);
}

function remove(key){
    localStorage.removeItem(key);
}


export default {store, get, remove}