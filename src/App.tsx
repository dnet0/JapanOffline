import { CustomHeader } from './shared/components/CustomHeader'
import { CustomBody } from './blog/CustomBody'
import html2pdf from "html2pdf.js";
import { useState } from 'react';
import { CustomSpinner } from './shared/components/CustomSpinner';

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownload = () => {
    setLoading(true);
    const content = document.getElementById('content');
    const clone = content?.cloneNode(true) as HTMLElement;

    // Ocultar footer y aplicar grid solo en el clone
    const contentBody= clone.querySelector('#struct') as HTMLElement;
    contentBody.classList.add('content-print');

    const opt = {
      margin: 15,
      filename: "Guia_Japon_Supervivencia.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
      pagebreak: { mode: ['css', 'legacy'] } // importante
    };

    html2pdf()
    .set(opt)
    .from(clone)
    .save()
    .then(() => {
        content?.classList.remove('content-print');
        setLoading(false);
    })
  };
  return (
    <div className='app wrap'>
        <div id='content' >
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
        </div>
        <button 
        className='verticalKanji'
        onClick={() => handleDownload()}
        >
        刷
        </button>
        <footer className='footer'>
            Esta página web ha sido creada con la intención de poder descargar su contenido en PDF.
        </footer>
        <CustomSpinner visible={loading} />

    </div>
  )
}
