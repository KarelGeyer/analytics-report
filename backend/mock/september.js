const september = {
    monthEn: "September",
    monthCz: "Září",
    productsByValue: {
        names: ["PS 5 825 GB", "Horizon: FW", "Gran Turismo 7", "Horizon: FW - Special Edition", "Horizon: FW Col. Edition", "Pokémon TCG: Elite Trainer Box", "FIFA 22", "CoD: Vanguard", "BF 2042", "Soška GoW- Kratos and Atreus", ],
        values: [7192933, 692987, 393668,368245, 338558, 292516, 225578, 161627, 146204, 145549]
    },
    productsByQuantity: {
        names: ["PS 5 825 GB", "Horizon: FW", "Pokémon TCG: Celebrations - Elite Trainer Box", "Horizon: FW - Special Edition", "Gran Turismo 7 - 25th AE", "FIFA 22", "Pokémon TCG: Sword & Shield ES - booster", "CoD: Vanguard", "Far Cry 6", "BF: 2042"],
        values: [623, 427, 253, 208, 184, 151, 101, 100, 100, 97]
    },
    categoriesByValue: {
        names: ["PS5 konzole", "PS5 Akční hry", "PS4 Akční hry", "PS4 Simulace", "Pokémon TCG - Elite Trainer Boxy", "Figurky a sošky", "Pokémon TCG - Speciální Produkty", "Nintendo Switch - konzole", "PS5 Adventury", "PC akční hry"],
        values: [7193933, 1555802, 1101176, 424573, 353875, 298471, 196627, 188566, 148998, 145456]
    },
    categoriesByQuantity: {
        names: [ "PS5 Akční hry", "PS4 Akční hry", "Stojany a pořadače", "PS5 konzole", "Pokémon TCG - Elite Trainer Boxy", "Figurky - POP", "Pokémon TCG - Boostery", "PS4 Simulace", "Figurky a sošky", "Pokémon TCG - Speciální Produkty"],
        values: [1029, 877, 726, 623, 308, 270, 256, 238, 190, 180]
    },
    dataComparison: {
        currentYearData: {
            users: 136161,
            newUsers: 106541,
            visits: 269436,
            conversionRate: 2.30,
            transactions: 6186,
            sales: 14745005,
        },
        lastYearData: {
            users: 130365,
            newUsers: 98215,
            visits: 252542,
            conversionRate: 2.77,
            transactions: 6988,
            sales: 25607763,
        }
    },
    customersData: {
        age:[
            {
                categories: ["18-24", "25-34", "35-44", "45-54", "54-64", "65+"],
                values: [20.65, 40.07, 16.54, 10.61, 6.04, 6.08]
            }
        ],
        sex: [
            {
                categories: ["male", "female"],
                values: [31.5, 68.5]
            }
        ],
        device: [
            {
                categories: ["Mobile", "Desktop", "Tablet"],
                values: [59.00, 49.70, 1.30]
            }
        ],
    },
    marketingChannels: {
        transactions: {
            organic: 2020,
            ppc: 813,
            socialMedia: 870,
            direct: 1063,
            refferal: 981,
        },
        sales: {
            organic: 5398317,
            ppc: 1158311,
            socialMedia: 1658313,
            direct: 3024853,
            refferal: 2784801,
        },
        visits: {
            organic: 95136,
            ppc: 34618,
            socialMedia: 50028,
            direct: 38755,
            refferal: 28525,
        }
    }
}

export default september