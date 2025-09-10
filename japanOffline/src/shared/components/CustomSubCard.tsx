import type { FC } from 'react';
import styles from './CustomSubCard.module.css'

interface Props{
    kanji: string
    pronunciacion: string;
    traduccion: string;
}

export const CustomSubCard: FC<Props> = ({kanji, pronunciacion, traduccion}) => {
  return (
    <div className={styles.customSubCard}>
        <h3 style={{fontSize: '0.9rem'}}>{kanji}</h3>
        <p className={styles.romanji}>{pronunciacion}</p>
        <p className={styles.romanji}>
            {traduccion}
        </p>
    </div>
  )
}
