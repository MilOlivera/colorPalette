'use client';
import Images from 'next/image'
import '@/app/Styles/globals.css'
import styles from '@/app/Styles/page.module.css'
import DisplayImage from './Components/DisplayImage'
import ColorThief from 'colorthief'
import { useState } from 'react'

const gallery = <i className='fas fa-images'></i>

export default function Home() {

  // definicion de estados

  const [imgCargada, setImgCargada] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const cargarImg = (e) => {
    
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = async (event) => {
      const img = new Image();
      
      img.onload = () => {
        
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);

        setImgCargada(event.target.result);
        setColorPalette(colorPalette);
      }

      img.src = event.target.result;
    }


    reader.readAsDataURL(file);
  }

  return (
    <>
    <head>
      <title>Palette Generator</title>
      <meta name='description'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerPolicy="no-referrer" />
      
    </head>
    <body>
      <header>
        <h1> PALETTE GENERATOR</h1>
        <div className="input">
          <label htmlFor="file">{gallery}  Cargar Imagen</label>
          <input type="file" id='file' hidden onChange={cargarImg}/>
        </div>
      </header>
      <main className={styles.main}>
        <DisplayImage
          imgCargada={imgCargada}
          colorPalette={colorPalette}
        />
      </main>
    </body>

    </>
  )
}
