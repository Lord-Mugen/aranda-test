const recipe = require.context("../assets", true);

  export const recipes = [
        {
            "id":1,
            "img": recipe("./Ojingeo-muchim.png"),
            "name": "Ojinjeo",
            "subName": "Muchim",
            "portion": "4 raciones",
            "time": "10 minutos",
            "difficulty": "fácil",
            "ranking": "5.0"
        },
        {
            "id":2,
            "img": recipe("./Cola-chicken.png"),
            "name": "Cola",
            "subName": "Chicken",
            "portion": "4 raciones",
            "time": "10 minutos",
            "difficulty": "fácil",
            "ranking": "5.0"
        },
        {
            "id":3,
            "img": recipe("./Roasted-carrot.png"),
            "name": "Roasted",
            "subName": "Carrot",
            "portion": "4 raciones",
            "time": "10 minutos",
            "difficulty": "fácil",
            "ranking": "4.5"
        },
        {
            "id":4,
            "img": recipe("./sweet-cherries.png"),
            "name": "Sweet",
            "subName": "Cherries",
            "portion": "4 raciones",
            "time": "10 minutos",
            "difficulty": "fácil",
            "ranking": "5.0"
        }
    ];