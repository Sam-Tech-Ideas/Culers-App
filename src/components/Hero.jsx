import React from 'react'
import  image1 from '../assets/rap.png'


const Hero = () => {
    
  return (

  <div>
    <section class="text-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome Culers

      </h1>
      <p class="mb-8 leading-relaxed">lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur impedit velit eos nemo! Provident fuga illo, inventore velit molestiae magni neque aut accusantium, error, rerum quaerat quidem! Corrupti, repellendus nesciunt. chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Learn More</button>

      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6   rounded-2xl shadow-lg shadow-pink-700">
      <img class="object-cover object-center rounded text-center" alt="hero" src={image1} width={350} height={400}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
