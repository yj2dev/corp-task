import { useState } from "react";
import { getIssue } from "../network/request";
import { useInView } from "react-intersection-observer";

export const useIssueList = () => {
  const [list, setList] = useState([]);
  const [scrollLoading, setScrollLoading] = useState(false);

  const setAd = (issueData, index = 5) => {
    issueData?.splice(index - 1, 0, { type: "ad" });
    return issueData;
  };

  const getMoreIssue = async (owner, repo, listCnt) => {
    setScrollLoading(true);
    await runGetIssue(owner, repo, listCnt);
    setScrollLoading(false);
  };

  const runGetIssue = async (owner, repo, listCnt) => {
    let issueData = await getIssue(owner, repo, listCnt);
    console.log(issueData);
    console.log(typeof issueData);

    issueData = setAd(issueData);
    console.log(issueData);
    console.log(typeof issueData);
    setList(issueData);
  };

  return [list, setList, runGetIssue, getMoreIssue, scrollLoading];
};
