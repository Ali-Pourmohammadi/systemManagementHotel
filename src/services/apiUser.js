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
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

// sign out 
export async function logout(){
const {error} =  await supabase.auth.signOut();
if(error) throw new Error(error.message);
}

// sign up user
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}