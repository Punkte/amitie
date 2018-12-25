let answers = [
    [
        // id:  1
        { content: "Yes, je t'écoute", choice: "Serein", next: 1  },
        { content: "C'est grave ?", choice: "Méfiant", next: 2 }
    ],
    [
        // id: 1
        { content: "Je t'écoute t'inquiète", choice: "Rester calme", next: 2 },
        { content: "Ca concerne quoi ?", choice: "Demander de quoi il s'agit", next: 3  }
    ],
    [
        // id: 2
        { content: "2 ans environ ?", choice: "Répondre sincèrement", next: 4 },
        { content: "Vas y arrête tes conneries et vas direct au bout!!", choice: "Paniquer", next: 4  }
    ],
    [
        // id: 3
        { content: "C'est grave ?", choice: "Rester calme", next: 2 },
        { content: "Rep ou j'me tue", choice: "Paniquer", next: 5 }
    ],
    [
        // id: 4
        { content: "Désolé j'ai paniquer", choice: "S'excuser", next: 2 }
    ],
    [
        // id: 5
        { content: "Bon vas y raconte", choice: "Rester serieux", next: 2 },
        { content: "Mdr sinon il fait beau non ?", choice: "Faire le mec qui a rien vu", next: 2 }
    ],
]
export default answers 