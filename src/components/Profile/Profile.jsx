import style from './Profile.module.css';

const Profile = ({ name: username, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={image} alt={username} className="avatar" width="200px" height="200px" />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className="label"> Followers </span>
          <span className={style.value}>{followers}</span>
        </li>
        <li>
          <span className="label"> Views </span>
          <span className={style.value}>{views}</span>
        </li>
        <li>
          <span className="label"> Likes </span>
          <span className={style.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
