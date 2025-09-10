import type { ReactNode } from "react";
import styles from "./CustomHeader.module.css";

interface Props {
    title: string;
    subTitle?: string;
    icon?: ReactNode;
}

export const CustomHeader = ({title, icon, subTitle }: Props) => {
  return (
        <header className={styles.header}>
            {icon && icon}
            <div>
                <h1 style={{margin:0}}>{title}</h1>
                {
                    subTitle && 
                    <p className={styles.subtitle}>{subTitle}</p>
                }
            </div>
        </header>  
        )
}
