import HeroImage from '../assets/images/hero image.svg'

function Hero() {
    return (
        <section className="h-[90vh] w-full flex ">
            <div className="h-full w-1/2 text-black font-outfit  flex justify-center items-center "><h1 className='text-left text-4xl'>Elevate Web and Video Brilliance <br/>with Webodit</h1>
            <h2></h2></div>
            <div className="h-full w-1/2 flex justify-center items-center">
                <img src={HeroImage} alt="Web devloper and editing" />
            </div>
        </section>
    )
}

export default Hero;