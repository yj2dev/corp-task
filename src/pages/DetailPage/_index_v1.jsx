// import { Container } from "./styled";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { Octokit } from "octokit";
//
// const DetailPage = () => {
//   const { number } = useParams();
//
//   const octokit = new Octokit({
//     auth: process.env.REACT_APP_OCTOKIT_TOKEN,
//   });
//
//   const getDetailIssue = async (owner, repo, number) => {
//     return await octokit.request(
//       `GET /repos/${owner}/${repo}/issues/${number}`,
//       {
//         owner: "github",
//         repo: "docs",
//         issue_number: number,
//       },
//     );
//   };
//
//   useEffect(() => {
//     const runGetDetailIssue = async () => {
//       const issueData = await getDetailIssue("facebook", " react", number);
//       console.log("number >> ", number);
//       console.log("issueData >> ", issueData);
//     };
//
//     runGetDetailIssue();
//   }, []);
//
//   return <Container>DetailPage</Container>;
// };
//
// export default DetailPage;
