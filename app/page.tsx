'use client'
import MyCard from '../app/card-uno'
import RectangleComponent from '../app/rectangulo'
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  ">
        
    <div >
    <div className="background blue-purple"></div>
    <div className="background green-blue"></div>
    <div style={{ overflowY: 'hidden'}} >
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
             {/* <div style={{ position: 'relative', zIndex: 1 }}>
        <MyCard/>
    </div> */}
    </div >
    
    <RectangleComponent color={'rgba(41, 41, 38, 0.6)'}  left={0} width={180} height={80}>
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '2.5em'  }}>Meet English </h1>
            </RectangleComponent> 
            
            {/* <MyCard/> */}
    {/* <div style={{ position: 'relative', zIndex: 1 }}>
        <MyCard/>
    </div> */}
     <div className='responsive'> 
    <RectangleComponent color={'rgba(41, 41, 38, 0.4)'}  left={0} width={40} height={280}>
            <br />
            <h1 style={{ marginLeft:'10px', marginRight:'10px' ,color: '#57EBFF', textShadow: '2px 2px 4px #000000',textAlign: 'center', fontSize: '1.5em'  }}>Aprende Inglés todo los
dias</h1>
<p className='text-white' > ¿Por qué elegir aprender inglés en vivo vía meet? Nuestro enfoque
innovador y eficaz te brinda la oportunidad de mejorar tus habilidades
de compresión y respuestas desde la comodidad online.</p>
            </RectangleComponent> 
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
