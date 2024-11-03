import React from 'react';
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from "next/image";
import ProductCard, { Product } from './components/ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Flavor',
    description: 'It’s very delicious',
    image: '/Ice19.jpeg',
    price: 300,
  },
  {
    id: '2',
    name: 'Vanilla Flavor',
    description: 'A classic favorite',
    image: '/Ice18.jpeg',
    price: 250,
  },
  {
    id: '3',
    name: 'Strawberry Flavor',
    description: 'Fruity and fresh!',
    image: '/Ice05.jpeg',
    price: 300,
  },
  
  
  {
    id: '5',
    name: 'Cookie Dough Flavor',
    description: 'A treat for cookie lovers',
    image: '/Ice16.jpeg',
    price: 400,
  },

  {
    id: '6',
    name: 'Coffe Flavor',
    description: 'Cool and refreshing',
    image: '/Ice25.jpeg',
    price: 350,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-orange-300 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black font-sans leading-snug">
              Scoops & Swirls Ice-Cream Parlor <br />
              <span className="text-primary">Enjoy your treat!</span>
            </h1>

            <p className="text-lg md:text-2xl mt-8 max-w-lg mx-auto md:mx-0 leading-snug">
            "Ice cream is a delicious frozen treat enjoyed in countless flavors!"
            </p>
            
            <Button className="mt-8 text-lg rounded-full py-4 px-8 font-bold bg-primary text-white">
              Get your Scoops now
            </Button>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image alt="Ice Cream" src="/Ice08.jpeg" width={500} height={500} className="rounded-full" />

          </div>
        </div>
      </section>

      <section>
        <div className='container py-12'>
          <Tabs defaultValue="Ice-cream">
            <TabsList>
              <TabsTrigger value="Ice-cream" className='text-md bg-orange-300'>Ice-cream</TabsTrigger>
              <TabsTrigger value="Flavour" className='text-md bg-orange-300'>Flavour</TabsTrigger>
            </TabsList>
            <TabsContent value="Ice-cream">
              <div className='grid grid-cols-4 gap-6 mt-6'>
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
              </div>
            </TabsContent>
            <TabsContent value="Flavour">
            <div className='grid grid-cols-4 gap-6 mt-6'>
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
