import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/Auth/PasswordInput";
import type { RegisterSchema } from "@/schemas/auth/register";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface RegisterFormProps {
  control: Control<RegisterSchema>;
  isPending: boolean;
  onSubmit: () => void;
}

function RegisterForm({ control, isPending, onSubmit }: RegisterFormProps) {
  return (
    <form className="mt-7 space-y-4" id="form-register" onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-register-name">Name</FieldLabel>
            <Input
              {...field}
              id="form-register-name"
              aria-invalid={fieldState.invalid}
              placeholder="Your name"
              autoComplete="on"
              className="py-5"
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-register-email">Email</FieldLabel>
            <Input
              {...field}
              id="form-register-email"
              aria-invalid={fieldState.invalid}
              placeholder="you@domain.com"
              autoComplete="on"
              className="py-5"
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <PasswordInput<RegisterSchema>
        control={control}
        name="password"
        label="Password"
        id="form-register-password"
      />

      <Button
        form="form-register"
        type="submit"
        className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11"
        disabled={isPending}
      >
        {isPending ? "Loading" : "Sign In"}
      </Button>
    </form>
  );
}

export default RegisterForm;
