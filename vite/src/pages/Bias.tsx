import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import bias from "../images/어덕행덕_s.jpg";

const Bias: FC = () => {
  return (
    <>
      <Flex
        bgColor="red.100"
        w="100%"
        alignItems="center"
        flexDir="column"
        gap={2}
        // mt={8}
        // mb={20}
      >
        <Flex
          w="100%"
          h="110px"
          justifyContent="center"
          // mb={[10, 10, 20]}
          backgroundColor="white"
        >
          <img src={bias} alt="bias" />
        </Flex>
        <Flex></Flex>
        <Flex fontSize={45} fontWeight={"bold"}>
          -게시판 공사중-
        </Flex>
        <Flex fontSize={27} fontWeight={"bold"}>
          완공일자 : 3205년 4월 1일
        </Flex>
      </Flex>
    </>
  );
};

export default Bias;
