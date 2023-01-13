import css from './FriendListItem.module.css';

const FriendListItem = props => {
  const { id, avatar, name, isOnline } = props;
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
