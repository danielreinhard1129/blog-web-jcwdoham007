import PasswordInput from "@/components/Auth/PasswordInput";
import { Button } from "@/components/ui/button";
import type { ResetPasswordSchema } from "@/schemas/auth/reset-password";
import type { Control } from "react-hook-form";

interface ResetPasswordFormProps {
  control: Control<ResetPasswordSchema>;
  isPending: boolean;
  onSubmit: () => void;
}

function ResetPasswordForm({
  control,
  isPending,
  onSubmit,
}: ResetPasswordFormProps) {
  return (
    <form
      className="mt-7 space-y-4"
      id="form-reset-password"
      onSubmit={onSubmit}
    >
      <PasswordInput<ResetPasswordSchema>
        control={control}
        name="password"
        label="New Password"
        id="form-reset-password-password"
      />

      <PasswordInput<ResetPasswordSchema>
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        id="form-reset-password-confirm"
      />

      <Button
        form="form-reset-password"
        type="submit"
        className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-11"
        disabled={isPending}
      >
        {isPending ? "Loading" : "Reset Password"}
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
