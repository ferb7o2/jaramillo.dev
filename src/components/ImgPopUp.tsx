import $ from "jquery";

function ImgPopUp(props: { imageName: string }) {
	$(document).click(function (event) {
		//if you click on anything except the modal itself or the "open modal" link, close the modal

		if (!$(event.target).closest(".openImgBtn, .Img-modal").length) {
			$("#popUp-modal").attr("hidden", 1);
		}
	});

	function closeModal() {
		$("#popUp-modal").attr("hidden", 1);
	}

	return (
		<div className="Img-modal-background" id="popUp-modal" hidden>
			<div className="Img-modal">
				<div className="modal-title-row">
					<h1 className="modal-title">{props.imageName}</h1>
					<button className="x-btn" onClick={closeModal}>
						x
					</button>
				</div>
				<div className="modal-content">
					<img
						className="modal-img"
						src={require("../assets/images/" + props.imageName)}
					/>
				</div>
			</div>
		</div>
	);
}

export default ImgPopUp;
