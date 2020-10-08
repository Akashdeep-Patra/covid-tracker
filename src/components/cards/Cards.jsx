import React from "react";
import "./Cards.scss";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Countup from "react-countup";

export default ({ data: { deaths, confirmed, recovered } }) => (
	<div className="container">
		<Grid container spacing={3} justify="center">
			<Grid
				item
				xs={12}
				md={3}
				className="card card-confirmed"
				component={Card}>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						Confirmed
					</Typography>
					<Typography variant="h5" gutterBottom>
						<Countup start={0} end={confirmed} duration={2.5} separator="," />
					</Typography>
					<Typography variant="body2" gutterBottom>
						Number of active cases
					</Typography>
				</CardContent>
			</Grid>
			<Grid
				item
				xs={12}
				md={3}
				className="card card-recovered"
				component={Card}>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						Recovered
					</Typography>
					<Typography variant="h5" gutterBottom>
						<Countup start={0} end={recovered} duration={2.5} separator="," />
					</Typography>
					<Typography variant="body2" gutterBottom>
						Number of recoveries
					</Typography>
				</CardContent>
			</Grid>
			<Grid item xs={12} md={3} className="card card-deaths" component={Card}>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						Deaths
					</Typography>
					<Typography variant="h5" gutterBottom>
						<Countup start={0} end={deaths} duration={2.5} separator="," />
					</Typography>
					<Typography variant="body2" gutterBottom>
						Number of deaciesed
					</Typography>
				</CardContent>
			</Grid>
		</Grid>
	</div>
);
