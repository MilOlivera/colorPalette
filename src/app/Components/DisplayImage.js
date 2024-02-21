import styles from '@/app/Styles/page.module.css'
import ListItem from './ListItem';

const DisplayImage = ({imgCargada, colorPalette}) => {

        const toHex = (rgb) => {
            let hex = Number(rgb).toString(16);
            if(hex.length < 2){
                hex = "0" + hex;
            }
            return hex;
        }
    return(
        <>
            <div className={styles.content}>
                <div className="image">
                {imgCargada ? (<img src={imgCargada} alt='cargada' /> 
                ) : ( 
                <h2> Ingrese una imagen aqui!</h2>
                )}
                </div>

                {colorPalette && 
                <ul className={styles.colors}>
                    {
                        colorPalette.map((color, index) => {
                            const rgb = `rgb(${color.join(",")})`
                            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`

                            return <ListItem key={index} rgb={rgb} hex={hex} />
                        })
                    }
                </ul>}
            </div>
        </>
    )

}

export default DisplayImage;