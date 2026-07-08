import AuthBrand from "@/components/Auth/AuthBrand";
import AuthCard from "@/components/Auth/AuthCard";
import BackLink from "@/components/Auth/BackLink";
import ForgotPasswordForm from "@/components/ForgotPassword/ForgotPasswordForm";
import useForgotPassword from "@/hooks/api/auth/useForgotPassword";
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "@/schemas/auth/forgot-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function ForgotPassword() {
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutateAsync: forgotPasswordAction, isPending } =
    useForgotPassword();

  async function onSubmit(data: ForgotPasswordSchema) {
    await forgotPasswordAction(data);
  }

  return (
    <div className="min-h-screen flex hero-bg">
      <div className="flex-1 grid place-items-center px-4 py-12">
        <div className="w-full max-w-md">
          <AuthBrand />

          <AuthCard
            title="Forgot password"
            subtitle="Enter your email to receive a reset link."
          >
            <ForgotPasswordForm
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

export default ForgotPassword;
