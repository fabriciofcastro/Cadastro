import styled from "styled-components";

{/** ************* Estilização do Container que englobas todos os elementos ************** */ }

export const SContainerForm = styled.section`
  width: 70rem;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0rem 0 1rem .5rem #fff;
  border: 2px solid orange;
`

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 65rem;
    height: 25rem;
    gap: 1rem 0;
`

{/** ************* Estilização dos iputs textos ************** */ }


interface EstiloInputTextProps {
  estiloInputText: string
}


export const SConianerInputText = styled.div`
   display: flex;
   flex-direction: column;

`

const getStyleInputText = estiloInputText => {
    if (estiloInputText === "nome") {
      return `

    `
    }
}


export const SInput = styled.input<EstiloInputTextProps>`
    margin: 1rem;
    height: 4rem;
    border-radius: .5rem;
    border: none;
    outline: 0;
    padding: 1rem;

      :focus {
       color: red;
      }

      ::placeholder {

      }

      :placeholder-shown {
          background-color: ivory;
           border: 2px solid darkorange;
           border-radius: 5px;

      }
      ${({ estiloInputText }) => getStyleInputText(estiloInputText)};

`

{/** ************  Estilização dos botoes *********** */ }

export const SConianerInputButtons = styled.div`
    display: flex;
    gap: 2.5rem;
    justify-content: space-evenly;
`


interface EstiloInputButtonProps {
    value: string
}

const getEstiloInputButton = value => {
    if (value === "Cadastrar") {
     return`
        background: #2c1fc1;
        color: #fff;

        :hover {
          background-color: #f06f91;
        }
`
  }

  else if (value === "Alterar") {
    return`
        color: #fff;
        background: orange;

        :hover {
          background-color:  #f54321;
        }
    `
  }

  else if (value === "Excluir") {
    return`
        color: #551155;
        background: #c1f1f9;

        :hover {
          background-color:  #f54321;
        }
    `
  }

  else if(value === "Filtrar") {
    return`
        color: #f54321;
        background: #999955;

        :hover {
          background-color:  #112911;
        }
    `
  }

}


export const SButton = styled.input<EstiloInputButtonProps> `
    ${({ value }) => getEstiloInputButton(value)}

    height: 4rem;
    justify-content: center;
    width: 10rem;
    display: flex;
    flex-direction: row;
    border-radius: .5rem;
    font-weight: 700;
    border: none;
    box-shadow: 0 0  .3rem .1rem white;

`