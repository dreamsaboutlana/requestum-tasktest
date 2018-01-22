export const Good = ({ data }) => (
  <React.Fragment>
    <div className="goods-list-item-img">
      <img src={data.img} alt="goods" />
      {data.new && <div className="badge badge-new">NEW</div>}
      {data.discountCost !== null && <div className="badge badge-sale">SALE</div>}
    </div>
    <h2 className='goods-list-item-title'> {data.title}    </h2>
    <p className="goods-list-item-description">
      {data.description}
    </p>
    <div className="goods-list-item-price">
      {data.discountCost == null && <span>${data.cost}.00</span>}
      {
        data.discountCost !== null && (
          <div>
          <span>
            ${data.discountCost}.00
          </span>
            <span className="goods-list-item-discount">
            ${data.cost}.00
          </span>
          </div>)
      }
    </div>
  </React.Fragment>
);