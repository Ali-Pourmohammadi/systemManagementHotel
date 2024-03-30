import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useSignup(){
const {mutate:signUp , isLoading , error} = useMutation({
    mutationFn: signupApi,
    onSuccess:()=>{
        toast.success("you're account created successfully \n please verify your account");
    } , 
    onError:()=>{
        toast.error("something wrong ! please try again later");
        console.log({theError: error});
    },

})
return {signUp ,isLoading };
}