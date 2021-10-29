import mongoose from 'mongoose';

const DataModel = mongoose.Schema(
	{
		productsByValue: {
			names: Array,
			values: Array,
		},
		productsByQuantity: {
			names: Array,
			values: Array,
		},
		categoriesByValue: {
			names: Array,
			values: Array,
		},
		categoriesByQuantity: {
			names: Array,
			values: Array,
		},
		dataComparison: {
			currentYearData: {
				users: Number,
				newUsers: Number,
				visits: Number,
				conversionRate: Number,
				transactions: Number,
				sales: Number,
			},
			lastYearData: {
				users: Number,
				newUsers: Number,
				visits: Number,
				conversionRate: Number,
				transactions: Number,
				sales: Number,
			}
		},
		customersData: {
			age: Array,
			sex: Array,
			device: Array,
		},
		marketingChannels: {
			transactions: {
				organic: Number,
				ppc: Number,
				socialMedia: Number,
				direct: Number,
				refferal: Number,
			},
			sales: {
				organic: Number,
				ppc: Number,
				socialMedia: Number,
				direct: Number,
				refferal: Number,
			},
			visits: {
				organic: Number,
				ppc: Number,
				socialMedia: Number,
				direct: Number,
				refferal: Number,
			}
		}
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('DataModel', DataModel);
