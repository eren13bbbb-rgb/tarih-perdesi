const yazarEserData = window.yazarEserVerileri || [];
const eserOzetleri = window.eserOzetleri || {};

const authorLibrary = document.getElementById("authorLibrary");
const periodFilterRow = document.getElementById("periodFilterRow");
const authorSearch = document.getElementById("authorSearch");

const totalAuthorCount = document.getElementById("totalAuthorCount");
const totalPeriodCount = document.getElementById("totalPeriodCount");
const visibleAuthorCount = document.getElementById("visibleAuthorCount");

let activePeriod = "all";
let searchTerm = "";

function normalizeText(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function getAllAuthorsCount() {
  return yazarEserData.reduce((total, period) => {
    return total + period.authors.length;
  }, 0);
}

function getWorkSummary(title) {
  return eserOzetleri[title] || "";
}

function authorMatchesSearch(author, period) {
  if (!searchTerm) {
    return true;
  }

  const searchableWorks = author.works.flatMap((work) => {
    return work.items.flatMap((item) => {
      return [item, getWorkSummary(item)];
    });
  });

  const haystack = [
    author.name,
    author.note,
    period.title,
    period.description,
    ...author.works.map((work) => work.type),
    ...searchableWorks
  ].join(" ");

  return normalizeText(haystack).includes(normalizeText(searchTerm));
}

function renderPeriodFilters() {
  const filterButtons = [
    `<button class="period-filter-btn active" data-period="all">Tümü</button>`
  ];

  yazarEserData.forEach((period) => {
    filterButtons.push(`
      <button class="period-filter-btn" data-period="${period.id}">
        ${period.no}. ${period.title}
      </button>
    `);
  });

  periodFilterRow.innerHTML = filterButtons.join("");

  const buttons = document.querySelectorAll(".period-filter-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      activePeriod = button.dataset.period;
      renderLibrary();
    });
  });
}

function renderWorkItem(title) {
  const summary = getWorkSummary(title);

  if (!summary) {
    return `
      <div class="work-with-summary">
        <strong class="work-title">${title}</strong>
      </div>
    `;
  }

  return `
    <div class="work-with-summary">
      <strong class="work-title">${title}</strong>
      <p class="work-summary">${summary}</p>
    </div>
  `;
}

function renderAuthorCard(author) {
  const worksHtml = author.works
    .map((work) => {
      const itemsHtml = work.items
        .map((item) => renderWorkItem(item))
        .join("");

      return `
        <li class="work-group-item">
          <strong class="work-type-label">${work.type}:</strong>
          <div class="work-items-list">
            ${itemsHtml}
          </div>
        </li>
      `;
    })
    .join("");

  return `
    <article class="author-card">
      <div class="author-card-top">
        <span class="author-order">${author.no}</span>
        <h4>${author.name}</h4>
      </div>

      <p class="author-note">${author.note}</p>

      <ul>
        ${worksHtml}
      </ul>
    </article>
  `;
}

function renderLibrary() {
  let visibleCount = 0;

  const periodBlocks = yazarEserData
    .filter((period) => {
      return activePeriod === "all" || period.id === activePeriod;
    })
    .map((period) => {
      const matchingAuthors = period.authors.filter((author) => {
        return authorMatchesSearch(author, period);
      });

      if (matchingAuthors.length === 0) {
        return "";
      }

      visibleCount += matchingAuthors.length;

      const cards = matchingAuthors.map(renderAuthorCard).join("");

      return `
        <section class="period-block">
          <div class="period-title-row">
            <p class="period-badge">${period.no}</p>

            <div class="period-heading-text">
              <h3>${period.title}</h3>
              <p>${period.description}</p>
              <span class="period-match-count">
                ${matchingAuthors.length} sanatçı gösteriliyor
              </span>
            </div>
          </div>

          <div class="author-grid">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");

  visibleAuthorCount.textContent = visibleCount;

  if (!periodBlocks.trim()) {
    authorLibrary.innerHTML = `
      <div class="library-empty-state">
        <h3>Sonuç bulunamadı.</h3>
        <p>
          Aradığın yazar, eser, karakter veya içerik bu filtreyle eşleşmedi.
        </p>
      </div>
    `;
    return;
  }

  authorLibrary.innerHTML = periodBlocks;
}

authorSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderLibrary();
});

totalAuthorCount.textContent = getAllAuthorsCount();
totalPeriodCount.textContent = yazarEserData.length;

renderPeriodFilters();
renderLibrary();