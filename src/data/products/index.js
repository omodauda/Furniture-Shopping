const PRODUCTS = [
  {
    id: '1',
    category: 'Popular',
    list: [
      {
        id: '1',
        name: 'Black Simple Lamp',
        price: 12.0,
        image: require('@assets/images/products/simple-lamp.png'),
        units: 8,
        rating: '4.7',
        description:
          'Black Simple Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '2',
        name: 'Minimal Stand',
        price: 25.0,
        image: require('@assets/images/products/minimal-stand.png'),
        units: 1,
        rating: '4.5',
        description:
          'Minimal Stand is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Tracy Mosby',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '3',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '3',
        name: 'Coffee Chair',
        price: 20.0,
        image: require('@assets/images/products/coffee-chair.png'),
        units: 0,
        rating: '5.0',
        description:
          'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '4',
        name: 'Simple Desk',
        price: 50.0,
        image: require('@assets/images/products/simple-desk.png'),
        units: 5,
        rating: '4.3',
        description:
          'Simple Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Tracy Mosby',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '5',
        name: 'Coffee Table',
        price: 50.0,
        image: require('@assets/images/products/coffee-table.png'),
        units: 6,
        rating: '5.0',
        description:
          'Coffee Table is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    category: 'Chair',
    list: [
      {
        id: '1',
        name: 'Coffee Chair',
        price: 20.0,
        image: require('@assets/images/products/coffee-chair.png'),
        units: 0,
        rating: '5.0',
        description:
          'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    category: 'Table',
    list: [
      {
        id: '1',
        name: 'Minimal Stand',
        price: 25.0,
        image: require('@assets/images/products/minimal-stand.png'),
        units: 1,
        rating: '4.5',
        description:
          'Minimal Stand is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Tracy Mosby',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '3',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '2',
        name: 'Simple Desk',
        price: 50.0,
        image: require('@assets/images/products/simple-desk.png'),
        units: 5,
        rating: '4.3',
        description:
          'Simple Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Tracy Mosby',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '3',
        name: 'Minimal Desk',
        price: 50.0,
        image: require('@assets/images/products/simple-desk.png'),
        units: 2,
        rating: '4.8',
        description:
          'Minimal Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '4',
        name: 'Coffee Table',
        price: 50.0,
        image: require('@assets/images/products/coffee-table.png'),
        units: 6,
        rating: '5.0',
        description:
          'Coffee Table is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    category: 'Armchair',
    list: [
      {
        id: '1',
        name: 'Coffee Chair',
        price: 20.0,
        image: require('@assets/images/products/coffee-chair.png'),
        units: 0,
        rating: '5.0',
        description:
          'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    category: 'Bed',
    list: [
      {
        id: '1',
        name: 'Coffee Chair',
        price: 20.0,
        image: require('@assets/images/products/coffee-chair.png'),
        units: 0,
        rating: '5.0',
        description:
          'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Busayo Elegbede',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    category: 'Lamp',
    list: [
      {
        id: '1',
        name: 'Black Simple Lamp',
        price: 12.0,
        image: require('@assets/images/products/simple-lamp.png'),
        units: 8,
        rating: '4.7',
        description:
          'Black Simple Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
      {
        id: '2',
        name: 'Minimal Lamp',
        price: 12.0,
        image: require('@assets/images/products/simple-lamp.png'),
        units: 6,
        rating: '4.5',
        description:
          'Minimal Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furnutures in any family for now. With 3 different colors, you can easily select the best match for your home.',
        reviews: [
          {
            id: '1',
            user: 'Bruno Fernandes',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '2',
            user: 'Tracy Mosby',
            rating: '5',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
          {
            id: '3',
            user: 'Busayo Elegbede',
            rating: '4',
            review:
              'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
          },
        ],
      },
    ],
  },
];

export default PRODUCTS;
