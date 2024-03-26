import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking(){
    const {bookingId} = useParams();
    const {data : booking, isLoading , error} = useQuery({
        queryKey : ["booking"],
        queryFn :()=> getBooking(bookingId),
        retry:false
    })
    return {bookingId , booking , isLoading}
}