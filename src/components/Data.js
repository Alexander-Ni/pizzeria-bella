const Products = [
    {
      name: "Margherita",
      category: 'Pizza',
      ingredients: "Tomatsaus og mozzarella.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 99,
      image: './images/margherita.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Kalven",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus og biff.",
      allergens: "Inneholder: melk, hvete, selleri.",
      price: 169,
      image: './images/biff.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Kyllingen",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus og kylling.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 159,
      image: './images/kylling-pizza.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Vegetar",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus, squash og paprika.",
      allergens: "Inneholder: melk, hvete.",
      price: 99,
      image: './images/margherita.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Capitano",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus og kjøttboller.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 129,
      image: './images/biff.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Forza",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus, bacon og løk.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 99,
      image: './images/kylling-pizza.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Totti",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus og sjampinjong.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 109,
      image: './images/kylling-pizza.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Tropicana",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus, bacon og ananas.",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 99,
      image: './images/margherita.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    }, 
    {
      name: "Del Piero",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus, sqaush og bacon",
      allergens: "Inneholder: melk, hvete, sesamfrø.",
      price: 99,
      image: './images/kylling-pizza.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Diavola",
      category: 'Pizza',
      ingredients: "Ost, tomatsaus, biff og jalapenos.",
      allergens: "Inneholder: melk, hvete, egg.",
      price: 169,
      image: './images/biff.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "No Pasta No Party",
      category: 'Pasta',
      ingredients: "Kremet fløtesaus, kylling og spinat.",
      allergens: "Inneholder: melk, hvete, egg.",
      price: 159,
      image: './images/ravioli.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      name: "Pasta Pirlo",
      category: 'Pasta',
      ingredients: "Kremet fløtesaus, ost og spinat.",
      allergens: "Inneholder: melk, hvete, egg.",
      price: 99,
      image: './images/pasta.jpeg',
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
        name: "Pasta Buffon",
        category: 'Pasta',
        ingredients: "Tomatsaus, ost og kjøttboller.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 129,
        image: './images/pasta.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Party",
        category: 'Pasta',
        ingredients: "Kremet tomatsaus, parmesan, kylling.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 99,
        image: './images/pasta.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Gattuso",
        category: 'Pasta',
        ingredients: "Fløtesaus, ost og bacon.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 109,
        image: './images/ravioli.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Maldini",
        category: 'Pasta',
        ingredients: "Carbonara, ost og squash.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 99,
        image: './images/alfredo.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Inzaghi",
        category: 'Pasta',
        ingredients: "Kremet fløtesaus, spinat og kylling.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 99,
        image: './images/ravioli.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Donnarumma",
        category: 'Pasta',
        ingredients: "Tomatsaus, ekstra lange rør og kylling.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 129,
        image: './images/pasta.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Pizzaro",
        category: 'Pasta',
        ingredients: "Tomatsaus, skinke og parmesan",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 99,
        image: './images/pasta.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
      {
        name: "Pasta Luca Toni",
        category: 'Pasta',
        ingredients: "Fløtesaus, skinke og parmesan.",
        allergens: "Inneholder: melk, hvete, egg.",
        price: 109,
        image: './images/alfredo.jpeg',
        count: 0,
        counterVal: 1,
        inCart: false
      },
  ];
  export default Products;
  