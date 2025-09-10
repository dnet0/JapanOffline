import type { FC, ReactNode } from 'react'
import styles from './CustomCard.module.css'

interface Props{
    title?: string,
    subtitle?: string,
    children: ReactNode;
    customStyles?: CSSModuleClasses
}

export const CustomCard: FC<Props> = ({title, subtitle,children, customStyles}) => {
  return (
    <div className={styles.customCard} style={customStyles}>
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
