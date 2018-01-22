import { Good } from './Good';
import { GoodBtn } from './GoodBtn';

export const GoodItem = (props) => (
  <React.Fragment>
    <Good data={props.data} />
    <GoodBtn />
  </React.Fragment>
);