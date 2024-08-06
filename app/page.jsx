"use client"

import Image from "next/image";
import CustomCarousel from "./components/custom-carousel";
import Gridlayer from "./components/gridlayer";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Contact from './components/contact'


const navigation = [
  { name: 'Acceuil', href: '/', current: false },
  { name: 'Politique', href: '/politique', current: false },
]
const images = [
  '/google10-eng.png',
  '/google11-fr.png',
  '/google12-fr.png',
  '/google15-fr.png',
  '/google19-eng.png',
  // Add more image URLs as needed
];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
    <div className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">

    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FamiliaPlan</span>
              <Image src="/FamiliaPlan-logo-mobile.png" width={32} height={32} alt="FamiliaPlan" />
             
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Admin  <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FamiliaPlan</span>
                <Image src="/FamiliaPlan-logo-mobile.png" width={32} height={32} alt="FamiliaPlan" />
                
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Admin
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="relative mt-10 flex items-center justify-center">
  <div className="relative before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/Familiaplan.svg"
      alt="Familia plan Logo"
      width={280}
      height={55}
      priority
    />
  </div>
</div>


        <div className="mx-auto max-w-2xl py-6 sm:py-6 lg:py-6">
          
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              On a mise à jour notre politique de confidentialité.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Lire plus <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Partagez vos calendriers et vos tâches en quelques clics
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Imaginez un hub central pour l&apos;emploi du temps chargé de votre famille. 
            FamiliaPlan agit comme cette plateforme, permettant à chacun de voir ce qu&apos;il y a dans l&apos;assiette de l&apos;autre. 
            Cela favorise une meilleure communication et évite les conflits d&apos;horaire.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#télecharger"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Télecharger
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                Nous contacter <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    
  

      <div style={{ textAlign: "center", marginTop: "10vh", transform: "translateY(-50%)" }}>
      <h1 className="text-2xl font-bold mb-2 text-gray-700"><strong> L&apos;organisation simplifiée pour toute la famille! </strong></h1>
    </div>
    <div className=" w-72 mx-auto h-auto flex items-center justify-center">
      <CustomCarousel images={images} />
    </div>
      <p id="télecharger" className="my-8 text-gray-700 flex items-center justify-center">Disponible dès maintenant sur:</p>

      <div className="grid text-center justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:flex lg:justify-center mx-auto">
       

        <a
          href="https://play.google.com/store/apps/details?id=com.badrmel.familiaplan"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Android{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
         <p className={`m-0 max-w-[30ch] text-sm ${darkMode ? "text-white" : "text-gray-900"}`}>
          <Image
            className={`relative ${darkMode ? "" : "dark:invert"}`}
            src="/icons8-android-os.svg"
            alt="Familiaplan Android Logo"
            width={130}
            height={130}
            priority
          />
        </p>

        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.badrmel.familiaplan"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            IOS{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
         <p className={`m-0 max-w-[30ch] text-sm ${darkMode ? "text-white" : "text-gray-900"}`}>
          <Image
            className={`relative ${darkMode ? "" : "dark:invert"}`}
          src="/icons8-ios.svg"
          alt="Familiaplan ios Logo"
          width={130}
          height={130}
          priority
        />
          </p>
        </a>
      </div>
      
      <Gridlayer />
      <div className="container mx-auto p-8 shadow-lg rounded-md mb-10">
        <p className="text-3xl font-bold mb-4"><span className="text-indigo-500">FamiliaPlan</span>, bien plus qu&apos;une simple to-do liste, c&apos;est :</p>
        <ul className="list-disc pl-8">
            <li className="mb-2">Un outil de communication puissant.</li>
            <li className="mb-2">Une manière d&apos;impliquer les enfants dans la vie familiale.</li>
            <li className="mb-2">Un assistant précieux pour gagner du temps et réduire le stress.</li>
            <li className="mb-2">Un générateur de bons moments en famille avec des listes de courses partagées, des rappels d&apos;anniversaire et des défis amusants.</li>
        </ul>
    </div>
    <div id="contact" className="mb-12 mx-auto p-6">
    <Contact />
    </div>

    </div>
  );
}
