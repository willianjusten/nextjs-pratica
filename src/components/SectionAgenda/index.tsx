import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionAgenda = () => (
  <Container id="agenda">
    <Heading reverseColor>Propósito do curso</Heading>
    <S.Text>
      <p>
        Esse é um curso mais rápido e mais focado com o objetivo de que você aprenda as principais características e funcionalidades do NextJS e GraphQL para que já possa criar diversos projetos já ao final do curso.
      </p>

      <p>
        Todo o curso será lançado em sua totalidade já no <strong>primeiro dia</strong>, assim você já pode sair aprendendo tudo que precisa. Por ser um curso menor, também terá um custo bem menor, com objetivo de facilitar o acesso a todos.
      </p>
    </S.Text>
  </Container>
)

export default SectionAgenda
