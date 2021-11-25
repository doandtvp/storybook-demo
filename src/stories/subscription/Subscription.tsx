import './Subscription.scss';

const Subscription = () => {
  return (
    <div className="subscription">
      <h2>Subscription</h2>
      <p>
        Current Plan:{' '}
        <span className="subscription-title">
          Quarterly payment plan{' '}
          <span className="subscription-price">($675/qtr)</span>
        </span>
      </p>

      <p className="subscription-cancel">Cancel subscription</p>
    </div>
  );
};

export default Subscription;
