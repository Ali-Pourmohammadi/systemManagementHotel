import supabase from "./supabase"

//  login user
export  async function login({email,password}){

    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      
  if(error){
    throw new Error("couldn't login user!");
  }
  return data
}


// get current user
export async function currentUser(){
  try {
      const { data: session } = await supabase.auth.getSession();
      if (!session) return null; // No active session, return null or appropriate default value

      const { data, error } = await supabase.auth.getUser();
      if (error) {
          throw new Error(error.message);
      }
      return data.user; // Return user data or appropriate default value
  } catch (error) {
      // Handle token-related errors, such as token missing or invalid
      console.error("Error fetching current user:", error);
   
      throw error; // Rethrow the error to let the caller handle it
  }
}
// sign out 
export async function logout(){
const {error} =  await supabase.auth.signOut();
if(error) throw new Error(error.message);
}