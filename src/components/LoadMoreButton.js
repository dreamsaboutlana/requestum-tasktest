import PropTypes from 'prop-types';

export const LoadMoreButton = ({ loadNextPage }) => (
  <div className="load-block">
    <button className="btn-load" onClick={loadNextPage}>Load More</button>
  </div>
);

LoadMoreButton.propTypes = {
  loadNextPage: PropTypes.func.isRequired
};