const CONFIG = {
  startDate: "2022-01-30T00:00:00-03:00",
  starEvent: {
    date: "2021-12-31T21:00:00-03:00",
    latitude: -17.5694,
    longitude: -52.5511,
  },
  rouletteOptions: [
    { text: "Jantar romântico 🍷", color: "#EC407A" },
    { text: "Maratona de filmes 🎬", color: "#42A5F5" },
    { text: "Passeio no parque 🌳", color: "#EC407A" },
    { text: "Cozinhar juntos 👩‍🍳", color: "#42A5F5" },
    { text: "Dia de spa 💆", color: "#EC407A" },
    { text: "Viagem surpresa ✈️", color: "#42A5F5" },
    { text: "Piquenique 🧂", color: "#EC407A" },
    { text: "Dançar juntos 💃", color: "#42A5F5" },
  ],
};

const PLACES = [
  {
    date: "31/12/2021",
    title: "Mineiros",
    text: "Onde tudo começou. Nossa cidade, nosso lar, nosso começo de história.",
    polaroid: "Nosso cantinho no mundo 🏠",
    image: "images/place-mineiros.jpg",
  },
  {
    date: "30/01/2022",
    title: "Jataí",
    text: "Onde eu pedi pra ser seu. O lugar do nosso sim mais importante até então.",
    polaroid: "Onde disse sim 💍",
    image: "images/place-jatai.jpg",
  },
  {
    date: "2025",
    title: "Goiânia",
    text: "Nosso pré-wedding com o @Nathansantosfotografo. Registrando nosso amor pra sempre.",
    polaroid: "Pré-wedding 📸",
    image: "images/place-goiania.jpg",
  },
  {
    date: "19-22/09/2024",
    title: "São Paulo",
    text: "Nossa primeira grande viagem juntos. A cidade grande ficou pequena pro nosso amor.",
    polaroid: "Aventura na cidade 🏙️",
    image: "images/place-sp.jpg",
  },
  {
    date: "Sempre",
    title: "Perolândia",
    text: "A cidade da minha noiva. Cada visita é voltar pra casa, porque onde você está é meu lar.",
    polaroid: "Terra da Anelise ❤️",
    image: "images/place-mineiros.jpg",
  },
  {
    date: "Sempre",
    title: "Caiapônia",
    text: "Visitar a família — porque amar você é amar tudo que faz parte de você.",
    polaroid: "Família é tudo 💕",
    image: "images/place-mineiros.jpg",
  },
];

