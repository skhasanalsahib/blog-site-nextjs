import Link from "next/link";

const Button = ({ variant, href, onClick, children, ...rest }) => {
  if (href)
    return (
      <Link href={href} className={variant} {...rest}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={variant} {...rest}>
      {children}
    </button>
  );
};

export default Button;
