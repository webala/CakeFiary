/** @format */

import React, { useState } from "react";
import { Flavour, AddOn } from "../../types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchAddons, fetchFlavours } from "../../utils";
import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";

function AddCake() {
   const [name, setName] = useState<string>();
   const [price, setPrice] = useState<number>();
   const [flavours, setFlavours] = useState<Flavour[]>([]);
   const [availableAddons, setAvailableAddons] = useState<AddOn[]>([]);

   const toast = useToast();
   const queryClient = useQueryClient();

   const addCakeMutation = useMutation(
      async () => {
         const data = {
            name,
            price,
            flavours,
            availableAddons
         };

         const response = await axios.post("http://localhost:8000/cake", data, {
            headers: {
               "Content-Type": "application/json",
            },
         });
         return response.data;
      },
      {
         onSuccess: () => {
            toast({
               title: "Cake added.",
               status: "success",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
            queryClient.invalidateQueries(["cakes"]);
         },
         onError: () => {
            toast({
               title: "Unable to add cake.",
               status: "error",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
         },
      }
   );

   const {
      data: flavourChoices,
      isLoading: flavoursIsLoading,
      isSuccess: flavoursisSuccess,
      isError: flavoursIsError,
      error: flavoursError,
   } = useQuery(["flavours"], fetchFlavours);

   const {
      data: addOnChoices,
      isLoading: addOnsIsLoading,
      isSuccess: addOnsisSuccess,
      isError: addOnsIsError,
      error: addOnsError,
   } = useQuery(["addons"], fetchAddons);
   console.log(flavours);
   return (
      <div>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               addCakeMutation.mutate();
            }}
         >
            <h1 className="heading">Add cake</h1>
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

            {flavoursIsLoading && <Spinner color="red.500" />}
            {flavoursisSuccess ? (
               <>
                  <h2 className="sub-heading">Select flavours</h2>
                  {flavourChoices.map((flavour: Flavour, index: number) => (
                     <div key={index} className="field checkbox">
                        <label>{flavour.name}</label>
                        <input
                           type="checkbox"
                           onClick={(e) => {
                              const selected = flavours.find(
                                 (flav) => flav._id === flavour._id
                              );
                              if (selected) {
                                 setFlavours(
                                    flavours.filter(
                                       (flav) => flav._id !== flavour._id
                                    )
                                 );
                              } else {
                                 setFlavours([...flavours, flavour]);
                              }
                           }}
                        />
                     </div>
                  ))}
               </>
            ) : null}

            {addOnsIsLoading && <Spinner color="red.500" />}
            {addOnsisSuccess ? (
               <>
                  <h2 className="sub-heading">Select addons</h2>
                  {addOnChoices.map((addon: AddOn, index: number) => (
                     <div key={index} className="field checkbox">
                        <label>{addon.name} @{addon.price}</label>
                        <input
                           type="checkbox"
                           onClick={(e) => {
                              const selected = availableAddons.find(
                                 (item) => item._id === addon._id
                              );
                              if (selected) {
                                 setAvailableAddons(
                                    availableAddons.filter(
                                       (item) => item._id !== addon._id
                                    )
                                 );
                              } else {
                                 setAvailableAddons([
                                    ...availableAddons,
                                    addon,
                                 ]);
                              }
                           }}
                        />
                     </div>
                  ))}
               </>
            ) : null}
            <div className="actions">
               <button className="submit" type="submit">
                  Add cake
               </button>
            </div>
         </form>
      </div>
   );
}

export default AddCake;
