import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";

import Cart from "./components/Cart";

interface iCartDrawerProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: Function;
  categories: object[];
  flavours: object[];
}

function CartDrawer({btnRef, isOpen, onClose, categories, flavours}: iCartDrawerProps) {
  return (
    <></>
    // <>
    //   <Drawer
    //     isOpen={isOpen}
    //     placement="right"
    //     onClose={onClose}
    //     finalFocusRef={btnRef}
    //     size="lg"
    //   >
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerCloseButton />
    //       <DrawerHeader>Create your account</DrawerHeader>

    //       <DrawerBody >
    //         <Cart categories={categories} flavours={flavours}/>
    //       </DrawerBody>

    //       <DrawerFooter>
    //         <button  onClick={onClose}>
    //           Cancel
    //         </button>
    //         <button>Save</button>
    //       </DrawerFooter>
    //     </DrawerContent>
    //   </Drawer>
    // </>
  );
}


export default CartDrawer