<template>
	<card class="border-0" hover shadow body-classes="py-5">
		<table class="table text-center">
			<tr>
				<th>Appleton tower 7.03</th>
				<th v-for="day in days">{{formatted_date(day)}}</th>
			</tr>
			<tr v-for="hour in hours">
				<td>{{hour}}</td>
				<td v-for="day in days"></td>
			</tr>
		</table>
	</card>
</template>

<script>
	export default {
		props: {
			scope: {
				type: Number,
				default: 3,
				description: "How many days to show"
			},
			user: {
				type: String,
				default: "student",
				description: "Who will see the calendar (tutor/student)"
			}
		},
		data() {
			return {
				current_date: this.get_today(),
				days: this.get_n_days(this.get_today()),
				hours: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
			}
		},
		methods: {
			get_today() {
				let today = new Date();
				let year = today.getUTCFullYear();
				let month = today.getUTCMonth() + 1;
				let day = today.getUTCDate();

				return [year, month, day];
			},
			get_n_days(first_day) {
				let [year, month, day] = first_day;

				return Array(this.scope).fill(first_day).map((x, idx) => [x[0], x[1], x[2]+idx])
			},
			formatted_date(date) {
				date = new Date(Date.UTC(date[0], date[1]-1, date[2]));
				return date.toLocaleDateString('en-UK', 
							 { weekday: 'short', month: 'short', day: 'numeric' });
			}
		}
	}
</script>

<style lang="scss">
	
</style>