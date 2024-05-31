import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Montana" };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
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
        </div>
      </div>
    </section>
  );
};

export default Home;
