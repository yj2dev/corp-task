import { getDetailIssue } from "../network/request";
import { useState } from "react";

export const useDetailIssue = () => {
  const [issue, setIssue] = useState(null);

  const runGetDetailIssue = async (owner, repo, number) => {
    const issueData = await getDetailIssue(owner, repo, number);

    setIssue(issueData);
  };

  return [issue, runGetDetailIssue];
};
