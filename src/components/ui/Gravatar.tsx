export const Gravatar = ({
  size,
  className,
}: {
  size: string;
  className?: string;
}) => {
  const hash = "a3acb96faf7156d0d0d4b019ba8cdd96";
  return (
    <img
      className={className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon&s=${size}`}
      alt="SamHacker的頭像"
    />
  );
};
