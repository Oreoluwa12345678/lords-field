interface ButtonProps {
  border?: string;
  color?: string;
  others?: string;
  text: string;
}

const Button = ({ border, color, others, text }: ButtonProps) => {
  return (
    <button
      className={` ${
        color === "blue" ? "bg-blue-700 border-0" : "bg-transparent"
      } text-white text-[14px] font-semibold p-[16px] rounded-[8px]  cursor-pointer ${border} ${others}`}
    >
      {text}
    </button>
  );
};

export default Button;
