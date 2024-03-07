import { useState } from 'react';

const SetModal = () => {
	const [modalData, setModalData] = useState(null);

	function setData(data) {
		setModalData(data);
	}

	return {
		modalData,
		setData,
	};
};

export default SetModal;
