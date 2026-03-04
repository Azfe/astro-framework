import React from "react";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className="mx-auto max-w-screen-xl p-4 py-8 text-white">
      <h1 className="mb-4 text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
          {title}
        </span>
      </h1>
    </header>
  );
};

export default Header;
