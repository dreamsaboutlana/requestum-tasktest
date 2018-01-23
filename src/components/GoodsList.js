import { GoodItem } from './GoodItem';
import PropTypes from 'prop-types';


export const GoodsList = ({ goodsData }) => {
  return (
    <React.Fragment>
      <ul className="goods-list">
        {goodsData.map((item, index) => (
          <li className="goods-list-item" key={index}>
            <GoodItem data={item} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
};

GoodsList.propTypes = {
  goodsData: PropTypes.array.isRequired
};