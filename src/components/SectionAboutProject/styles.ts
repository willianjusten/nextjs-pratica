import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    transform: skewY(3deg);

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.medium};
    transform: skewY(-3deg);

    ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const Iframe = styled.div`
  position: relative;
    overflow: hidden;
    padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
