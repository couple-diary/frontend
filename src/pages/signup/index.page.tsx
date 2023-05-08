import { AbsoluteCenter, Box, Button, Input, InputGroup, Text } from '@chakra-ui/react'
import { Stack } from '@toss/emotion-utils'

const Page = () => {
  return (
    <Box position="relative" h="80vh">
      <AbsoluteCenter axis="both">
        <Stack as="form" spacing={4}>
          <Box w="30vw">
            <Text mb="3px">닉네임</Text>
            <Input placeholder="닉네임을 입력해주세요" />
          </Box>
          <Box w="30vw">
            <Text mb="3px">비밀번호</Text>
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </Box>
          <Button type="submit" colorScheme="blue">
            회원가입
          </Button>
        </Stack>
      </AbsoluteCenter>
    </Box>
  )
}

export default Page
