import LocalStorageUtil from './LocalStorageUtil'

const JWT = "jwt";

function storeToken(token){
    LocalStorageUtil.store(JWT, token);
}

function getToken(){
    return LocalStorageUtil.get(JWT);
}

function clearToken(){
    return LocalStorageUtil.remove(JWT);
}

export default {storeToken, getToken, clearToken}