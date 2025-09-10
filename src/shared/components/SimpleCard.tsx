import { type FC, type ReactNode } from 'react'
interface Props{
    children: ReactNode; 
}

export const SimpleCard: FC<Props> = ({children}) => {
  return (
    <div className='icon small'>
        {children}
    </div>
  )
}
