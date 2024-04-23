import { useRef, useState } from "react";
import { getIssue } from "../network/request";

export const useIssueList = () => {
  const [list, setList] = useState([]);
  const listCntRef = useRef(10);
  const [scrollLoading, setScrollLoading] = useState(false);

  const getIssueList = async () => {
    let issueData = await getIssue("facebook", "react", listCntRef.current);
    issueData = setAd(issueData);
    setList(issueData);
  };

  const setAd = (issueData, index = 5) => {
    issueData.splice(index - 1, 0, { type: "ad" });
    return issueData;
  };

  const getMoreIssue = async () => {
    setScrollLoading(true);
    listCntRef.current = listCntRef.current + 10;
    await getIssueList();
    setScrollLoading(false);
  };

  return [list, getIssueList, getMoreIssue, scrollLoading];
};
