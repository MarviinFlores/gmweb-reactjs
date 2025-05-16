import React from 'react'
import  { FloatingWhatsApp} from 'react-floating-whatsapp';

const  Whatsapp= () => {
  return (   
     <div className='p-3 fixed bottom -0 right-0'>

        < FloatingWhatsApp 
            phoneNumber= '+50765788940'
            accountName='G&M Transferservice'
            allowEsc
            allowClickAway
            notification
            notificationSound
            chatMessage='How can we Help?'
            
        />

     </div>
  )
}

export default Whatsapp