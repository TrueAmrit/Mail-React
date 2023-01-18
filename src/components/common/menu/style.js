import styled from "styled-components";

export const SidebarMenu = styled.div`
  .sidebar-wrapper {
    float: left;
    height: calc(100vh - 72px);
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    width: 300px;
    .subfolder {
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      height: 30px;
      width: 99%;
      cursor: pointer;
      padding: 5px 0;
      .subfolder :hover {
        background-color: grey;
        color: black;
      }
    }
  }
`

export const ModalContainer = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.75);
    z-index: 200;

    .modal-content {
      position: fixed;
      background: #ffffff;
      height: auto;
      top: 50%;
      left: 50%;
      border: 1px solid #e5e5e5;
      transform: translate(-50%, -50%);
      border-radius: 12px;
      .modal-header {
        display: flex;
        border-radius: 12px 12px 0px 0px;
        justify-content: space-between;
        align-items: center;
        padding: 0% 4%;
        height: 50px;
        background-color: #3867d6;
        font: normal bold 18px/24px larger;
      }
    }
    .content-modal {
      display: flex;
      width: 100%;
      min-width: 420px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px;

      .search-input {
        margin: 20px 0px 20px 0px;

        .input {
          box-sizing: border-box;
          margin: 0;
          position: relative;
          display: inline-block;
          line-height: 2;
          border: #ffffff 2px solid rgba(196, 192, 192, 0.574);
          border-radius: 3px;
          min-width: 0;
          width: 300px;
        }
        .input:hover {
          border: 2px solid #3867d6;
          color: #3867d6;
        }
      }
      .cities-container {
        overflow: scroll;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 330px;

        .city-container {
          width: 95%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgb(169, 161, 161);
          margin-top: 10px;
          padding: 5px;
          cursor: pointer;
          font: normal bold 18px/24px larger;
        }
      }
      .cities-container::-webkit-scrollbar {
        display: none;
      }
    }
    .close-clicked {
      height: 100%;
      width: 100%;
    }
  }
`;
