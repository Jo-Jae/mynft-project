import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";
import axios from "axios";
import MintModal from "../components/MintModal";
import love from "../images/아이시떼루.jpeg";

const MintNft: FC = () => {
  const [nftMetadata, setNftMetadata] = useState<NftMetadata>();

  const { mintContract, signer } = useOutletContext<OutletContext>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickMint = async () => {
    try {
      setIsLoading(true);

      const response = await mintContract?.mintNft();

      await response.wait();

      const totalSupply = await mintContract?.totalSupply();

      const tokenURI = await mintContract?.tokenURI(totalSupply);

      const axiosResponse = await axios.get<NftMetadata>(tokenURI);

      setNftMetadata(axiosResponse.data);

      onOpen();

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  useEffect(() => console.log(nftMetadata), [nftMetadata]);

  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap={2}
      >
        {!signer && <Text>🦊 메타마스크 로그인이 필요합니다!</Text>}
        <img src={love} alt="love" />
        <Button
          onClick={onClickMint}
          colorScheme="purple"
          isDisabled={!signer}
          isLoading={isLoading}
          loadingText="로딩중"
        >
          민팅하기
        </Button>
      </Flex>
      <MintModal isOpen={isOpen} onClose={onClose} nftMetadata={nftMetadata} />
    </>
  );
};

export default MintNft;
