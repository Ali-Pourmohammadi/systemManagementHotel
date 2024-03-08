import Form from "../../ui/Form";
import { FormRow } from "../../ui/FormRow";
import Spinner from "../../ui/Spinner"
import Input from "../../ui/Input";
import useGetUpdate from "./getUpdate";

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
  
  if(isLoading) return <Spinner/>
  
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isLoading}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isLoading}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests"
         disabled={isLoading}
          defaultValue={maxGuestsPerBooking} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price"
         disabled={isLoading} 
         defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
