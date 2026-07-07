import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface PasswordInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  id: string;
  placeholder?: string;
}

function PasswordInput<T extends FieldValues>({
  control,
  name,
  label,
  id,
  placeholder = "••••••••",
}: PasswordInputProps<T>) {
  const [show, setShow] = useState(false);
  const { field, fieldState } = useController({ control, name });

  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      <div className="relative mt-1.5">
        <Input
          {...field}
          id={id}
          aria-invalid={fieldState.invalid}
          placeholder={placeholder}
          className="py-5"
          type={show ? "text" : "password"}
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-muted-foreground hover:text-foreground"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}

export default PasswordInput;
