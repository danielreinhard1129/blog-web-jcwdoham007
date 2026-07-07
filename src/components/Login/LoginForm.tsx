import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/Auth/PasswordInput";
import type { LoginSchema } from "@/schemas/auth/login";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface LoginFormProps {
  control: Control<LoginSchema>;
  isPending: boolean;
  onSubmit: () => void;
}

function LoginForm({ control, isPending, onSubmit }: LoginFormProps) {
  return (
    <form className="mt-7 space-y-4" id="form-login" onSubmit={onSubmit}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-login-email">Email</FieldLabel>
            <Input
              {...field}
              id="form-login-email"
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

      <PasswordInput<LoginSchema>
        control={control}
        name="password"
        label="Password"
        id="form-login-password"
      />

      <Button
        form="form-login"
        type="submit"
        className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11"
        disabled={isPending}
      >
        {isPending ? "Loading" : "Sign In"}
      </Button>
    </form>
  );
}

export default LoginForm;
