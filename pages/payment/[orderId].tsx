import { Spinner } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { CartItem, Order } from "../../types";

function Payment() {
	const [phone, setPhone] = useState<string>();
	const router = useRouter();
	const { orderId } = router.query;

	const fetchOrder = async () => {
		const response = await axios.get(`http://localhost:8000/orders/${orderId}`);
		return response.data;
	};

	const { mutate: createTransaction } = useMutation(
		async ({ order }: { order: Order }) => {
			const data = {
				order,
				phone,
			};
			const response = await axios.post(
				"http://localhost:8000/transactions",
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
			onSuccess: () => console.log("success"),
			onError: () => console.log("error"),
		}
	);

	const {
		data: order,
		isLoading,
		isError,
		isSuccess,
	} = useQuery<Order, AxiosError>(["order", orderId], fetchOrder, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	});
	if (isLoading) {
		return <Spinner color="red.500" />;
	}

	if (isError) {
		return <div>Error!</div>;
	}

	

	console.log("order: ", order);
	return (
		<div className="payment">
			<div className="container">
				<div className="order-summary">
					{/* Order summary */}
					<h1 className="heading">Order summary</h1>
					<div className="order-items">
						{order?.orderItems.map((orderItem, index: number) => (
							<div key={index} className="order-item">
								<div className="top">
									<h1 className="">{orderItem.cake.name}</h1>
									<p>@ksh {orderItem.cake.price}</p>
								</div>
								{orderItem.addOns.length > 0 && (
									<div className="addons">
										<h1 className="sub-heading">Addons</h1>
										{orderItem.addOns.map((addon, index) => (
											<div className="addon" key={index}>
												<h1 className="">{addon.name}</h1>
												<p>@ksh {addon.price}</p>
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						createTransaction({ order: order as Order });
					}}
				>
					{/* Order action */}
					<div className="field">
						<label htmlFor="">M-Pesa phone number</label>
						<input
							type="text"
							required
							// value={}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className="actions">
						<button type="submit" className="submit">
							Initialize payment
						</button>
					</div>
				</form>
				<div>{/* Await transaction */}</div>
			</div>
		</div>
	);
}

export default Payment;
