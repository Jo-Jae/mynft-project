import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import bias from "../images/어덕행덕_s.jpg";
import slide_image from "../images/slide_images/a.gif";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";
import SaleNftCard from "../components/SaleNftCard";

const Home: FC = () => {
  const navigate = useNavigate();
  const [tokenIds, setTokenIds] = useState<number[]>([]);

  const { signer, saleContract, mintContract } =
    useOutletContext<OutletContext>();

  const getOnSaleTokens = async () => {
    try {
      const response = await saleContract?.getOnSaleTokens();

      const temp = response.map((v: any) => {
        return Number(v);
      });

      setTokenIds(temp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!saleContract) return;

    getOnSaleTokens();
  }, [saleContract]);

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
          <Flex flexDir={"column"} p={6}>
            <Flex fontSize={20} fontWeight={"semibold"}>
              NFT가 가지고 싶다면?
            </Flex>
            <Flex>1. 로그인 하기</Flex>
            <Flex>2. 화이트리스트 등록하기 밑 'Go!'버튼 클릭</Flex>
            <Flex>3. '화이트리스트 신청' 버튼 클릭</Flex>
            <Flex>4. NFT 민팅 성공!이 뜨면 완료 </Flex>
          </Flex>
          <Flex flexDir="column" m={4} p={3}>
            <Flex fontSize={20} fontWeight={"semibold"}>
              화이트리스트 등록하러 가기
            </Flex>

            <Button m={2} onClick={() => navigate("/wl")}>
              Go!
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <img src={slide_image} alt="slide_images" />
        </Flex>
        <Flex w="100%" bg="purple.100" p={6}>
          <Box flexDir="column">
            <Flex fontSize={22} fontWeight="semibold">
              덕력 게시판
            </Flex>
            <Flex flexDir={"column"} alignItems="center">
              <Button m={1} variant="link">
                이거는 더 좋아
              </Button>
              <Button m={1} variant="link">
                이거 좋아
              </Button>
            </Flex>
          </Box>
        </Flex>
        <br />
        <br />
        <Flex w="100%" p={6} flexDir="column" bg="purple.100">
          <Flex fontSize={22} fontWeight="semibold">
            마켓 미리보기
          </Flex>

          <Flex>
            <Grid templateColumns={["repeat(4, 1fr)"]} gap={6}>
              {tokenIds.map((v, i) => (
                <SaleNftCard
                  key={i}
                  tokenId={v}
                  mintContract={mintContract}
                  saleContract={saleContract}
                  signer={signer}
                  tokenIds={tokenIds}
                  setTokenIds={setTokenIds}
                />
              ))}
            </Grid>
            {/* {!isEnd && (
            <Button
              mt={8}
              onClick={() => getNftMetadata()}
              isDisabled={isLoading}
              isLoading={isLoading}
              loadingText="로딩중"
            >
              더 보기
            </Button>
          )} */}
          </Flex>
        </Flex>
        <Flex
          bgColor="black"
          w="100%"
          textColor="white"
          p={6}
          flexDir={"column"}
        >
          <Flex fontSize={20} fontWeight={"bold"}>
            PROJECT.STAN.
          </Flex>
          <Flex>Help : Undefined</Flex>
          <Flex>Service : Null</Flex>
          <Flex>Offer : false</Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
