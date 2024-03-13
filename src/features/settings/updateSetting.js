import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateApi } from "../../services/apiSettings";
import toast from "react-hot-toast";
export default function useUpdateSetting(){
    const queryClient  = useQueryClient();
    const {isLoading : updating , mutate:updateSetting} = useMutation({
    mutationFn:updateApi,

    onSuccess:()=>{toast.success("settings updated successfully") , 
    queryClient.invalidateQueries(["setting"])
} ,
     
    onError:(err)=> toast.error(`setting can;t be update ${err}`)
    })


return {updating , updateSetting};
}