import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.name} key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
//  avatar, name, isOnline, id;
