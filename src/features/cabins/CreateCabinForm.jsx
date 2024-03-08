/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import { FormRow } from "../../ui/FormRow";
import useCreateCabin from "./createCabin";
import useEditCabin from "./editCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  //create cabin mutation
  const { isCreating, createCabin } = useCreateCabin();
  // edit cabin mutation
  const {isEditing , editCabin} = useEditCabin(); 
  const isWorking = isCreating || isEditing;
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: editId });
    else createCabin({ ...data, image: image }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="cabin name" errors={errors?.name?.message}>
        <Input
          type="text"
          disabled={isWorking}
          id="name"
          {...register("name", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="max Capacity" errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is required",
            min: { value: 1, message: "capacity should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="regularPrice" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="regularPrice"
          {...register("regularPrice", {
            required: "this field is required",
            validate: (value) =>
              value > 0 || "the regular price should be more than 0",
          })}
        />
      </FormRow>

      <FormRow label="discount" errors={errors?.discount?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should fewer than regularPrice",
          })}
        />
      </FormRow>

      <FormRow label="description" errors={errors?.description?.message}>
        <Textarea
          type="number"
          disabled={isWorking}
          id="description"
          defaultValue=""
          {...register("description", {
            required: "write description for some details",
          })}
        />
      </FormRow>

      <FormRow label="image" errors={errors?.image?.message}>
        <FileInput
          id="image"
          disabled={isWorking}
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "this field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>{isEditSession ? "Edit Cabin" : "Create Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
