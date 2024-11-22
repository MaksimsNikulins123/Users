import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>Ivitation sended to {count} {`${count > 1 ? 'users' : 'user'}`}.</p>
      <button className="send-invite-btn" onClick={() => window.location.reload()}>Back</button>
    </div>
  );
};
