import clsx from 'clsx';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.item}>
      <img className={style.avatar} name={name} src={avatar} alt={name} width="48" />
      <p className={style.status}>{name}</p>
      <p
        className={clsx('status', {
          'style.isOnline': isOnline,
          'style.isOffline': !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
