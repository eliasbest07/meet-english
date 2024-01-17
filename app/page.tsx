'use client'
import Image from 'next/image'
import MyCard from '../app/card-uno'
import RectangleComponent from '../app/rectangulo'
export default function Home() {
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
    
    <RectangleComponent color={'rgba(41, 41, 38, 0.6)'}  left={0} width={180} height={'80px'}>
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '2.5em'  }}>Meet English </h1>
            </RectangleComponent> 
            
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
            <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <Image style={{ 
    margin: '10px', 
    borderRadius: '10px'  // Añade esta línea para agregar bordes redondeados
  }}   src={'/imgpc.jpg'} alt='online boy and pc' width={315} height={250} />

            </RectangleComponent> 
            <br />
            <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={45} height={'auto'}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>No más escusas, tú si puedes hacerlo</h1>
            <br />
<p className='text-white' >Estoy seguro de que cuando te hablan en inglés tú entiendes un poco, pero te cuesta responder. Con estas clases diarias aprenderás a dar respuestas y a sentir la seguridad porque vas a saber lo que dices  </p>
<br />
            </RectangleComponent> 
            
            <br />
    <br />
    
    <br />
    <br />
    
    <br />
            </div>   
            
            {/* <div className=''> 
    <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={100} height={280}>
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '2.5em'  }}>Meet English </h1>
            </RectangleComponent> 
            </div>    */}
            
  </div>
  
  </main>
  )
}
