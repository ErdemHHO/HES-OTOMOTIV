import * as api from '../api'

export const getCars=()=>async(dispatch)=>{
    try {
        const {data}=await api.arabalarGetir();
        const action={type:"FETCH_ALL_CARS",payload:data};
        dispatch(action);
    } catch (error) {   
        console.log(error.message)
    }
}

export const createCar=(Car)=>async(dispatch)=>{

    try {
        const { data} = await api.arabaOlustur(Car);
        dispatch({ type: 'CREATE_CARS', payload:data });
    } catch (error) {
        console.log(error.message);
    }
}