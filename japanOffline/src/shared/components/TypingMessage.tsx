import { useEffect, useState } from 'react'

interface Props{
    message: string;
    style?: string;
    speed?: number;
}

export const TypingMessage = ({message, style='', speed=50}: Props) => {
    const [typing, setTyping] = useState('');

    useEffect(() => {
        const idTime = setInterval(() => {
            setTyping(m => m + message.charAt(typing.length ));
            if(typing.length >= message.length) clearInterval(idTime);
        }, speed)
        return () => clearTimeout(idTime);
    }, [typing]);

  return (
    <p className={style}>{typing}</p>
  )
}
