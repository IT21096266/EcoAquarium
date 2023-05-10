import React from "react";
import Draggable from "react-draggable";

function Sidebar() {
	const nodeRef = React.useRef(null);

	return (
		<div
			className="d-flex flex-column bg-dark text-light"
			style={{ maxWidth: "100px" }}
		>
			<div className="mt-5 fw-bold">Drag Selection</div>
			<div className="mt-4">
				<Draggable
					axis="x"
					handle=".handle"
					defaultPosition={{ x: 0, y: 0 }}
					position={null}
					grid={[25, 25]}
					scale={1}
					nodeRef={nodeRef}
				>
					<div nodeRef={nodeRef}>
						<img
							src="/assets/fish-1.jpg"
							width={70}
							className="border my-2 user-select-none handle"
						/>
					</div>
				</Draggable>

				<Draggable
					axis="x"
					handle=".handle"
					defaultPosition={{ x: 0, y: 0 }}
					position={null}
					grid={[25, 25]}
					scale={1}
					nodeRef={nodeRef}
				>
					<div nodeRef={nodeRef}>
						<img
							src="/assets/fish-2.jpg"
							width={70}
							className="border my-2 user-select-none handle"
						/>
					</div>
				</Draggable>

				<Draggable
					axis="x"
					handle=".handle"
					defaultPosition={{ x: 0, y: 0 }}
					position={null}
					grid={[25, 25]}
					scale={1}
					nodeRef={nodeRef}
				>
					<div nodeRef={nodeRef}>
						<img
							src="/assets/fish-3.jpg"
							width={70}
							className="border my-2 user-select-none handle"
						/>
					</div>
				</Draggable>
			</div>
		</div>
	);
}

export default Sidebar;
