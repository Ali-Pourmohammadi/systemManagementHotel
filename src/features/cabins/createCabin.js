import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormState } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin(){
    
    const queryClient = useQueryClient();
    //create cabin mutation
    const { isLoading: isCreating, mutate: createCabin } = useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("cain created successfully"), 
        queryClient.invalidateQueries(["cabin"]);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

    return{createCabin , isCreating};
}