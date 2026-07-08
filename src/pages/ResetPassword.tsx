import AuthBrand from "@/components/Auth/AuthBrand";
import AuthCard from "@/components/Auth/AuthCard";
import BackLink from "@/components/Auth/BackLink";
import ResetPasswordForm from "@/components/ResetPassword/ResetPasswordForm";
import useResetPassword from "@/hooks/api/auth/useResetPassword";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/schemas/auth/reset-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router";

function ResetPassword() {
  const { token } = useParams();

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutateAsync: resetPasswordAction, isPending } = useResetPassword();

  async function onSubmit(data: ResetPasswordSchema) {
    await resetPasswordAction({ ...data, token: token! });
  }

  return (
    <div className="min-h-screen flex hero-bg">
      <div className="flex-1 grid place-items-center px-4 py-12">
        <div className="w-full max-w-md">
          <AuthBrand />

          <AuthCard
            title="Reset password"
            subtitle="Enter your new password below."
          >
            <ResetPasswordForm
              control={form.control}
              isPending={isPending}
              onSubmit={form.handleSubmit(onSubmit)}
            />

            <p className="mt-7 text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </AuthCard>

          <BackLink />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
