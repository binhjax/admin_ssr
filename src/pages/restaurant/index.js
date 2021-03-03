import React, { useState, useEffect } from 'react';

import axios from 'axios';
import WithDva from '../../utils/store';

const Restaurant = props => {
  const dispatch = action => {
    const { dispatch } = props;
    dispatch(action);
  };

  useEffect(() => {
    //Trigger to load data when component is mounted
    console.log('Restaurant: useEffect ', props);

    // const { dispatch } = props;
    console.log('Dispatch action: restaurant/fetch ');
    dispatch({
      type: 'restaurant/fetch',
      search: {},
      pagination: {},
    });

    return () => {};
  }, []);

  const { error } = props;
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const {
    restaurant: {
      data: { list, pagination },
    },
  } = props;

  console.log('LIST = ', list, typeof list);
  let restaurants = Object.values(list);
  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

Restaurant.getInitialProps = async ctx => {
  console.log('Server init => Pass to client ');
  try {
    const res = await axios.get('http://localhost:1337/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

// export default Restaurant
export default WithDva(state => {
  return { restaurant: state.restaurant };
})(Restaurant);
