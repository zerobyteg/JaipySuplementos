export type ProductWeight =
    | '2 LBS'
    | '5 LBS'
    | '300g'
    | '1kg'
    | '405g'
    | '25mg'
    | '50mg'
    | '30 caps'
    | '60 caps'
    | '90 caps'
    | '120 caps'
    | '180 caps'
    | 'Liquid'
    | 'Unflavored'
    | '450G'
    | '900G';

export interface ProductVariant {
    id: string;
    weight: ProductWeight;
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
const WheyShakeDescription = "Sabores innovadores con tecnología norteamericana y perfiles nutricionales óptimos. Ideal para quienes buscan cuidar su salud disfrutando de una experiencia gourmet.";
const WomensProteinDescription = "Women’s Protein es la proteína idealmente formulada para las mujeres, cubriendo las necesidades expuestas por ellas, como lo son una piel, uñas y cabellos saludables, como así también un buen tono y desarrollo muscular.  ";
const VeganProteinDescription = "Vegan Protein es una proteína vegetal de alta calidad, ideal para quienes buscan una alternativa natural y saludable a la proteína animal.  ";
const LanderbarProteinDescription = "Las LanderBar fueron creadas para aportar el valor energético necesario para seguir con la rutina del día a día.";
const CrokwheyDescription = "Unité a nosotros en esta travesía hacia una vida más saludable y placentera con el alfajor proteico CROK! ";
const bcaaDescription = "Fórmula avanzada diseñada para potenciar la resistencia, el crecimiento y la recuperación muscular. El suplemento más completo para maximizar cada entrenamiento.";
const creatineUSADescription = "Potencia la fuerza y la energía para maximizar la masa muscular y la recuperación. El aliado esencial para elevar el rendimiento en entrenamientos intensos.";
const creatineBRDescription = "Creatina monohidratada pura con tecnología micronizada para una absorción superior. Garantiza máxima pureza para nutrir tus músculos de forma más eficiente.";
const lcreatineDescription = "Transforma la grasa en energía para aumentar el rendimiento y reducir el peso corporal. Fórmula líquida concentrada que potencia la quema calórica en cada rutina.";
const aminoRevolutionDescription = "Mezcla de aminoácidos diseñada para potenciar el rendimiento, la hidratación y la recuperación. Aporta energía limpia con cafeína natural y electrolitos clave.";
const glucosamineDescription = "Fórmula antiinflamatoria que regenera el cartílago y mejora la movilidad articular. Aumenta la flexibilidad y acelera la recuperación de lesiones físicas.";
const musclePumpDescription = "Fórmula hardcore diseñada para proporcionar energía extrema y una congestión muscular superior. La mezcla definitiva para llevar tus entrenamientos al límite.";
const testolanderBoosterDescription = "Eleva naturalmente la testosterona para maximizar la fuerza, la resistencia y el lívido. Diseñado para aumentar la masa muscular y llevar el rendimiento al siguiente nivel.";
const tribulusTerrestrisDescription = "Extracto estandarizado de alta pureza que eleva la testosterona, el libido y la energía. Maximiza la quema de grasa y el desarrollo muscular para un rendimiento óptimo.";
const ultraGlutamineDescription = "Glutamina 100% pura para prevenir el catabolismo y fortalecer el sistema inmune. Acelera la recuperación tras el ejercicio intenso para volver más fuerte.";

const uc2Description = "UC-II® es colágeno tipo II no desnaturalizado que ayuda a mantener la salud de las articulaciones y mejora la movilidad y flexibilidad.";
const citratoMagnesioDescription = "El citrato de magnesio es una forma altamente absorbible de magnesio que apoya la función muscular, nerviosa y la salud ósea.";
const fiberDescription = "Suplemento de fibra natural para mejorar la digestión, promover la regularidad y apoyar la salud intestinal general.";
const hairSkinNailsDescription = "Fórmula completa con biotina y vitaminas esenciales para fortalecer el cabello, mejorar la elasticidad de la piel y endurecer las uñas.";
const hydrolizedCollagenDescription = "Colágeno hidrolizado de alta pureza para mejorar la salud de la piel, articulaciones y tejidos conectivos.";
const landerDiureticDescription = "Fórmula natural diseñada para ayudar a eliminar el exceso de líquidos, reducir la hinchazón y mejorar la definición muscular.";
const milkThistleDescription = "Extracto de cardo mariano que apoya la función hepática saludable y ayuda en los procesos de desintoxicación del cuerpo.";
const multiCollagenDescription = "Mezcla de múltiples tipos de colágeno para un soporte integral de la piel, cabello, uñas y articulaciones.";
const multiphaseDescription = "Suplemento multivitamínico y mineral de espectro completo para cubrir todas las necesidades nutricionales diarias.";
const omega3Description = "Aceite de pescado rico en EPA y DHA para apoyar la salud cardiovascular, cerebral y reducir la inflamación.";
const probioticDescription = "Mezcla de cepas probióticas para equilibrar la microbiota intestinal y fortalecer el sistema inmunológico.";
const sawPalmettoDescription = "Extracto natural que apoya la salud de la próstata y mantiene el equilibrio hormonal masculino.";
const vitamind3Description = "Vitamina D3 de alta potencia para fortalecer el sistema inmune, mejorar la absorción de calcio y apoyar la salud ósea.";
const vitamincDescription = "Vitamina C pura para potenciar las defensas naturales, actuar como antioxidante y promover la síntesis de colágeno.";

const PremiumWheyPrice2LB = '380.000';
const PremiumWheyPrice5LB = '650.000';
const HydroDefinitionPrice2LB = '530.000';
const HydroDefinitionPrice5LB = '980.000';
const WheyShakePrice450G = '160.000';
const WheyShakePrice900G = '270.000';
const WomensProteinPrice = '350.000';
const veganProteinPrice = '340.000';
const LanderbarProteinPrice = '240.000';
const CrokwheyPrice = '130.000';
const bcaaPrice = '249.000';
const creatineUSAPrice = '270.000';
const creatineBRPrice300G = '190.000';
const creatineBRPrice1KG = '460.000';
const lcreatinePrice = '189.000';
const aminoRevolutionPrice = '232.000';
const glucosaminePrice = '185.000';
const musclePumpPrice = '255.000';
const testolanderBoosterPrice = '190.000';
const tribulusTerrestrisPrice = '145.000';
const ultraGlutaminePrice = '190.000';

const priceUC2 = '175.000';
const priceCitratoMagnesio = '190.000';
const priceFiber = '190.000';
const priceHairSkinNails = '115.000';
const priceHydrolizedCollagen180 = '170.000';
const priceHydrolizedCollagen405 = '255.000';
const priceLanderDiuretic = '130.000';
const priceMilkThistle = '160.000';
const priceMultiCollagenPlus = '360.000';
const priceMultiphaseLanderfit = '155.000';
const priceOmega3Landerfit = '195.000';
const priceProbioticDualLiquid = '134.000';
const priceSawPalmetto = '135.000';
const priceVitaminaD3 = '690.000';
const priceVitaminaC = '120.000';

export const products: Product[] = [
    {
        id: '1',
        folder: 'premium-whey',
        name: 'Premium Whey - Acai',
        description: PremiumWheyDescription,
        variants: [
            { id: '1-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Acai.webp' },
            { id: '1-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-ACAI.webp' },
        ],
    },
    {
        id: '2',
        folder: 'premium-whey',
        name: 'Premium Whey - Banana Split',
        description: PremiumWheyDescription,
        variants: [
            { id: '2-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Banana-Split.webp' },
            { id: '2-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-BANANA-SPLIT.webp' },
        ],
    },
    {
        id: '3',
        folder: 'premium-whey',
        name: 'Premium Whey - Caramel',
        description: PremiumWheyDescription,
        variants: [
            { id: '3-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Caramel.webp' },
            { id: '3-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-CARAMEL.webp' },
        ],
    },
    {
        id: '4',
        folder: 'premium-whey',
        name: 'Premium Whey - Chocolate Peanut Butter',
        description: PremiumWheyDescription,
        variants: [
            { id: '4-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Chocolate-Peanut-Butter.webp' },
            { id: '4-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-CHOCOLATE-PEANUT-BUTTER.webp' },
        ],
    },
    {
        id: '5',
        folder: 'premium-whey',
        name: 'Premium Whey - Chocolate',
        description: PremiumWheyDescription,
        variants: [
            { id: '5-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Chocolate.webp' },
            { id: '5-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-CHOCOLATE.webp' },
        ],
    },
    {
        id: '6',
        folder: 'premium-whey',
        name: 'Premium Whey - Cookies and Cream',
        description: PremiumWheyDescription,
        variants: [
            { id: '6-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Cookies-and-Cream.webp' },
            { id: '6-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-COOKIES-AND-CREAM.webp' },
        ],
    },
    {
        id: '7',
        folder: 'premium-whey',
        name: 'Premium Whey - Dulce de Leche',
        description: PremiumWheyDescription,
        variants: [
            { id: '7-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Dulce-de-Leche.webp' },
            { id: '7-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-DULCE-DE-LECHE.webp' },
        ],
    },
    {
        id: '8',
        folder: 'premium-whey',
        name: 'Premium Whey - Peanut Butter',
        description: PremiumWheyDescription,
        variants: [
            { id: '8-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Peanut-Butter.webp' },
            { id: '8-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-PEANUT-BUTTER.webp' },
        ],
    },
    {
        id: '9',
        folder: 'premium-whey',
        name: 'Premium Whey - Strawberry',
        description: PremiumWheyDescription,
        variants: [
            { id: '9-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Strawberry.webp' },
            { id: '9-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-STRAWBERRY.webp' },
        ],
    },
    {
        id: '10',
        folder: 'premium-whey',
        name: 'Premium Whey - Vainilla',
        description: PremiumWheyDescription,
        variants: [
            { id: '10-2lb', weight: '2 LBS', price: PremiumWheyPrice2LB, imageFileName: 'PREMIUM-WHEY-Vainilla.webp' },
            { id: '10-5lb', weight: '5 LBS', price: PremiumWheyPrice5LB, imageFileName: 'PREMIUM-WHEY-5LB-VANILLA.webp' },
        ],
    },
    {
        id: '11',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Chocolate',
        description: HydroDefinitionDescription,
        variants: [
            { id: '11-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Chocolate.webp' },
            { id: '11-5lb', weight: '5 LBS', price: HydroDefinitionPrice5LB, imageFileName: 'Hydro-Chocolate5lb.webp' },
        ],
    },
    {
        id: '12',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Coconut',
        description: HydroDefinitionDescription,
        variants: [
            { id: '12-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Coconut.webp' },
            { id: '12-5lb', weight: '5 LBS', price: HydroDefinitionPrice5LB, imageFileName: 'Hydro-Coconut5lb.webp' },
        ],
    },
    {
        id: '13',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Strawberry',
        description: HydroDefinitionDescription,
        variants: [
            { id: '13-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Strawberry.webp' },
            { id: '13-5lb', weight: '5 LBS', price: HydroDefinitionPrice5LB, imageFileName: 'Hydro-Strawberry5lb.webp' },
        ],
    },
    {
        id: '14',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Vainilla',
        description: HydroDefinitionDescription,
        variants: [
            { id: '14-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Vainilla.webp' },
            { id: '14-5lb', weight: '5 LBS', price: HydroDefinitionPrice5LB, imageFileName: 'Hydro-Vainilla5lb.webp' },
        ],
    },
    {
        id: '15',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Cafe',
        description: HydroDefinitionDescription,
        variants: [
            { id: '15-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Definition-Cafe.webp' },
        ],
    },
    {
        id: '16',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Cookies and Cream',
        description: HydroDefinitionDescription,
        variants: [
            { id: '16-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Definition-Cookies-and-Cream.webp' },
        ],
    },
    {
        id: '17',
        folder: 'hydro-definition',
        name: 'Hydro Definition - Peanut Butter',
        description: HydroDefinitionDescription,
        variants: [
            { id: '17-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Definition-Peanut-butter.webp' },
        ],
    },
    {
        id: '18',
        folder: 'hydro-definition-stevia',
        name: 'Hydro Definition Stevia - Chocolate',
        description: HydroDefinitionDescription,
        variants: [
            { id: '18-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Chocolate-Stevia.webp' },
        ],
    },
    {
        id: '19',
        folder: 'hydro-definition-stevia',
        name: 'Hydro Definition Stevia - Strawberry',
        description: HydroDefinitionDescription,
        variants: [
            { id: '19-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Strawberry-Stevia.webp' },
        ],
    },
    {
        id: '20',
        folder: 'hydro-definition stevia',
        name: 'Hydro Definition Stevia - Vainilla',
        description: HydroDefinitionDescription,
        variants: [
            { id: '20-2lb', weight: '2 LBS', price: HydroDefinitionPrice2LB, imageFileName: 'Hydro-Vainilla-Stevia.webp' },
        ],
    },
    {
        id: '21',
        folder: 'vegan-protein',
        name: 'Vegan Protein - Chocolate',
        description: VeganProteinDescription,
        variants: [
            { id: '21-2lb', weight: '2 LBS', price: veganProteinPrice, imageFileName: 'VEGAN-PROTEIN-Chocolate.webp' },
        ],
    },
    {
        id: '22',
        folder: 'vegan-protein',
        name: 'Vegan Protein - Vainilla',
        description: VeganProteinDescription,
        variants: [
            { id: '22-2lb', weight: '2 LBS', price: veganProteinPrice, imageFileName: 'VEGAN-PROTEIN-Vainilla.webp' },
        ],
    },
    {
        id: '23',
        folder: 'womens-protein',
        name: 'Womens Protein - Chocolate',
        description: WomensProteinDescription,
        variants: [
            { id: '23-2lb', weight: '2 LBS', price: WomensProteinPrice, imageFileName: 'WOMENS-PROTEIN-Chocolate.webp' },
        ],
    },
    {
        id: '24',
        folder: 'womens-protein',
        name: 'Womens Protein - Pineapple Coconut',
        description: WomensProteinDescription,
        variants: [
            { id: '24-2lb', weight: '2 LBS', price: WomensProteinPrice, imageFileName: 'WOMENS-PROTEIN-Pineapple-Coconut.webp' },
        ],
    },
    {
        id: '25',
        folder: 'womens-protein',
        name: 'Womens Protein - Strawberry Cheesecake',
        description: WomensProteinDescription,
        variants: [
            { id: '25-2lb', weight: '2 LBS', price: WomensProteinPrice, imageFileName: 'WOMENS-PROTEIN-Strawberry-Cheesecake.webp' },
        ],
    },
    {
        id: '26',
        folder: 'barritas-landerbar-protein',
        name: 'Landerbar Protein - Fresa',
        description: LanderbarProteinDescription,
        variants: [
            { id: '26-2lb', weight: '2 LBS', price: LanderbarProteinPrice, imageFileName: 'Barra_fresa.webp' },
        ],
    },
    {
        id: '27',
        folder: 'barritas-landerbar-protein',
        name: 'Landerbar Protein - Banana',
        description: LanderbarProteinDescription,
        variants: [
            { id: '27-2lb', weight: '2 LBS', price: LanderbarProteinPrice, imageFileName: 'barra_banana.webp' },
        ],
    },
    {
        id: '28',
        folder: 'barritas-landerbar-protein',
        name: 'Landerbar Protein - Dulce de Leche',
        description: LanderbarProteinDescription,
        variants: [
            { id: '28-2lb', weight: '2 LBS', price: LanderbarProteinPrice, imageFileName: 'barra_dulcedeleche.webp' },
        ],
    },
    {
        id: '29',
        folder: 'crokwhey-landerfit',
        name: 'Crokwhey - Banoffee',
        description: CrokwheyDescription,
        variants: [
            { id: '29-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_banoffee_X10.webp' },
        ],
    },
    {
        id: '30',
        folder: 'crokwhey-landerfit',
        name: 'Crokwhey - Brigadeiro',
        description: CrokwheyDescription,
        variants: [
            { id: '30-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_brigadeiro_X10.webp' },
        ],
    },
    {
        id: '31',
        folder: 'crokwhey-landerfit',
        name: 'Crokwhey - Cookies and Cream',
        description: CrokwheyDescription,
        variants: [
            { id: '31-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_cookies_and_cream_X10.webp' },
        ],
    },
    {
        id: '32',
        folder: 'crokwhey-landerfit',
        name: 'Crokwhey - Dulce de Leche',
        description: CrokwheyDescription,
        variants: [
            { id: '32-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_dulcedeleche_X10.webp' },
        ],
    },
    {
        id: '33',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Mani',
        description: CrokwheyDescription,
        variants: [
            { id: '33-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_mani_X10.webp' },
        ],
    },
    {
        id: '34',
        folder: 'crokwhey landerfit',
        name: 'Crokwhey - Red Berry Yogurt',
        description: CrokwheyDescription,
        variants: [
            { id: '34-2lb', weight: '2 LBS', price: CrokwheyPrice, imageFileName: 'crok_red_berry_yogurt_X10.webp' },
        ],
    },
    {
        id: '35',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Banoffee',
        description: WheyShakeDescription,
        variants: [
            { id: '35-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Banoffee2.webp' },
        ],
    },
    {
        id: '36',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Coconut Tropical Fruit',
        description: WheyShakeDescription,
        variants: [
            { id: '36-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Coconut-tropical-fruit2.webp' },
        ],
    },
    {
        id: '37',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Cookies and Cream',
        description: WheyShakeDescription,
        variants: [
            { id: '37-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Cookies-and-cream2.webp' },
        ],
    },
    {
        id: '38',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Dulce de Leche',
        description: WheyShakeDescription,
        variants: [
            { id: '38-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Dulce-de-leche2.webp' },
        ],
    },
    {
        id: '39',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Hazelnut Chocolate',
        description: WheyShakeDescription,
        variants: [
            { id: '39-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Hazelnut-chocolate2.webp' },
        ],
    },
    {
        id: '40',
        folder: 'wheyshake-landerfit',
        name: 'Wheyshake - Red Berry Yogurt',
        description: WheyShakeDescription,
        variants: [
            { id: '40-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Red-berry-yogurt2.webp' },
        ],
    },
    {
        id: '41',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Strawberry Milkshake',
        description: WheyShakeDescription,
        variants: [
            { id: '41-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Strawberry-milkshake2.webp' },
        ],
    },
    {
        id: '42',
        folder: 'wheyshake landerfit',
        name: 'Wheyshake - Vanilla Ice Cream',
        description: WheyShakeDescription,
        variants: [
            { id: '42-2lb', weight: '2 LBS', price: WheyShakePrice900G, imageFileName: 'Vanilla-ice-cream2.webp' },
        ],
    },
    {
        id: '43',
        folder: 'resistencia-y-recuperacion/bcaa-revolution',
        name: 'BCAA Revolution - Blue Raspberry',
        description: bcaaDescription,
        variants: [
            { id: '43-2lb', weight: '2 LBS', price: bcaaPrice, imageFileName: 'BCAA-Blueraspberry.webp' },
        ],
    },
    {
        id: '44',
        folder: 'resistencia-y-recuperacion/bcaa-revolution',
        name: 'BCAA Revolution - Green Apple',
        description: bcaaDescription,
        variants: [
            { id: '44-2lb', weight: '2 LBS', price: bcaaPrice, imageFileName: 'BCAA-Greenapple.webp' },
        ],
    },
    {
        id: '45',
        folder: 'resistencia-y-recuperacion/bcaa-revolution',
        name: 'BCAA Revolution - Lemon Lime',
        description: bcaaDescription,
        variants: [
            { id: '45-2lb', weight: '2 LBS', price: bcaaPrice, imageFileName: 'BCAA-Lemon-lime.webp' },
        ],
    },
    {
        id: '46',
        folder: 'Resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Pineapple',
        description: bcaaDescription,
        variants: [
            { id: '46-2lb', weight: '2 LBS', price: bcaaPrice, imageFileName: 'BCAA-PineApple.webp' },
        ],
    },
    {
        id: '47',
        folder: 'Resistencia y recuperacion/BCAA revolution',
        name: 'BCAA Revolution - Watermelon',
        description: bcaaDescription,
        variants: [
            { id: '47-2lb', weight: '2 LBS', price: bcaaPrice, imageFileName: 'BCAA-Watermelon.webp' },
        ],
    },
    {
        id: '48',
        folder: 'resistencia-y-recuperacion/creatina',
        name: 'Creatine',
        description: creatineUSADescription,
        variants: [
            { id: '48-2lb', weight: '2 LBS', price: creatineUSAPrice, imageFileName: 'Creatine.webp' },
        ],
    },
    {
        id: '49',
        folder: 'Resistencia y recuperacion/Creatina',
        name: 'Creatine BR',
        description: creatineBRDescription,
        variants: [
            { id: '49-300g', weight: '300g', price: creatineBRPrice300G, imageFileName: 'Creatine-Br.webp' },
            { id: '49-1kg', weight: '1kg', price: creatineBRPrice1KG, imageFileName: 'creatine_BR_1KG-1.webp' },
        ],
    },
    {
        id: '51',
        folder: 'Resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Cola',
        description: lcreatineDescription,
        variants: [
            { id: '51-2lb', weight: '2 LBS', price: lcreatinePrice, imageFileName: 'L-CARNITINE-Cola.webp' },
        ],
    },
    {
        id: '52',
        folder: 'Resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Grape',
        description: lcreatineDescription,
        variants: [
            { id: '52-2lb', weight: '2 LBS', price: lcreatinePrice, imageFileName: 'L-CARNITINE-Grape.webp' },
        ],
    },
    {
        id: '53',
        folder: 'Resistencia y recuperacion/Creatina',
        name: 'L-Carnitine - Orange',
        description: lcreatineDescription,
        variants: [
            { id: '53-2lb', weight: '2 LBS', price: lcreatinePrice, imageFileName: 'L-CARNITINE-Orange.webp' },
        ],
    },
    {
        id: '54',
        folder: 'resistencia-y-recuperacion/amino-revolution',
        name: 'Amino Revolution - Fruit Punch',
        description: aminoRevolutionDescription,
        variants: [
            { id: '54-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Amino-Fruitpunch.webp' },
        ],
    },
    {
        id: '55',
        folder: 'resistencia-y-recuperacion/amino-revolution',
        name: 'Amino Revolution - Grape',
        description: aminoRevolutionDescription,
        variants: [
            { id: '55-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Amino-Grape.webp' },
        ],
    },
    {
        id: '56',
        folder: 'resistencia-y-recuperacion/amino-revolution',
        name: 'Amino Revolution - Green Apple',
        description: aminoRevolutionDescription,
        variants: [
            { id: '56-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Amino-GreenApple.webp' },
        ],
    },
    {
        id: '57',
        folder: 'resistencia-y-recuperacion/amino-revolution',
        name: 'Amino Revolution - Raspberry Lemonade',
        description: aminoRevolutionDescription,
        variants: [
            { id: '57-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Amino-Raspberry-limonade.webp' },
        ],
    },
    {
        id: '58',
        folder: 'resistencia-y-recuperacion/amino-revolution',
        name: 'Amino Revolution - Coconut',
        description: aminoRevolutionDescription,
        variants: [
            { id: '58-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Coco-1000x1000-1.webp' },
        ],
    },
    {
        id: '59',
        folder: 'Resistencia y recuperacion/amino revolution',
        name: 'Amino Revolution - Tangerine',
        description: aminoRevolutionDescription,
        variants: [
            { id: '59-2lb', weight: '2 LBS', price: aminoRevolutionPrice, imageFileName: 'Mandarina-1000x1000-1.webp' },
        ],
    },

    {
        id: '62',
        folder: 'resistencia-y-recuperacion/glucosamina',
        name: 'GLUCOSAMINE Y CHONDROITIN CON MSM',
        description: glucosamineDescription,
        variants: [
            { id: '62-2lb', weight: '2 LBS', price: glucosaminePrice, imageFileName: 'GLUCOSAMINE.webp' },
        ],
    },
    {
        id: '63',
        folder: 'resistencia-y-recuperacion/muscle-pump',
        name: 'Muscle Pump - Fruit Punch',
        description: musclePumpDescription,
        variants: [
            { id: '63-2lb', weight: '2 LBS', price: musclePumpPrice, imageFileName: 'MUSCLE-PUMP-Fruit-Punch.webp' },
        ],
    },
    {
        id: '64',
        folder: 'resistencia-y-recuperacion/muscle-pump',
        name: 'Muscle Pump - Key Lime Ice',
        description: musclePumpDescription,
        variants: [
            { id: '64-2lb', weight: '2 LBS', price: musclePumpPrice, imageFileName: 'MUSCLE-PUMP-Key-lime-ice-800x800.webp' },
        ],
    },
    {
        id: '65',
        folder: 'resistencia-y-recuperacion/testolander-booster',
        name: 'Testolander Booster',
        description: testolanderBoosterDescription,
        variants: [
            { id: '65-2lb', weight: '2 LBS', price: testolanderBoosterPrice, imageFileName: 'TESTOLANDER-BOOSTER.webp' },
        ],
    },
    {
        id: '66',
        folder: 'resistencia-y-recuperacion/tribulus',
        name: 'Tribulus Terrestris',
        description: tribulusTerrestrisDescription,
        variants: [
            { id: '66-2lb', weight: '2 LBS', price: tribulusTerrestrisPrice, imageFileName: 'TRIBULUS-TERRESTRIS.webp' },
        ],
    },
    {
        id: '67',
        folder: 'resistencia-y-recuperacion/ultra-glutamine',
        name: 'Ultra Glutamine',
        description: ultraGlutamineDescription,
        variants: [
            { id: '67-2lb', weight: '2 LBS', price: ultraGlutaminePrice, imageFileName: 'ULTRA-GLUTAMINA.webp' },
        ],
    },
    {
        id: '68',
        folder: 'wellness/uc-ii',
        name: 'UC II',
        description: uc2Description,
        variants: [
            { id: '68-30caps', weight: '30 caps', price: priceUC2, imageFileName: 'UC2-1000x100px-1.webp' },
        ],
    },
    {
        id: '69',
        folder: 'wellness/citrato-magnesio',
        name: 'Citrato de Magnesio',
        description: citratoMagnesioDescription,
        variants: [
            { id: '69-caps', weight: '60 caps', price: priceCitratoMagnesio, imageFileName: 'citrato-de-magnesio.webp' },
        ],
    },
    {
        id: '70',
        folder: 'wellness/fiber',
        name: 'Fiber',
        description: fiberDescription,
        variants: [
            { id: '70-caps', weight: '60 caps', price: priceFiber, imageFileName: 'FIBER.webp' },
        ],
    },
    {
        id: '71',
        folder: 'wellness/hair-skin-nails',
        name: 'Hair, Skin and Nails',
        description: hairSkinNailsDescription,
        variants: [
            { id: '71-caps', weight: '60 caps', price: priceHairSkinNails, imageFileName: 'HAIR-SKIN-AND-NAILS.webp' },
        ],
    },
    {
        id: '72',
        folder: 'wellness/hydrolyzed-collagen',
        name: 'Hydrolyzed Collagen - 180 Caps',
        description: hydrolizedCollagenDescription,
        variants: [
            { id: '72-180caps', weight: '180 caps', price: priceHydrolizedCollagen180, imageFileName: 'Hydrolized-Collegen-180-Capsulas.webp' },
        ],
    },
    {
        id: '84',
        folder: 'wellness/hydrolyzed-collagen',
        name: 'Hydrolyzed Collagen - Orange',
        description: hydrolizedCollagenDescription,
        variants: [
            { id: '84-orange', weight: '405g', price: priceHydrolizedCollagen405, imageFileName: 'Hydrolized-Orange.webp' },
        ],
    },
    {
        id: '85',
        folder: 'wellness/hydrolyzed-collagen',
        name: 'Hydrolyzed Collagen - Lemon Lime',
        description: hydrolizedCollagenDescription,
        variants: [
            { id: '85-lemon', weight: '405g', price: priceHydrolizedCollagen405, imageFileName: 'Hydrolized-Collegen-Lemon-Lime.webp' },
        ],
    },
    {
        id: '73',
        folder: 'wellness/lander-diuretic',
        name: 'Lander Diuretic',
        description: landerDiureticDescription,
        variants: [
            { id: '73-caps', weight: '60 caps', price: priceLanderDiuretic, imageFileName: 'LANDER-DIURETIC.webp' },
        ],
    },
    {
        id: '74',
        folder: 'wellness/milk-thistle',
        name: 'Milk Thistle 500mg',
        description: milkThistleDescription,
        variants: [
            { id: '74-caps', weight: '60 caps', price: priceMilkThistle, imageFileName: 'milk.webp' },
        ],
    },
    {
        id: '75',
        folder: 'wellness/multi-colageno',
        name: 'Multi Hydrolyzed Collagen Plus - Cappuccino',
        description: multiCollagenDescription,
        variants: [
            { id: '75-cap', weight: '1kg', price: priceMultiCollagenPlus, imageFileName: 'multi_collgen-1.webp' },
        ],
    },
    {
        id: '82',
        folder: 'wellness/multi-colageno',
        name: 'Multi Hydrolyzed Collagen Plus - Hazelnut Cream',
        description: multiCollagenDescription,
        variants: [
            { id: '82-hazel', weight: '1kg', price: priceMultiCollagenPlus, imageFileName: 'multi_collgen_hazelnut.webp' },
        ],
    },
    {
        id: '83',
        folder: 'wellness/multi-colageno',
        name: 'Multi Hydrolyzed Collagen Plus - Unflavored',
        description: multiCollagenDescription,
        variants: [
            { id: '83-unf', weight: 'Unflavored', price: priceMultiCollagenPlus, imageFileName: 'multi_collgen_unflavored.webp' },
        ],
    },
    {
        id: '76',
        folder: 'wellness/multiphase-landerfit',
        name: 'Multiphase Landerfit',
        description: multiphaseDescription,
        variants: [
            { id: '76-caps', weight: '90 caps', price: priceMultiphaseLanderfit, imageFileName: 'MULTIPHASE.webp' },
        ],
    },
    {
        id: '77',
        folder: 'wellness/omega-3',
        name: 'Omega 3',
        description: omega3Description,
        variants: [
            { id: '77-caps', weight: '120 caps', price: priceOmega3Landerfit, imageFileName: 'omega-nuevo.webp' },
        ],
    },
    {
        id: '78',
        folder: 'wellness/probiotic-dual-liquid',
        name: 'Probiotic Dual Liquid',
        description: probioticDescription,
        variants: [
            { id: '78-liquid', weight: 'Liquid', price: priceProbioticDualLiquid, imageFileName: 'Probiotic-web-1000x1000-1.webp' },
        ],
    },
    {
        id: '79',
        folder: 'wellness/saw-palmetto',
        name: 'Saw Palmetto',
        description: sawPalmettoDescription,
        variants: [
            { id: '79-caps', weight: '60 caps', price: priceSawPalmetto, imageFileName: 'saw.webp' },
        ],
    },
    {
        id: '80',
        folder: 'wellness/vitaminas',
        name: 'Vitamin D3',
        description: vitamind3Description,
        variants: [
            { id: '80-d3', weight: '60 caps', price: priceVitaminaD3, imageFileName: 'vitamin-d3.webp' },
        ],
    },
    {
        id: '81',
        folder: 'wellness/vitaminas',
        name: 'Vitamin C',
        description: vitamincDescription,
        variants: [
            { id: '81-vitc', weight: '60 caps', price: priceVitaminaC, imageFileName: 'vitamina-c.webp' },
        ],
    }
];
