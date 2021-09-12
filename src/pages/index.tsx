import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <div className='py-24 px-2'>
      <Head>
        <title>Home Page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container mx-auto '>
        {/* me section */}
        <div className=' mt-20 flex flex-col'>
          <div className='flex flex-col md:flex-row gap-3 justify-between items-center '>
            <div className='w-1/2 text-center flex flex-col space-y-3'>
              <h1 className='text-2xl md:text-6xl bg-green-300 py-2  '>
                Developer.
              </h1>
              <h1 className='text-2xl md:text-6xl bg-blue-300 py-2 '>
                Designer.
              </h1>
              <h1 className='text-2xl  md:text-6xl bg-yellow-300 py-2 '>
                Programmer.
              </h1>
            </div>
            <div className='w-1/2 overflow-hidden  grid place-content-center'>
              <img src='me.jpg' alt='me' className='ring-4 w-36 md:w-52' />
              <span className='text-sm text-green-300 dark:text-white mt-1 font-semibold'>
                that's me
              </span>
            </div>
          </div>
          <button className='text-center bg-indigo-500 py-3  px-6 self-center my-16 border-2 border-indigo-500 hover:bg-transparent transition rounded-md'>
            <Link href='/about'>
              <a>View More</a>
            </Link>
          </button>
        </div>
        {/* me section */}
        {/* website image */}
        <div className='py-7 md:py-14 flex justify-center items-center overflow-hidden  '>
          <div className='max-w-[200px] max-h-[200px] md:max-w-[500px] md:max-h-[400px] lg:max-w-[600px] relative transform hover:scale-125 transition duration-1000 ease-out'>
            <Link href='http://portfolio-67p3yogh0-e-commercesite.vercel.app'>
              <a>
                <img
                  src='project2.png'
                  alt='project'
                  className=' object-cover w-full h-full bg-contain'
                />
              </a>
            </Link>
            <Link href='http://portfolio-67p3yogh0-e-commercesite.vercel.app'>
              <a>
                <div className='absolute w-full h-full hover:bg-gray-900 hover:bg-opacity-50 top-0 left-0 cursor-pointer grid place-items-center text-white text-2xl font-semibold text-opacity-0 hover:text-opacity-90'>
                  {' '}
                  Portfolio site
                </div>
              </a>
            </Link>
          </div>
        </div>
        {/* website image */}
      </div>
    </div>
  );
}
