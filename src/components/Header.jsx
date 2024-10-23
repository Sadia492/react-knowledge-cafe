import React from "react";
import profile from "../assets/images/profile.png";
export default function Header() {
  return (
    <div className="flex justify-between border-b-2 py-4 mb-4">
      <h2 className="font-bold text-4xl">Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
}
