import { ReactNode, useEffect } from 'react'
import { useNavigationValue, useSetNavigation } from '../atoms'

type Props = ReturnType<typeof useNavigationValue> & {
  children: ReactNode
}

const Navigation = ({ top = null, bottom = false, children }: Props) => {
  const set = useSetNavigation()

  useEffect(() => {
    set.all({
      top,
      bottom,
    })

    return () =>
      set.all((prev) => ({
        ...prev,
        top: null,
        bottom: false,
      }))
  }, [...Object.values(top ?? {}), bottom])

  return <>{children}</>
}

export default Navigation
