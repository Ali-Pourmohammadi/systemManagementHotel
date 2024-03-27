import { useQuery } from "@tanstack/react-query";
import { currentUser } from "../../services/apiUser";

export function useUser(){
    const {data : user , isLoading , error} = useQuery({
        queryKey:["user"],
        queryFn : currentUser,
        retry:false
    })
    return {user , isLoading   , isAuth :user?.role === "authenticated"}

}