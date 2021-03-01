import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const ShareButtons = () => (
  <S.Wrapper>
    <a
      href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnextjs.willianjusten.com.br%2F"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <FaFacebook />
    </a>

    <a
      href={`
https://twitter.com/intent/tweet?text=Quero%20aprender%20NextJS%20na%20pr%C3%A1tica%20com%20%40Willian_justen%20e%20%40guilhermelouro%20!&url=https%3A%2F%2Fnextjs.willianjusten.com.br%2F`}
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
  </S.Wrapper>
)

export default ShareButtons
