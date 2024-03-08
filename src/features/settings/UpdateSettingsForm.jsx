import Form from "../../ui/Form";
import { FormRow } from "../../ui/FormRow";
import Spinner from "../../ui/Spinner"
import Input from "../../ui/Input";
import useGetUpdate from "./getUpdate";
import useUpdateSetting from "./updateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useGetUpdate();
  
  const {updating , updateSetting} = useUpdateSetting();
  if(isLoading) return <Spinner/>
  const handleBlur = (e , filed)=>{
    const {value} = e.target;
    if(!value) return;
    updateSetting({[filed] : value});
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isLoading}
          defaultValue={minBookingLength}
          onBlur={(e)=>handleBlur(e , "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isLoading}
          defaultValue={maxBookingLength}
          onBlur={(e)=>handleBlur(e , "maxBookingLength")}

        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests"
         disabled={isLoading}
   defaultValue={maxGuestsPerBooking} 
   onBlur={(e)=>handleBlur(e , "maxGuestsPerBooking")}

   />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price"
         disabled={isLoading} 
         defaultValue={breakfastPrice}
         onBlur={(e)=>handleBlur(e , "breakfastPrice")}

         />
                   
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
