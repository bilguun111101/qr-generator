import React from 'react';

export const Home = () => {
  return (
    <section className='flex items-center justify-center w-full h-screen bg-sky-400'>
      <div className='bg-white max-w-md rounded-lg py-4 px-6 h-64'>
        <header>
          <h1 className='text-xl font-medium'>QR Code Generator</h1>
          <p className='text-base text-indigo-800 mt-1.5'>Paste a url or enter text to create QR code</p>
        </header>
        <div className='my-5'>
          <input type="text" name="" id="" placeholder='Enter text or url' className='w-full h-14 border outline-0 rounded-md pl-4' />
          <button className='w-full h-14 border-none outline-0 rounded-md cursor-pointer bg-sky-400 mt-5 text-white active:bg-sky-500 duration-200'>Generate QR Code</button>
        </div>
        <div className='py-8 flex items-center justify-center border border-zinc-300 rounded-md opacity-0 pointer-events-none'>
          <img src="" alt="qr-code" />
        </div>
      </div>
    </section>
  )
}
