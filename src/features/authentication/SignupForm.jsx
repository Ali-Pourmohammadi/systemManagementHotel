/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { FormRow } from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

export function SignUpForm() {
  const { register, handleSubmit, formState, getValues , reset } = useForm();
  const { errors } = formState;
  const { signUp, isLoading , onSettled } = useSignup();
  function onSubmit({ email, password, fullName }) {
    signUp({ email, password, fullName },
      { onSettled:()=> reset()})
  }
  if (isLoading) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" errors={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
      </FormRow>

      <FormRow label="Email address" errors={errors.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "please provide invalid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        errors={errors.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" errors={errors.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Please confirm your password",
            validate: (value) =>
              value === getValues("password") || "The passwords do not match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}
