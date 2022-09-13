import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  variant?: "zinc" | "purple";
}

function Button({ title, icon, variant = "purple" }: Props) {
  const styles = {
    zinc: "bg-zinc-500 ",
    purple: "bg-violet-500",
  };

  return (
    <button
      className={[
        `flex gap-3 py-[14.5px] px-4 rounded-md text-white hover:brightness-90 font-medium whitespace-nowrap`,
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
