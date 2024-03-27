import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useLogin(){
    const navigate = useNavigate();
    const {mutate:login , isLoading , error} = useMutation({
        mutationKey:["login"],
        mutationFn :({email , password}) => apiLogin({email, password}),
        onSuccess:()=> {toast.success("you're logged in successfully");
        navigate("/dashboard")
        },
         onError:()=>{toast.error("incorrect email or password");
         console.log(error);
        }
    })
    return {login , isLoading};
}