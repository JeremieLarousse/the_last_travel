const destinations = [
    {
        id: 1,
        name: "La porte de l'Enfer, Turkmenistan",
        image: "/assets/the-last-travel-image-porte-de-l-enfer.jpg",
        tagline: "L’odeur âcre de la combustion de soufre ne vous laissera pas indifférent...",
        lethal: "🍗🚪⚫🔥💀",
        journey_date: "Le jour de la mort d'Elvis Presley",
        description: [
            "Pour notre série offre d’hiver, La Porte de l'Enfer est un champ de gaz naturel situé à Derweze (également orthographié Darvaza, ce qui signifie « porte »), dans la province d'Ahal au Turkménistan.",
            "Votre guide préféré vous donnera la possibilité d’approcher l’entrée de la porte. Peut-être aurez-vous la chance de contempler l’incendie éternel qui y règne, si toutefois la température insupportable ne vous a pas ôté la vie avant."
        ]
    },
    {
        id: 2,
        name: "Iakoutsk",
        image: "/assets/the-last-travel-image-iakoutsk.jpg",
        tagline: "C’est bon pour le teint",
        lethal: "⛸️☃️❄️🥶💀",
        journey_date: "Le jour de la mort de Igor Bogdanoff",
        description: {
            paragraph_1: "Iakoutsk, perdue aux confins de la taïga sibérienne, située à 5 000 kilomètres de Moscou, cette ville fondée en 1632 par les Cosaques impose à ses habitants des conditions de vie extrêmes.",
            paragraph_2: "Nulle part ailleurs sur la planète, des humains ne sont soumis à des changements de température aussi importants. En hiver, les températures descendent régulièrement à -40°C (record de froid -64°C), et en été, elles dépassent souvent les 30°C, créant un record d’amplitude thermique.",
            paragraph_3: "Avec notre édition hiver à Iakoutsk, pensez à amener votre doudoune. Vous pourriez bien gagner quelques minutes de survie supplémentaire"
        }
    },
    {
        id: 3,
        name: "Le lac Natron, Tanzanie",
        image: "/assets/the-last-travel-image-lac-natron.jpg",
        tagline: "Méduse est passé par là",
        lethal: "⁉️🧫🧫🧫💀",
        journey_date: "Le jour de la mort de Gilles de Rais",
        description: {
            paragraph_1: "Le lac Natron est un lac de soude, salé, endoérique d'origine tectonique dont la superficie variable le cantonne dans le nord de la Tanzanie ou lui fait traverser épisodiquement la frontière avec le Kenya.",
            paragraph_2: "Pour cette expérience particulière, vous vous rendrez en Tanzanie sans gourde. Pourtant, les scientifiques le savent : une gorgée de l'eau de ce lac, et c'est la pétrification d'assurée ! Vous retiendrez-vous de vous hydrater durant toute la durée du périple ?"
        }
    },
    {
        id: 4,
        name: "Le triangle des Bermudes",
        image: "/assets/the-last-travel-image-triangle-des-bermudes.jpg",
        tagline: "La géométrie pour les nuls",
        lethal: "🧭✈️🤨😨💀",
        journey_date: "Le jour de la mort de Saint-Exupéry",
        description: {
            paragraph_1: "N'apportez pas vos fournitures d'école, oubliez rapporteur, équerre, compas, règle. Rapportez une boussole jsute pour avoir le loisir de la voir se suicider. Les parachutes ne sont pas fournis",
            paragraph_2: "Vous pouvez tout amener le vôtre, mais vous vous gâcheriez le plaisir du voyage."
        }
    },
    {
        id: 5,
        name: "Queimada Grande",
        image: "/assets/the-last-travel-image-queimada-grande.jpg",
        tagline: "Vous ne connaissez pas les Jararaca ? Vous ne les connaîtrez pas longtemps.",
        lethal: "🏝️😃🐍😨💀",
        journey_date: "Le jour de la mort de Michel Drucker",
        description: {
            paragraph_1: "Vous ne connaissez pas les Jararaca-Ilhoa, et c’est bien normal. Autrement appelées les “vipères Fer de la lance dorée”, cette espèce de vipère n’est pas très répandue sur la planète. De fait, on la retrouve exclusivement et en quantité phénoménale sur l’île de Queimada-Ilhoa.",
            paragraph_2: "Durant votre séjour sur l’île, vous pourrez explorer l’un des espaces boisés les plus hostiles de la planète. Un conseil : attention où vous mettez les pieds. Peut-être que la proximité avec l’océan vous donne une envie de nager. Aussi, nous vous indiquons généreusement l’avertissement suivant : les serpents nagent aussi."
        }
    },
    {
        id: 6,
        name: "Agbogloshie, Ghana",
        image: "/assets/the-last-travel-image-agbogloshie.jpg",
        tagline: "L’odeur âcre de la combustion de soufre ne vous laissera pas indifférent...",
        lethal: "🗑️🚮💥😨💀",
        journey_date: "Le jour de la mort de John Fitzgerald Kennedy",
        description: {
            paragraph_1: "Une fois parvenus dans la plus grande décharge à ciel ouverte de la planète, vous prendrez conscience de votre empreinte carbone, ainsi que de l’impact de votre présence au monde sur la vie de femmes, d’hommes et surtout d’enfants.",
            paragraph_2: "Dans ce parcours alternant entre mélancolie et dépression, sûrement aurez-vous envie d’en finir avec votre propre existence."
        }
    },
    {
        id: 7,
        name: "Dzerzhinsk, Russie",
        image: "/assets/the-last-travel-image-dzerzhinsk.jpg",
        tagline: "La chasse aux champignons est ouverte",
        lethal: "⚛️☣️⚰️☢️💀",
        journey_date: "Le jour de l'accident de Chernobyl (le 26 avril 1986)",
        description: {
            paragraph_1: "Prenez une grande inspiration, votre voyage est organisé pour que vous puissiez profiter au maximum de cette atmosphère riche en atome.",
            paragraph_2: "Votre glande thyroïde vous remerciera pour les deux à trois prochaines années. Le masque FFP1 est fournie juste pour que vous puissiez finir le parcours touristique."
        }
    },
    {
        id: 8,
        name: "Hotan, Chine",
        image: "/assets/the-last-travel-image-hotan.jpg",
        tagline: "Le plus grand marché climatique de Chine",
        lethal: "😤😤😤😤💀",
        journey_date: "Le jour du décès de Mao Zedong(9 septembre 1976)",
        description: {
            paragraph_1: "Pour soigner votre asthme et aérer vos poumons, la ventoline est complètement dépassée.",
            paragraph_2: "Préférez lui l'air, certe chargé, mais non moins vivifiant de cette cité chinoise de caractère.  "
        }
    },
    {
        id: 9,
        name: "San Pedro Sula, Honduras",
        image: "/assets/the-last-travel-image-san-pedro-sula.jpg",
        tagline: "L'homicide c'est la vie",
        lethal: "🔫🗡️🥷⚰️💀",
        journey_date: "Date du dernier meurtre de Jack The Ripper(13 février 1891)",
        description: {
            paragraph_1: "Organisez-vous un périple dans les rues si pittoresques de cette cité où l'homicide est devenu un sport national",
            paragraph_2: "Peut-être aurez-vous la chance d'assister à l'un d'eux. Les armes sont acceptées, voir conseillées, pour au loisir vous défendre ou participer à la montée de la notoriété municipale. "
        }
    },
    {
        id: 10,
        name: "Aokigahara, Japon",
        image: "/assets/the-last-travel-image-aokigahara.jpg",
        tagline: "Chaise et corde pour le prix d’un !",
        lethal: "🌲🪢🌳🪢💀",
        journey_date: "date de la première pendaison(1872)",
        description: {
            paragraph_1: "Oubliez votre boussole et votre téléphone. Ils ne vous serviront pas ici. Ils ne vous serviront plus de toute façon une fois, entré en ces lieux. La fameuse forêt des pendus, situé non loin du Mont Fuji, vous ravira par son ambiance, son charme, ses trous dissimulés et ses arbres centenaires, dont les branches robustes ont maintes fois prouvées leurs efficacités.",
            paragraph_2: "Aucun moyen de communication, ni de localisation n’est possible ici. Préparez-vous donc pour votre dernier voyage. /!\ Corde fournie avec le contrat d'assurance aucun risque."


        }
    }
];

