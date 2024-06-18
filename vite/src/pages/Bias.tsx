import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import bias_s from "../images/어덕행덕_s.jpg";

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
          h="220px"
          justifyContent="center"
          // mb={[10, 10, 20]}
          backgroundColor="white"
        >
          <img src={bias_s} alt="bias" />
        </Flex>
        <Flex></Flex>
        <Flex>게시글</Flex>
        <Flex>게시글</Flex>;
      </Flex>
    </>
  );
};

export default Bias;
