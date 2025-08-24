import styles from "./heading.module.css";

const styleType = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};
const Heading = ({ as = "h1", children, style = "h1" }) => {
  const Tag = as;

  return <Tag className={styles[styleType[style]]}>{children}</Tag>;
};

Heading.style = styleType;

export default Heading;
