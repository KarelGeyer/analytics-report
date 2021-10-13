const august = {
    monthEn: "August",
    monthCz: "Srpen",
    productsByValue: {
        names: ["PS 5 Bílá 825 GB", "Ghost of Tsushima - DC", "Kings Bounty 2 - D1", "CoD: Vanguard", "FIFA 22", "BF 2042", "Ratchet a Clank: Rift Apart", "NHL 22", "Farming Sim. 22", "Pokemon- TCG: SF"],
        values: [4508739, 201544, 124129, 98982, 86156, 64469, 62921, 53940, 53481, 53357]
    },
    productsByQuantity: {
        names: ["PS 5 Bílá 825 GB", "Pokemon TCG: S&S Evol.", "Ghost of Tsushima - DC", "Svoboda 1945", "Kings Bounty 2 - D1", "Pokemon TCG: S&S Chill. Rei.", "Ochranné obaly Ultra Pro", "Ratchet a Clank: Rift Apart", "CoD: Vanguard", "Aliens: Fireteam Elite"],
        values: [367, 161, 125, 125, 103, 154, 69, 65, 61, 60]
    },
    categoriesByValue: {
        names: ["PS5 konzole", "PS5 Akční hry", "Figurky a sošky", "PS4 Akční hry", "Trička - pánská", "Figurky - POP", "PS4 přísl.", "V a VMAX boxy", "PS5 Příslušenství", "PC hry - Strategie"],
        values: [4653050, 602142, 340203, 261224, 151051, 140619, 126868, 121912, 118227, 113103]
    },
    categoriesByQuantity: {
        names: [ "Trička - pánská", "PS5 Akční hry", "Stojany a pořadače", "Figurky - POP", "PS5 konzole", "PS4 Akční hry", "Pokémon TCG - Boostery", "Figurky a sošky", "Polštáře", "Hrnky a Sklenice"],
        values: [816, 455, 425, 390, 367, 358, 301, 277, 205, 191]
    },
    dataComparison: {
        currentYearData: {
            users: 137730,
            newUsers: 110870,
            visits: 263786,
            conversionRate: 1.99,
            transactions: 5257,
            sales: 9257905,
        },
        lastYearData: {
            users: 99282,
            newUsers: 70675,
            visits: 189284,
            conversionRate: 2.19,
            transactions: 4152,
            sales: 4818519,
        }
    },
    customersData: {
        age:[
            {
                categories: ["18-24", "25-34", "35-44", "45-54", "54-64", "65+"],
                values: [21.00, 38.40, 16.42, 11.01, 6.50, 6.68]
            }
        ],
        sex: [
            {
                categories: ["male", "female"],
                values: [32.7, 67.3]
            }
        ],
        device: [
            {
                categories: ["Mobile", "Desktop", "Tablet"],
                values: [58.31, 40.38, 1.31]
            }
        ],
    },
    marketingChannels: {
        transactions: {
            organic: 1632,
            ppc: 808,
            socialMedia: 702,
            direct: 857,
            refferal: 735,
        },
        sales: {
            organic: 3699469,
            ppc: 1013971,
            socialMedia: 1055695,
            direct: 1969744,
            refferal: 1136617,
        },
        visits: {
            organic: 88036,
            ppc: 36032,
            socialMedia: 53165,
            direct: 39888,
            refferal: 21463,
        }
    }
}

export default august