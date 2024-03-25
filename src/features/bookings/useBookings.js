/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings(){
  const [searchParam] = useSearchParams();
  const filterValue = searchParam.get("status");
  
  const filter = !filterValue || filterValue === "all"  ? null : {field :"status" , value : filterValue}
    const {
        data: bookings,
        isLoading,
      } = useQuery({
        queryKey: ["bookings" , filter],
        queryFn:()=> getBookings({filter}),
        cacheTime:0
      });
    return {bookings , isLoading}
}