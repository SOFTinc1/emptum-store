const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      imageUrl: "https://i.ibb.co/kXs8gJd/hat.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      imageUrl: "https://i.ibb.co/B6MQtpn/jacket.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      // imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      imageUrl: "https://i.ibb.co/0cyrjM2/sneaker.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women",
      // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      imageUrl: "https://i.ibb.co/KqYxS10/women.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "men",
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl: "https://i.ibb.co/YB515Dm/men.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
    {
      title: "shop",
      imageUrl: "https://i.ibb.co/cDw9LWb/all.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
