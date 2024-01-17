import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={style.name} key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
