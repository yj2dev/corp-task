import { useRef, useState } from "react";
import { getIssue } from "../network/request";

export const useIssueList = () => {
  const [list, setList] = useState([]);
  const listCntRef = useRef(10);
  const [scrollLoading, setScrollLoading] = useState(false);

  const runGetIssue2 = () => {
    console.log("runGetIssue...2");
    // // const pageCnt = cnt + 10;
    // // let issueData = await getIssue("facebook", "react", listCntRef.current);
    // let issueData = getIssue("facebook", "react", 10);
    //
    // console.log("issueData >> ", issueData);
    //
    // issueData = setAd(issueData);
    // setList(issueData);
  };

  // Q1. runGetIssue의 함수내용을 임의로 만든 a로 옮기니까 모든게 동작한다. 동작 메커니즘을 도무지 알 수 없다. 내다버린 2시간
  const a = () => {
    // console.log("a>>");
    console.log("runGetIssue...");
    let issueData = getIssue("facebook", "react", 10);

    console.log("issueData >> ", issueData);
  };

  const setAd = (issueData, index = 5) => {
    issueData.splice(index - 1, 0, { type: "ad" });
    return issueData;
  };

  const getMoreIssue = async () => {
    console.log("listCntRef >> ", listCntRef.current);
    setScrollLoading(true);

    listCntRef.current = listCntRef.current + 10;
    console.log("listCntRef >> ", listCntRef.current);
    console.log("listCntRef.current + 10 >>  ", listCntRef.current + 10);
    await runGetIssue2();
    setScrollLoading(false);
  };

  return [a, list, setList, runGetIssue2, getMoreIssue, scrollLoading];
};
