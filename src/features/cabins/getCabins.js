import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export default function useGetCabins(){
    const {
        data: cabins,
        isLoading,
      } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
      });

      return {cabins , isLoading};
}