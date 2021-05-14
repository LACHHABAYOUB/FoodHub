import LocalStorageUtil from './LocalStorageUtil'

const cartItems = "cartItems";

function storeToken(token){
    LocalStorageUtil.store(cartItems, token);
}

function getToken(){
    return LocalStorageUtil.get(cartItems);
}

function clearToken(){
    return LocalStorageUtil.remove(cartItems);
}

export default {storeToken, getToken, clearToken}