import AuthBrand from "@/components/Auth/AuthBrand";
import AuthCard from "@/components/Auth/AuthCard";
import AuthDivider from "@/components/Auth/AuthDivider";
import BackLink from "@/components/Auth/BackLink";
import GoogleButton from "@/components/Auth/GoogleButton";
import LoginForm from "@/components/Login/LoginForm";
import useLogin from "@/hooks/api/auth/useLogin";
import { loginSchema, type LoginSchema } from "@/schemas/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Login() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: loginAction, isPending } = useLogin();

  async function onSubmit(data: LoginSchema) {
    await loginAction(data);
  }

  return (
    <div className="min-h-screen flex hero-bg">
      <div className="flex-1 grid place-items-center px-4 py-12">
        <div className="w-full max-w-md">
          <AuthBrand />

          <AuthCard
            title="Welcome back"
            subtitle="Sign in to keep reading where you left off."
          >
            <LoginForm
              control={form.control}
              isPending={isPending}
              onSubmit={form.handleSubmit(onSubmit)}
            />

            <AuthDivider />

            <GoogleButton />

            <p className="mt-7 text-center text-sm text-muted-foreground">
              New to Inkwell?{" "}
              <Link
                to="/register"
                className="text-primary font-medium hover:underline"
              >
                Create an account
              </Link>
            </p>
          </AuthCard>

          <BackLink />
        </div>
      </div>
    </div>
  );
}

export default Login;
