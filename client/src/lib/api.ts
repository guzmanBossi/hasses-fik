
function getFoodMenu(): { image: string, title: string, shortDescription: string, pageUrl: string, anchor: string }[] {

  const foodMenu = [
    {
      image: "./img/mat/smorrebrod1.jpg",
      title: "Smörrebröd",
      shortDescription: "En hyllning till det danska köket. Härliga smörrebröd med olika pålägg.",
      longDescription: "Smörrebröd är en dansk specialitet som består av en skiva rågbröd med olika pålägg. Det kan vara allt från sill och räkor till leverpastej och skinka. Vi serverar ett flertal olika smörrebröd.",
      pageUrl: "food/smorrebrod",
      anchor: "smorrebrod"
    },
    {
      image: "./img/mat/gulasch1.jpg",
      title: "Soppor",
      shortDescription: "Dagens soppa, antingen en mustig gulasch eller en härlig fransk löksoppa.",
      longDescription: "Våra soppor är gjorda på färska råvaror och serveras med nybakat bröd. Vi har alltid en vegetarisk soppa och en köttsoppa att välja mellan.",
      pageUrl: "food/soppor",
      anchor: "soppor"
    },
    {
      image: "./img/mat/bakverk1.jpg",
      title: "Bakverk / Efterrätter",
      shortDescription: "Bullar, kakor och tårtor. Allt bakat med kärlek. Våra kakor levereras av Princess bageriet.",
      longDescription: "Bullar, kakor, croissants, tårtor, pajer m.m m.m. Vi samarbetar med bageriet på hörnet och får leveranser varje morgon. Allt är bakat på plats och med passion för smak ock konsistens.",
      pageUrl: "food/bakverk",
      anchor: "bakverk"
    },
    {
      image: "./img/mat/dricka1.jpg",
      title: "Att dricka",
      shortDescription: "Öl, vin, kaffe, te, vatten, saft, juice, mjölk, you name it!",
      longDescription: "Vi har ett brett utbud av drycker. Vi har allt från kaffe och te till öl och vin. Vi har även alkoholfria alternativ för de som inte vill dricka alkohol. Vi har även ett brett utbud av läsk och juice.",
      pageUrl: "food/smorrebrod",
      anchor: "dricka"
    },

  ];

  return foodMenu;
}


export { getFoodMenu};
