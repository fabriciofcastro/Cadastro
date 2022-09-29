import styled from "styled-components";

export const SContainer = styled.div`
    width: 136.6rem;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 4rem 0;
    color: #fff;
`