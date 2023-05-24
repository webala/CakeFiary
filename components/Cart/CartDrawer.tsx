import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";

import Cart from "./components/Cart";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

function CartDrawer({ isOpen, onClose }: Props) {
  const btnRef = React.useRef<HTMLButtonElement>(null);
   return (
      <>
         <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
         >
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerBody>
                  <Cart />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   );
}


export default CartDrawer