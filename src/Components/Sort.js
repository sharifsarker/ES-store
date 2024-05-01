import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../Context/FilterContext';

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'} onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button className={!grid_view ? 'active sort-btn' : ' sort-btn'} onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;