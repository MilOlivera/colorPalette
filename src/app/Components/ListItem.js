import styles from '@/app/Styles/page.module.css'
import { useState } from 'react';
const copy = <i className='far fa-copy'></i>

const listItem = ({rgb, hex}) => {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e) => {
        const color = e.target.innerText;
        navigator.clipboard.writeText(color);
    }

    return(
        <>
        <li className={styles.colorName} style={{background: rgb}}>
            <span onClick={(e) => {
                copyToClipboard(e)
                setCopied(true);
                setTimeout(() => {
                    setCopied(false)
                }, 1000)
            }}>
                {copied ? "Copiado!" : hex} {copy}
            </span>
        </li>
        </>       
    )
}

export default listItem;