const dataStructure = {
    productsByValue: {
        names: Array,
        values: Array
    },
    productsByQuantity: {
        names: Array,
        values: Array
    },
    categoriesByValue: {
        names: Array,
        values: Array
    },
    categoriesByQuantity: {
        names: Array,
        values: Array
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
        customersData: {
            age:[
                {
                    categories: Array,
                    values: Array
                }
            ],
            sex: [
                {
                    categories: Array,
                    values: Array
                }
            ],
            device: [
                {
                    categories: Array,
                    values: Array
                }
            ],
        },
    },
    marketingChannels: {
        transactions: {
            organic:Number,
            ppc: Number,
            socialMedia: Number,
            direct: Number,
            refferal: Number,
        },
        sales: {
            organic:Number,
            ppc: Number,
            socialMedia: Number,
            direct: Number,
            refferal: Number,
        },
        visits: {
            organic:Number,
            ppc: Number,
            socialMedia: Number,
            direct: Number,
            refferal: Number,
        }
    }
}

export default dataStructure