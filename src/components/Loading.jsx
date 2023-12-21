import React from 'react'
import spaceShip from '../assets/spaceship.json'
import Lottie from 'react-lottie';
import loadingAnimation from '../assets/loadingAnimation.json'

function Loading() {


  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (
    <div className='h-screen text-white text-xl font-bold w-[100vw] flex flex-col justify-center m-auto align-center'>

<div className='ml-auto mr-auto align-self-center' style={{ width: '600px', height: '600px' }}>
      <Lottie options={animationOptions} />
</div>
  
    </div>
  )
}

export default Loading
