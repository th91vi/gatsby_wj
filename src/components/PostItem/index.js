import React from "react"

import * as S from "./styles"

const PostItem = () => {
  return (
    <S.PostItemLink to="/slug/">
      <S.PostItemWrapper>
        <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            30 de Julho de 2019 - 4 min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>
            Diga não ao Gutemberg: o WorPress antigo é melhor
          </S.PostItemTitle>
          <S.PostItemDescription>
            Spicy jalapeno bacon ipsum dolor amet adipisicing tail tri-tip
            andouille filet mignon sausage exercitation pork sirloin
            reprehenderit.
          </S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

export default PostItem
