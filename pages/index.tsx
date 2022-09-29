import React from 'react'
import Head from 'next/head'
import Formulario from '../src/components/Formulario/Formulario'
import Container from '../src/components/Container/Container'
import Tabela from '../src/components/Tabelas/Tabela'

import { useState } from 'react'

const Home: React.FC = () => {

  // UseState
  const [indiceVetor, setIndiceVetor] = useState('')
  const [btnCadastrar, setBtnCadastrar] =useState(true)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([])

  //Função Cadastro

  function Cadastrar () {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }
      setVetor([...vetor, obj])

      setNome('')
      setIdade('')
      setCidade('')
  }

  // função para selecionar usuários

  const selecionar = (indice) => {
    setIndiceVetor(indice)
    setNome(vetor[indice].nome)
    setIdade(vetor[indice].idade)
    setCidade(vetor[indice].cidade)

    setBtnCadastrar(false)
  }

  // função para alterar os dados

  const alterar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }

    let copyVetor = [...vetor]
    copyVetor[indiceVetor] = obj;

    setVetor(copyVetor)

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }

  // função remover

  const remover = () => {

    let copyVetor = [...vetor]
    copyVetor.splice(indiceVetor, 1)
    setVetor(copyVetor)

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }


  // cancelar seleção

  const cancelar = () => {
    setNome('')
    setIdade('')
    setCidade('')

    setBtnCadastrar(true)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container >

        <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={Cadastrar} alterar={alterar} remover={remover} nome={nome} idade={idade} cidade={cidade} cancelar={cancelar}/>
        <Tabela vetor={vetor} selecionar={selecionar}/>

      </Container>
    </>
  )
}

export default Home
