const SensorConfig = {
	MOIST: {
		type: 'MOIST',
		last: 256,
		pollInterval: 10000,
		showDot: false
	},
	LIGHT: {
		type: 'LIGHT',
		last: 32,
		pollInterval: 10000,
		showDot: true
	},
	TEMP: {
		type: 'TEMP',
		last: 32,
		pollInterval: 10000,
		showDot: true
	},
	GROWTH: {
		type: 'GROWTH',
		last: 32,
		pollInterval: 10000,
		showDot: true
	}
}

export default SensorConfig
