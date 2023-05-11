import React, { useState } from "react";
import uuid4 from "uuid4";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	PDFDownloadLink,
} from "@react-pdf/renderer";
import CalculationDataService from "../services/calculator_services";

import CalculatorPDF from "../components/Calculator/CalculatorPDF";

function Calculator() {
	const [name, setName] = useState("Aveen");
	const [tankType, setTankType] = useState("t-1");
	const [fishType, setFishType] = useState("f-1");
	const [fishCount, setFishCount] = useState(0);
	const [fishLength, setFishLength] = useState(0.1);
	const [tankGallons, setTankGallons] = useState(0);

	const saveCalculation = async (e) => {
		e.preventDefault();
		const id = uuid4();
		const newCalculation = {
			id: `${id}`,
			name,
			tankType,
			fishType,
			tankGallons,
			fishCount,
			fishLength,
		};
console.log(newCalculation)
		try {
			await CalculationDataService.addCalculation(newCalculation);

			alert("Calculation saved successfully.");
		} catch (err) {
			setMessage({ error: false, msg: err.message });
		}
	};

	const styles = StyleSheet.create({
		page: {
			flexDirection: "row",
			backgroundColor: "#E4E4E4",
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
	});

	function calculateFishCount() {
		// setTankGallons(tankGallons * 0.9);
		setFishCount(
			Math.floor(
				tankGallons /
					(fishType === "f-1"
						? 1
						: fishType === "f-2"
						? 2
						: fishType === "f-3"
						? 3
						: 1) /
					fishLength
			)
		);

		return fishCount;
	}

	function clearData() {
		setTankType("t-1");
		setFishType("f-1");
		setFishCount(0);
		setFishLength(0.1);
		setTankGallons(0);
	}

	return (
		<>
			<h1 className="my-3">Fish Calculator</h1>

			<table className="table">
				<thead>
					<tr>
						<th scope="col h3">Tank Selection</th>
						<th scope="col h3">Fish Selection</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="bg-dark">
							<div className="dropdown">
								<select
									className=""
									aria-labelledby="selectTank"
									value={tankType}
									onChange={(e) => setTankType(e.target.value)}
								>
									<option value={"t-1"}>
										Gallons - Tank Type - (Rectangle)
									</option>
									<option value={"t-2"}>Gallons - Tank Type - (Hexagon)</option>
									<option value={"t-3"}>
										Gallons - Tank Type - (Cylinder)
									</option>
									<option value={"t-4"}>
										Surface Area - Tank Type - (Rectangle)
									</option>
									<option value={"t-5"}>
										Surface Area - Tank Type - (Hexagon)
									</option>
									<option value={"t-6"}>
										Surface Area - Tank Type - (Cylinder)
									</option>
								</select>
							</div>
						</td>
						<td className="bg-dark">
							<div className="dropdown">
								<select
									className=""
									aria-labelledby="selectFish"
									value={fishType}
									onChange={(e) => setFishType(e.target.value)}
								>
									<option value={"f-1"}>Fish Body: Slender</option>
									<option value={"f-2"}>Fish Body: Medium</option>
									<option value={"f-3"}>Fish Body: Large</option>
								</select>
							</div>
						</td>
					</tr>
					<tr style={{ height: "300px" }}>
						<td>
							{tankType === "t-1" || tankType === "t-4" ? (
								<img src="/assets/tank-1.jpeg" width={"200px"} alt="tank" />
							) : tankType === "t-2" || tankType === "t-5" ? (
								<img src="/assets/tank-2.jpeg" width={"200px"} alt="tank" />
							) : tankType === "t-3" || tankType === "t-6" ? (
								<img src="/assets/tank-3.jpg" width={"200px"} alt="tank" />
							) : null}
						</td>
						<td>
							{fishType === "f-1" ? (
								<img
									className="pt-5"
									src="/assets/fish-1.jpg"
									width={"200px"}
									alt="tank"
								/>
							) : fishType === "f-2" ? (
								<img src="/assets/fish-2.jpg" width={"200px"} alt="tank" />
							) : fishType === "f-3" ? (
								<img
									className="pt-5"
									src="/assets/fish-3.jpg"
									width={"200px"}
									alt="tank"
								/>
							) : null}
						</td>
					</tr>
					<tr>
						<td>
							<div className="mt-3 px-5">
								<label htmlFor="basic-url" className="form-label">
									Select fish tank details
								</label>
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon3">
										Gallons
									</span>
									<input
										type="number"
										className="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										value={tankGallons}
										min={0}
										onChange={(e) => {
											setTankGallons(e.target.value);
											calculateFishCount();
										}}
									/>
								</div>
							</div>
						</td>
						<td>
							<div className="mt-3 px-5">
								<label htmlFor="basic-url" className="form-label">
									Select fish details
								</label>
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon3">
										Number of fish
									</span>
									<input
										type="number"
										className="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										value={fishCount}
										min={0}
										onChange={(e) => {
											setFishCount(e.target.value);
											calculateFishCount();
										}}
									/>
								</div>
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon3">
										Fish Length (in.)
									</span>
									<input
										type="number"
										className="form-control"
										id="basic-url"
										aria-describedby="basic-addon3"
										value={fishLength}
										min={0.1}
										onChange={(e) => {
											setFishLength(e.target.value);
											calculateFishCount();
										}}
									/>
								</div>
							</div>
						</td>
					</tr>
					<tr className="bg-dark">
						<td colSpan="2">
							<div
								className="btn-group gap-2 my-2"
								role="group"
								aria-label="function buttons"
							>
								<button
									type="button"
									className="btn btn-danger"
									style={{ backgroundColor: "darkred" }}
									onClick={clearData}
								>
									Clear
								</button>
								<PDFDownloadLink
									document={
										<Document>
											<Page size="A4" style={styles.page}>
												<View style={styles.section}>
													<CalculatorPDF
														name={"Aveen"}
														tank_type={tankType}
														fish_type={fishType}
														gallons={tankGallons}
														no_fish={fishCount}
														fish_length={fishLength}
													/>
												</View>
											</Page>
										</Document>
									}
									fileName="document.pdf"
									className="btn btn-warning"
								>
									{({ blob, url, loading, error }) =>
										loading ? "Download..." : "Download"
									}
								</PDFDownloadLink>
								<button
									type="button"
									className="btn btn-warning"
									style={{ backgroundColor: "green" }}
									onClick={saveCalculation}
								>
									Save
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default Calculator;