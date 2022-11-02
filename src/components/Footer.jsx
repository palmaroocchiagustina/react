import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='foot'>
   <div className='foot__lista'>
       <h6 >MEDIOS DE PAGO</h6>
       <img className='' src='../img/pagos.jpg'  width='230px' height='200px' alt='mediosdepago'/>
        
    </div>
     <div className='foot__lista'> 
     <h6>UNETE A NUESTRA NEWSLETTER</h6>
   <div className='rrss'>
   <button>
    <InstagramIcon
      fontSize='large'
      
     
    />
   </button>
   <button>
    <FacebookIcon
     fontSize='large' />
   </button> 
   </div>
   </div>
  
</div>
  )
}
