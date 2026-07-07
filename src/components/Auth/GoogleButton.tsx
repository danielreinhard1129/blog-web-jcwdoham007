import GoogleIcon from "@/components/icons/GoogleIcon";

function GoogleButton() {
  return (
    <button
      disabled
      type="button"
      className="w-full h-11 flex items-center justify-center gap-2.5 rounded-lg border border-border bg-background text-sm font-medium hover:bg-surface transition-colors"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  );
}

export default GoogleButton;
