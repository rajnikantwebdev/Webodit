import spaceship from '../assets/weboditorangecopyonewebp.webp'
import Youtube from '../components/Youtube';
function Hero() {
    return (
        <section className="w-full flex xl:flex-row flex-col h-[90vh]">
            <div className="xl:w-1/2 w-full  flex flex-col text-black font-outfit justify-center items-center">
                <div><h1 className='text-start w-full  font-redhat lg:text-7xl leading-5 tracking-widest'>WEBODIT </h1>
                <p className='font-outfit text-lg text-gray-600'>Elevate Video brilliance and Web deveopement with Webodit</p>
                <Youtube/></div>
                
            </div>
            <div className="h-full xl:w-1/2 w-full flex justify-center items-center">
                <img src={spaceship} alt="Web devloper and editing" className='w-full h-full object-cover' />
            </div>
        </section>
    )
}

export default Hero;