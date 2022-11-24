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

function CartDrawer({btnRef, isOpen, onClose}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody >
            <Cart />
          </DrawerBody>

          <DrawerFooter>
            <button  onClick={onClose}>
              Cancel
            </button>
            <button>Save</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}


export default CartDrawer