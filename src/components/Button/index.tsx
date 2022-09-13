import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  variant?: "zinc" | "purple";
}

function Button({ title, icon, variant = "purple" }: Props) {
  const styles = {
    zinc: "bg-zinc-500 hover:bg-zinc-700",
    purple: "bg-violet-500 hover:bg-violet-700",
  };

  return (
    <button
      className={[
        `flex items-center justify-center gap-3 py-[14.5px] px-4 rounded-md text-white  font-medium whitespace-nowrap transition-colors`,
      ]
        .concat(styles[variant])
        .join(" ")}
      type="button"
    >
      {icon}
      {title}
    </button>
  );
}

Button.defaultProps = {
  variant: "purple",
  icon: null,
};

export default Button;
