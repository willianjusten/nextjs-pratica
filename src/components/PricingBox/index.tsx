import React from 'react'

import * as S from './styles'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'
const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = () => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$54.99</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        R$39.90 <sup>*</sup>
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Acesso a todo conteúdo <strong>no primeiro dia!</strong>
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Desconto exclusivo</strong> para o React Avançado
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button href="https://www.udemy.com/course/aprenda-nextjs-na-pratica/?couponCode=PROMOFEV22" onClick={onClick} withPrice>
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$54.99</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$39.90</S.ButtonDiscountPrice>
      </div>
    </Button>

    <S.SmallText><strong>*</strong> nos 5 primeiros dias</S.SmallText>
  </S.Box>
)

export default PricingBox
