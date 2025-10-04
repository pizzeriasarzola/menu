// Questo file è il tuo nuovo pannello di controllo del menu.
// Per nascondere un prodotto, cambia semplicemente 'disponibile: true' in 'disponibile: false'.

const menuData = {
    "antipasti": [
        {
            id: "antipasto-sarzola",
            nome: "S'Arzola",
            immagine: "images/Antipasti/sarzola.jpg",
            descrizione: {
                it: "Lardo, Pomodori secchi, Pancetta, Salsicce, Cipolline.",
                en: "Lard, Sun-dried tomatoes, Bacon, Sausages, Onions.",
                es: "Lardo, Tomates secos, Panceta, Salchichas, Cebollitas.",
                fr: "Lard, Tomates séchées, Pancetta, Saucisses, Petits oignons."
            },
            prezzo: "12,00",
            allergeni: "1",
            disponibile: true
        },
        {
            id: "antipasto-terra",
            nome: "Terra",
            immagine: "images/Antipasti/terra.jpg",
            descrizione: {
                it: "Salsiccia, Prosciutto Crudo, Pancetta, Olive.",
                en: "Sausage, Raw ham, Bacon, Olives.",
                es: "Salchicha, Jamón serrano, Panceta, Aceitunas.",
                fr: "Saucisse, Jambon cru, Pancetta, Olives."
            },
            prezzo: "10,00",
            allergeni: "1",
            disponibile: true
        },
        {
            id: "antipasto-mare",
            nome: "Mare",
            immagine: "images/Antipasti/mare.jpg",
            descrizione: {
                it: "Insalata mista di mare.",
                en: "Mixed seafood salad.",
                es: "Ensalada mixta de mariscos.",
                fr: "Salade de fruits de mer mixte."
            },
            prezzo: "10,00",
            allergeni: "2,4,14",
            disponibile: true
        },
        {
            id: "antipasto-frutti-di-bosco",
            nome: "Frutti di bosco",
            immagine: "images/Antipasti/frutti_di_bosco.jpg",
            descrizione: {
                it: "Cipolline, Funghi porcini, Funghi chiodini, Funghi antunna.",
                en: "Onions, Porcini mushrooms, Chiodini mushrooms, Antunna mushrooms.",
                es: "Cebollitas, Hongos porcini, Hongos chiodini, Hongos antunna.",
                fr: "Petits oignons, Cèpes, Pholiotes, Champignons Antunna."
            },
            prezzo: "11,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "antipasto-degustazione",
            nome: "Degustazione",
            immagine: "images/Antipasti/degustazione.jpg",
            descrizione: {
                it: "Funghi misti, Affettati misti, Cipolline, Olive.",
                en: "Mixed mushrooms, Mixed cold cuts, Onions, Olives.",
                es: "Surtido de setas, Surtido de embutidos, Cebollitas, Aceitunas.",
                fr: "Assortiment de champignons, Assortiment de charcuterie, Petits oignons, Olives."
            },
            prezzo: "35,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "antipasto-patatine-fritte",
            nome: "Patatine Fritte",
            immagine: "images/Antipasti/patatine_fritte.jpg",
            descrizione: {
                it: "Porzione di patatine fritte.",
                en: "Portion of french fries.",
                es: "Porción de patatas fritas.",
                fr: "Portion de frites."
            },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        }
    ],
    "pizze-classiche": [
        {
            id: "pizza-margherita",
            nome: "Margherita",
            immagine: "images/Pizze classiche/margherita.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Basilico.",
                en: "Tomato Sauce, Mozzarella, Basil.",
                es: "Tomate, Mozzarella, Albahaca.",
                fr: "Tomate, Mozzarella, Basilic."
            },
            prezzo: "4,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-regina-margherita",
            nome: "Regina Margherita",
            immagine: "images/Pizze classiche/regina_margherita.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella di Bufala, Basilico.",
                en: "Tomato Sauce, Buffalo Mozzarella, Basil.",
                es: "Tomate, Mozzarella de Búfala, Albahaca.",
                fr: "Tomate, Mozzarella de Bufflonne, Basilic."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-marinara",
            nome: "Marinara",
            immagine: "images/Pizze classiche/marinara.jpg",
            descrizione: {
                it: "Pomodoro, Aglio, Origano.",
                en: "Tomato Sauce, Garlic, Oregano.",
                es: "Tomate, Ajo, Orégano.",
                fr: "Tomate, Ail, Origan."
            },
            prezzo: "4,50",
            allergeni: "1",
            disponibile: true
        },
        {
            id: "pizza-focaccia",
            nome: "Focaccia",
            immagine: "images/Pizze classiche/focaccia.jpg",
            descrizione: {
                it: "Olio, Sale.",
                en: "Oil, Salt.",
                es: "Aceite, Sal.",
                fr: "Huile, Sel."
            },
            prezzo: "3,00",
            allergeni: "1",
            disponibile: true
        },
        {
            id: "pizza-bianca",
            nome: "Bianca",
            immagine: "images/Pizze classiche/bianca.jpg",
            descrizione: {
                it: "Mozzarella.",
                en: "Mozzarella.",
                es: "Mozzarella.",
                fr: "Mozzarella."
            },
            prezzo: "4,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-caprese",
            nome: "Caprese",
            immagine: "images/Pizze classiche/caprese.jpg",
            descrizione: {
                it: "Mozzarella di bufala, Pomodori, Basilico.",
                en: "Buffalo mozzarella, Tomatoes, Basil.",
                es: "Mozzarella de búfala, Tomates, Albahaca.",
                fr: "Mozzarella de bufflonne, Tomates, Basilic."
            },
            prezzo: "9,80",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-diavola",
            nome: "Diavola",
            immagine: "images/Pizze classiche/diavola.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia piccante.",
                en: "Tomato Sauce, Mozzarella, Spicy sausage.",
                es: "Tomate, Mozzarella, Salchicha picante.",
                fr: "Tomate, Mozzarella, Saucisson piquant."
            },
            prezzo: "6,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-wurstel",
            nome: "Wurstel",
            immagine: "images/Pizze classiche/wurstel.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Wurstel.",
                en: "Tomato Sauce, Mozzarella, Wurstel sausage.",
                es: "Tomate, Mozzarella, Salchicha tipo Wurstel.",
                fr: "Tomate, Mozzarella, Saucisse de Francfort."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-americana",
            nome: "Americana",
            immagine: "images/Pizze classiche/americana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Würstel, Patatine fritte.",
                en: "Tomato Sauce, Mozzarella, Wurstel sausage, French fries.",
                es: "Tomate, Mozzarella, Salchicha Wurstel, Patatas fritas.",
                fr: "Tomate, Mozzarella, Saucisse de Francfort, Frites."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-patate",
            nome: "Patate",
            immagine: "images/Pizze classiche/patate.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Patate Fritte.",
                en: "Tomato Sauce, Mozzarella, French fries.",
                es: "Tomate, Mozzarella, Patatas fritas.",
                fr: "Tomate, Mozzarella, Frites."
            },
            prezzo: "6,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-prosciutto-cotto",
            nome: "Prosciutto Cotto",
            immagine: "images/Pizze classiche/prosciutto_cotto.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prosciutto Cotto.",
                en: "Tomato Sauce, Mozzarella, Cooked ham.",
                es: "Tomate, Mozzarella, Jamón cocido.",
                fr: "Tomate, Mozzarella, Jambon blanc."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-prosciutto-crudo",
            nome: "Prosciutto Crudo",
            immagine: "images/Pizze classiche/prosciutto_crudo.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prosciutto Crudo.",
                en: "Tomato Sauce, Mozzarella, Raw ham.",
                es: "Tomate, Mozzarella, Jamón serrano.",
                fr: "Tomate, Mozzarella, Jambon cru."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-salsiccia",
            nome: "Salsiccia",
            immagine: "images/Pizze classiche/salsiccia.jpg",
            descrizione: {
                it: "Pomodoro, mozzarella, Salsiccia.",
                en: "Tomato Sauce, Mozzarella, Sausage.",
                es: "Tomate, Mozzarella, Salchicha.",
                fr: "Tomate, Mozzarella, Saucisse."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-pancetta",
            nome: "Pancetta",
            immagine: "images/Pizze classiche/pancetta.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Pancetta.",
                en: "Tomato Sauce, Mozzarella, Bacon.",
                es: "Tomate, Mozzarella, Panceta.",
                fr: "Tomate, Mozzarella, Pancetta."
            },
            prezzo: "6,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-napoletana",
            nome: "Napoletana",
            immagine: "images/Pizze classiche/napoletana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Capperi, Acciughe.",
                en: "Tomato Sauce, Mozzarella, Capers, Anchovies.",
                es: "Tomate, Mozzarella, Alcaparras, Anchoas.",
                fr: "Tomate, Mozzarella, Câpres, Anchois."
            },
            prezzo: "8,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-acciughe",
            nome: "Acciughe",
            immagine: "images/Pizze classiche/acciughe.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Acciughe.",
                en: "Tomato Sauce, Mozzarella, Anchovies.",
                es: "Tomate, Mozzarella, Anchoas.",
                fr: "Tomate, Mozzarella, Anchois."
            },
            prezzo: "8,00",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-porcini",
            nome: "Porcini",
            immagine: "images/Pizze classiche/porcini.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Porcini.",
                en: "Tomato Sauce, Mozzarella, Porcini mushrooms.",
                es: "Tomate, Mozzarella, Hongos porcini.",
                fr: "Tomate, Mozzarella, Cèpes."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-romana",
            nome: "Romana",
            immagine: "images/Pizze classiche/romana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Acciughe, Origano.",
                en: "Tomato Sauce, Mozzarella, Anchovies, Oregano.",
                es: "Tomate, Mozzarella, Anchoas, Orégano.",
                fr: "Tomate, Mozzarella, Anchois, Origan."
            },
            prezzo: "8,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-tonno-cipolle",
            nome: "Tonno Cipolle",
            immagine: "images/Pizze classiche/tonno_cipolle.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Tonno, Cipolle.",
                en: "Tomato Sauce, Mozzarella, Tuna, Onions.",
                es: "Tomate, Mozzarella, Atún, Cebollas.",
                fr: "Tomate, Mozzarella, Thon, Oignons."
            },
            prezzo: "6,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-funghi",
            nome: "Funghi",
            immagine: "images/Pizze classiche/funghi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Funghi.",
                en: "Tomato Sauce, Mozzarella, Mushrooms.",
                es: "Tomate, Mozzarella, Champiñones.",
                fr: "Tomate, Mozzarella, Champignons."
            },
            prezzo: "6,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-cotto-funghi",
            nome: "Cotto Funghi",
            immagine: "images/Pizze classiche/cotto_funghi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prosciutto Cotto, Funghi.",
                en: "Tomato Sauce, Mozzarella, Cooked ham, Mushrooms.",
                es: "Tomate, Mozzarella, Jamón cocido, Champiñones.",
                fr: "Tomate, Mozzarella, Jambon blanc, Champignons."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-tris-di-funghi",
            nome: "Tris di Funghi",
            immagine: "images/Pizze classiche/tris_funghi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Antunna, Porcini, Prataioli.",
                en: "Tomato Sauce, Mozzarella, Antunna, Porcini, Button mushrooms.",
                es: "Tomate, Mozzarella, Antunna, Porcini, Champiñones.",
                fr: "Tomate, Mozzarella, Antunna, Cèpes, Champignons de Paris."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-completa",
            nome: "Completa",
            immagine: "images/Pizze classiche/completa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Funghi,Prosciutto Cotto, Carciofi, Olive, Acciughe, Gorgonzola.",
                en: "Tomato Sauce, Mozzarella, Mushrooms, Ham, Artichokes, Olives, Anchovies, Gorgonzola.",
                es: "Tomate, Mozzarella, Champiñones, Jamón cocido, Alcachofas, Aceitunas, Anchoas, Gorgonzola.",
                fr: "Tomate, Mozzarella, Champignons, Jambon, Artichauts, Olives, Anchois, Gorgonzola."
            },
            prezzo: "11,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-capricciosa",
            nome: "Capricciosa",
            immagine: "images/Pizze classiche/capricciosa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Funghi, Purpedda, Uovo.",
                en: "Tomato Sauce, Mozzarella, Mushrooms, Purpedda (minced meat), Egg.",
                es: "Tomate, Mozzarella, Champiñones, Purpedda (carne picada), Huevo.",
                fr: "Tomate, Mozzarella, Champignons, Purpedda (viande hachée), Œuf."
            },
            prezzo: "10,00",
            allergeni: "1,3,7",
            disponibile: true
        },
        {
            id: "pizza-4-stagioni",
            nome: "4 Stagioni",
            immagine: "images/Pizze classiche/4stagioni.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Cotto, Funghi, Würstel, Carciofi.",
                en: "Tomato Sauce, Mozzarella, Ham, Mushrooms, Wurstel, Artichokes.",
                es: "Tomate, Mozzarella, Jamón cocido, Champiñones, Salchicha Wurstel, Alcachofas.",
                fr: "Tomate, Mozzarella, Jambon, Champignons, Saucisse de Francfort, Artichauts."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-4-formaggi",
            nome: "4 Formaggi",
            immagine: "images/Pizze classiche/4formaggi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Casizolu, Pecorino, Gorgonzola.",
                en: "Tomato Sauce, Mozzarella, Casizolu cheese, Pecorino cheese, Gorgonzola.",
                es: "Tomate, Mozzarella, Queso Casizolu, Queso Pecorino, Gorgonzola.",
                fr: "Tomate, Mozzarella, Fromage Casizolu, Fromage Pecorino, Gorgonzola."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-parigina",
            nome: "Parigina",
            immagine: "images/Pizze classiche/parigina.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Panna, Prosciutto Crudo.",
                en: "Tomato Sauce, Mozzarella, Cream, Ham.",
                es: "Tomate, Mozzarella, Nata, Jamón.",
                fr: "Tomate, Mozzarella, Crème, Jambon."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-deliziosa",
            nome: "Deliziosa",
            immagine: "images/Pizze classiche/deliziosa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Speck, Pomodori, Grana.",
                en: "Tomato Sauce, Mozzarella, Speck, Tomatoes, Grana cheese.",
                es: "Tomate, Mozzarella, Speck, Tomates, Queso Grana.",
                fr: "Tomate, Mozzarella, Speck, Tomates, Fromage Grana."
            },
            prezzo: "11,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-speck",
            nome: "Speck",
            immagine: "images/Pizze classiche/speck.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Speck.",
                en: "Tomato Sauce, Mozzarella, Speck.",
                es: "Tomate, Mozzarella, Speck.",
                fr: "Tomate, Mozzarella, Speck."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-carciofi",
            nome: "Carciofi",
            immagine: "images/Pizze classiche/carciofi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Carciofi.",
                en: "Tomato Sauce, Mozzarella, Artichokes.",
                es: "Tomate, Mozzarella, Alcachofas.",
                fr: "Tomate, Mozzarella, Artichauts."
            },
            prezzo: "6,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-gorgo",
            nome: "Gorgo",
            immagine: "images/Pizze classiche/gorgo.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Gorgonzola.",
                en: "Tomato Sauce, Mozzarella, Gorgonzola.",
                es: "Tomate, Mozzarella, Gorgonzola.",
                fr: "Tomate, Mozzarella, Gorgonzola."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-prataioli",
            nome: "Prataioli",
            immagine: "images/Pizze classiche/prataioli.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prataioli.",
                en: "Tomato Sauce, Mozzarella, Button mushrooms.",
                es: "Tomate, Mozzarella, Champiñones.",
                fr: "Tomate, Mozzarella, Champignons de Paris."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-calzone",
            nome: "Calzone",
            immagine: "images/Pizze classiche/calzone.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prosciutto Cotto, Funghi.",
                en: "Tomato Sauce, Mozzarella, Cooked ham, Mushrooms.",
                es: "Tomate, Mozzarella, Jamón cocido, Champiñones.",
                fr: "Tomate, Mozzarella, Jambon blanc, Champignons."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-calzone-farcito",
            nome: "Calzone Farcito",
            immagine: "images/Pizze classiche/calzone_farcito.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prosciutto Cotto, Funghi, Würstel, Acciughe.",
                en: "Tomato Sauce, Mozzarella, Cooked ham, Mushrooms, Wurstel, Anchovies.",
                es: "Tomate, Mozzarella, Jamón cocido, Champiñones, Salchicha Wurstel, Anchoas.",
                fr: "Tomate, Mozzarella, Jambon blanc, Champignons, Saucisse de Francfort, Anchois."
            },
            prezzo: "10,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "pizza-valtellinese",
            nome: "Valtellinese",
            immagine: "images/Pizze classiche/valtellinese.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Bresaola, Rucola, Grana.",
                en: "Tomato Sauce, Mozzarella, Bresaola, Arugula, Grana cheese.",
                es: "Tomate, Mozzarella, Bresaola, Rúcula, Queso Grana.",
                fr: "Tomate, Mozzarella, Bresaola, Roquette, Fromage Grana."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "pizza-del-nonno",
            nome: "Del Nonno",
            immagine: "images/Pizze classiche/delnonno.jpg",
            descrizione: {
                it: "Mozzarella, Prosciutto Cotto.",
                en: "Mozzarella, Cooked ham.",
                es: "Mozzarella, Jamón cocido.",
                fr: "Mozzarella, Jambon blanc."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        }
    ],
    "pizze-bambini": [
        {
            id: "bambini-topolino",
            nome: "Topolino",
            immagine: "images/Pizze per bambini/topolino.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Olive, Wurstel.",
                en: "Tomato Sauce, Mozzarella, Olives, Wurstel sausage.",
                es: "Tomate, Mozzarella, Aceitunas, Salchicha Wurstel.",
                fr: "Tomate, Mozzarella, Olives, Saucisse de Francfort."
            },
            prezzo: "4,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "bambini-simpson",
            nome: "Simpson",
            immagine: "images/Pizze per bambini/simpson.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Olive, Wurstel, Patatine fritte.",
                en: "Tomato Sauce, Mozzarella, Olives, Wurstel sausage, French fries.",
                es: "Tomate, Mozzarella, Aceitunas, Salchicha Wurstel, Patatas fritas.",
                fr: "Tomate, Mozzarella, Olives, Saucisse de Francfort, Frites."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "bambini-sole",
            nome: "Sole",
            immagine: "images/Pizze per bambini/sole.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Olive, Wurstel, Patatine fritte.",
                en: "Tomato Sauce, Mozzarella, Olives, Wurstel sausage, French fries.",
                es: "Tomate, Mozzarella, Aceitunas, Salchicha Wurstel, Patatas fritas.",
                fr: "Tomate, Mozzarella, Olives, Saucisse de Francfort, Frites."
            },
            prezzo: "5,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "bambini-stellina",
            nome: "Stellina",
            immagine: "images/Pizze per bambini/stellina.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Olive, Wurstel.",
                en: "Tomato Sauce, Mozzarella, Olives, Wurstel sausage.",
                es: "Tomate, Mozzarella, Aceitunas, Salchicha Wurstel.",
                fr: "Tomate, Mozzarella, Olives, Saucisse de Francfort."
            },
            prezzo: "4,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "bambini-delfino",
            nome: "Delfino",
            immagine: "images/Pizze per bambini/delfino.jpg",
            descrizione: {
                it: "Mozzarella.",
                en: "Mozzarella.",
                es: "Mozzarella.",
                fr: "Mozzarella."
            },
            prezzo: "4,00",
            allergeni: "1,7",
            disponibile: true
        }
    ],
    "pizze-barbagia": [
        {
            id: "barbagia-burlardata",
            nome: "Burlardata",
            immagine: "images/Pizze della Barbagia/burlardata.jpg",
            descrizione: {
                it: "Pomodoro, Burrata, Acciughe, Lardo, Pomodorini, Pepe, Basilico.",
                en: "Tomato Sauce, Burrata, Anchovies, Lard, Cherry tomatoes, Pepper, Basil.",
                es: "Tomate, Burrata, Anchoas, Lardo, Tomates cherry, Pimienta, Albahaca.",
                fr: "Tomate, Burrata, Anchois, Lard, Tomates cerises, Poivre, Basilic."
            },
            prezzo: "12,00",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "barbagia-sarzola",
            nome: "S'Arzola",
            immagine: "images/Pizze della Barbagia/sarzola.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Lardo, Cipolle, Pecorino, Pomodorini.",
                en: "Tomato Sauce, Mozzarella, Lard, Onions, Pecorino cheese, Cherry tomatoes.",
                es: "Tomate, Mozzarella, Lardo, Cebollas, Queso Pecorino, Tomates cherry.",
                fr: "Tomate, Mozzarella, Lard, Oignons, Fromage Pecorino, Tomates cerises."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-oroteddesa",
            nome: "Oroteddesa",
            immagine: "images/Pizze della Barbagia/oroteddesa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Purpedda, Lardo, Pilarda (Pomodori secchi), Pecorino.",
                en: "Tomato Sauce, Mozzarella, Purpedda (minced meat), Lard, Pilarda (sun-dried tomatoes), Pecorino cheese.",
                es: "Tomate, Mozzarella, Purpedda (carne picada), Lardo, Pilarda (tomates secos), Queso Pecorino.",
                fr: "Tomate, Mozzarella, Purpedda (viande hachée), Lard, Pilarda (tomates séchées), Fromage Pecorino."
            },
            prezzo: "11,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-massaiu",
            nome: "Massaiu",
            immagine: "images/Pizze della Barbagia/massaiu.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Purpedda, Casizolu, Olive, Pomodorini.",
                en: "Tomato Sauce, Mozzarella, Purpedda (minced meat), Casizolu cheese, Olives, Cherry tomatoes.",
                es: "Tomate, Mozzarella, Purpedda (carne picada), Queso Casizolu, Aceitunas, Tomates cherry.",
                fr: "Tomate, Mozzarella, Purpedda (viande hachée), Fromage Casizolu, Olives, Tomates cerises."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-barbaricina",
            nome: "Barbaricina",
            immagine: "images/Pizze della Barbagia/barbaricina.jpg",
            descrizione: {
                it: "Pecorino piccante in uscita, Pomodori e Cipolle marinati in Olio E.V.O. e Aceto.",
                en: "Spicy Pecorino added after baking, Tomatoes and Onions marinated in E.V.O. Oil and Vinegar.",
                es: "Pecorino picante añadido al salir, Tomates y Cebollas marinados en Aceite de Oliva Virgen Extra y Vinagre.",
                fr: "Pecorino piquant ajouté en fin de cuisson, Tomates et Oignons marinés à l'Huile d'Olive Vierge Extra et Vinaigre."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-nuoresa",
            nome: "Nuoresa",
            immagine: "images/Pizze della Barbagia/nuoresa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia, Casizolu.",
                en: "Tomato Sauce, Mozzarella, Sausage, Casizolu cheese.",
                es: "Tomate, Mozzarella, Salchicha, Queso Casizolu.",
                fr: "Tomate, Mozzarella, Saucisse, Fromage Casizolu."
            },
            prezzo: "8,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-asparagi",
            nome: "Asparagi (Stagionale)",
            immagine: "images/Pizze della Barbagia/asparagi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Asparagi, Cipolla, Grana.",
                en: "Tomato Sauce, Mozzarella, Asparagus, Onion, Grana cheese (Seasonal).",
                es: "Tomate, Mozzarella, Espárragos, Cebolla, Queso Grana (de temporada).",
                fr: "Tomate, Mozzarella, Asperges, Oignon, Fromage Grana (en saison)."
            },
            prezzo: "11,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-disizu",
            nome: "Disizu (Stagionale)",
            immagine: "images/Pizze della Barbagia/disizu.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Asparagi, Appara, Pecorino, Pancetta.",
                en: "Tomato Sauce, Mozzarella, Asparagus, Appara mushrooms, Pecorino cheese, Bacon (Seasonal).",
                es: "Tomate, Mozzarella, Espárragos, Setas Appara, Queso Pecorino, Panceta (de temporada).",
                fr: "Tomate, Mozzarella, Asperges, Champignons Appara, Fromage Pecorino, Pancetta (en saison)."
            },
            prezzo: "13,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-super-asparagi",
            nome: "Super Asparagi (Stagionale)",
            immagine: "images/Pizze della Barbagia/superasparagi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Asparagi freschi.",
                en: "Tomato Sauce, Mozzarella, Fresh asparagus (Seasonal).",
                es: "Tomate, Mozzarella, Espárragos frescos (de temporada).",
                fr: "Tomate, Mozzarella, Asperges fraîches (en saison)."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-porcini-freschi",
            nome: "Porcini Freschi (Stagionale)",
            immagine: "images/Pizze della Barbagia/porcini_freschi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Porcini freschi.",
                en: "Tomato Sauce, Mozzarella, Fresh porcini mushrooms (Seasonal).",
                es: "Tomate, Mozzarella, Hongos porcini frescos (de temporada).",
                fr: "Tomate, Mozzarella, Cèpes frais (en saison)."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "barbagia-carciofi-freschi",
            nome: "Carciofi Freschi (Stagionale)",
            immagine: "images/Pizze della Barbagia/carciofi_freschi.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Carciofi freschi.",
                en: "Tomato Sauce, Mozzarella, Fresh artichokes (Seasonal).",
                es: "Tomate, Mozzarella, Alcachofas frescas (de temporada).",
                fr: "Tomate, Mozzarella, Artichauts frais (en saison)."
            },
            prezzo: "8,00",
            allergeni: "1,7",
            disponibile: true
        }
    ],
    "pizze-gusti-particolari": [
        {
            id: "gusti-pistacchiosa",
            nome: "Pistacchiosa",
            immagine: "images/Gusti particolari/pistacchiosa.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Crema e granella di Pistacchio, Salmone Affumicato, Pepe Rosa, Olio E.V.O, Filetti di peperoncino.",
                en: "Buffalo Mozzarella, Pistachio cream and grains, Smoked salmon, Pink pepper, E.V.O. oil, Chili pepper threads.",
                es: "Mozzarella de Búfala, Crema y granillo de Pistacho, Salmón ahumado, Pimienta rosa, Aceite de Oliva Virgen Extra, Hilos de guindilla.",
                fr: "Mozzarella de Bufflonne, Crème et éclats de Pistache, Saumon fumé, Poivre rose, Huile d'Olive Vierge Extra, Filaments de piment."
            },
            prezzo: "14,00",
            allergeni: "1,4,7,8",
            disponibile: true
        },
        {
            id: "gusti-orolai",
            nome: "Orolai",
            immagine: "images/Gusti particolari/orolai.jpg",
            descrizione: {
                it: "Crema di Melanzane, Mozzarella di Bufala affumicata, Prosciutto Crudo, Pomodorini, Basilico.",
                en: "Eggplant cream, Smoked Buffalo Mozzarella, Raw ham, Cherry tomatoes, Basil.",
                es: "Crema de berenjenas, Mozzarella de Búfala ahumada, Jamón serrano, Tomates cherry, Albahaca.",
                fr: "Crème d'aubergines, Mozzarella de Bufflonne fumée, Jambon cru, Tomates cerises, Basilic."
            },
            prezzo: "13,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-eterna",
            nome: "L'Eterna",
            immagine: "images/Gusti particolari/eterna.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Cacio e Pepe, Pancetta in Cottura, Cipolline Balsamiche.",
                en: "Buffalo Mozzarella, Cacio e Pepe sauce, Baked bacon, Balsamic onions.",
                es: "Mozzarella de Búfala, Salsa Cacio e Pepe, Panceta al horno, Cebollitas balsámicas.",
                fr: "Mozzarella de Bufflonne, Sauce Cacio e Pepe, Pancetta cuite, Oignons balsamiques."
            },
            prezzo: "13,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-vicu-rosa",
            nome: "Vicu Rosa",
            immagine: "images/Gusti particolari/vicurosa.jpg",
            descrizione: {
                it: "Crema di Melanzane, Mozzarella Fior di Latte, Fichi, Prosciutto Crudo, Pomodorini Datterini, Basilico.",
                en: "Eggplant cream, Fior di Latte Mozzarella, Figs, Raw ham, Datterini tomatoes, Basil.",
                es: "Crema de berenjenas, Mozzarella Fior di Latte, Higos, Jamón serrano, Tomates Datterini, Albahaca.",
                fr: "Crème d'aubergines, Mozzarella Fior di Latte, Figues, Jambon cru, Tomates Datterini, Basilic."
            },
            prezzo: "13,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-shardana",
            nome: "Shardana",
            immagine: "images/Gusti particolari/shardana.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella di Bufala, Crema di Asparagi, Bottarga, Ricotta affumicata, Pilarda.",
                en: "Multigrain dough, Buffalo Mozzarella, Asparagus cream, Bottarga (cured fish roe), Smoked ricotta, Pilarda (sun-dried tomatoes).",
                es: "Masa multicereales, Mozzarella de Búfala, Crema de espárragos, Bottarga, Requesón ahumado, Pilarda (tomates secos).",
                fr: "Pâte multicéréales, Mozzarella de Bufflonne, Crème d'asperges, Bottarga (poutargue), Ricotta fumée, Pilarda (tomates séchées)."
            },
            prezzo: "15,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "gusti-pugliese",
            nome: "Pugliese",
            immagine: "images/Gusti particolari/pugliese.jpg",
            descrizione: {
                it: "Burrata, Pomodori, Acciughe, Pepe Nero, Basilico.",
                en: "Burrata cheese, Tomatoes, Anchovies, Black pepper, Basil.",
                es: "Burrata, Tomates, Anchoas, Pimienta negra, Albahaca.",
                fr: "Burrata, Tomates, Anchois, Poivre noir, Basilic."
            },
            prezzo: "11,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "gusti-la-sabry",
            nome: "La Sabry",
            immagine: "images/Gusti particolari/lasabry.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella di Bufala, Crema al Tartufo, Pilarda, Crema di Noci, Salsiccia di Cinghiale.",
                en: "Multigrain dough, Buffalo Mozzarella, Truffle cream, Pilarda (sun-dried tomatoes), Walnut cream, Wild boar sausage.",
                es: "Masa multicereales, Mozzarella de Búfala, Crema de trufa, Pilarda (tomates secos), Crema de nueces, Salchicha de jabalí.",
                fr: "Pâte multicéréales, Mozzarella de Bufflonne, Crème de truffe, Pilarda (tomates séchées), Crème de noix, Saucisse de sanglier."
            },
            prezzo: "14,00",
            allergeni: "1,7,8",
            disponibile: true
        },
        {
            id: "gusti-boscaiola",
            nome: "Boscaiola",
            immagine: "images/Gusti particolari/boscaiola.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Gorgonzola, Porcini, Speck.",
                en: "Buffalo Mozzarella, Gorgonzola, Porcini mushrooms, Speck.",
                es: "Mozzarella de Búfala, Gorgonzola, Hongos porcini, Speck.",
                fr: "Mozzarella de Bufflonne, Gorgonzola, Cèpes, Speck."
            },
            prezzo: "12,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-boscaiola-toscana",
            nome: "Boscaiola Toscana",
            immagine: "images/Gusti particolari/boscaiola_toscana.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella, Zucchine, Carciofi, Prosciutto Crudo, Pecorino al Tartufo.",
                en: "Multigrain dough, Mozzarella, Zucchini, Artichokes, Raw ham, Truffle Pecorino cheese.",
                es: "Masa multicereales, Mozzarella, Calabacines, Alcachofas, Jamón serrano, Queso Pecorino trufado.",
                fr: "Pâte multicéréales, Mozzarella, Courgettes, Artichauts, Jambon cru, Fromage Pecorino à la truffe."
            },
            prezzo: "14,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-moreschina-sarda",
            nome: "Moreschina Sarda",
            immagine: "images/Gusti particolari/moreschina_sarda.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella di Bufala, Scamorza, Friarielli, Pilarda (Pomodori secchi), Pancetta.",
                en: "Multigrain dough, Buffalo Mozzarella, Scamorza cheese, Friarielli (broccoli rabe), Pilarda (sun-dried tomatoes), Bacon.",
                es: "Masa multicereales, Mozzarella de Búfala, Scamorza, Friarielli, Pilarda (tomates secos), Panceta.",
                fr: "Pâte multicéréales, Mozzarella de Bufflonne, Scamorza, Friarielli (brocoli-rave), Pilarda (tomates séchées), Pancetta."
            },
            prezzo: "13,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-suprema",
            nome: "Suprema",
            immagine: "images/Gusti particolari/suprema.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella di Bufala, Purpedda, Friarielli, Lardo, Pilarda (Pomodori secchi).",
                en: "Multigrain dough, Buffalo Mozzarella, Purpedda (minced meat), Friarielli (broccoli rabe), Lard, Pilarda (sun-dried tomatoes).",
                es: "Masa multicereales, Mozzarella de Búfala, Purpedda (carne picada), Friarielli, Lardo, Pilarda (tomates secos).",
                fr: "Pâte multicéréales, Mozzarella de Bufflonne, Purpedda (viande hachée), Friarielli (brocoli-rave), Lard, Pilarda (tomates séchées)."
            },
            prezzo: "14,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-dolce-deciso",
            nome: "Dolce Deciso",
            immagine: "images/Gusti particolari/dolce_deciso.jpg",
            descrizione: {
                it: "Impasto multicereali, Mozzarella, Melanzane grigliate, Casizolu, Friarielli, Lardo, Pilarda (Pomodori secchi).",
                en: "Multigrain dough, Mozzarella, Grilled eggplants, Casizolu cheese, Friarielli (broccoli rabe), Lard, Pilarda (sun-dried tomatoes).",
                es: "Masa multicereales, Mozzarella, Berenjenas a la parrilla, Queso Casizolu, Friarielli, Lardo, Pilarda (tomates secos).",
                fr: "Pâte multicéréales, Mozzarella, Aubergines grillées, Fromage Casizolu, Friarielli (brocoli-rave), Lard, Pilarda (tomates séchées)."
            },
            prezzo: "13,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-afrodite",
            nome: "Afrodite (Stagionale)",
            immagine: "images/Gusti particolari/afrodite.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Fiori di Zucca, Carciofi, Pomodorini, Pecorino al tartufo.",
                en: "Tomato Sauce, Mozzarella, courgette flowers, Artichokes, Cherry tomatoes, Truffle Pecorino cheese.",
                es: "Tomate, Mozzarella, flores de calabacín, Alcachofas, Tomates cherry, Queso Pecorino trufado.",
                fr: "Tomate, Mozzarella, fleurs de courgettes, Artichauts, Tomates cerises, Fromage Pecorino à la truffe."
            },
            prezzo: "11,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-golosa",
            nome: "Golosa",
            immagine: "images/Gusti particolari/golosa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Scamorza, Cipolle, Pomodorini.",
                en: "Tomato Sauce, Mozzarella, Scamorza cheese, Onions, Cherry tomatoes.",
                es: "Tomate, Mozzarella, Queso Scamorza, Cebollas, Tomates cherry.",
                fr: "Tomate, Mozzarella, Fromage Scamorza, Oignons, Tomates cerises."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-mediterranea",
            nome: "Mediterranea",
            immagine: "images/Gusti particolari/mediterranea.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prataioli, Peperoni, Gorgonzola, Rucola, Pomodorini.",
                en: "Tomato Sauce, Mozzarella, Button mushrooms, Peppers, Gorgonzola, Arugula, Cherry tomatoes.",
                es: "Tomate, Mozzarella, Champiñones, Pimientos, Gorgonzola, Rúcula, Tomates cherry.",
                fr: "Tomate, Mozzarella, Champignons de Paris, Poivrons, Gorgonzola, Roquette, Tomates cerises."
            },
            prezzo: "11,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-contadina",
            nome: "Contadina",
            immagine: "images/Gusti particolari/contadina.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Antunna, Olive, Pomodorini, Cipolline Balsamiche.",
                en: "Tomato Sauce, Mozzarella, Antunna mushrooms, Olives, Cherry tomatoes, Balsamic onions.",
                es: "Tomate, Mozzarella, Setas Antunna, Aceitunas, Tomates cherry, Cebollitas balsámicas.",
                fr: "Tomate, Mozzarella, Champignons Antunna, Olives, Tomates cerises, Oignons balsamiques."
            },
            prezzo: "11,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-appetitosa",
            nome: "Appetitosa (Stagionale)",
            immagine: "images/Gusti particolari/appetitosa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Appara, Porcini, Gorgonzola, Pilarda (Pomodori secchi).",
                en: "Tomato Sauce, Mozzarella, Appara mushrooms, Porcini, Gorgonzola, Pilarda (sun-dried tomatoes) (Seasonal).",
                es: "Tomate, Mozzarella, Setas Appara, Porcini, Gorgonzola, Pilarda (tomates secos) (de temporada).",
                fr: "Tomate, Mozzarella, Champignons Appara, Cèpes, Gorgonzola, Pilarda (tomates séchées) (en saison)."
            },
            prezzo: "10,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-autunno",
            nome: "Autunno",
            immagine: "images/Gusti particolari/autunno.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia di Cinghiale, Chiodini, Crema di Formaggi.",
                en: "Tomato Sauce, Mozzarella, Wild boar sausage, Chiodini mushrooms, Cheese cream.",
                es: "Tomate, Mozzarella, Salchicha de jabalí, Setas Chiodini, Crema de queso.",
                fr: "Tomate, Mozzarella, Saucisse de sanglier, Pholiotes, Crème de fromage."
            },
            prezzo: "9,50",
            allergeni: "1,7,8",
            disponibile: true
        },
        {
            id: "gusti-inverno",
            nome: "Inverno",
            immagine: "images/Gusti particolari/inverno.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia Piccante, Porcini, Crema di Formaggi.",
                en: "Tomato Sauce, Mozzarella, Spicy sausage, Porcini mushrooms, Cheese cream.",
                es: "Tomate, Mozzarella, Salchicha picante, Hongos porcini, Crema de queso.",
                fr: "Tomate, Mozzarella, Saucisson piquant, Cèpes, Crème de fromage."
            },
            prezzo: "9,50",
            allergeni: "1,7,8",
            disponibile: true
        },
        {
            id: "gusti-suocera",
            nome: "Suocera",
            immagine: "images/Gusti particolari/suocera.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia Piccante, Cipolle, Peperoni, Gorgonzola.",
                en: "Tomato Sauce, Mozzarella, Spicy sausage, Onions, Peppers, Gorgonzola.",
                es: "Tomate, Mozzarella, Salchicha picante, Cebollas, Pimientos, Gorgonzola.",
                fr: "Tomate, Mozzarella, Saucisson piquant, Oignons, Poivrons, Gorgonzola."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-cacciatora",
            nome: "Cacciatora",
            immagine: "images/Gusti particolari/cacciatora.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prataioli, Salsiccia di Cinghiale, Cipolle, Olive.",
                en: "Tomato Sauce, Mozzarella, Button mushrooms, Wild boar sausage, Onions, Olives.",
                es: "Tomate, Mozzarella, Champiñones, Salchicha de jabalí, Cebollas, Aceitunas.",
                fr: "Tomate, Mozzarella, Champignons de Paris, Saucisse de sanglier, Oignons, Olives."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-mexicana",
            nome: "Mexicana",
            immagine: "images/Gusti particolari/mexicana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Fagioli, Cipolle, Salsiccia Piccante, Pomodorini.",
                en: "Tomato Sauce, Mozzarella, Beans, Onions, Spicy sausage, Cherry tomatoes.",
                es: "Tomate, Mozzarella, Frijoles, Cebollas, Salchicha picante, Tomates cherry.",
                fr: "Tomate, Mozzarella, Haricots, Oignons, Saucisson piquant, Tomates cerises."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-antunna",
            nome: "Antunna",
            immagine: "images/Gusti particolari/antunna.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Funghi Antunna, Pancetta.",
                en: "Tomato Sauce, Mozzarella, Antunna mushrooms, Bacon.",
                es: "Tomate, Mozzarella, Setas Antunna, Panceta.",
                fr: "Tomate, Mozzarella, Champignons Antunna, Pancetta."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-bersagliera",
            nome: "Bersagliera",
            immagine: "images/Gusti particolari/bersagliera.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Prataioli, Gorgonzola, Cipolle, Pilarda (Pomodori Secchi).",
                en: "Tomato Sauce, Mozzarella, Button mushrooms, Gorgonzola, Onions, Pilarda (Sun-dried tomatoes).",
                es: "Tomate, Mozzarella, Champiñones, Gorgonzola, Cebollas, Pilarda (Tomates secos).",
                fr: "Tomate, Mozzarella, Champignons de Paris, Gorgonzola, Oignons, Pilarda (Tomates séchées)."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-rustica",
            nome: "Rustica",
            immagine: "images/Gusti particolari/rustica.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Pancetta, Peperoni, Cipolle, Carciofi.",
                en: "Tomato Sauce, Mozzarella, Bacon, Peppers, Onions, Artichokes.",
                es: "Tomate, Mozzarella, Panceta, Pimientos, Cebollas, Alcachofas.",
                fr: "Tomate, Mozzarella, Pancetta, Poivrons, Oignons, Artichauts."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "gusti-campagnola",
            nome: "Campagnola",
            immagine: "images/Gusti particolari/campagnola.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Funghi Antunna, Pancetta, Pomodori.",
                en: "Tomato Sauce, Mozzarella, Antunna mushrooms, Bacon, Tomatoes.",
                es: "Tomate, Mozzarella, Setas Antunna, Panceta, Tomates.",
                fr: "Tomate, Mozzarella, Champignons Antunna, Pancetta, Tomates."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        }
    ],
    "pizze-mare": [
        {
            id: "mare-frutti-di-mare",
            nome: "Frutti di Mare",
            immagine: "images/Pizze del mare/fruttimare.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Insalata mista di Mare.",
                en: "Tomato Sauce, Mozzarella, Mixed seafood salad.",
                es: "Tomate, Mozzarella, Ensalada mixta de mariscos.",
                fr: "Tomate, Mozzarella, Salade de fruits de mer mixte."
            },
            prezzo: "9,50",
            allergeni: "1,2,4,7,14",
            disponibile: true
        },
        {
            id: "mare-tris-mare",
            nome: "Tris Mare",
            immagine: "images/Pizze del mare/tris_mare.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Cozze, Arselle, Insalata mista di Mare.",
                en: "Tomato Sauce, Mozzarella, Mussels, Clams, Mixed seafood salad.",
                es: "Tomate, Mozzarella, Mejillones, Almejas, Ensalada mixta de mariscos.",
                fr: "Tomate, Mozzarella, Moules, Palourdes, Salade de fruits de mer mixte."
            },
            prezzo: "14,00",
            allergeni: "1,2,4,7,14",
            disponibile: true
        },
        {
            id: "mare-sa-tentassione",
            nome: "Sa Tentassione (Stagionale)",
            immagine: "images/Pizze del mare/satentassione.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Asparagi, Carciofi, Appara, Bottarga a scaglie.",
                en: "Buffalo Mozzarella, Asparagus, Artichokes, Appara mushrooms, Bottarga flakes (Seasonal).",
                es: "Mozzarella de Búfala, Espárragos, Alcachofas, Setas Appara, Lascas de Bottarga (de temporada).",
                fr: "Mozzarella de Bufflonne, Asperges, Artichauts, Champignons Appara, Copeaux de Bottarga (en saison)."
            },
            prezzo: "15,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "mare-mari-e-monti",
            nome: "Mari e Monti",
            immagine: "images/Pizze del mare/mari_monti.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Salsiccia, Cipolle, Insalata mista di Mare.",
                en: "Tomato Sauce, Mozzarella, Sausage, Onions, Mixed seafood salad.",
                es: "Tomate, Mozzarella, Salchicha, Cebollas, Ensalada mixta de mariscos.",
                fr: "Tomate, Mozzarella, Saucisse, Oignons, Salade de fruits de mer mixte."
            },
            prezzo: "11,00",
            allergeni: "1,2,4,7,14",
            disponibile: true
        },
        {
            id: "mare-sfiziosa",
            nome: "Sfiziosa",
            immagine: "images/Pizze del mare/sfiziosa.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella di Bufala, Gamberetti, Funghi Porcini, Pomodori.",
                en: "Tomato Sauce, Buffalo Mozzarella, Shrimps, Porcini mushrooms, Tomatoes.",
                es: "Tomate, Mozzarella de Búfala, Gambas, Hongos porcini, Tomates.",
                fr: "Tomate, Mozzarella de Bufflonne, Crevettes, Cèpes, Tomates."
            },
            prezzo: "13,00",
            allergeni: "1,2,7",
            disponibile: true
        },
        {
            id: "mare-bella-sardegna",
            nome: "Bella Sardegna",
            immagine: "images/Pizze del mare/bella_sardegna.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella di Bufala, Aglio, Origano, Acciughe.",
                en: "Tomato Sauce, Buffalo Mozzarella, Garlic, Oregano, Anchovies.",
                es: "Tomate, Mozzarella de Búfala, Ajo, Orégano, Anchoas.",
                fr: "Tomate, Mozzarella de Bufflonne, Ail, Origan, Anchois."
            },
            prezzo: "11,00",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "mare-bottarga",
            nome: "Bottarga",
            immagine: "images/Pizze del mare/bottarga.jpg",
            descrizione: {
                it: "Mozzarella, Bottarga, Pomodorini.",
                en: "Mozzarella, Bottarga (cured fish roe), Cherry tomatoes.",
                es: "Mozzarella, Bottarga, Tomates cherry.",
                fr: "Mozzarella, Bottarga (poutargue), Tomates cerises."
            },
            prezzo: "12,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "mare-sandalion",
            nome: "Sandalion",
            immagine: "images/Pizze del mare/sandalion.jpg",
            descrizione: {
                it: "Mozzarella, Bottarga, Carciofi, Zucchine grigliate.",
                en: "Mozzarella, Bottarga (cured fish roe), Artichokes, Grilled zucchini.",
                es: "Mozzarella, Bottarga, Alcachofas, Calabacines a la parrilla.",
                fr: "Mozzarella, Bottarga (poutargue), Artichauts, Courgettes grillées."
            },
            prezzo: "14,00",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "mare-licanzia",
            nome: "Licanzia",
            immagine: "images/Pizze del mare/licanzia.jpg",
            descrizione: {
                it: "Mozzarella, Crema di Asparagi, Gamberetti, Gorgo, Pilarda.",
                en: "Mozzarella, Asparagus cream, Shrimps, Gorgonzola, Pilarda (sun-dried tomatoes).",
                es: "Mozzarella, Crema de espárragos, Gambas, Gorgonzola, Pilarda (tomates secos).",
                fr: "Mozzarella, Crème d'asperges, Crevettes, Gorgonzola, Pilarda (tomates séchées)."
            },
            prezzo: "12,00",
            allergeni: "1,2,7",
            disponibile: true
        },
        {
            id: "mare-super-bottarga",
            nome: "Super Bottarga",
            immagine: "images/Pizze del mare/super_bottarga.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Bottarga a scaglie.",
                en: "Tomato Sauce, Mozzarella, Bottarga flakes.",
                es: "Tomate, Mozzarella, Lascas de Bottarga.",
                fr: "Tomate, Mozzarella, Copeaux de Bottarga."
            },
            prezzo: "11,50",
            allergeni: "1,4,7",
            disponibile: true
        },
        {
            id: "mare-brezza-marina",
            nome: "Brezza Marina",
            immagine: "images/Pizze del mare/brezza_marina.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Polpa di Ricci Freschi, Bottarga a scaglie, Pomodorini, Basilico.",
                en: "Buffalo Mozzarella, Fresh sea urchin pulp, Bottarga flakes, Cherry tomatoes, Basil.",
                es: "Mozzarella de Búfala, Pulpa de erizo de mar fresca, Lascas de Bottarga, Tomates cherry, Albahaca.",
                fr: "Mozzarella de Bufflonne, Pulpe d'oursin frais, Copeaux de Bottarga, Tomates cerises, Basilic."
            },
            prezzo: "18,00",
            allergeni: "1,4,7,14",
            disponibile: true
        }
    ],
    "pizze-vegetariane": [
        {
            id: "vegetariana-parmigiana",
            nome: "Parmigiana",
            immagine: "images/Pizze vegetariane/parmigiana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Melanzane grigliate, Grana.",
                en: "Tomato Sauce, Mozzarella, Grilled eggplants, Grana cheese.",
                es: "Tomate, Mozzarella, Berenjenas a la parrilla, Queso Grana.",
                fr: "Tomate, Mozzarella, Aubergines grillées, Fromage Grana."
            },
            prezzo: "7,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-vegetariana",
            nome: "Vegetariana",
            immagine: "images/Pizze vegetariane/vegetariana.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Melanzane, Peperoni, Zucchine, Radicchio.",
                en: "Tomato Sauce, Mozzarella, Eggplants, Peppers, Zucchini, Radicchio.",
                es: "Tomate, Mozzarella, Berenjenas, Pimientos, Calabacines, Radicchio.",
                fr: "Tomate, Mozzarella, Aubergines, Poivrons, Courgettes, Radicchio."
            },
            prezzo: "9,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-griglie",
            nome: "Grigliè",
            immagine: "images/Pizze vegetariane/grigliè.jpg",
            descrizione: {
                it: "Pomodoro, Mozzarella, Melanzane, Peperoni, Zucchine grigliate.",
                en: "Tomato Sauce, Mozzarella, Eggplants, Peppers, Grilled zucchini.",
                es: "Tomate, Mozzarella, Berenjenas, Pimientos, Calabacines a la parrilla.",
                fr: "Tomate, Mozzarella, Aubergines, Poivrons, Courgettes grillées."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-poker-di-verdure",
            nome: "Poker di Verdure",
            immagine: "images/Pizze vegetariane/poker_verdure.jpg",
            descrizione: {
                it: "Mozzarella, Friarielli, Rucola, Radicchio, Pomodorini.",
                en: "Mozzarella, Friarielli (broccoli rabe), Arugula, Radicchio, Cherry tomatoes.",
                es: "Mozzarella, Friarielli, Rúcula, Radicchio, Tomates cherry.",
                fr: "Mozzarella, Friarielli (brocoli-rave), Roquette, Radicchio, Tomates cerises."
            },
            prezzo: "10,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-italia",
            nome: "Italia",
            immagine: "images/Pizze vegetariane/italia.jpg",
            descrizione: {
                it: "Mozzarella, Pomodori, Rucola, Grana.",
                en: "Mozzarella, Tomatoes, Arugula, Grana cheese.",
                es: "Mozzarella, Tomates, Rúcula, Queso Grana.",
                fr: "Mozzarella, Tomates, Roquette, Fromage Grana."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-ptz",
            nome: "P.T.Z.",
            immagine: "images/Pizze vegetariane/ptz.jpg",
            descrizione: {
                it: "Mozzarella di Bufala, Friarielli, Pomodorini.",
                en: "Buffalo Mozzarella, Friarielli (broccoli rabe), Cherry tomatoes.",
                es: "Mozzarella de Búfala, Friarielli, Tomates cherry.",
                fr: "Mozzarella de Bufflonne, Friarielli (brocoli-rave), Tomates cerises."
            },
            prezzo: "11,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-della-nonna",
            nome: "Della Nonna",
            immagine: "images/Pizze vegetariane/della_nonna.jpg",
            descrizione: {
                it: "Mozzarella, Melanzane, Pomodorini, Rucola.",
                en: "Mozzarella, Eggplants, Cherry tomatoes, Arugula.",
                es: "Mozzarella, Berenjenas, Tomates cherry, Rúcula.",
                fr: "Mozzarella, Aubergines, Tomates cerises, Roquette."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-italia-2",
            nome: "Italia 2",
            immagine: "images/Pizze vegetariane/italia2.jpg",
            descrizione: {
                it: "Doppia Mozzarella, Rucola, Pilarda (Pomodori secchi).",
                en: "Double Mozzarella, Arugula, Pilarda (sun-dried tomatoes).",
                es: "Doble Mozzarella, Rúcula, Pilarda (tomates secos).",
                fr: "Double Mozzarella, Roquette, Pilarda (tomates séchées)."
            },
            prezzo: "8,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-primavera",
            nome: "Primavera",
            immagine: "images/Pizze vegetariane/primavera.jpg",
            descrizione: {
                it: "Mozzarella, Rucola, Radicchio, Grana.",
                en: "Mozzarella, Arugula, Radicchio, Grana cheese.",
                es: "Mozzarella, Rúcula, Radicchio, Queso Grana.",
                fr: "Mozzarella, Roquette, Radicchio, Fromage Grana."
            },
            prezzo: "9,00",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-trevigiana",
            nome: "Trevigiana",
            immagine: "images/Pizze vegetariane/trevigiana.jpg",
            descrizione: {
                it: "Mozzarella, Zucchine, Pomodorini, Radicchio.",
                en: "Mozzarella, Zucchini, Cherry tomatoes, Radicchio.",
                es: "Mozzarella, Calabacines, Tomates cherry, Radicchio.",
                fr: "Mozzarella, Courgettes, Tomates cerises, Radicchio."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        },
        {
            id: "vegetariana-estate",
            nome: "Estate",
            immagine: "images/Pizze vegetariane/estate.jpg",
            descrizione: {
                it: "Mozzarella, Cipolla, Pomodori, Rucola, Zucchine.",
                en: "Mozzarella, Onion, Tomatoes, Arugula, Zucchini.",
                es: "Mozzarella, Cebolla, Tomates, Rúcula, Calabacines.",
                fr: "Mozzarella, Oignon, Tomates, Roquette, Courgettes."
            },
            prezzo: "8,50",
            allergeni: "1,7",
            disponibile: true
        }
    ],
    "birre": [
        {
            id: "birra-ichnusa",
            nome: "Ichnusa",
            immagine: "images/Bevande/ichnusa.jpg",
            descrizione: {
                it: "Bottiglia da 66 cl.",
                en: "66 cl bottle.",
                es: "Botella de 66 cl.",
                fr: "Bouteille de 66 cl."
            },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "birra-ichnusa-non-filtrata",
            nome: "Ichnusa non filtrata",
            immagine: "images/Bevande/ichnusa_nonfiltrata.jpg",
            descrizione: {
                it: "Bottiglia da 33 cl.",
                en: "33 cl bottle.",
                es: "Botella de 33 cl.",
                fr: "Bouteille de 33 cl."
            },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "birra-becks",
            nome: "Beck's",
            immagine: "images/Bevande/becks.jpg",
            descrizione: {
                it: "Bottiglia da 33 cl.",
                en: "33 cl bottle.",
                es: "Botella de 33 cl.",
                fr: "Bouteille de 33 cl."
            },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "birra-heineken",
            nome: "Heineken",
            immagine: "images/Bevande/heineken.jpg",
            descrizione: {
                it: "Bottiglia da 33 cl.",
                en: "33 cl bottle.",
                es: "Botella de 33 cl.",
                fr: "Bouteille de 33 cl."
            },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "birra-senza-glutine",
            nome: "Birra senza glutine",
            immagine: "images/Bevande/birranoglu.jpg",
            descrizione: {
                it: "Daura o Peroni, 33 cl.",
                en: "Daura or Peroni (Gluten Free), 33 cl.",
                es: "Daura o Peroni (Sin Gluten), 33 cl.",
                fr: "Daura ou Peroni (Sans Gluten), 33 cl."
            },
            prezzo: "3,50",
            allergeni: "1",
            disponibile: true
        }
    ],
    "bibite": [
        {
            id: "bibita-acqua-naturale",
            nome: "Acqua Naturale",
            immagine: "images/Bevande/acqua.jpg",
            descrizione: {
                it: "Acqua microfiltrata. Bottiglia da 0,75 l.",
                en: "Purified. 0.75 l bottle",
                es: "Purificada. Botella de 0,75 l",
                fr: "Purifiée. Bouteille de 0,75 l"
            },
            prezzo: "1,30",
            allergeni: "",
            disponibile: true
        },
        {
            id: "bibita-acqua-frizzante",
            nome: "Acqua Frizzante",
            immagine: "images/Bevande/smeraldina.jpg",
            descrizione: {
                it: "Bottiglia da 0,5 l",
                en: "0.5 l bottle",
                es: "Botella de 0,5 l",
                fr: "Bouteille de 0,5 l"
            },
            prezzo: "1,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "bibita-coca-cola",
            nome: "Coca Cola",
            immagine: "images/Bevande/cocacola.jpg",
            descrizione: {
                it: "Bottiglia in vetro da 33 cl.",
                en: "33 cl glass bottle.",
                es: "Botella de vidrio de 33 cl.",
                fr: "Bouteille en verre de 33 cl."
            },
            prezzo: "2,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "bibita-sprite",
            nome: "Sprite",
            immagine: "images/Bevande/sprite.jpg",
            descrizione: {
                it: "Bottiglia in vetro da 33 cl.",
                en: "33 cl glass bottle.",
                es: "Botella de vidrio de 33 cl.",
                fr: "Bouteille en verre de 33 cl."
            },
            prezzo: "2,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "bibita-fanta",
            nome: "Fanta",
            immagine: "images/Bevande/fanta.jpg",
            descrizione: {
                it: "Bottiglia in vetro da 33 cl.",
                en: "33 cl glass bottle.",
                es: "Botella de vidrio de 33 cl.",
                fr: "Bouteille en verre de 33 cl."
            },
            prezzo: "2,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "bibita-the-freddo",
            nome: "Thè Freddo",
            immagine: "images/Bevande/the.jpg",
            descrizione: {
                it: "Thè alla Pesca, Bottiglia in vetro da 33 cl.",
                en: "Peach Iced Tea, 33 cl glass bottle.",
                es: "Té helado de melocotón, botella de vidrio de 33 cl.",
                fr: "Thé glacé à la pêche, bouteille en verre de 33 cl."
            },
            prezzo: "3,00",
            allergeni: "",
            disponibile: true
        }
    ],
    "dolci": [
        {
            id: "dolce-tiramisu",
            nome: "Tiramisu della casa",
            immagine: "images/Dolci/tiramisu.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "5,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-croccante-pistacchio",
            nome: "Croccante Pistacchio",
            immagine: "images/Dolci/croccante_pistacchio.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,20",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-croccante-amarena",
            nome: "Croccante Amarena",
            immagine: "images/Dolci/croccante_amarena.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,20",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-crema-caffe",
            nome: "Crema Caffè",
            immagine: "images/Dolci/crema_caffe.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-sorbetto-limone",
            nome: "Sorbetto al limone",
            immagine: "images/Dolci/sorbetto.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "3,50",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-stracciatella",
            nome: "Gelato Stracciatella",
            immagine: "images/Dolci/stracciatella.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-cocco",
            nome: "Gelato al Cocco",
            immagine: "images/Dolci/cocco.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-panna-amarena",
            nome: "Gelato Panna e Amarena",
            immagine: "images/Dolci/panna_amarena.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-pistacchio",
            nome: "Gelato al Pistacchio",
            immagine: "images/Dolci/pistacchio.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-mango",
            nome: "Gelato al Mango",
            immagine: "images/Dolci/mango.jpg",
            descrizione: { it: "", en: "", es: "", fr: "" },
            prezzo: "6,00",
            allergeni: "",
            disponibile: true
        },
        {
            id: "dolce-gelato-cioccolato-bianco",
            nome: "Gelato al Cioccolato Bianco",
            immagine: "images/Dolci/cioccolato_bianco.jpg",
            descrizione: {
                it: "Gelato da bere",
                en: "Drinkable ice cream",
                es: "Helado para beber",
                fr: "Glace à boire"
            },
            prezzo: "5,50",
            allergeni: "",
            disponibile: true
        }
    ]
};