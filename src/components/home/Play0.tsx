import { Circle, LucideProps } from "lucide-react";

interface Play0Props extends LucideProps {
  animation?: boolean;
}

export const Play0 = ({ animation = false, ...props }: Play0Props) => {
  return (
    <Circle
      size={24}
      strokeWidth={2}
      className={`text-[#B0142B] ${animation ? "animate" : ""} rotate-90`}
      {...props}
    />
  );
};
