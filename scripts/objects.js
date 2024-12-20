const products = [
    {
        category: "Grill & Klassiker",
        items: [
            { name: "Stadionwurst", price: "CHF 7.00", image: "./materials/img/stadionwurst.png" },
            { name: "Burger (Cheesburger, BBQ–Burger)", price: "CHF 9.00", image: "./materials/img/burger.png" },
            { name: "Hot Dog", price: "CHF 5.00", image: "./materials/img/hotdog.png" },
            { name: "Döner & Kebab", price: "CHF 10.00", image: "./materials/img/kebab.png" },
            { name: "BBQ-Sandwiches", price: "CHF 9.00", image: "./materials/img/bbq.png" },
        ],
    },
    {
        category: "Snacks & Fingerfood",
        items: [
            { name: "Pommes", price: "CHF 5.00", image: "./materials/img/pommes.png" },
            { name: "Chicken Nuggets", price: "CHF 6.00", image: "./materials/img/chickennuggets.png" },
            { name: "Nachos mit Käse-Dip und Jalapeños", price: "CHF 8.00", image: "./materials/img/nachos.png" },
            { name: "Mozzarella Sticks", price: "CHF 4.00", image: "./materials/img/mozarella-sticks.png" },
        ],
    },
    {
        category: "Drinks & Erfrischungen",
        items: [
            { name: "Softdrinks", price: "CHF 4.00", image: "./materials/img/softdrinks.png" },
            { name: "Stadionbier", price: "CHF 6.00", image: "./materials/img/bier.png" },
            { name: "Wasser", price: "CHF 4.00", image: "./materials/img/wasser.png" },
            { name: "Heissgetränke (Tee & Kaffee)", price: "CHF 4.00", image: "./materials/img/heissgetränke.png" },
            { name: "Energy Drinks", price: "CHF 4.00", image: "./materials/img/energydrinks.png" },
        ],
    },
    {
        category: "Süsses & Desserts",
        items: [
            { name: "Churros mit Schoko- oder Vanille-Dip", price: "CHF 5.00", image: "./materials/img/churros.png" },
            { name: "Donuts", price: "CHF 5.00", image: "./materials/img/donuts.png" },
            { name: "Muffins", price: "CHF 5.00", image: "./materials/img/muffin.png" },
            { name: "Eiscreme (im Becher oder am Stiel)", price: "CHF 5.00", image: "./materials/img/eiscreme.png" },
        ],
    },
    {
        category: "Familienangebote",
        items: [
            { name: "Bebbi-Meal", price: "CHF 5.00", image: "./materials/img/babymeal.png" },
            { name: "Familienbox", price: "CHF 20.00", image: "./materials/img/familybox.png" },
        ],
    },
    {
        category: "Vegetarisch & Vegan",
        items: [
            { name: "Planted Chicken Nuggets auf Pflanzenbasis", price: "CHF 6.00", image: "./materials/img/planted-chicken.png" },
            { name: "Veggie-Burger", price: "CHF 8.00", image: "./materials/img/veggie-burger.png" },
            { name: "Falafel-Wraps oder -Boxen", price: "CHF 8.00", image: "./materials/img/falafel.png" },
            { name: "Vegane Pizza-Slices", price: "CHF 8.00", image: "./materials/img/pizza.png" },
        ],
    },
    {
        category: "Regionale Spezialitäten",
        items: [
            { name: "Bratwurst oder Käsekrainer", price: "CHF 8.00", image: "./materials/img/stadionwurst.png" },
            { name: "Rösti-Taler (Beilage)", price: "CHF 4.00", image: "./materials/img/rösti.png" },
            { name: "Apfelschorle oder regionales Gurten-Bier", price: "CHF 4.00", image: "./materials/img/apfelschorle.png" },
        ],
    },
    {
        category: "Specials für den Winter",
        items: [
            { name: "Glühwein oder Punsch", price: "CHF 5.00", image: "./materials/img/punsch.png" },
            { name: "Heisse Maroni", price: "CHF 6.00", image: "./materials/img/marroni.png" },
            { name: "Suppe oder Eintopf im Becher", price: "CHF 4.00", image: "./materials/img/suppe.png" },
        ],
    },
];