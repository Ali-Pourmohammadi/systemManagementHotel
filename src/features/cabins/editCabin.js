import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export default function useEditCabin(){
    const queryClient = useQueryClient();
    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("cain edited successfully");
          queryClient.invalidateQueries(["cabin"]);
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
      return{ isEditing , editCabin}
}