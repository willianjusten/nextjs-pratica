import React from 'react'

import Image from 'next/image'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  slug: string
  link: string
}

type Props = {
  name: string
  role: string
  image: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <Image
        src={`/img/authors/${image}`}
        height={125}
        width={125}
        alt={name}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
