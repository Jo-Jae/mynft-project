import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { OutletContext } from "../components/Layout";
import { useOutletContext } from "react-router-dom";
import minting from "../images/nft_images/minting.jpg";

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
    <Flex
      flexDir="column"
      w="100%"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {/* {!signer && <Text>🦊 메타마스크 로그인이 필요합니다!</Text>}
      <Flex>화이트리스트 등록하기</Flex> */}

      <img src={minting} alt="minting" />
      {!signer ? (
        <Text m={4}>🦊로그인이 필요합니다!</Text>
      ) : (
        <Flex m={4}>화이트리스트 등록하기</Flex>
      )}
      <Button ml={2} onClick={onClickSetWhiteList} isDisabled={!signer}>
        화이트리스트 신청
      </Button>
    </Flex>
  );
};

export default WhiteList;
