/** @format */

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function AddAddOn() {
   const [name, setName] = useState<string>();
   const [price, setPrice] = useState<number>();

   const toast = useToast();
   const queryClient = useQueryClient();

   const addOnMutation = useMutation(
      async () => {
         const data = {
            name,
            price,
         };
         const response = await axios.post(
            "http://localhost:8000/addon",
            data,
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );

         return response.data;
      },
      {
         onSuccess: () => {
            toast({
               title: "Addon added.",
               status: "success",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
            queryClient.invalidateQueries(["addons"]);
         },
         onError: () => {
            toast({
               title: "Unable to add addon.",
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
         <form
            onSubmit={(e) => {
               e.preventDefault();
               addOnMutation.mutate();
            }}
         >
            <h1 className="heading">Add addon</h1>
            <div className="field">
               <label htmlFor="">Name</label>
               <input
                  required
                  type="text"
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="">Price</label>
               <input
                  type="number"
                  required
                  onChange={(e) => setPrice(parseInt(e.target.value))}
               />
            </div>
            <div className="actions">
               <button className="submit" type="submit">
                  Add
               </button>
            </div>
         </form>
      </div>
   );
}

export default AddAddOn;
