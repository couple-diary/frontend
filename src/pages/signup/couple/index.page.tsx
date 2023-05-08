import { AbsoluteCenter, Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { Stack } from '@toss/emotion-utils'

const Page = () => {
  return (
    <Box position="relative" h="80vh">
      <AbsoluteCenter axis="both">
        <Stack as="form" spacing={4}>
          <Box w="30vw">
            <Text mb="3px">내 초대코드</Text>
            <InputGroup>
              <Input placeholder="닉네임을 입력해주세요" isReadOnly value="123456" />
              <InputRightElement width="4.5rem">
                <Button h="1.8rem">공유</Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box w="30vw">
            <Text mb="3px">상대방 초대코드</Text>
            <Input type="password" placeholder="상대방의 초대코드를 입력해주세요" />
          </Box>
          <Button type="submit" colorScheme="blue">
            시작하기
          </Button>
        </Stack>
      </AbsoluteCenter>
    </Box>
  )
}

export default Page
