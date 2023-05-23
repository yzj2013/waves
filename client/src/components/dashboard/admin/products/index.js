import React, { useEffect, useReducer, useState } from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import ProductsTable from './productsTable';

import { useDispatch, useSelector } from 'react-redux';
import {
  productsByPaginate,
  productRemove,
} from 'store/actions/product.actions';

const defaultValues = {
  keywords: '',
  brand: [],
  min: 0,
  max: 5000,
  frets: [],
  page: 1,
};

const AdminProducts = (props) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [toRemove, setToRemove] = useState(null);

  const products = useSelector((state) => state.products);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );

  const gotoEdit = (id) => {
    props.history.push(`/dashboard/admin/edit_product/${id}`);
  };

  const gotoPage = (page) => {
    setSearchValues({ page: page });
  };

  const handleClose = () => {
    setRemoveModal(false);
  };

  const handleModal = (id) => {
    setToRemove(id);
    setRemoveModal(true);
  };

  const handleRemove = () => {
    ///  dispatch
    dispatch(productRemove(toRemove));
  };

  useEffect(() => {
    dispatch(productsByPaginate(searchValues));
  }, [dispatch, searchValues]);

  useEffect(() => {
    handleClose();
    setRemoveModal(null);
    if (notifications && notifications.removeArticle) {
      dispatch(productsByPaginate(searchValues));
    }
  }, [notifications]);

  return (
    <DashboardLayout title='Products'>
      <div className='products_table'>
        <div>search</div>
        <hr />
        <ProductsTable
          prods={products.byPaginate}
          removeModal={removeModal}
          prev={(page) => gotoPage(page)}
          next={(page) => gotoPage(page)}
          gotoEdit={(id) => gotoEdit(id)}
          handleClose={() => handleClose()}
          handleModal={(id) => handleModal(id)}
          handleRemove={() => handleRemove()}
        />
      </div>
    </DashboardLayout>
  );
};

export default AdminProducts;
