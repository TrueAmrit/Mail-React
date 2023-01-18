import styled from "styled-components";

export const CategoryStyle = styled.div`
display:flex;
.category-wrapper{
float: left;
height: calc(100vh - 72px);
background-color: grey;
display: flex;
flex-direction: column;
width: 500px;
    .mail-box {
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      height: 50px;
      width: 100%;
      border: 1px solid rgb(218, 216, 216);
      box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
      cursor: pointer;
      padding: 5px 0;
      overflow: hidden;
        text-overflow: ellipsis;
      .mail-d {
        padding: 2px;
        max-width: fit-content;
        margin-left: 10px;
      }
    }
    .mail-box :nth-child(1) {
      font-family: "Times New Roman", Times, serif;
      font-size: larger;
      font-weight: 450;
    }
    .mail-box:hover {
      background-color: lightgrey;
      color: black;
    }
  }
}
}
`;

export const MailDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: calc(100vh-50px);
  .right-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);

    .right-card-header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      justify-content: space-between;
      width: table-row;
      height: 50px;
      box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
      font-size: 25px;
      padding: 10px;
    }
    .right-card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 350px);
      padding: 10px;
    }
  }
`;
