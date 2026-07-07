import AuthBrand from "@/components/Auth/AuthBrand";
import AuthCard from "@/components/Auth/AuthCard";
import BackLink from "@/components/Auth/BackLink";
import RegisterForm from "@/components/Register/RegisterForm";
import useRegister from "@/hooks/api/auth/useRegister";
import { registerSchema, type RegisterSchema } from "@/schemas/auth/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Register() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutateAsync: register, isPending } = useRegister();

  async function onSubmit(data: RegisterSchema) {
    await register(data);
  }

  return (
    <div className="min-h-screen flex hero-bg">
      <div className="flex-1 grid place-items-center px-4 py-12">
        <div className="w-full max-w-md">
          <AuthBrand />

          <AuthCard
            title="Welcome back"
            subtitle="Sign up to keep reading where you left off."
          >
            <RegisterForm
              control={form.control}
              isPending={isPending}
              onSubmit={form.handleSubmit(onSubmit)}
            />

            <p className="mt-7 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </AuthCard>

          <BackLink />
        </div>
      </div>
    </div>
  );
}

export default Register;
