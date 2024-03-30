import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiUser";

export function useUser(){
    const {data : user , isLoading , error} = useQuery({
        queryKey:["user"],
        queryFn : getCurrentUser,
        retry:false
    })
    return {user , isLoading   , isAuth :user?.role === "authenticated"}

}