import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { FormRow } from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const queryClient = useQueryClient();
  const { errors } = formState;
  const { isLoading, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("new cabin add successfully"), reset();
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({...data , image:data.image[0]});
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="cabin name" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "this field is required",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="max Capacity" errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is required",
            min: { value: 1, message: "capacity should be at least 1" },
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="regularPrice" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "this field is required",
            validate: (value) =>
              value > 0 || "the regular price should be more than 0",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="discount" errors={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should fewer than regularPrice",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="description" errors={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "write description for some details",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="image" errors={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
