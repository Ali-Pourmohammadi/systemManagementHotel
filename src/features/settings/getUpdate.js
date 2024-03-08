import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useGetUpdate(){
 const {isLoading , data:settings  } = useQuery({
    queryKey : ["update"],
    queryFn : getSettings
 })    

 return {isLoading , settings};
 
}