import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <div className="d-flex justify-content-center">
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <LinkContainer
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }
            >
              <Pagination.Item
                key={x + 1}
                active={x + 1 === page}
                activeLabel={''}
              >
                {x + 1}
              </Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      </div>
    )
  );
};

export default Paginate;

/* 
<Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,

*/
