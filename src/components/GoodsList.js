import { GoodItem } from './GoodItem';
import { loadPage } from '../actions/actions'

const data = [{
  'title': 'My new TITLE',
  'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
  'cost': 249,
  'discountCost': 199,
  'new': true,
  'img': 'assets/1.png'
}, {
  'title': 'test title 2',
  'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
  'cost': 249,
  'discountCost': null,
  'new': false,
  'img': 'assets/2.png'
}, {
  'title': 'test title 3',
  'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
  'cost': 125,
  'new': true,
  'discountCost': null,
  'img': 'assets/3.png'
}, {
  'title': 'test title 4',
  'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
  'cost': 111,
  'discountCost': 90,
  'new': false,
  'img': 'assets/4.png'
}];
//
// const getDate = fetch('http://localhost:4444/list?page=1&per_page=4')
// .then(data => data.json())
// .catch(console.log);
//
// console.log(getDate);

export class GoodsList extends Component {

  render() {
    return (
      <React.Fragment>

        <ul className="goods-list">
          {data.map((item, index) => (
            <li className="goods-list-item" key={index}>
              <GoodItem data={item} />
            </li>
          ))}
        </ul>

        <div className="load-block">
          <button className="btn-load">Load More</button>
        </div>
      </React.Fragment>
    )
  }
}