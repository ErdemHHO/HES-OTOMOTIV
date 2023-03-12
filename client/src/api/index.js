import axios from 'axios'

const url='/admin/category';
const url1='/admin/series';
const url2='/admin/car';


export const kategorileriGetir=()=>axios.get(url);  
export const kategoriOlustur=(newCategory)=>axios.post(url,newCategory)

export const serilerGetir=()=>axios.get(url1);  
export const seriOlustur=(newSeri)=>axios.post(url1,newSeri);  

export const arabalarGetir=()=>axios.get(url2);  
export const arabaOlustur=(newCar)=>axios.post(url2,newCar);  