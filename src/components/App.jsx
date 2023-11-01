import { Profile } from "./Profile/Profile";
import { Statistics } from "./Data/Data";
import { FriendList } from "./Friends/Friends";
import { TransactionHistory } from "./Transactions/Transactions";
import user from "../components/user.json";
import data from "../components/data.json"
import friends from "../components/friends.json";
import transactions from "../components/transactions.json";
import styled from "styled-components";




export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions}/>;
</div>

  );
};

