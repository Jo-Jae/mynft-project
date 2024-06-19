import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FC } from "react";
import bias from "../images/어덕행덕_s.jpg";
import slide_image from "../images/slide_images/a.gif";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        bgColor="red.100"
        w="100%"
        alignItems="center"
        flexDir="column"
        gap={2}
        mt={8}
        mb={20}
      >
        <Flex
          // w="20%"
          h="110px"
          justifyContent="center"
          // mb={[10, 10, 20]}

          backgroundColor="white"
        >
          <img src={bias} alt="bias" />
        </Flex>

        <Flex w="100%" bgColor="yellow.100" justifyContent="space-between">
          <Flex flexDir={"column"}>
            <Flex>NFT가 가지고 싶다면?</Flex>
            <Flex>1. 로그인 하기</Flex>
            <Flex>2. 화이트리스트 등록하기에 주소입력 후 등록 클릭</Flex>
            <Flex>3. 등록이 완료되면 상단 민팅탭에 가서 민팅하기 클릭</Flex>
            <Flex>4. NFT 민팅 성공!이 뜨면 완료 </Flex>
            자세히 알아보기
          </Flex>
          <Flex flexDir="column" m={4}>
            <Flex>화이트리스트 등록하러 가기</Flex>

            <Button m={2} onClick={() => navigate("/wl")}>
              Go!
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <img src={slide_image} alt="slide_images" />
        </Flex>
        <Flex justifyContent="space-between">
          <Flex flexDir={"column"}>
            <Flex>덕력 게시판</Flex>
            <Flex>게시글 미리보기</Flex>
          </Flex>
          <Flex flexDir={"column"}>
            <Flex>이벤트</Flex>
            <Flex>게시글 미리보기</Flex>
          </Flex>
        </Flex>
        <br />
        <br />
        <Flex>ㅇㅇ뭐하지ㅇㅇ</Flex>
        <Flex>뭐하지</Flex>
        <Flex bgColor="black" w="100%" textColor="white">
          Footer
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
