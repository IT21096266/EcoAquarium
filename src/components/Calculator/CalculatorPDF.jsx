import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

function CalculatorPDF({
	name,
	tank_type,
	fish_type,
	gallons,
	no_fish,
	fish_length,
}) {
	const styles = StyleSheet.create({
		page: {
			backgroundColor: "#ffffff",
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
		title: {
			fontSize: 18,
			fontWeight: "bold",
			marginBottom: 10,
		},
		row: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: 5,
		},
		label: {
			fontWeight: "bold",
			marginRight: 5,
		},
		value: {
			flex: 1,
		},
		table: {
			borderWidth: 1,
			borderStyle: "solid",
			borderColor: "#000000",
			marginBottom: 10,
		},
		headerCell: {
			backgroundColor: "#eeeeee",
			borderWidth: 1,
			borderStyle: "solid",
			borderColor: "#000000",
			padding: 5,
			textAlign: "center", // center align header cells
		},
		cell: {
			borderWidth: 1,
			borderStyle: "solid",
			borderColor: "#000000",
			padding: 5,
			textAlign: "center", // center align table cells
		},
	});

	if (tank_type === "t-1") {
		tank_type = "Gallons - Tank Type - (Rectangle)";
	} else if (tank_type === "t-2") {
		tank_type = "Gallons - Tank Type - (Hexagon)";
	} else if (tank_type === "t-3") {
		tank_type = "Gallons - Tank Type - (Cylinder)";
	} else if (tank_type === "t-4") {
		tank_type = "Surface Area - Tank Type - (Rectangle)";
	} else if (tank_type === "t-5") {
		tank_type = "Surface Area - Tank Type - (Hexagon)";
	} else if (tank_type === "t-6") {
		tank_type = "Surface Area - Tank Type - (Cylinder)";
	}

	if (fish_type === "f-1") {
		fish_type = "Slender";
	} else if (fish_type === "f-2") {
		fish_type = "Medium";
	} else if (fish_type === "f-3") {
		fish_type = "Large";
	}

	return (
		<View style={styles.section}>
			<Text style={styles.title}>The fish calculator</Text>
			<View style={styles.row}>
				<Text style={styles.label}>Client Name:</Text>
				<Text style={styles.value}>{name}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Selected tank:</Text>
				<Text style={styles.value}>{tank_type}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Fish type (size):</Text>
				<Text style={styles.value}>{fish_type}</Text>
			</View>
			<View style={styles.table}>
				<View style={styles.row}>
					<Text style={styles.headerCell}>Date</Text>
					<Text style={styles.headerCell}>Gallons</Text>
					<Text style={styles.headerCell}>Number of fish</Text>
					<Text style={styles.headerCell}>Fish Length</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>
						{new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
					</Text>
					<Text style={styles.cell}>{gallons}</Text>
					<Text style={styles.cell}>{no_fish}</Text>
					<Text style={styles.cell}>{fish_length}</Text>
				</View>
			</View>
		</View>
	);
}

export default CalculatorPDF;
