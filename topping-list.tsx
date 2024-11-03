'use client';
import React from 'react';
import ToppingCard, { Topping } from '../components/topping-card';
const toppings: Topping[] = [
  { id: '1', name: 'Chocolate chips', image: '/topping1.jpeg', price: 50, isAvailable: true },
  { id: '2', name: 'Sprinkles', image: '/topping2.jpeg', price: 50, isAvailable: true },
  { id: '3', name: 'Nuts', image: '/topping3.jpeg', price: 50, isAvailable: true },
];

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = React.useState<Topping[]>([]);


  const handleCheckBoxCheck = (topping: Topping) => {
    setSelectedToppings((prev) =>
      prev.some((element) => element.id === topping.id)
        ? prev.filter((elm) => elm.id !== topping.id)
        : [...prev, topping]
    );
  };

  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => (
          <ToppingCard
            topping={topping}
            key={topping.id}
            selectedToppings={selectedToppings}
            handleCheckBoxCheck={handleCheckBoxCheck}
          />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;