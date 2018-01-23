import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPage, loadMore } from '../actions/actions';
import { GoodsList } from '../components/GoodsList';
import { LoadMoreButton } from '../components/LoadMoreButton';

import ReactLoading from 'react-loading';

class GoodsListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 1,
      limit: 4
    };
  }

  componentDidMount() {
    this.props.loadPage(this.state.offset, this.state.limit);
  }

  loadNextPage = () => {
    this.props.loadMore(this.state.offset + 1, this.state.limit);
    this.setState({ offset: this.state.offset + 1 });
  };

  render() {
    const { isLoading, incomeGoods, fetchedGoods } = this.props;
    const showLoaderButton = () => {
      if (isLoading) {
        return <ReactLoading type="spin" color="#ed1111" className="loading" />;
      }
      if (incomeGoods >= this.state.limit) {
        return <LoadMoreButton loadNextPage={this.loadNextPage} />;
      }
      return null;
    };
    return (
      <React.Fragment>
        <GoodsList goodsData={fetchedGoods} />
        {showLoaderButton()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedGoods: state.reducer.fetchedData,
    incomeGoods: state.reducer.incomeData,
    isLoading: state.reducer.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPage: bindActionCreators(loadPage, dispatch),
    loadMore: bindActionCreators(loadMore, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer);
