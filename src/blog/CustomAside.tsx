import type { FC, ReactNode } from "react";
import styles from './CustomAside.module.css'
interface Props{
  children: ReactNode;  
}

export const CustomAside:FC<Props> = ({children}) => {
  return (
        <aside className={styles.customAside}>
              {children}
        </aside>
  )
}
