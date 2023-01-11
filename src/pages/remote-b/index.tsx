import React from "react";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCountContext } from "remote_a/count_provider";

import styles from "./_remote_b.module.css";

export type PageType = {
  children?: ReactNode;
};

const Page = ({ children }: PageType) => {
  const { count } = useCountContext();
  const { pathname } = useLocation();

  return (
    <div className={styles["remote-b-home"]}>
      <h1>Home Remote B</h1>
      <span>Remote B count {count}</span>
      {pathname === "/remote-b" && (
        <Link to="/">
          <button>To Orchestrator</button>
        </Link>
      )}
      {pathname === "/" && (
        <Link to="/remote-b">
          <button>To Remote B</button>
        </Link>
      )}
      {children}
    </div>
  );
};

export default Page;
