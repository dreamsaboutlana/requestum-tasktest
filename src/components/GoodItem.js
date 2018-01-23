import PropTypes from 'prop-types';

import { Good } from './Good';
import { GoodBtn } from './GoodBtn';


export const GoodItem = ({ data }) => (
  <React.Fragment>
    <Good data={data} />
    <GoodBtn />
  </React.Fragment>
);

GoodItem.propTypes = {
  data: PropTypes.object.isRequired
};