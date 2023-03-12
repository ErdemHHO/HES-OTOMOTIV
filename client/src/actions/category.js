import * as api from '../api'

export const getCategory=()=>async(dispatch)=>{
    try {
        const {data}=await api.kategorileriGetir();
        const action={type:"FETCH_ALL_CATEGORIES",payload:data};
        dispatch(action);
    } catch (error) {   
        console.log(error.message)
    }
}

export const createCategory=(Category)=>async(dispatch)=>{

    try {
        const {data}=await api.kategoriOlustur(Category);
        dispatch({type:'CREATE_CATEGORIES',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}