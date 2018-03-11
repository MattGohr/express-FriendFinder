// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [{
    "name": "Margret",
    "photo": "https://s-media-cache-ak0.pinimg.com/originals/e9/00/5f/e9005faf711c0aa9347dced6ea73d34f.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    "name": "Sam",
    "photo": "https://cdn.shopify.com/s/files/1/0344/6469/files/spacehug_large.jpg?v=1486054483",
    "scores": [ 3, 1, 4, 1, 2, 5, 5, 1, 4, 4]
  },
  {
    "name": "Ahmed",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTcyqayg9hVfmZ5gT848hAx8da2bhSY9VmEPlX5rlnjZuuNwG",
    "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  },
  {
    "name": "Tom",
    "photo": "https://images-cdn.9gag.com/photo/anNM0mL_700b.jpg",
    "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
  },
  {
    "name": "Will Smith",
    "photo": "http://www.pleated-jeans.com/wp-content/uploads/2016/08/a99798_gun1.jpg",
    "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    "name": "Big Birtha",
    "photo": "https://cdn.shopify.com/s/files/1/0344/6469/files/spacehug_large.jpg?v=1486054483",
    "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "name": "Sherral",
    "photo": "https://i.pinimg.com/736x/80/8e/32/808e32b1ecac9dd8376bb5245d94bb7b--bad-photos-crazy-photos.jpg",
    "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
