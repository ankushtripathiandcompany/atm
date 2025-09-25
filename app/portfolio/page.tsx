import React from "react";
import Herobanner from "./herobanner";
import GithubCardSkew from "@/components/animata/card/github-card-skew";
const page = () => {
  return (
    <div>
      <Herobanner />
      <div className="py-16 px-4 flex align-center justify-center gap-8">
        <GithubCardSkew />
        <GithubCardSkew />
        <GithubCardSkew />
      </div>
      <div className="py-16 px-4 flex align-center justify-center gap-8">
        <GithubCardSkew />
        <GithubCardSkew />
        <GithubCardSkew />
      </div>
    </div>
  );
};

export default page;
