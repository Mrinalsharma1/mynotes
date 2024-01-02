import React from 'react'

function tel() {
    return (
        <div>
            <div className='flex flex-nowrap'>
                <div className='w-1/2 bg-slate-400 p-2 text-yellow-50'>Hey 🥇</div>
                <div className='w-1/2 bg-red-500 p-2 text-lime-300'>Buddy 🥉</div>
            </div>
            <div className='bg-pink-400 grid place-content-center'>
                <h1 className='text-white m-6 text-2xl'>Test</h1>
            </div>

            <div className=' bg-red-400 flex w-64 h-[92px] rounded-lg m-6 p-2 place-content-center shadow-2xl'>
                <div className='h-28 w-28 '>
                    <img className='rounded-2xl' src='https://images.pexels.com/photos/17902478/pexels-photo-17902478/free-photo-of-two-cups-of-coffee-on-a-table-with-a-plant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='demo' />
                </div>
                <div className='px-2 my-auto'>
                    <h3 className='text-white text-bold'>Mrinal shamra</h3>
                    <p>hello, Mrinal</p>
                </div>
            </div>
            <div className='bg-orange-300 w-[250px] h-[250px] rounded-md hover:shadow-2xl	'>
                <div className='w-[250px] h-[150px] p-1'>
                    <img src='https://images.pexels.com/photos/9667337/pexels-photo-9667337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='iphone' />
                </div>
                <div className='flex justify-between px-2 mt-2'>
                    <p className='uppercase text-white'>Iphone 13</p>
                    <p className='font-bold text-red-800'>$3400</p>
                </div>
                <button className='w-[240px] bg-red-300 rounded-md  p-1 mt-6 text-white hover:bg-violet-600 '>Buy Now</button>
            </div>

            <div className='mt-3'>
                <div className='max-w-sm mx-auto md:max-w-2xl bg-slate-400 rounded-xl overflow-hidden'>
                    <div className='md:flex'>
                        <div className=''>
                            <img className='h-48 w-full object-cover md:h-full md:w-[600px]' src='https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='plant' />
                        </div>
                        <div className='p-4'>
                            <div className='uppercase text-sm text-indigo-500 font-bold'>An Awsome Card</div>
                            <div className='text-white block mt-2'>Tailwind CSS <span className='bg-yellow-400 p-[2px] text-black rounded'>Tutorial</span> For Beginners in Hindi | Tailwind CSS in One Shot By Hitesh Choudhary
                                College Wallah
                            </div>
                            <div>just for learning purpose..</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tel