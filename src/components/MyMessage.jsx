const MyMessage = ({ message }) => {
	if (message?.attachments?.lenght > 0) {
		<img
			src={message.attachments[0].file}
			alt='message-attachment'
			className='message-image'
			style={{ float: "right" }}
		/>;
	}
	return (
		<div>
			<div
				className='message'
				style={{
					float: "right",
					marginRight: "18px",
					color: "white",
					backgroundColor: "#3B2A50",
				}}>
				{message.text}
			</div>
		</div>
	);
};
export default MyMessage;
