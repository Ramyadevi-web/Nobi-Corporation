import React, {useEffect, useState} from 'react'

function businessModal({isOpen, onClose, position, desc, index}) {

  const [showModal, setShowModal] = useState(isOpen);
  const [animateModal, setAnimateModal] = useState(false);
  

 useEffect(() => {
    if(isOpen){
      setShowModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      },10)
    }
    else{
      setAnimateModal(false)
      setTimeout(() => {
        setShowModal(false)
      },300)
    }
 },[isOpen])


 const handleClose = () => {
    setAnimateModal(false);
    setTimeout(() => {
      onClose()
      setShowModal(false)
    },300)  
    }

  if(!isOpen && !showModal) return null;
 
  return <>
  {
      <div className={`bg-[#ebdfe1] p-6 absolute transition-all z-5 duration-300 opacity-100 rounded shadow-lg w-11/12 max-w-lg
      ${animateModal ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      onClick={(e) => e.stopPropagation()}
      style={{top: `${position.top}px` , left: `${position.left}px`}}>
        <button id={`closeModalButton${index}`} onClick={() => handleClose()} className='flex absolute top-2 right-4 justify-end'>X</button>
        <p>{desc}</p>
      </div>
  }
      
  </>
}

export default businessModal
