import { LucideProps, X } from "lucide-react";

interface PlayXProps extends LucideProps {
  animation?: boolean;
}

export const PlayX = ({ animation = false, ...props }: PlayXProps) => {
  return (
    <X
      size={24}
      strokeWidth={2}
      className={`text-[#00DCD5] ${animation ? "animate" : ""}`}
      {...props}
    />
  );
};
