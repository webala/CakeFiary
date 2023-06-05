import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import style from "./Await.module.scss";

function Await({ transactionId }: { transactionId: string }) {
	const fetchTransaction = async () => {
		const response = await axios.get(
			`http://localhost:8000/transaction/${transactionId}`
		);
		return response.data;
	};

	const {
		data: transaction,
		isLoading,
		isError,
	} = useQuery(["transaction", transactionId], fetchTransaction);
	return <div className={style.await}></div>;
}

export default Await;
