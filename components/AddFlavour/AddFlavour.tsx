/** @format */

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function AddFlavour() {
   const [name, setName] = useState<string>();
   const toast = useToast()
   const queryClient = useQueryClient()

   const addFlavourMutatuion = useMutation(
      async () => {
         console.log('mutate called')
         const data = {
            name,
         };
         const response = await axios.post(
            "http://localhost:8000/flavour",
            data,
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );
         console.log('response: ', response)
         return response.data;
      },
      {
         onSuccess: () => {
            toast({
               title: "Flavour added.",
               status: "success",
               duration: 9000,
               isClosable: true,
               position: "bottom-right"
            });
            queryClient.invalidateQueries(['flavours'])
         },
         onError: () => {
            toast({
               title: "Unable to add flavour.",
               status: "error",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
         },
      }
   );
   return (
      <div>
         <form onSubmit={(e) => {
            console.log('submit called')
            e.preventDefault()
            addFlavourMutatuion.mutate()
         }}>
            <div className="field">
               <label htmlFor="">Flavour name</label>
               <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="actions">
               <button type="submit">Add</button>
            </div>
         </form>
      </div>
   );
}

export default AddFlavour;
