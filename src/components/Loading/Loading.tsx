interface LoadingProps {
  text?: string;
  variant?: "page" | "button";
  size?: "small" | "medium" | "large";
}

export function Loading({
  text,
  variant = "page",
  size = "medium",
}: LoadingProps) {
  if (variant === "page") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>{text || "Loading..."}</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`animate-spin rounded-full ${
        size === "small"
          ? "h-5 w-5"
          : size === "medium"
          ? "h-11 w-h-11"
          : "h-16 w-16"
      } border-t-2 border-green-100`}
    ></div>
  );
}
