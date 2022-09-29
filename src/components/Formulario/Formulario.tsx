import { SForm, SInput, SContainerForm, SButton, SConianerInputText, SConianerInputButtons } from "./styleFormulario";
export default function Formulario({ btnCadastrar, setNome, setCidade, setIdade, cadastrar, nome, cidade, idade, alterar, remover, cancelar }) {



  return (
    <>
      <SContainerForm>

        <SForm>

          <SConianerInputText>
            <SInput
              estiloInputText="nome"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={ e => setNome(e.target.value) }
            />

            <SInput
              estiloInputText="idade"
              type="text"
              placeholder="Idade"
              value={idade}
              onChange={ e => setIdade(e.target.value) }
            />

            <SInput
              estiloInputText="cidade"
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={ e => setCidade(e.target.value) }
            />
          </SConianerInputText>

          <SConianerInputButtons>
            { btnCadastrar
              ?
              <SButton type="button" value="Cadastrar" onClick={cadastrar}/>
              :
              <>
                <SButton type="button" value="Alterar" onClick={alterar}/>
                <SButton type="button" value="Excluir" onClick={remover}/>
                <SButton type="button" value="Cancelar" onClick={cancelar}/>
              </>
            }
          </SConianerInputButtons>

        </SForm>
      </SContainerForm>

    </>
  )
}
