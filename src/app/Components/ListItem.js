import styles from "../styles/page.module.css";

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  // Copiar al portapapeles
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li className={styles.colorName} style={{ background: rgb }}>
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copiado!" : hex} {copy}
      </span>
    </li>
  );
}

export default ListItem;