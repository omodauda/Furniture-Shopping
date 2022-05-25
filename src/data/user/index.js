const user = {
  name: 'Bruno Pham',
  email: 'bruno203@gmail.com',
  image: '',
  orders: [],
  shippingAddresses: [
    {
      id: '1',
      address: "25 rue Robert Latouche, Nice, 06200, Cote D'azur, France.",
      isDefault: true,
    },
    {
      id: '2',
      address: "25 rue Robert Latouche, Nice, 06200, Cote D'azur, France.",
      isDefault: false,
    },
    {
      id: '3',
      address: "25 rue Robert Latouche, Nice, 06200, Cote D'azur, France.",
      isDefault: false,
    },
  ],
  paymentMethods: [
    {
      id: '1',
      cardType: 'MasterCard',
      cardNo: '1111 2222 3333 3947',
      cardHolderName: 'Jennyfer Doe',
      expirtDate: '05/23',
      isDefault: true,
    },
    {
      id: '2',
      cardType: 'MasterCard',
      cardNo: '1111 2222 3333 3947',
      cardHolderName: 'Jennyfer Doe',
      expirtDate: '05/23',
      isDefault: false,
    },
  ],
  reviews: [
    {
      id: '1',
      productName: 'Coffee Table',
      price: 50.0,
      myRating: '5',
      date: '20/03/2020',
      review:
        'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
    },
    {
      id: '2',
      productName: 'Coffee Table',
      price: 50.0,
      myRating: '5',
      date: '20/03/2020',
      review:
        'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
    },
    {
      id: '3',
      productName: 'Coffee Table',
      price: 50.0,
      myRating: '5',
      date: '20/03/2020',
      review:
        'Nice furniture with good delivery. The delivery time is very fast. Then product look like exactly the picture in the app. Besides color is also the same and quality is very good despite very cheap price.',
    },
  ],
};

export default user;
