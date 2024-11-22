import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({inputSearchValue, onChangeInputValue,  items, isLoading, onClickInvite, invites, onClickSendInvites, pages}) => {

  

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Find user ......" value={inputSearchValue} onChange={onChangeInputValue} />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {
            items.filter((item) => {
              const fullName = (item.first_name + item.last_name).toLowerCase();
              const email = item.email.toLowerCase();
              if(fullName.includes(inputSearchValue.toLowerCase()) || email.includes(inputSearchValue.toLowerCase())) {
                return true;
              }
              return false;
            }).map((item) =>
              <User isInvited={invites.includes(item.id)} key={item.id} {...item} onClickInvite={onClickInvite} />
            )
          }
        </ul>
      )}
      <div className="pages">
        {pages}
      </div>
      <button 
        className="send-invite-btn" 
        onClick={onClickSendInvites}
        disabled={invites.length === 0}
        >
          Send invitation
      </button>
    </>
  );
};
