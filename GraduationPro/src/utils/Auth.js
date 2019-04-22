import JSCookie from "js-cookie";

//设置cookie的key值
const TokenKey = "X-Token";

export const setCookie = (name,val)=>{
    //如果客户端种cookie时，需要用到setCookie
    // JSCookie.set(TokenKey,store.state.Token);
    JSCookie.set(name, val, { expires: 7 });

}

export const getCookie = (TokenKey)=>{
    return JSCookie.get(TokenKey);
}

export const removeCookie = (TokenKey)=>{
    JSCookie.remove(TokenKey);
}