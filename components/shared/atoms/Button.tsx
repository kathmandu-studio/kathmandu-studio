interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: IButtonProps) {
  const classes =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return (
    <button className={`px-4 py-2 rounded-none ${classes}`} {...props}>
      {children}
    </button>
  );
}
