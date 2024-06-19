import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

import luck from "../images/goodluck.png";
import { useNavigate } from "react-router-dom";

interface WlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WlModal: FC<WlModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>화이트리스트 신청 성공</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column">
          <Image src={luck} alt="Good Luck" />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={() => navigate("/mint-nft")}>
            민팅하러 가기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WlModal;
