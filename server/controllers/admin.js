
import categoryShema from '../models/categories.js'
import seriesShema from '../models/series.js'
import carShema from '../models/cars.js'
import mongoose from 'mongoose';


const getCategory=async(req,res)=>{

    try {
        const category=await categoryShema.find();
        return res.status(200).json(category);
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}

const postCategory=async(req,res)=>{
    //Kategori Adı Alınıyor
    const category=req.body;
    try {
        //Şemada Aynı Kategori Var Mı ?
        const findCategory=await categoryShema.findOne(category)
        if(findCategory) return res.status(400).json({msg:'Kategori Zaten Bulunuyor'})

        //Kategori Daha Önceden Yoksa Kaydediliyor
        const newCategory=new categoryShema(category);
        await newCategory.save();
        return res.status(201).json(newCategory)
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}

const getSeries=async(req,res)=>{
    try {
        const series=await seriesShema.find();
        return res.status(200).json(series);
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}

const postSeries = async(req,res)=>{
    //Seri Adı Alınıyor
    const series = req.body;
    try {
        //Seri Daha Önceden Var Mı?
        const findSeries=await seriesShema.findOne(series)
        if(findSeries) return res.status(400).json({msg:'Seri Zaten Bulunuyor'})

        //Daha Önceden Yoksa Ekleniyor
        const newSeries=new seriesShema(series);
        await newSeries.save();
        return res.status(201).json(newSeries)
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}


const getCar=async(req,res)=>{
    try {
        const cars = await carShema.find().populate('series_id', 'seriesName');
        return res.status(200).json(cars);
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}

const postCar = async(req,res)=>{
    //Araba Adı ve Seri_id Alınıyor
    const {carName,series_id} = req.body;
    try {
        //id geçerli bir id mi ?
        if(!mongoose.Types.ObjectId.isValid(series_id)){
            return res.status(404).send('Seri Bulunamadı')
        } 
        //Seri Var Mı?
        const findSeries=await seriesShema.findOne({_id:series_id});
        if(!findSeries) return res.status(400).json({msg:'Seri Kaydı Bulunmuyor'})
        const series=findSeries.series_id;
        console.log(series);

        //Araba Daha Önceden Var Mı?
        const findCar=await carShema.findOne({carName})
        if(findCar) return res.status(400).json({msg:'Araba Zaten Bulunuyor'})

        //Araba Önceden Yoksa Ekleniyor
        const newCar=new carShema( {carName,series_id} );
        await newCar.save();
        return res.status(201).json({newCar });
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}


export{
    postCategory,getCategory,
    getSeries,postSeries,
    postCar,getCar
}