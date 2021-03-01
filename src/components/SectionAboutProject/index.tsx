import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NgjEAoAto5M" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </S.Iframe>
        <div>
          <Heading>O que iremos construir</Heading>
          <S.Text>
            <p>Iremos construir um mapa totalmente interativo utilizando a fantástica biblioteca do <strong>Leaflet</strong>.</p>

            <p>Cada ponto no mapa será gerenciado através de um CMS na cloud chamado <strong>GraphCMS</strong> e iremos utilizar o <strong>NextJS</strong> para criar a melhor experiência para o usuário e também para você, desenvolvedor!</p>

            <p>Para fazer tudo isso, nós iremos ensinar todos os fundamentos das ferramentas <strong>da teoria a prática</strong>, sem deixar nenhum detalhe para trás.</p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
