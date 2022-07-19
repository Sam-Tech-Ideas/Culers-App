import React from 'react'
import image2 from '../assets/lewa.jpg'
import image4 from '../assets/ch.jpg'
import image5 from '../assets/raph.jpg'



const New = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white ">Our New Culers</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
     </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gray-100  rounded-lg shadow-lg hover:shadow-pink-600">
          <img class="h-85 rounded w-full object-cover object-center mb-6" src={image2} alt="content"/>
          <h3 class="p-2 tracking-widest text-indigo-500 text-xs font-medium title-font">Robert Lewandowski</h3>
          <h2 class="p-1 text-lg text-gray-900 font-medium title-font mb-4">Forward</h2>
        
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 rounded-lg shadow-lg hover:shadow-pink-700">
          <img class="h-[430px] rounded w-full object-cover object-center mb-6" height={400} src={image5} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font p-2">Raphael Dias Belloli</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 p-1">Forward</h2>
         </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100  rounded-lg shadow-lg hover:shadow-pink-700">
          <img class="h-[430px] rounded w-full object-cover object-center mb-6" src="https://www.fcbarcelona.com/photo-resources/2022/07/07/c4aa2d39-e2c2-4bb3-83ab-c53d4f53ec21/jugador_fitxa-kessie.jpg?width=470&height=470"alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font p-2">Franck Kessie</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 p-1">Midfielder</h2>
         </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100  rounded-lg shadow-lg hover:shadow-pink-700">
          <img class="h-[430px] rounded w-full object-cover object-center mb-6" src={image4} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font p-2">Andreas Christensen</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 p-1">Defender</h2>
          </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default New