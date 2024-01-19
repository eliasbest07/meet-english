'use client'
import { useState } from 'react';
import Image from 'next/image'
import HorarioCard from '../app/horariocard'
import RectangleComponent from '../app/rectangulo'
export default function Home() {
    const [mostrarPopup, setMostrarPopup] = useState(false);
  return (
    <main className="flex  flex-col items-center justify-between stop-scrolling  ">

    <div >
    <div className="background blue-purple"></div>
    <div className="background green-blue"></div>
    <div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    
    </div >
    
    <RectangleComponent color={'rgba(41, 41, 38, 0.9)'}  left={0} width={180} height={'80px'}>
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '2.5em'  }}>Meet English </h1>
            </RectangleComponent> 
            <br />
            <div style={{ display:'flex', justifyContent:'center'}}>
                
        <button onClick={() => window.open('https://wa.me/+573137123346?text=Hola!%20Quiero%20comenzar%20clases%20de%20ingles.%20Gracias!', '_blank')}> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" clipRule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/></svg>  Escribir al whatsapp</button>
            </div>
            
            {/* <MyCard/> */}
    {/* <div style={{ position: 'relative', zIndex: 1 }}>
        <MyCard/>
    </div> */}
     <div className='responsive' style={{
        marginTop: '30px',
  width: '100%',  // Ancho fijo
  height: '90vh', // Altura fija
  overflowY: 'scroll', // Habilitar el desplazamiento vertical
}}>


    <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>Esta es tu oportunidad para dominar el Inglés</h1>
            <br />
<p className='text-white' > De lunes a viernes clases en vivo vía Google Meet de <strong> 30 minutos</strong>  sobre temas que manejas todos los días, cada día aprenderás al menos 10 palabras nuevas, además de como y donde usarlas  </p>
<br />
            </RectangleComponent> 
            <br />
            <div style={{
      
            background: 'rgba(41, 41, 38, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.35), inset -1px 0px 2px rgba(201, 201, 201, 0.1), inset 5px -5px 12px rgba(255, 255, 255, 0.05), inset -5px 5px 12px rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(6px)',
            borderRadius: '20px',
          //  marginLeft: `${left}px`,

            // display: 'flex',
            justifyContent: 'center',
            textAlign:'center',
            alignItems: 'center'
        }}>
              <Image style={{ 
    margin: '10px', 
    borderRadius: '10px'  // Añade esta línea para agregar bordes redondeados
  }}   src={'/imgpc.jpg'} alt='online boy and pc' width={315} height={250} />
      
        </div>
        <br />
        <div className="uiverse">
    <div className="wrapper"  onClick={() => setMostrarPopup(true)}>
        <span>HORARIO</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
    </div>
</div>
<br />

<div style={{ height:'auto', width:'25%'}}>
    
<HorarioCard/>
</div>
<br />
<RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>¿Donde son las clases?</h1>
            <br />
<p className='text-white' >Son por video llamadas, entras a un enlace que se te enviara por whatsapp, puedes entrar desde una pc o desde tu celular </p>
<br />
            </RectangleComponent> 
            <br />
            <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>No más escusas, tú si puedes hacerlo</h1>
            <br />
<p className='text-white' >Estoy seguro de que cuando te hablan en inglés tú entiendes un poco, pero te cuesta responder. Con estas clases diarias aprenderás a dar respuestas y a sentir seguridad porque vas a saber que decir  </p>
<br />
            </RectangleComponent> 
            
            <br />
            <div className="uiverse">
            <div className="wrapper">
        <span>CONTENIDO</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
    </div>
</div>
    <br />
    <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>Grupo de WhatsApp Privado</h1>
            <br />
<p className='text-white' >Realizaremos actividades diarias en le grupo de WhatsApp para que puedas seguir practicando y resolviendo tus dudas </p>
<br />
            </RectangleComponent> 
    <br />
    <br />
    
    <br />
    <br />
    
    <br />
    <br />
    
    <br />
            </div>   
            <br />
            <br />
            <br />
            
            {/* <div className=''> 
    <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={100} height={280}>
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '2.5em'  }}>Meet English </h1>
            </RectangleComponent> 
            </div>    */}
            
  </div>
  <br />
            <br />
            <br />
  {mostrarPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={() => setMostrarPopup(false)}
        >
          <div style={{ backgroundColor: 'white', padding: '20px' }}>
            Son dos clases al dia, una en la mañana <br />
            la otra en la tarde, los dias Lunes, Martes <br />
            Miercoles, Jueves y Viernes. Puedes entrar <br />
            en las dos clases del dia que duran <br />
            30 minutos aunque el contenido de la <br />
            clase del dias es el mismo en la de <br />
            la mañana y el de la noche  
            
          </div>
        </div>
      )}
  </main>
  )
}
