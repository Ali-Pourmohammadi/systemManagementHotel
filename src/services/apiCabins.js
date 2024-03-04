/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";


// get cabins
  async function getCabins(){


const { data , error } = await supabase.from("cabins")
.select('*')

if(error){
    console.log(error)
    throw new Error("cabins could not be loaded");
}
return data;
}

// delete cabins
  async function deleteCabin(id){

const { data  , error } = await supabase
.from('cabins')
.delete()
.eq("id", id)

if(error){
    console.log(error)
    throw new Error("cabins could not be deleted");
}
return data;
}

 async function  createCabin(newCabin){
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/" , "");


  // https://uslbsswtdsqvidiakgel.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  
  const imagePath =`${supabaseUrl}//storage/v1/object/public/cabin-images/${imageName}`
  const { data, error } = await supabase
  .from('cabins')
  .insert([ {...newCabin , image:imagePath}])
  .select()
  if(error){
    console.log(error)
    throw new Error("cabins could not added");
}
const {  error:errorStorage } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image, {
    cacheControl: '3600',
    upsert: false
  })

  // deleting cabin if the image dosnt upload on storage
  if(errorStorage){
    
await supabase.from('cabins')
.delete()
.eq('id', data.id)

  }
return data;
}


export{getCabins , deleteCabin , createCabin}