import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const about = () => {
  return (
    <div className='container mx-auto py-16 mt-4 md:mt-16 px-6 md:px-36'>
      <h1 className='lg:text-9xl md:text-6xl text-4xl  font-bold'>About Me.</h1>
      <p className='md:text-3xl text-2xl font-semibold my-10'>
        I'm a software developer that loves building products and web
        applications that impact millions of lives
      </p>

      {/* contact details here */}

      <div className='grid grid-cols-12 place-items-center'>
        {/* contact of dev */}
        <div className='flex flex-col col-span-12 md:col-span-4'>
          <div className='flex flex-col'>
            <h3 className='text-2xl text-gray-800 self-start font-semibold dark:text-white'>
              Contact
            </h3>
            <p className='text-lg text-gray-700 dark:text-gray-300 leading-6 my-4'>
              For any sort help / enquiry, shoot a{' '}
              <span
                onClick={() => window.open('mailto:smtanimurrahman@gmail.com')}
                className='underline cursor-pointer mr-2'
              >
                mail
              </span>
              and I'll get back. I swear.
            </p>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-2xl text-gray-800 self-start font-semibold dark:text-white'>
              Job Opportunities
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-6 my-4'>
              I'm looking for a job currently, If you see me as a good fit,
              check my CV and I'd love to work for you.
            </p>
          </div>

          {/* social Link provides */}
          <div className='flex flex-col my-10'>
            <h3 className='text-2xl text-gray-800 self-start font-semibold dark:text-white'>
              Social Links
            </h3>
            <div className='flex flex-col '>
              <div className='flex space-x-4 items-center my-3 text-xl'>
                <BsArrowRight />
                <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
                  <a>
                    <span className='hover:border-b-2 hover:border-green-400 transition '>
                      Facebook
                    </span>
                  </a>
                </Link>
              </div>
              <div className='flex space-x-4 items-center my-3 text-xl'>
                <BsArrowRight />
                <Link href='https://twitter.com/MTanimur'>
                  <a>
                    <span className='hover:border-b-2 hover:border-green-400 transition '>
                      Twitter
                    </span>
                  </a>
                </Link>
              </div>
              <div className='flex space-x-4 items-center my-3 text-xl'>
                <BsArrowRight />
                <Link href='https://www.linkedin.com/in/s-m-tanimur-rahman-372894220/'>
                  <a>
                    <span className='hover:border-b-2 hover:border-green-400 transition '>
                      LinkedIn
                    </span>
                  </a>
                </Link>
              </div>
              <div className='flex space-x-4 items-center my-3 text-xl'>
                <BsArrowRight />
                <Link href='https://github.com/MushfiqurRahmanTanim'>
                  <a>
                    <span className='hover:border-b-2 hover:border-green-400 transition '>
                      GitHub
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* social Link provides */}
        </div>

        {/* contact of dev */}

        {/* about details */}
        <div className='flex flex-col col-span-12 md:col-span-8 space-y-10 text-xl md:ml-20'>
          <p>
            I've been developing full-stack application since I was 10 years
            old. I didn't know what full-stack meant at that time because the
            term was not coined back then. I'm so out of content right now that
            I'm literally crying writing this text since lorem text is so 2012
            now.
          </p>
          <p>
            After learning HTML and struggling with CSS, I came up with a
            brilliant idea of using bootstrap so that I don't have to style
            everything by myself and - for obvious reasons - if you knew
            bootstrap, you were cool.
          </p>
          <p>But now, I'm a legend. I've been coding in React,next js, Node.js, Express,MongoDB, Bootstrap, Tailwind etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.</p>
        </div>

        {/* about details */}
      </div>

      {/* contact details here */}
    </div>
  );
};

export default about;
