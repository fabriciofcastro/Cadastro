import { STableHead, STd, STr, STh, ContainerTable, STbody, SButton, SInputForm } from "./styleTabela";
import { useState } from "react";

export default function tabela({ vetor, selecionar }) {

  const [termo, setTermo] = useState('')

  return (
    <>
    <SInputForm type="text" placeholder="Buscar nome" onChange={e => setTermo(e.target.value)}/>
      <ContainerTable>
        <STableHead>
          <STr>
            <STh>#</STh>
            <STh>Nome</STh>
            <STh>Idade</STh>
            <STh>Cidade</STh>
            <STh>Selecionar</STh>
          </STr>
          <STbody>
            {
              vetor.filter(obj => obj.nome.includes(termo)).map((obj, indice) => (
                <STr key={ indice }>
                  <STd> { indice + 1 }</STd>
                  <STd> { obj.nome }  </STd>
                  <STd> { obj.idade } </STd>
                  <STd> { obj.cidade }</STd>
                  <STd><SButton onClick={() => selecionar(indice)}>Selecionar</SButton></STd>
                </STr>
              ))
            }
          </STbody>
        </STableHead>
      </ContainerTable>
    </>
  )
}