const STAR_CATALOG = [
  { name: "Sirius", ra: 6.7525, dec: -16.7161, mag: -1.46 },
  { name: "Canopus", ra: 6.3992, dec: -52.6957, mag: -0.74 },
  { name: "Arcturus", ra: 14.261, dec: 19.1825, mag: -0.05 },
  { name: "Rigil Kentaurus", ra: 14.6601, dec: -60.8339, mag: -0.27 },
  { name: "Vega", ra: 18.6156, dec: 38.7837, mag: 0.03 },
  { name: "Capella", ra: 5.2782, dec: 45.998, mag: 0.08 },
  { name: "Rigel", ra: 5.2423, dec: -8.2016, mag: 0.13 },
  { name: "Procyon", ra: 7.655, dec: 5.225, mag: 0.34 },
  { name: "Achernar", ra: 1.6286, dec: -57.2368, mag: 0.46 },
  { name: "Betelgeuse", ra: 5.9195, dec: 7.4071, mag: 0.5 },
  { name: "Hadar", ra: 14.0637, dec: -60.373, mag: 0.61 },
  { name: "Acrux", ra: 12.4433, dec: -63.0991, mag: 0.76 },
  { name: "Altair", ra: 19.8464, dec: 8.8683, mag: 0.77 },
  { name: "Aldebaran", ra: 4.5987, dec: 16.5093, mag: 0.87 },
  { name: "Spica", ra: 13.4199, dec: -11.1614, mag: 0.98 },
  { name: "Antares", ra: 16.4901, dec: -26.432, mag: 1.06 },
  { name: "Pollux", ra: 7.7553, dec: 28.0262, mag: 1.14 },
  { name: "Fomalhaut", ra: 22.9608, dec: -29.6222, mag: 1.16 },
  { name: "Mimosa", ra: 12.7953, dec: -59.6888, mag: 1.25 },
  { name: "Regulus", ra: 10.1395, dec: 11.9672, mag: 1.35 },
  { name: "Adhara", ra: 6.9771, dec: -28.9721, mag: 1.5 },
  { name: "Shaula", ra: 17.5601, dec: -37.1038, mag: 1.62 },
  { name: "Castor", ra: 7.5767, dec: 31.8883, mag: 1.58 },
  { name: "Gacrux", ra: 12.5194, dec: -57.1132, mag: 1.63 },
  { name: "Bellatrix", ra: 5.4189, dec: 6.3497, mag: 1.64 },
  { name: "Elnath", ra: 5.4382, dec: 28.6075, mag: 1.65 },
  { name: "Miaplacidus", ra: 9.22, dec: -69.7172, mag: 1.67 },
  { name: "Alnilam", ra: 5.6036, dec: -1.2019, mag: 1.69 },
  { name: "Alnair", ra: 22.1372, dec: -46.9609, mag: 1.74 },
  { name: "Alnitak", ra: 5.6793, dec: -1.9426, mag: 1.74 },
  { name: "Alioth", ra: 12.9005, dec: 55.9598, mag: 1.76 },
  { name: "Mirfak", ra: 3.4054, dec: 49.8612, mag: 1.79 },
  { name: "Wezen", ra: 7.1399, dec: -26.3932, mag: 1.83 },
  { name: "Sargas", ra: 17.6219, dec: -42.9978, mag: 1.86 },
  { name: "Kaus Australis", ra: 18.4029, dec: -34.3846, mag: 1.85 },
  { name: "Avior", ra: 8.3752, dec: -59.5095, mag: 1.86 },
  { name: "Menkalinan", ra: 5.9921, dec: 44.9474, mag: 1.9 },
  { name: "Atria", ra: 16.8111, dec: -69.0277, mag: 1.91 },
  { name: "Alhena", ra: 6.6285, dec: 16.3993, mag: 1.93 },
  { name: "Peacock", ra: 20.4275, dec: -56.7351, mag: 1.94 },
  { name: "Mirzam", ra: 6.3783, dec: -17.9559, mag: 1.98 },
  { name: "Alphard", ra: 9.4598, dec: -8.6586, mag: 1.99 },
  { name: "Hamal", ra: 2.1195, dec: 23.4624, mag: 2.0 },
  { name: "Polaris", ra: 2.5303, dec: 89.2641, mag: 1.98 },
  { name: "Diphda", ra: 0.7265, dec: -17.9866, mag: 2.02 },
  { name: "Nunki", ra: 18.9211, dec: -26.2967, mag: 2.05 },
  { name: "Menkent", ra: 14.1114, dec: -36.37, mag: 2.06 },
  { name: "Mirach", ra: 1.1622, dec: 35.6206, mag: 2.07 },
  { name: "Alpheratz", ra: 0.1398, dec: 29.0904, mag: 2.07 },
  { name: "Rasalhague", ra: 17.5822, dec: 12.5606, mag: 2.08 },
  { name: "Kochab", ra: 14.8451, dec: 74.1555, mag: 2.08 },
  { name: "Saiph", ra: 5.7959, dec: -9.6696, mag: 2.09 },
  { name: "Deneb", ra: 20.6905, dec: 45.2803, mag: 1.25 },
  { name: "Markab", ra: 23.0793, dec: 15.2053, mag: 2.49 },
  { name: "Mintaka", ra: 5.5334, dec: -0.2991, mag: 2.23 },
  { name: "Meissa", ra: 5.5856, dec: 9.9342, mag: 3.39 },
];

