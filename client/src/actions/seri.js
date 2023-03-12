import * as api from '../api'

export const getSeries=()=>async(dispatch)=>{
    try {
        const {data}=await api.serilerGetir();
        const action={type:"FETCH_ALL_SERIES",payload:data};
        dispatch(action);
    } catch (error) {   
        console.log(error.message)
    }
}

export const createSeri=(Seri)=>async(dispatch)=>{

    try {
        const {data}=await api.seriOlustur(Seri);
        dispatch({type:'CREATE_SERIES',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}