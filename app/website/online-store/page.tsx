import EcommercePlan from '@/components/Ecommerce'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <main className='min-h-screen flex flex-col'>
   {/* Hero */}
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-4xl font-bold mb-4">
              Effortless brand showcase | High-converting website
              <span className="text-blue-600"> for Free</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-6">
              Launch polished professional online store
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </a>
          </section>
      </main>
      <div><EcommercePlan/></div>

    </section>)
}

export default page