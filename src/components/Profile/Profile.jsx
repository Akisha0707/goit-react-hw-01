import css from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.image} src={image} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}> Followers </span>
          <span className={css.value}>{followers}</span>
        </li>
        <li>
          <span className={css.label}> Views </span>
          <span className={css.value}>{views}</span>
        </li>
        <li>
          <span className={css.label}> Likes </span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
