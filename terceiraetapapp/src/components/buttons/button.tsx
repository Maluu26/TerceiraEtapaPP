import "./button.css";

interface ButtonProps {
  className: string;
  insideText: string;
  onClick: () => void; // Adicionei a tipagem para a função onClick
}

export default function Button({
  insideText,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {insideText}
    </button>
  );
}