const CONSTELLATION_LINES = [
  ["Betelgeuse", "Bellatrix"],
  ["Bellatrix", "Mintaka"],
  ["Mintaka", "Alnilam"],
  ["Alnilam", "Alnitak"],
  ["Alnitak", "Saiph"],
  ["Saiph", "Rigel"],
  ["Rigel", "Mintaka"],
  ["Betelgeuse", "Alnitak"],
  ["Acrux", "Mimosa"],
  ["Mimosa", "Gacrux"],
  ["Gacrux", "Acrux"],
  ["Hadar", "Rigil Kentaurus"],
];

const body = document.body;
const introScreen = document.querySelector("#introScreen");
const openGift = document.querySelector("#openGift");
const playerCard = document.querySelector(".player-card");
const playToggle = document.querySelector("#playToggle");
const messageCard = document.querySelector("#message");
const showMessage = document.querySelector("#showMessage");
const wheel = document.querySelector("#wheel");
const spinWheel = document.querySelector("#spinWheel");
const rouletteResult = document.querySelector("#rouletteResult");
const wheelCenter = document.querySelector(".wheel-center");
const navLinks = Array.from(document.querySelectorAll(".bottom-nav a"));
const shareButton = document.querySelector("#shareButton");
const SPOTIFY_URL = "https://open.spotify.com/track/2tX9QwcHOwWx01QSbLuB71";
const SPOTIFY_URI = "spotify:track:2tX9QwcHOwWx01QSbLuB71";

body.classList.add("locked");

openGift?.addEventListener("click", () => {
  introScreen.classList.add("is-hidden");
  body.classList.remove("locked");
});

playToggle?.addEventListener("click", () => {
  // Tenta abrir o aplicativo via URI
  window.location.href = SPOTIFY_URI;
  
  // Fallback: Se não abrir o app em 500ms, abre a versão web em uma nova aba
  setTimeout(() => {
    window.open(SPOTIFY_URL, "_blank");
  }, 500);
});

shareButton?.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Presente Especial | Augusto ❤️ Anelise",
        text: "Veja esse presente especial que o Augusto preparou!",
        url: window.location.href,
      });
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  } else {
    // Fallback: Copiar link
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  }
});

showMessage?.addEventListener("click", () => {
  const isOpen = messageCard.classList.toggle("is-open");
  showMessage.textContent = isOpen ? "Ocultar Mensagem" : "Mostrar Mensagem";
});

