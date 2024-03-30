import { useMutation, useQueryClient } from "@tanstack/react-query";
import {logout as logoutApi} from "../../services/apiUser"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function KosnneReact(){
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {mutate : logout , isLoading} = useMutation({
    mutationFn:logoutApi,
    onSuccess:()=>{
      toast.success("you're logged out!");
      queryClient.removeQueries();
      navigate('/login');
    }
  })
  return {logout , isLoading};
}