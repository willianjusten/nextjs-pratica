import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.TextBlock>
          <S.Title>NextJS na Prática</S.Title>
          <S.Description>
            Crie um mapa totalmente interativo com um CMS integrado em poucas
            horas!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.youtube.com/playlist?list=PLlAbYrWSYTiPlXj6USip_lCPzONUATJbE"
              onClick={onClick}
              wide
            >
              Assistir de Graça!
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
