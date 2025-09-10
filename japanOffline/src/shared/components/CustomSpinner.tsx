import { type FC } from 'react';
import styles from './CustomSpinner.module.css';

interface CustomSpinnerProps {
  visible?: boolean; // controlar si se muestra
}

export const CustomSpinner: FC<CustomSpinnerProps> = ({ visible = false }) => {
  if (!visible) return null; // no renderiza nada si no está visible

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};
