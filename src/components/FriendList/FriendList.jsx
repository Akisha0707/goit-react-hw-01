import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => {
        return (
          <li className={style.name} key={friend.id}>
            <FriendListItem />
            {friend.name}
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