function updateTimeTogether() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  const totalSeconds = Math.max(0, Math.floor((now - start) / 1000));

  const years = Math.floor(totalSeconds / (365.2425 * 24 * 60 * 60));
  const afterYears = totalSeconds - Math.floor(years * 365.2425 * 24 * 60 * 60);
  const months = Math.floor(afterYears / (30.436875 * 24 * 60 * 60));
  const afterMonths = afterYears - Math.floor(months * 30.436875 * 24 * 60 * 60);
  const days = Math.floor(afterMonths / (24 * 60 * 60));
  const hours = Math.floor((afterMonths % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((afterMonths % (60 * 60)) / 60);
  const seconds = afterMonths % 60;

  const values = { years, months, days, hours, minutes, seconds };
  Object.entries(values).forEach(([key, value]) => {
    const node = document.querySelector(`[data-time="${key}"]`);
    if (node) node.textContent = value;
  });
}

function normalizeWord(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();
}

function initWordle() {
  const game = document.querySelector(".wordle-game");
  if (!game) return;

  const target = normalizeWord(game.dataset.target || "SORRISO");
  const board = document.querySelector("#wordBoard");
  const input = document.querySelector("#wordInput");
  const submit = document.querySelector("#submitGuess");
  const status = document.querySelector("#wordleStatus");
  const keyboard = document.querySelector("#wordKeyboard");
  const maxAttempts = 6;
  let attempt = 0;
  let solved = false;

  board.style.setProperty("--letters", target.length);
  board.innerHTML = Array.from({ length: maxAttempts * target.length }, (_, index) => {
    const row = Math.floor(index / target.length);
    const col = index % target.length;
    return `<div class="word-cell" data-row="${row}" data-col="${col}"></div>`;
  }).join("");

  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  keyboard.innerHTML = rows
    .map((row, rowIndex) => {
      const letters = row
        .split("")
        .map((letter) => `<button type="button" data-key="${letter}">${letter}</button>`)
        .join("");
      if (rowIndex === 2) {
        return `<div><button type="button" class="wide-key" data-key="ENTER">ENTER</button>${letters}<button type="button" class="wide-key" data-key="BACKSPACE">⌫</button></div>`;
      }
      return `<div>${letters}</div>`;
    })
    .join("");

  function setStatus(message, tone = "") {
    status.textContent = message;
    status.dataset.tone = tone;
  }

  function setKeyboardState(letter, state) {
    const key = keyboard.querySelector(`[data-key="${letter}"]`);
    if (!key) return;
    const priority = { correct: 3, present: 2, absent: 1 };
    const current = key.dataset.state || "";
    if ((priority[state] || 0) >= (priority[current] || 0)) {
      key.dataset.state = state;
    }
  }

  function fillPreview(value) {
    const letters = normalizeWord(value).slice(0, target.length).split("");
    for (let col = 0; col < target.length; col += 1) {
      const cell = board.querySelector(`[data-row="${attempt}"][data-col="${col}"]`);
      if (cell && !cell.dataset.locked) cell.textContent = letters[col] || "";
    }
  }

  function scoreGuess(guess) {
    const result = Array(target.length).fill("absent");
    const remaining = {};
    target.split("").forEach((letter, index) => {
      if (guess[index] === letter) {
        result[index] = "correct";
      } else {
        remaining[letter] = (remaining[letter] || 0) + 1;
      }
    });

    guess.split("").forEach((letter, index) => {
      if (result[index] === "correct") return;
      if (remaining[letter] > 0) {
        result[index] = "present";
        remaining[letter] -= 1;
      }
    });

    return result;
  }

  function submitGuess() {
    if (solved) return;
    const guess = normalizeWord(input.value);
    if (guess.length !== target.length) {
      setStatus(`Digite exatamente ${target.length} letras.`, "warn");
      return;
    }

    const result = scoreGuess(guess);
    guess.split("").forEach((letter, col) => {
      const cell = board.querySelector(`[data-row="${attempt}"][data-col="${col}"]`);
      cell.textContent = letter;
      cell.dataset.state = result[col];
      cell.dataset.locked = "true";
      setKeyboardState(letter, result[col]);
    });

    if (guess === target) {
      solved = true;
      input.disabled = true;
      submit.disabled = true;
      setStatus("Acertou! 💍 Isso mesmo, nosso CASAMENTO vem aí!", "success");
      return;
    }

    attempt += 1;
    input.value = "";
    if (attempt >= maxAttempts) {
      solved = true;
      input.disabled = true;
      submit.disabled = true;
      setStatus(`A palavra era ${target}.`, "warn");
      return;
    }

    setStatus("Boa tentativa. Verde está certo, amarelo existe em outro lugar.", "");
  }

  input.addEventListener("input", () => {
    input.value = normalizeWord(input.value).slice(0, target.length);
    fillPreview(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitGuess();
  });

  submit.addEventListener("click", submitGuess);

  keyboard.addEventListener("click", (event) => {
    const key = event.target.closest("button")?.dataset.key;
    if (!key || solved) return;
    if (key === "ENTER") {
      submitGuess();
      return;
    }
    if (key === "BACKSPACE") {
      input.value = input.value.slice(0, -1);
      fillPreview(input.value);
      input.focus();
      return;
    }
    input.value = normalizeWord(input.value + key).slice(0, target.length);
    fillPreview(input.value);
    input.focus();
  });

  fillPreview("");
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function toDegrees(value) {
  return (value * 180) / Math.PI;
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function julianDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function localSiderealTime(date, longitude) {
  const jd = julianDate(date);
  const t = (jd - 2451545.0) / 36525;
  const gmst =
    280.46061837 +
    360.98564736629 * (jd - 2451545) +
    0.000387933 * t * t -
    (t * t * t) / 38710000;
  return normalizeDegrees(gmst + longitude);
}

function projectStar(star, event, center, radius) {
  const lat = toRadians(event.latitude);
  const dec = toRadians(star.dec);
  const lst = localSiderealTime(new Date(event.date), event.longitude);
  const hourAngle = toRadians(normalizeDegrees(lst - star.ra * 15));
  const sinAlt = Math.sin(dec) * Math.sin(lat) + Math.cos(dec) * Math.cos(lat) * Math.cos(hourAngle);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  if (alt <= 0) return null;

  const az =
    Math.atan2(
      Math.sin(hourAngle),
      Math.cos(hourAngle) * Math.sin(lat) - Math.tan(dec) * Math.cos(lat)
    ) + Math.PI;
  const altDeg = toDegrees(alt);
  const r = radius * ((90 - altDeg) / 90);
  return {
    ...star,
    alt: altDeg,
    az: normalizeDegrees(toDegrees(az)),
    x: center + r * Math.sin(az),
    y: center - r * Math.cos(az),
  };
}

function drawStarMap() {
  const canvas = document.querySelector("#starCanvas");
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const size = Math.max(320, Math.floor(rect.width || 760));
  const ratio = window.devicePixelRatio || 1;
  canvas.width = size * ratio;
  canvas.height = size * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const center = size / 2;
  const radius = size * 0.43;
  ctx.clearRect(0, 0, size, size);

  const bg = ctx.createRadialGradient(center * 0.75, center * 0.6, radius * 0.1, center, center, radius * 1.25);
  bg.addColorStop(0, "#243b78");
  bg.addColorStop(0.5, "#111b3d");
  bg.addColorStop(1, "#05070d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  ctx.save();
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.clip();

  ctx.strokeStyle = "rgba(255,255,255,0.09)";
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 3; ring += 1) {
    ctx.beginPath();
    ctx.arc(center, center, (radius * ring) / 4, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (let line = 0; line < 12; line += 1) {
    const angle = (line * Math.PI) / 6;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(center + Math.sin(angle) * radius, center - Math.cos(angle) * radius);
    ctx.stroke();
  }

  const projected = STAR_CATALOG
    .map((star) => projectStar(star, CONFIG.starEvent, center, radius))
    .filter(Boolean);
  const byName = Object.fromEntries(projected.map((star) => [star.name, star]));

  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  ctx.lineWidth = 1.2;
  CONSTELLATION_LINES.forEach(([from, to]) => {
    if (!byName[from] || !byName[to]) return;
    ctx.beginPath();
    ctx.moveTo(byName[from].x, byName[from].y);
    ctx.lineTo(byName[to].x, byName[to].y);
    ctx.stroke();
  });

  projected.forEach((star) => {
    const starRadius = Math.max(1.2, 4.7 - star.mag);
    const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, starRadius * 4.3);
    glow.addColorStop(0, "rgba(255,255,255,0.95)");
    glow.addColorStop(0.28, "rgba(255,255,255,0.52)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(star.x, star.y, starRadius * 4.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, starRadius, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();

  ctx.strokeStyle = "rgba(255,255,255,0.72)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.74)";
  ctx.font = `700 ${Math.max(11, size * 0.022)}px Inter, sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("N", center, center - radius - 14);
  ctx.fillText("S", center, center + radius + 24);
  ctx.fillText("L", center + radius + 18, center + 4);
  ctx.fillText("O", center - radius - 18, center + 4);

  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.font = `700 ${Math.max(10, size * 0.018)}px Inter, sans-serif`;
  ["Sirius", "Canopus", "Rigel", "Aldebaran", "Achernar"].forEach((name) => {
    const star = byName[name];
    if (!star) return;
    ctx.fillText(name, star.x, star.y - 9);
  });
}

function initMap() {
  const pins = Array.from(document.querySelectorAll(".journey-pin"));
  const image = document.querySelector("#placeImage");
  const date = document.querySelector("#placeDate");
  const title = document.querySelector("#placeTitle");
  const text = document.querySelector("#placeText");
  const polaroid = document.querySelector("#placePolaroid");
  if (!pins.length || !image) return;

  function selectPlace(index) {
    const place = PLACES[index] || PLACES[0];
    pins.forEach((pin) => pin.classList.toggle("active", Number(pin.dataset.place) === index));
    image.src = place.image;
    date.textContent = place.date;
    title.textContent = place.title;
    text.textContent = place.text;
    polaroid.textContent = place.polaroid;
  }

  pins.forEach((pin) => {
    pin.addEventListener("click", () => selectPlace(Number(pin.dataset.place)));
  });
  selectPlace(0);
}

let wheelRotation = 0;
let rouletteBusy = false;

function renderRoulette() {
  if (!wheel) return;
  const segment = 360 / CONFIG.rouletteOptions.length;
  const gradient = CONFIG.rouletteOptions
    .map((option, index) => {
      const start = index * segment;
      const end = (index + 1) * segment;
      return `${option.color} ${start}deg ${end}deg`;
    })
    .join(", ");
  wheel.style.background = `conic-gradient(from -90deg, ${gradient})`;
  wheel.innerHTML = CONFIG.rouletteOptions
    .map((option, index) => {
      const angle = -90 + index * segment + segment / 2;
      const radians = toRadians(angle);
      const x = 50 + Math.cos(radians) * 32;
      const y = 50 + Math.sin(radians) * 32;
      return `<span class="wheel-label" style="--x:${x}%; --y:${y}%; --angle:${angle + 90}deg">${option.text}</span>`;
    })
    .join("");
}

function burstConfetti() {
  const host = document.querySelector(".roulette-section");
  if (!host) return;
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${20 + Math.random() * 60}%`);
    piece.style.setProperty("--dx", `${Math.random() * 120 - 60}px`);
    piece.style.setProperty("--color", CONFIG.rouletteOptions[i % CONFIG.rouletteOptions.length].color);
    host.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1200);
  }
}

function spinRoulette() {
  if (!wheel || rouletteBusy) return;
  rouletteBusy = true;
  spinWheel.disabled = true;
  rouletteResult.textContent = "Girando...";
  if (wheelCenter) wheelCenter.textContent = "?";

  const selected = Math.floor(Math.random() * CONFIG.rouletteOptions.length);
  const segment = 360 / CONFIG.rouletteOptions.length;
  const selectedCenter = selected * segment + segment / 2;
  const targetAngle = (360 - selectedCenter + 360) % 360;
  const currentAngle = ((wheelRotation % 360) + 360) % 360;
  const delta = ((targetAngle - currentAngle) % 360 + 360) % 360;
  wheelRotation += 360 * 5 + delta;
  wheel.style.transform = `rotate(${wheelRotation}deg)`;

  window.setTimeout(() => {
    const option = CONFIG.rouletteOptions[selected];
    rouletteResult.textContent = `Resultado: ${option.text}`;
    if (wheelCenter) wheelCenter.textContent = option.text.slice(0, 1);
    burstConfetti();
    rouletteBusy = false;
    spinWheel.disabled = false;
  }, 980);
}

function activateNav() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;
  const targets = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  let activeId = "home";
  targets.forEach((target) => {
    if (target.offsetTop <= scrollPosition) {
      activeId = target.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

renderRoulette();
initWordle();
initMap();
drawStarMap();
updateTimeTogether();

spinWheel?.addEventListener("click", spinRoulette);
window.setInterval(updateTimeTogether, 1000);
window.addEventListener("scroll", activateNav, { passive: true });
window.addEventListener("resize", drawStarMap);
activateNav();
