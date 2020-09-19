import React from "react"

import Avatar from "../Avatar"
import * as S from "./styles"

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {'John Doe'}
          <S.ProfilePosition>{'Backend Developer'}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{'I blog about back end development'}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile