import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Summary from "../../components/Summary";
import { Container } from "./styled";
import { PulseLoader } from "react-spinners";
import { useIssueList } from "../../hooks/useIssueList";

// Q1. 이걸 모바일 반응형을 지원할때 어떤 편의를 중점으로 개발해야 하는가?
// A1.
const ListPage = () => {
  const [list, runGetIssue, getMoreIssue, scrollLoading] = useIssueList();
  const [issueRef, issueViewRef] = useInView();
  const [listCnt, setListCnt] = useState(10);

  useEffect(() => {
    console.log(list);
    runGetIssue("facebook", "react", listCnt);
    console.log(list);
  }, []);

  useEffect(() => {
    setListCnt((prev) => prev + 10);
    // getMoreIssue("facebook", "react", listCnt);

    if (issueViewRef) {
    }
  }, [issueViewRef]);

  return (
    <Container>
      <ul>
        {/*{list?.map((issue, index) => (*/}
        {/*  <Summary issue={issue} key={index} />*/}
        {/*))}*/}
      </ul>
      <span className="infinity-scroll-ref" ref={issueRef}>
        {scrollLoading && (
          <PulseLoader size={12} style={{ margin: "12px 0" }} />
        )}
      </span>
    </Container>
  );
};

export default ListPage;
