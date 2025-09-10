import type { FC, ReactNode } from 'react'
import styles from './CustomCard.module.css'

interface Props{
    title?: string,
    subtitle?: string,
    children: ReactNode;
    customStyles?: boolean
}

export const CustomCard: FC<Props> = ({title, subtitle,children, customStyles= false}) => {
  return (
    <div className={customStyles ? styles.customCardBeige : styles.customCard} >
        {
            title && <h2 className={styles.title}>{title}</h2>
        }
        {
           subtitle &&  <strong className='small'>{subtitle}</strong>
        }

        {children}
    </div>
  )
}
