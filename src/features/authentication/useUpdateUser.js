import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateUser(){
const {mutate  : updateUser , isLoading} = useMutation({
    mutationFn:updateCurrentUser,
    onSuccess:()=>{
        toast.success("you're account edited successfully");
    },
    onError:()=>{
        toast.error("couldn't edit your account. please try again later!");
    }
})    
return{updateUser , isLoading};
}