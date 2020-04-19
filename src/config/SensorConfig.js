const SensorConfig = {
	MOIST: {
		type: 'MOIST',
		last: 672,
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
	},
	GROWTH_LONG_HISTORY: {
		type: 'GROWTH',
		last: 672,
		pollInterval: 10000,
		showDot: false
	}
}

export default SensorConfig
