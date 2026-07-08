import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ForgotPasswordSchema } from "@/schemas/auth/forgot-password";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface ForgotPasswordFormProps {
  control: Control<ForgotPasswordSchema>;
  isPending: boolean;
  onSubmit: () => void;
}

function ForgotPasswordForm({
  control,
  isPending,
  onSubmit,
}: ForgotPasswordFormProps) {
  return (
    <form
      className="mt-7 space-y-4"
      id="form-forgot-password"
      onSubmit={onSubmit}
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-forgot-password-email">
              Email
            </FieldLabel>
            <Input
              {...field}
              id="form-forgot-password-email"
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

      <Button
        form="form-forgot-password"
        type="submit"
        className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11"
        disabled={isPending}
      >
        {isPending ? "Loading" : "Send Reset Link"}
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
