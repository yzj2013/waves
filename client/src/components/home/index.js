import React, { useEffect } from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';
import Loader from 'utils/loader';

import { useDispatch, useSelector } from 'react-redux';
// import { myDog } from 'store/actions';
import { productsBySort } from 'store/actions/product.actions';

import CardBlock from 'utils/products/card.blocks';

const slimPromotion = {
  img: '/images/featured/featured_home_3.jpg',
  lineOne: 'Up to 40% off',
  lineTwo: 'In second hand guitar',
  linkTitle: 'Show Now',
  linkTo: '/shop',
};

const Home = () => {
  const { bySold, byDate } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(myDog());
  // }, [dispatch]);

  // console.log(user);

  useEffect(() => {
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: 'itemSold',
        order: 'desc',
        where: 'bySold',
      })
    );
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: 'date',
        order: 'desc',
        where: 'byDate',
      })
    );
  }, [dispatch]);

  // console.log(bySold);
  // console.log(byDate);

  return (
    <div>
      <Featured />

      {bySold ? (
        <CardBlock items={bySold} title='Best selling guitars' />
      ) : (
        <Loader />
      )}

      <SlimPromotion items={slimPromotion} />

      {byDate ? (
        <CardBlock items={byDate} title='Latests guitars on the shop' />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
