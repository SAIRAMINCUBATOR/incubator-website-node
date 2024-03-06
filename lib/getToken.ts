"use client"
export const getToken =  () => {
    const token = sessionStorage.getItem("token");
    if (!token){
        return null;
    }
    return token;
}