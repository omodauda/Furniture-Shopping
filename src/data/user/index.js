const USER = {
  name: 'Bruno Fernandes',
  email: 'bruno203@gmail.com',
  image: require('@assets/images/users/user1.png'),
  orders: [
    {
      id: '1',
      orderNo: '238562312',
      date: '20/03/2020',
      quantity: 3,
      totalAmount: 150
    },
    {
      id: '2',
      orderNo: '238562312',
      date: '20/03/2020',
      quantity: 3,
      totalAmount: 150
    },
    {
      id: '3',
      orderNo: '238562312',
      date: '20/03/2020',
      quantity: 3,
      totalAmount: 150
    },
    {
      id: '4',
      orderNo: '238562312',
      date: '20/03/2020',
      quantity: 3,
      totalAmount: 150
    }
  ],
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
      cardNo: '**** **** **** 3947',
      cardHolderName: 'Jennyfer Doe',
      expirtDate: '05/23',
      isDefault: true,
    },
    {
      id: '2',
      cardType: 'MasterCard',
      cardNo: '**** **** **** 3947',
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

export default USER;
