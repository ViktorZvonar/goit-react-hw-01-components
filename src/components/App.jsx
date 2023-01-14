import user from 'user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/Friends/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/Friends/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div
      style={{
        backgroundColor: 'tomato',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
