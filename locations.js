const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'INDIA - find a place for history',
      pageHeader: {
        title: 'INDIA',
        strapLine: 'find a place for history'
      },
      sidebar: "India has many historical places",
      locations: [
        {
          name: 'Delhi',
          address: 'Agra',
          rating: 5,
          facilities: ['TAJMAHAL'],        
        },
        {
          name: 'Hyderabad',
          address: 'oldcity',
          rating: 4,
          facilities: ['charminar'],          
        },
        {
          name: 'warangal',
          address: 'warangal',
          rating: 3,
          facilities: ['1000pillars temple'],          
        }
      ]
    }
  );
};

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'Delhi',
       pageHeader: {
        title: 'India',
      },
      sidebar: {
        context: 'hi',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'Delhi',
        address: 'Agra',
        rating: 5,
        facilities: ['Tajmahal'],
        coords: {lat: 51.455041, lng: -0.9690884},
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Manoj',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'excellent'
          },
          {
            author: 'Kumar',
            rating: 4,
            timestamp: '16 June 2013',
            reviewText: 'good'
          }
        ]
      }
    }
  );
};

const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review Delhi on INDIA' ,
      pageHeader: { title: 'Review Delhi' }
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
