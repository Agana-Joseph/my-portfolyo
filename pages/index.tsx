import Head from 'next/head'
import {BsFillMoonStarsFill, BsWhatsapp} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import logo from "../public/logo.png";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className= {darkMode ? 'dark' : ""}>
      <Head>
        <title>My-portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {/* the navigation section, where user can navigate through the web page */}
        <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <Image src={logo} width={70} height={50} bg-blend-darken alt='' />
          <ul className='flex items-center'>
            <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
            </li>
            <li><a className='bg-gradient-to-r bg-teal-400 to-teal-400 text-white px-4 py-2 rounded-md ml-8 dark:bg-teal-500' href="page">Resume
            </a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10 justify-center items-center flex flex-col'>
          <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl dark:text-teal-500'>Onahi Joseph
          </h2>
          <h3 className='text-2xl py-2 justify-center md:text-3xl'>Developer and Designer
          </h3>
          <p className='text-md py-5 leading-8 text-gray-600 md:tex-xl max-w-lg mx-auto'>Combining the art of design with the art of programming. Translatiing of software wireframes to actual code to produce visual elements of the application. </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://twitter.com/jewels_joseph"><AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/onahi-joseph-349603222/"><AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/jj_josephjewels/"><AiFillInstagram />
          </a>
          <a href="https://wa.me/message/AR73FKBYUDO7H1"><BsWhatsapp />
          </a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-600 to-teal-200 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} alt="" layout='fill' objectFit='cover'/>
        </div>
        </section>
        <section>
          <div>
            <h3 className='text-2xl py-2 justify-center'>Services I offer</h3>
            <p className='text-md py-5 leading-8 text-gray-600'>Since the biginning of my jurney as a software developer, i've done remote work for <span className='text-teal-400'>Agencies</span> Consulted for  <span className='text-teal-400'>startups</span> and colaborated with talented people to digital product for both business and consumer user. 
            </p>
            <p className='text-md py-5 leading-8 text-gray-600'> I offer from a wide range of Services, including graphics designs and programming.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Software Development
              </h3>
              <p className="py-2">
               Trust me with these Languages and i will build the impossible!
              </p>
              <h4 className="py-4 text-teal-600">Languages Are:</h4>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Creativity
              </h3>
              <p className="py-2">
                Building products that changes an existing domain.And  transforms an existing domain into new ones
              </p>
              <h4 className="py-4 text-teal-600">Creative Designs</h4>
              <p className="text-gray-800 py-1">Productivity</p>
              
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-2xl py-2 justify-center'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-600'>Combining the art of design with the art of programming. Translatiing of software wireframes to actual code to produce visual elements of the application.
            </p>
            <p className='text-md py-5 leading-8 text-gray-600'>Here is the list of some of the projects i have done for prospects.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/2 flex-1'><Image src={web1} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className="rounded-lg object-cover" width={100} height={100} layout="responsive" alt='' /></div>
          </div>
        </section>
      </main>
    </div>
  )
}
