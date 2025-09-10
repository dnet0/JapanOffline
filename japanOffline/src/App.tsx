import { CustomHeader } from './shared/components/CustomHeader'
import { CustomBody } from './blog/CustomBody'

export const App = () => {
  return (
    <div className='app wrap'>
        <CustomHeader
         icon={
            <div className='logo'>
                旅
            </div>
         }
         title='Guía de Supervivencia Turística — Japón (sin internet)'
         subTitle='Frases clave, números de emergencia, medicinas y señales. Tamaño bolsillo — imprimible.'
          />
        <CustomBody />         
        <button className='verticalKanji'>
        刷
        </button>
        <footer className='footer'>
            Este web ha sido creada con la intencion de descargarla en pdf
        </footer>
    </div>
  )
}
