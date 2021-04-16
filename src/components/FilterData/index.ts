export const filterData = {
  buyingFormat: [{
    id: 0,
    name: 'Auction',
  },
  {
    id: 1,
    name: 'Direct Sale',
  }],
  condition: [
    {
      id: 0,
      name: 'New',
    },
    {
      id: 1,
      name: 'Used',
    }
  ],
  price: 
    {
      id: 0,
      min: 1,max: 1000,
    }
  ,
  quntity:{
    id: 0,
    min: 1,max: 1000,
  },
  sellerRate: {
    id: 0,
    min: 1,max: 1000,
  },
  brand:[
    {id: 0, name: 'apple', count: 100},
    {id: 1, name: 'acer', count: 110},
    {id: 2, name: 'hp', count: 40},
    {id: 3, name: 'dell', count: 30},
    {id: 4, name: 'lenovo', count: 60},
  ],
  material:[
    {id: 0, name: 'leather', count: 100},
    {id: 1, name: 'wood', count: 110},
    {id: 2, name: 'fabric', count: 40},
  ],
  sizes:[
    {id:0,name:41,},
    {id:1,name:42,},
    {id:2,name:43,},
    {id:3,name:44,},
  ]
}
