import supabase from "./supabase";


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



export{getCabins , deleteCabin}