import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { OutletContext } from "../components/Layout";
import { useOutletContext } from "react-router-dom";

const WhiteList: FC = () => {
  const { mintContract, signer } = useOutletContext<OutletContext>();

  const onClickSetWhiteList = async () => {
    try {
      const response = await mintContract?.setWhitelist(signer?.address);
      await response.wait();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex flexDir="column">
      <Flex>화이트리스트 등록하기</Flex>
      <Button ml={2} onClick={onClickSetWhiteList}>
        화이트리스트 신청
      </Button>
    </Flex>
  );
};

export default WhiteList;
