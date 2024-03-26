/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useQuery, useQueryClient ,  } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
export function useBookings(){
  const [searchParam] = useSearchParams();
  const filterValue = searchParam.get("status");
  const queryClient = useQueryClient()
  // FILTER
  const filter = !filterValue || filterValue === "all"  ? null : {field :"status" , value : filterValue , method :"eq"}
  // PAGINATION 
  const page = !searchParam.get("page")
  ? 1
  : Number(searchParam.get("page"));
  // query
    const {
        data: {data : bookings , count} = {} ,
        isLoading,
      } = useQuery({
        queryKey: ["bookings" , filter , page],
        queryFn:()=> getBookings({filter , page}),
      });

      //prefetching
      const pageCount  = Math.ceil(count  / PAGE_SIZE);
      if( page <pageCount)
      queryClient.prefetchQuery({
        queryKey: ["bookings" , filter , page + 1],
        queryFn:()=> getBookings({filter , page: page +1}),
      })


      if( page > 10)
      queryClient.prefetchQuery({
        queryKey: ["bookings" , filter , page  -1],
        queryFn:()=> getBookings({filter , page: page -1}),
      })
    return {bookings , isLoading , count  }
}