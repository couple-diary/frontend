import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Navigation } from '~/layouts/AppLayout/navigations'

const Page = () => {
  const route = useRouter()

  return (
    <Navigation
      top={{
        title: 'Index Page Top Nav',
      }}
      bottom
    >
      <div>
        <Button colorScheme="gray" onClick={() => route.push('/login')}>
          Login
        </Button>
      </div>
    </Navigation>
  )
}

export default Page
