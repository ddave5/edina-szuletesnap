import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';
import styles from '@/styles/ImageComponent/ImageComponent.module.css'
import Image from 'next/image'

const ImageComponent = ({props}: any) => {

  const {src, blur, cn} = props

  const [imageLoaded, setImageLoaded] = useState(false);
  const [blurImageLoaded, setBlurImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect( () => {
    setImageLoaded(false);
    setVisible(props.isVisible);
  }, [props.isVisible])

  return (
    <>
      <span style={{display: imageLoaded ? 'none' : 'block'}} className={styles.blur__span}>
        <Image
          src={blur} className={`${styles.imgcomponent} ${styles.cn}`} alt={props.alt} onLoad={() => setBlurImageLoaded(true)}/>
        <FadeLoader color="#e4e4e4" style={{display: blurImageLoaded ? 'block' : 'none'}} className={styles.loader}/>
      </span>
      <Image
        src={src} 
        alt={props.alt} 
        className={`${styles.imgcomponent} ${styles.cn}`}
        onLoad={() => setImageLoaded(true)}
        style={{display: !imageLoaded ? 'none' : 'block'}}/>
    </>
  )
}

export default ImageComponent