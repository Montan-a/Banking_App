import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Rocko",
    lastName: "Cavie",
    email: "guineapig@rodent.org",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            user={loggedIn?.firstName || "Guest"}
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
