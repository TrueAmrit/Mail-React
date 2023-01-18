import styled from "styled-components";

export const HeaderStyle = styled.div`
.header-wrapper{
    display: flex;
    width: 99.9%;
    height: 20px;
    padding: 25px 0;
    position: relative;
    background-color:black;
    justify-content:space-between;
    border: 1px solid rgb(229, 229, 229);
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
    .heading-container{
        font-family: Lato, sans-serif !important;
        color:white;
        font-size:25px;
        margin-left:40px
    }
    .unread-container{
        font-family: Lato, sans-serif !important;
        color:white;
        font-size:25px;
        margin-right:40px
    }
}
`