const characters = [
    {
        id: 1,
        name: "Leviathan Z. Alcott",
        image: "/assets/the-last-travel-image-agent-1.jpeg",
        age: 239,
        sign: "Je me balade toujours avec ma maison sur le dos.",
        beliefs: "Croit en la force des points de suspensions...",
        degree: "Zombie à l'université de Baltimore.",
        speciality: "Je vous laisse deviner..."
    },
    {
        id: 2,
        name: "Sheridan Colt",
        image: "/assets/the-last-travel-image-agent-2.jpeg",
        age: 5,
        sign: "Bah oui !",
        beliefs: "Jediisme ou le code spirituel des jedis.",
        degree: "Collage de gommettes, BAFA",
        speciality: "Je travaille pas ici, je veux que papa et maman viennent me chercher."
    },
    {
        id: 3,
        name: "Draven McDaniel",
        image: "/assets/the-last-travel-image-agent-3.jpeg",
        age: 542,
        sign: "Je ne jure que par le pâté fait maison.",
        beliefs: "Dudéisme (ne veut pas trop bosser, préfère boire et dormir quand il veut).",
        degree: "Gestionnaire de l'industrie du bowling.",
        speciality: "Je vous préparerai un horrible voyage aux petits oignons."
    },
    {
        id: 4,
        name: "Eleanore Lilith Graeme",
        image: "/assets/the-last-travel-image-agent-4.jpeg",
        age: 666,
        sign: "J’aime particulièrement les licornes.",
        beliefs: "Pastafarisme ou la croyance en le Monstre Spaghetti Volant.",
        degree: "Secrétaire médicale, permis avion et missiles.",
        speciality: "N’ayez aucun doute qu’avec moi et ma poisse légendaire, votre voyage se passera mal."
    },
    {
        id: 5,
        name: "Jezebel I. Zane",
        image: "/assets/the-last-travel-image-agent-5.jpeg",
        age: 126,
        sign: "J’ai une sainte horreur des bâtiments penchés. ",
        beliefs: "Pixel Perfect.",
        degree: "Contrôleuse qualité des dictionnaires et glossaires portugais.",
        speciality: "Avec moi, votre voyage filera droit, en enfer."
    }
];

export { destinations, characters };