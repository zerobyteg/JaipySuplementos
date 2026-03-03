export interface ProductVariant {
    id: string;
    weight: '2 LBS' | '5 LBS' | '300g' | '1kg';
    price: string;
    imageFileName: string;
}

export interface Product {
    id: string;
    folder: string;
    name: string;
    description: string;
    variants: ProductVariant[];
}

const PremiumWheyDescription = 'Proteína de suero de alta calidad para máxima ganancia y recuperación muscular. Ideal para atletas exigentes que buscan mejorar su rendimiento.';
const HydroDefinitionDescription = "Proteína hidrolizada aislada de máxima pureza, sin lactosa ni grasas. Incluye enzimas digestivas para evitar la pesadez y gases, garantizando una absorción rápida y un crecimiento muscular óptimo.";
const price2LB = '$1';
const price5LB = '$2';

export const products: Product[] = [
    {
        id: '1',
        folder: 'premium-whey',
        name: 'Premium Whey - Acai',
        description: PremiumWheyDescription,
        variants: [
            { id: '1-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Acai.jpg' },
            { id: '1-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-ACAI.png' },
        ],
    },
    {
        id: '2',
        folder: 'premium-whey',
        name: 'Premium Whey - Banana Split',
        description: PremiumWheyDescription,
        variants: [
            { id: '2-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Banana-Split.jpg' },
            { id: '2-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-BANANA-SPLIT.png' },
        ],
    },
    {
        id: '3',
        folder: 'premium-whey',
        name: 'Premium Whey - Caramel',
        description: PremiumWheyDescription,
        variants: [
            { id: '3-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Caramel.jpg' },
            { id: '3-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-CARAMEL.png' },
        ],
    },
    {
        id: '4',
        folder: 'premium-whey',
        name: 'Premium Whey - Chocolate Peanut Butter',
        description: PremiumWheyDescription,
        variants: [
            { id: '4-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Chocolate-Peanut-Butter.jpg' },
            { id: '4-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-CHOCOLATE-PEANUT-BUTTER.png' },
        ],
    },
    {
        id: '5',
        folder: 'premium-whey',
        name: 'Premium Whey - Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '5-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Chocolate.jpg' },
            { id: '5-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-CHOCOLATE.png' },
        ],
    },
    {
        id: '6',
        folder: 'premium-whey',
        name: 'Premium Whey - Cookies and Cream',
        description: PremiumWheyDescription,
        variants: [
            { id: '6-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Cookies-and-Cream.jpg' },
            { id: '6-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-COOKIES-AND-CREAM.png' },
        ],
    },
    {
        id: '7',
        folder: 'premium-whey',
        name: 'Premium Whey - Dulce de Leche',
        description: PremiumWheyDescription,
        variants: [
            { id: '7-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Dulce-de-Leche.jpg' },
            { id: '7-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-DULCE-DE-LECHE.png' },
        ],
    },
    {
        id: '8',
        folder: 'premium-whey',
        name: 'Premium Whey - Peanut Butter',
        description: PremiumWheyDescription,
        variants: [
            { id: '8-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Peanut-Butter.jpg' },
            { id: '8-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-PEANUT-BUTTER.png' },
        ],
    },
    {
        id: '9',
        folder: 'premium-whey',
        name: 'Premium Whey - Strawberry',
        description: PremiumWheyDescription,
        variants: [
            { id: '9-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Strawberry.jpg' },
            { id: '9-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-STRAWBERRY.png' },
        ],
    },
    {
        id: '10',
        folder: 'premium-whey',
        name: 'Premium Whey - Vainilla',
        description: PremiumWheyDescription,
        variants: [
            { id: '10-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'PREMIUM-WHEY-Vainilla.jpg' },
            { id: '10-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'PREMIUM-WHEY-5LB-VANILLA.png' },
        ],
    },
    {
        id: '11',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Chocolate',
        description: HydroDefinitionDescription,
        variants: [
            { id: '11-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Chocolate.jpg' },
            { id: '11-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'Hydro-Chocolate5lb.jpg' },
        ],
    },
    {
        id: '12',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Coconut',
        description: HydroDefinitionDescription,
        variants: [
            { id: '12-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Coconut.jpg' },
            { id: '12-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'Hydro-Coconut5lb.jpg' },
        ],
    },
    {
        id: '13',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Strawberry',
        description: HydroDefinitionDescription,
        variants: [
            { id: '13-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Strawberry.jpg' },
            { id: '13-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'Hydro-Strawberry5lb.jpg' },
        ],
    },
    {
        id: '14',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Vainilla',
        description: HydroDefinitionDescription,
        variants: [
            { id: '14-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Vainilla.jpg' },
            { id: '14-5lb', weight: '5 LBS', price: price5LB, imageFileName: 'Hydro-Vainilla5lb.jpg' },
        ],
    },
    {
        id: '15',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Cafe',
        description: HydroDefinitionDescription,
        variants: [
            { id: '15-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Definition-Cafe.jpeg' },
        ],
    },
    {
        id: '16',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Cookies and Cream',
        description: HydroDefinitionDescription,
        variants: [
            { id: '16-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Definition-Cookies-and-Cream.jpeg' },
        ],
    },
    {
        id: '17',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Peanut Butter',
        description: HydroDefinitionDescription,
        variants: [
            { id: '17-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Definition-Peanut-butter.jpeg' },
        ],
    },
    {
        id: '18',
        folder: 'hydro-definition stevia',
        name: 'Hydro Definition Stevia - Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '18-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Chocolate-Stevia.jpg' },
        ],
    },
    {
        id: '19',
        folder: 'hydro-definition stevia',
        name: 'Hydro Definition Stevia - Strawberry',
        description: PremiumWheyDescription,
        variants: [
            { id: '19-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Strawberry-Stevia.jpg' },
        ],
    },
    {
        id: '20',
        folder: 'hydro-definition stevia',
        name: 'Hydro Definition Stevia - Vainilla',
        description: PremiumWheyDescription,
        variants: [
            { id: '20-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hydro-Vainilla-Stevia.jpg' },
        ],
    },
    {
        id: '21',
        folder: 'vegan-protein',
        name: 'Vegan Protein - Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '21-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'VEGAN-PROTEIN-Chocolate.jpg' },
        ],
    },
    {
        id: '22',
        folder: 'vegan-protein',
        name: 'Vegan Protein - Vainilla',
        description: PremiumWheyDescription,
        variants: [
            { id: '22-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'VEGAN-PROTEIN-Vainilla.jpg' },
        ],
    },
    {
        id: '23',
        folder: 'womens-protein',
        name: 'Womens Protein - Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '23-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'WOMENS-PROTEIN-Chocolate.jpg' },
        ],
    },
    {
        id: '24',
        folder: 'womens-protein',
        name: 'Womens Protein - Pineapple Coconut',
        description: PremiumWheyDescription,
        variants: [
            { id: '24-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'WOMENS-PROTEIN-Pineapple-Coconut.jpg' },
        ],
    },
    {
        id: '25',
        folder: 'womens-protein',
        name: 'Womens Protein - Strawberry Cheesecake',
        description: PremiumWheyDescription,
        variants: [
            { id: '25-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'WOMENS-PROTEIN-Strawberry-Cheesecake.jpg' },
        ],
    },
    {
        id: '26',
        folder: 'barritas landerbar protein',
        name: 'Landerbar Protein - Fresa',
        description: PremiumWheyDescription,
        variants: [
            { id: '26-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Barra_fresa.jpg' },
        ],
    },
    {
        id: '27',
        folder: 'barritas landerbar protein',
        name: 'Landerbar Protein - Banana',
        description: PremiumWheyDescription,
        variants: [
            { id: '27-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'barra_banana.jpg' },
        ],
    },
    {
        id: '28',
        folder: 'barritas landerbar protein',
        name: 'Landerbar Protein - Dulce de Leche',
        description: PremiumWheyDescription,
        variants: [
            { id: '28-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'barra_dulcedeleche.jpg' },
        ],
    },
    {
        id: '29',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Banoffee',
        description: PremiumWheyDescription,
        variants: [
            { id: '29-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_banoffee_X10.jpg' },
        ],
    },
    {
        id: '30',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Brigadeiro',
        description: PremiumWheyDescription,
        variants: [
            { id: '30-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_brigadeiro_X10.jpg' },
        ],
    },
    {
        id: '31',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Cookies and Cream',
        description: PremiumWheyDescription,
        variants: [
            { id: '31-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_cookies_and_cream_X10.jpg' },
        ],
    },
    {
        id: '32',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Dulce de Leche',
        description: PremiumWheyDescription,
        variants: [
            { id: '32-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_dulcedeleche_X10.jpg' },
        ],
    },
    {
        id: '33',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Mani',
        description: PremiumWheyDescription,
        variants: [
            { id: '33-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_mani_X10.jpg' },
        ],
    },
    {
        id: '34',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Red Berry Yogurt',
        description: PremiumWheyDescription,
        variants: [
            { id: '34-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'crok_red_berry_yogurt_X10.jpg' },
        ],
    },
    {
        id: '35',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Banoffee',
        description: PremiumWheyDescription,
        variants: [
            { id: '35-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Banoffee2.png' },
        ],
    },
    {
        id: '36',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Coconut Tropical Fruit',
        description: PremiumWheyDescription,
        variants: [
            { id: '36-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Coconut-tropical-fruit2.png' },
        ],
    },
    {
        id: '37',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Cookies and Cream',
        description: PremiumWheyDescription,
        variants: [
            { id: '37-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Cookies-and-cream2.png' },
        ],
    },
    {
        id: '38',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Dulce de Leche',
        description: PremiumWheyDescription,
        variants: [
            { id: '38-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Dulce-de-leche2.png' },
        ],
    },
    {
        id: '39',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Hazelnut Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '39-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Hazelnut-chocolate2.png' },
        ],
    },
    {
        id: '40',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Red Berry Yogurt',
        description: PremiumWheyDescription,
        variants: [
            { id: '40-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Red-berry-yogurt2.png' },
        ],
    },
    {
        id: '41',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Strawberry Milkshake',
        description: PremiumWheyDescription,
        variants: [
            { id: '41-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Strawberry-milkshake2.png' },
        ],
    },
    {
        id: '42',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Vanilla Ice Cream',
        description: PremiumWheyDescription,
        variants: [
            { id: '42-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Vanilla-ice-cream2.png' },
        ],
    },
    {
        id: '43',
        folder: 'resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Blue Raspberry',
        description: PremiumWheyDescription,
        variants: [
            { id: '43-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'BCAA-Blueraspberry.jpg' },
        ],
    },
    {
        id: '44',
        folder: 'resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Green Apple',
        description: PremiumWheyDescription,
        variants: [
            { id: '44-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'BCAA-Greenapple.jpg' },
        ],
    },
    {
        id: '45',
        folder: 'resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Lemon Lime',
        description: PremiumWheyDescription,
        variants: [
            { id: '45-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'BCAA-Lemon-lime.jpg' },
        ],
    },
    {
        id: '46',
        folder: 'resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Pineapple',
        description: PremiumWheyDescription,
        variants: [
            { id: '46-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'BCAA-PineApple.jpg' },
        ],
    },
    {
        id: '47',
        folder: 'resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Watermelon',
        description: PremiumWheyDescription,
        variants: [
            { id: '47-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'BCAA-Watermelon.jpg' },
        ],
    },
    {
        id: '48',
        folder: 'resistencia y recuperacion/Creatina',
        name: 'Creatine',
        description: PremiumWheyDescription,
        variants: [
            { id: '48-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Creatine.jpg' },
        ],
    },
    {
        id: '49',
        folder: 'resistencia y recuperacion/Creatina',
        name: 'Creatine BR',
        description: PremiumWheyDescription,
        variants: [
            { id: '49-300g', weight: '300g', price: price2LB, imageFileName: 'Creatine-Br.jpg' },
            { id: '49-1kg', weight: '1kg', price: price5LB, imageFileName: 'creatine_BR_1KG-1.jpg' },
        ],
    },
    {
        id: '51',
        folder: 'resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Cola',
        description: PremiumWheyDescription,
        variants: [
            { id: '51-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'L-CARNITINE-Cola.jpg' },
        ],
    },
    {
        id: '52',
        folder: 'resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Grape',
        description: PremiumWheyDescription,
        variants: [
            { id: '52-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'L-CARNITINE-Grape.jpg' },
        ],
    },
    {
        id: '53',
        folder: 'resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Orange',
        description: PremiumWheyDescription,
        variants: [
            { id: '53-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'L-CARNITINE-Orange.jpg' },
        ],
    },
    {
        id: '54',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Fruit Punch',
        description: PremiumWheyDescription,
        variants: [
            { id: '54-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Amino-Fruitpunch.jpg' },
        ],
    },
    {
        id: '55',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Grape',
        description: PremiumWheyDescription,
        variants: [
            { id: '55-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Amino-Grape.jpg' },
        ],
    },
    {
        id: '56',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Green Apple',
        description: PremiumWheyDescription,
        variants: [
            { id: '56-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Amino-GreenApple.jpg' },
        ],
    },
    {
        id: '57',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Raspberry Lemonade',
        description: PremiumWheyDescription,
        variants: [
            { id: '57-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Amino-Raspberry-limonade.jpg' },
        ],
    },
    {
        id: '58',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Coconut',
        description: PremiumWheyDescription,
        variants: [
            { id: '58-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Coco-1000x1000-1.jpg' },
        ],
    },
    {
        id: '59',
        folder: 'resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Tangerine',
        description: PremiumWheyDescription,
        variants: [
            { id: '59-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'Mandarina-1000x1000-1.jpg' },
        ],
    },
    {
        id: '60',
        folder: 'resistencia y recuperacion/dhea',
        name: 'DHEA - 25mg',
        description: PremiumWheyDescription,
        variants: [
            { id: '60-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'DHEA-25.jpg' },
        ],
    },
    {
        id: '61',
        folder: 'resistencia y recuperacion/dhea',
        name: 'DHEA - 50mg',
        description: PremiumWheyDescription,
        variants: [
            { id: '61-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'DHEA-50.jpg' },
        ],
    },
    {
        id: '62',
        folder: 'resistencia y recuperacion/glucosamina',
        name: 'Glucosamine',
        description: PremiumWheyDescription,
        variants: [
            { id: '62-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'GLUCOSAMINE.jpg' },
        ],
    },
    {
        id: '63',
        folder: 'resistencia y recuperacion/muscle pump',
        name: 'Muscle Pump - Fruit Punch',
        description: PremiumWheyDescription,
        variants: [
            { id: '63-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'MUSCLE-PUMP-Fruit-Punch.jpg' },
        ],
    },
    {
        id: '64',
        folder: 'resistencia y recuperacion/muscle pump',
        name: 'Muscle Pump - Key Lime Ice',
        description: PremiumWheyDescription,
        variants: [
            { id: '64-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'MUSCLE-PUMP-Key-lime-ice-800x800.jpg' },
        ],
    },
    {
        id: '65',
        folder: 'resistencia y recuperacion/testolander booster',
        name: 'Testolander Booster',
        description: PremiumWheyDescription,
        variants: [
            { id: '65-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'TESTOLANDER-BOOSTER.jpg' },
        ],
    },
    {
        id: '66',
        folder: 'resistencia y recuperacion/tribulus',
        name: 'Tribulus Terrestris',
        description: PremiumWheyDescription,
        variants: [
            { id: '66-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'TRIBULUS-TERRESTRIS.jpg' },
        ],
    },
    {
        id: '67',
        folder: 'resistencia y recuperacion/ultra glutamine',
        name: 'Ultra Glutamine',
        description: PremiumWheyDescription,
        variants: [
            { id: '67-2lb', weight: '2 LBS', price: price2LB, imageFileName: 'ULTRA-GLUTAMINA.jpg' },
        ],
    }
];
