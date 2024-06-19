import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FC, useState } from "react";
import { OutletContext } from "../components/Layout";
import { useOutletContext } from "react-router-dom";
import minting from "../images/nft_images/minting.jpg";
import WlModal from "../components/WlModal";

const WhiteList: FC = () => {
  const { mintContract, signer } = useOutletContext<OutletContext>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickSetWhiteList = async () => {
    try {
      setIsLoading(true);

      const response = await mintContract?.setWhitelist(signer?.address);

      await response.wait();

      onOpen();

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
        <Flex m={4} fontSize={24} fontWeight="bold">
          입덕은 알리고 탈덕은 조용히 하라
        </Flex>
      )}
      <Button
        ml={2}
        onClick={onClickSetWhiteList}
        isDisabled={!signer}
        isLoading={isLoading}
        loadingText="로딩중"
      >
        화이트리스트 신청
      </Button>
      <WlModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default WhiteList;
