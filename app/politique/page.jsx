"use client"

import React, { useState }  from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Head from "../components/Head";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import Image from 'next/image';



const navigation = [
  { name: 'Acceuil', href: '/', current: false },
  { name: 'Politique', href: '/politique', current: false },
]

const Politique = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head title={"Politique de confidentialité - FamiliaPlan"} />

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
              Admin <span aria-hidden="true">&rarr;</span>
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

      <div className="mt-16 px-8 lg:max-w-7xl lg:px-8">
        <AnimatePresence>
        <motion.div  // Use motion.div instead of div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Politique de confidentialité</h1>

            <p className="mb-10">
            Votre vie privée est importante pour nous. Notre politique est de respecter votre vie privée 
            concernant toute information que nous pouvons collecter auprès de vous sur notre application 
            FamiliaPlan et d&apos;autres sites que nous possédons et exploitons.
            Nous ne demandons des informations personnelles que lorsque nous en avons réellement besoin 
            pour vous fournir un service tel que votre nom, votre adresse e-mail, votre mot de passe et 
            votre photo de profile. Nous les collectons par des moyens justes et licites, avec votre 
            connaissance et votre consentement. Nous vous expliquons également pourquoi nous les collectons 
            et comment ils seront utilisés.
            </p>

            <h2 className="text-3xl font-bold mb-6">
            Quelles données personnelles nous collectons
            </h2>

            <ul className="list-disc mb-10">
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>IP address</li>
              <li>Mot de passe</li>
              <li>Photo de profile</li>
              <li>Toute autre donnée personnelle que vous nous fournissez</li>
            </ul>


            <h2 className="text-3xl font-bold mb-6">
            Comment nous utilisons vos données personnelles
            </h2>

            <ul className="list-disc mb-10">
              <li>Pour vous fournir nos services</li>
              <li>Pour communiquer avec vous sur nos services</li>
              <li>Pour améliorer nos services</li>
              <li>Pour protéger nos intérêts juridiques</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">
            Comment nous partageons vos données personnelles
            </h2>

            <p className="mb-10">
            Nous ne conservons les informations collectées que le temps nécessaire pour vous 
            fournir le service demandé. Les données que nous stockons, nous les protégerons par 
            des moyens commercialement acceptables pour éviter la perte et le vol, ainsi que l&apos;accès, 
            la divulgation, la copie, l&apos;utilisation ou la modification non autorisés.
            </p>


            <h2 className="text-3xl font-bold mb-6">
            Nous ne partageons aucune information d&apos;identification personnelle publiquement 
            ou avec des tiers, sauf lorsque la loi l&apos;exige.
            </h2>

            <p className="mb-10">
            Notre application peut contenir des liens vers des sites externes qui ne sont pas 
            exploités par nous. Veuillez noter que nous n&apos;avons aucun contrôle sur le contenu et 
            les pratiques de ces sites et ne pouvons accepter aucune responsabilité quant à leurs 
            politiques de confidentialité respectives.
            </p>

           
            <h2 className="text-3xl font-bold mb-6">Contacter-nous</h2>

            <p className="mb-10">
            Si vous avez des questions sur cette politique de confidentialité ou sur notre traitement
              de vos données personnelles, veuillez nous contacter à 
              <a href="mailto:support@realtordapp.com">
                contact.familiaplan@gmail.com
              </a>
              .
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
      </div>
    </>
  );
};

export default Politique;
