import spaceship from '../assets/weboditorangecopyonewebp.webp'
function Hero() {
    return (
        <section className=" w-full flex xl:flex-row flex-col">
            <div className="xl:w-1/2 w-full  flex flex-col text-black font-outfit justify-center items-center pl-8">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-left">Elevate Web and Video Brilliance</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl text-left">Welcome to Webodit, your one-stop destination for comprehensive digital solutions. Elevate your business with our affordable services encompassing website creation, SEO optimization, video editing, and social media management – unlocking your brand's full potential in the online realm</p>
                {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get Started
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a> */}

            </div>
            <div className="h-full xl:w-1/2 w-full flex justify-center items-center">
                <img src={spaceship} alt="Web devloper and editing" className='w-full' />
            </div>
        </section>
    )
}

export default Hero;