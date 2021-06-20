const dataStructure = {
    productsByValue: {
        names: [],
        values: []
    },
    productsByQuantity: {
        names: [],
        values: []
    },
    categoriesByValue: {
        names: [],
        values: []
    },
    categoriesByQuantity: {
        names: [],
        values: []
    },
    dataComparison: {
        currentYearData: {
            users: "",
            newUsers: "",
            visits: "",
            conversionRate: "",
            transactions: "",
            sales: "",
        },
        lastYearData: {
            users: "",
            newUsers: "",
            visits: "",
            conversionRate: "",
            transactions: "",
            sales: "",
        }
    },
    customersData: {
        age:[],
        sex: [],
        device: [],
    },
    marketingChannels: {
        transactions: {
            organic:"",
            ppc: "",
            socialMedia: "",
            direct: "",
            refferal: "",
        },
        sales: {
            organic:"",
            ppc: "",
            socialMedia: "",
            direct: "",
            refferal: "",
        },
        visits: {
            organic:"",
            ppc: "",
            socialMedia: "",
            direct: "",
            refferal: "",
        }
    }
}

export default dataStructure