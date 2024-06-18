import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import bias from "../images/어덕행덕.jpg";
import slide_image from "../images/slide images/a.gif";

const Home: FC = () => {
  return (
    <>
      <Flex
        w="100%"
        alignItems="center"
        flexDir="column"
        gap={2}
        mt={8}
        mb={20}
      >
        <Flex>
          <img src={slide_image} alt="slide_images" />
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          mb={[10, 10, 20]}
          backgroundColor="white"
        >
          <img src={bias} alt="bias" />
        </Flex>
        <Flex></Flex>
        <Flex>설명</Flex>
        <Flex>설명</Flex>;
      </Flex>
    </>
  );
};

export default Home;
