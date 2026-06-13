import { LoaderCircle } from "lucide-react";

type SpinnerProps = {
  label?: string;
  isShow?: boolean;
  size?: number;
  className?: string;
};

export default function Spinner({
  label = "Loading",
  isShow,
  size = 48,
  className = "",
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      hidden={!isShow}
      className={`fixed inset-0 bg-black/20 flex items-center justify-center z-50 inline-flex items-center justify-center gap-2 text-gray-800 ${className}`}
    >
      <LoaderCircle size={size} className="animate-spin" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
