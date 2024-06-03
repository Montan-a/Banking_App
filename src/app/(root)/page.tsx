import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            user={loggedIn?.name || "Guest"}
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.32}
          />
        </header>
        {/* RECENT TRANSACTIONS */}
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 1223.4, mask: "1223" },
          { currentBalance: 1223.23, mask: "1232" },
        ]}
      />
    </section>
  );
};

export default Home;
