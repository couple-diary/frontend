import { AbsoluteCenter, Box, Button, Input, InputGroup } from '@chakra-ui/react'
import { Stack } from '@toss/emotion-utils'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  return (
    <Box position="relative" h="80vh">
      <AbsoluteCenter axis="both">
        <Stack as="form" spacing={4}>
          <InputGroup width="sm">
            <Input placeholder="닉네임을 입력해주세요" />
          </InputGroup>
          <InputGroup>
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </InputGroup>
          <Button type="submit" colorScheme="blue">
            로그인
          </Button>
          <Button colorScheme="blue" variant="outline" onClick={() => router.push('/signup')}>
            회원가입
          </Button>
        </Stack>
      </AbsoluteCenter>
    </Box>
  )
}

export default Page
