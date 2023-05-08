import { css, useTheme } from '@emotion/react'
import { useNavigationValue } from '../atoms'

const TopNavigation = () => {
  const { dimensions } = useTheme()
  const navigation = useNavigationValue()

  if (!navigation.top) {
    return null
  }

  return (
    <div
      css={css`
        height: ${dimensions.topNavigationHeight};
      `}
    >
      {navigation.top.title}
    </div>
  )
}

export default TopNavigation
