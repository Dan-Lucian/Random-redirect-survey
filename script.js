const webpages = [];

// pink + features
webpages.push("https://docs.google.com/forms/d/e/1FAIpQLSfDV2l77F8yMWIfx0DSV8jrUh3cdg2YgfNLV8nui_JvYP12Pg/viewform?usp=sf_link");

// pink + no features
webpages.push("https://docs.google.com/forms/d/e/1FAIpQLSceo5AMgrGK3XVA4_HokczyBVJ57jn3eoXDprQW5h2TcAkuHg/viewform?usp=sf_link");

// blue + features
webpages.push("https://docs.google.com/forms/d/e/1FAIpQLSf8Hr6rwbtuu6dMWKbul8V9uICoM1cYqLpF6UzoE8KXvFLQ9A/viewform?usp=sf_link");

// blue + no features
webpages.push("https://docs.google.com/forms/d/e/1FAIpQLSfPMJ3XnDip4sR8FPNH-JdPa1toJfsbyZJhmkJV6bAbRxP2pw/viewform?usp=sf_link");


const pageRandom = getRandomInt(0, webpages.length - 1);
window.location.replace(webpages[pageRandom])

function getRandomInt (min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};