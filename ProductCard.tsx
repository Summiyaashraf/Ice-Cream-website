import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import ToppingList from './topping-list';

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className='border-none rounded-xl bg-orange-100'>
      <CardHeader className='flex items-center justify-center'>
        <img src={product.image} alt={product.name} style={{ width: '50%', height: '50%' }} />
      </CardHeader>
      <CardContent>
        <h2 className='text-xl font-bold'>{product.name}</h2>
        <p className='mt-2'>{product.description}</p>
      </CardContent>
      <CardFooter className='flex items-center justify-between mt-4'>
        <p className='font-medium'>Price: ${product.price}</p>

        <Dialog>
          <DialogTrigger className='bg-orange-200 hover:bg-orange-300 text-orange-600 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'>
            Choose
          </DialogTrigger>

          <DialogContent className='max-w-3xl p-0'>
            <VisuallyHidden>
              <DialogTitle>Select Options</DialogTitle>
            </VisuallyHidden>
            
            <div className="flex">
              <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                <Image
                  src={'/Ice22.jpeg'}
                  width={450}
                  height={450}
                  alt={product.name}
                />
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>

                <div>
                  <h4 className="mt-6">Choose the Scoope</h4>
                  <RadioGroup defaultValue="single" className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <RadioGroupItem
                        value="single"
                        id="single"
                        className="peer sr-only"
                        aria-label="Single"
                      />
                      <Label
                        htmlFor="single"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Single
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="double"
                        id="double"
                        className="peer sr-only"
                        aria-label="Double"
                      />
                      <Label
                        htmlFor="double"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Double
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="triple"
                        id="triple"
                        className="peer sr-only"
                        aria-label="Triple"
                      />
                      <Label
                        htmlFor="triple"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Triple
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="mt-6">Choose the cone-type</h4>
                  <RadioGroup defaultValue="Waffle cone" className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <RadioGroupItem
                        value="Waffle cone"
                        id="Waffle cone"
                        className="peer sr-only"
                        aria-label="Waffle cone"
                      />
                      <Label
                        htmlFor="Waffle cone"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Waffle cone
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="Sugar cone"
                        id="Sugar cone"
                        className="peer sr-only"
                        aria-label="Sugar cone"
                      />
                      <Label
                        htmlFor="Sugar cone"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        Sugar cone
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <ToppingList />

                <div className="flex items-center justify-between mt-12">
                  <span className="font-bold">₹400</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
