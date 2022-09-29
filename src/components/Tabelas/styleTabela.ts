import styled from "styled-components";

{/**
    *********   C O N T A I N E R    T A B L E    **********
*/}

export const ContainerTable = styled.div`
  width: 70rem;
  height: 50rem;
  border-radius: 1rem;
  box-shadow: 0rem 0 1rem .5rem #fff;
  border: 2px solid orange;
  color: #fff;
  font: bold 1.6rem Arial;
  display: flex;
  justify-content: center;
`

{/**
    *********   H E A D   T A B L E    ************
*/}

export const STableHead = styled.thead`
  margin-top: 2rem

`

export const STr = styled.tr`

`

export const STd = styled.td`
    text-align: center;
    border: 1px solid whitesmoke;
    margin: 1rem 0;
`

export const STh = styled.th`
  padding: 1rem 4rem;
  border: 1px solid #fff;
`

{/**
    *********   B O D Y   T A B L E    ************
*/}


export const STbody = styled.tbody`

`

export const SButton = styled.button`
    width: 10rem;
    height: 3.5rem;
    border-radius: .5rem;
    background-color: green;
    color: #fff;
    font: bold 1.3rem Arial;


`

export const SInputForm = styled.input`
  width: 65rem;
  height: 10rem;
  border-radius: .5rem;
  outline: 0;
  padding: 0 1rem;
  border: 2px solid orange;
  box-shadow: 0 0 .5rem .1rem white;
  font: bold 2rem Arial;
`