(function () {
  const state = {
    page: 1,
    perPage: 50,
    sortDir: null,
    filters: {
      name: "",
      email: "",
      role: "",
      section: "",
      currentJournal: false,
      interests: "",
      exact: false
    }
  };

  const els = {
    body: document.getElementById("tableBody"),
    filterName: document.getElementById("filterName"),
    filterEmail: document.getElementById("filterEmail"),
    filterRole: document.getElementById("filterRole"),
    filterSection: document.getElementById("filterSection"),
    filterCurrentJournal: document.getElementById("filterCurrentJournal"),
    filterInterests: document.getElementById("filterInterests"),
    filterExact: document.getElementById("filterExact"),
    clearAll: document.getElementById("clearAll"),
    sortInvite: document.getElementById("sortInvite"),
    prevPage: document.getElementById("prevPage"),
    nextPage: document.getElementById("nextPage"),
    pageNumbers: document.getElementById("pageNumbers"),
    jumpInput: document.getElementById("jumpInput"),
    jumpGo: document.getElementById("jumpGo"),
    viewSelect: document.getElementById("viewSelect"),
    closeBtn: document.getElementById("closeBtn"),
    dialog: document.getElementById("dialog"),
    overlay: document.getElementById("overlay"),
    openEditor: document.getElementById("openEditor"),
    toast: document.getElementById("toast")
  };

  function uniqueSorted(values) {
    return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
  }

  function fillSelects() {
    uniqueSorted(EDITORS.flatMap((e) => e.roles)).forEach((role) => {
      const opt = document.createElement("option");
      opt.value = role;
      opt.textContent = role;
      els.filterRole.appendChild(opt);
    });

    uniqueSorted(EDITORS.map((e) => e.section)).forEach((section) => {
      const opt = document.createElement("option");
      opt.value = section;
      opt.textContent = section;
      els.filterSection.appendChild(opt);
    });
  }

  function matches(editor) {
    const name = state.filters.name.trim().toLowerCase();
    const email = state.filters.email.trim().toLowerCase();
    const interests = state.filters.interests.trim().toLowerCase();

    if (name && !editor.name.toLowerCase().includes(name)) return false;
    if (email && !editor.email.toLowerCase().includes(email)) return false;
    if (state.filters.role && !editor.roles.includes(state.filters.role)) return false;
    if (state.filters.section && editor.section !== state.filters.section) return false;
    if (state.filters.currentJournal && !editor.currentJournal) return false;

    if (interests) {
      const hay = editor.interests.toLowerCase();
      if (state.filters.exact) {
        const terms = hay.split(";").map((t) => t.trim());
        if (!terms.includes(interests)) return false;
      } else if (!hay.includes(interests)) {
        return false;
      }
    }

    return true;
  }

  function parseDate(value) {
    if (!value) return null;
    const t = Date.parse(value);
    return Number.isNaN(t) ? null : t;
  }

  function getFiltered() {
    const rows = EDITORS.filter(matches);
    if (!state.sortDir) return rows;

    return rows.slice().sort((a, b) => {
      const da = parseDate(a.lastInviteDate);
      const db = parseDate(b.lastInviteDate);
      if (da === null && db === null) return 0;
      if (da === null) return 1;
      if (db === null) return -1;
      return state.sortDir === "asc" ? da - db : db - da;
    });
  }

  function iconDocument() {
    return `
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path fill="currentColor" d="M4 1.5h5.2L13 5.3V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1zm5 0v3.2h3.2"/>
        <path fill="none" stroke="#fff" stroke-width="1.2" d="M6.2 8.2h3.6M6.2 10.6h3.6"/>
      </svg>`;
  }

  function iconSearch() {
    return `
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
        <path fill="none" stroke="currentColor" stroke-width="1.4" d="M10.2 10.2L14 14"/>
      </svg>`;
  }

  function showToast(message) {
    els.toast.hidden = false;
    els.toast.textContent = message;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
      els.toast.hidden = true;
    }, 1800);
  }

  function render() {
    const rows = getFiltered();
    const totalPages = Math.max(1, Math.ceil(rows.length / state.perPage));
    if (state.page > totalPages) state.page = totalPages;

    const start = (state.page - 1) * state.perPage;
    const pageRows = rows.slice(start, start + state.perPage);

    if (!pageRows.length) {
      els.body.innerHTML = `<tr class="empty-row"><td colspan="8">No editors match the current filters.</td></tr>`;
    } else {
      els.body.innerHTML = pageRows
        .map((editor) => {
          const roles = editor.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join("");
          return `
            <tr>
              <td><a class="name-link" href="#" data-action="profile">${escapeHtml(editor.name)}</a></td>
              <td>${escapeHtml(editor.email)}</td>
              <td><div class="roles">${roles}</div></td>
              <td>${escapeHtml(editor.section)}</td>
              <td>${escapeHtml(editor.lastInviteDate)}</td>
              <td>${escapeHtml(editor.interests)}</td>
              <td>${escapeHtml(editor.absenceDate)}</td>
              <td>
                <div class="action-cell">
                  <a class="invite-link" href="#" data-action="invite">Invite</a>
                  <button class="icon-btn" type="button" data-action="note" title="Editor notes">${iconDocument()}</button>
                  <button class="icon-btn" type="button" data-action="history" title="Search editor records">${iconSearch()}</button>
                </div>
              </td>
            </tr>`;
        })
        .join("");
    }

    renderPager(totalPages);
    els.jumpInput.value = String(state.page);
  }

  function renderPager(totalPages) {
    const maxButtons = 3;
    let start = Math.max(1, state.page - 1);
    let end = Math.min(totalPages, start + maxButtons - 1);
    start = Math.max(1, end - maxButtons + 1);

    const buttons = [];
    for (let p = start; p <= end; p += 1) {
      buttons.push(
        `<a href="#" class="page-btn${p === state.page ? " active" : ""}" data-page="${p}">${p}</a>`
      );
    }
    els.pageNumbers.className = "page-numbers";
    els.pageNumbers.innerHTML = buttons.join("");

    els.prevPage.classList.toggle("disabled", state.page <= 1);
    els.nextPage.classList.toggle("disabled", state.page >= totalPages);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function goTo(page) {
    const rows = getFiltered();
    const totalPages = Math.max(1, Math.ceil(rows.length / state.perPage));
    state.page = Math.min(Math.max(1, page), totalPages);
    render();
  }

  function bind() {
    const applyFilters = () => {
      state.filters.name = els.filterName.value;
      state.filters.email = els.filterEmail.value;
      state.filters.role = els.filterRole.value;
      state.filters.section = els.filterSection.value;
      state.filters.currentJournal = els.filterCurrentJournal.checked;
      state.filters.interests = els.filterInterests.value;
      state.filters.exact = els.filterExact.checked;
      state.page = 1;
      render();
    };

    ["input", "change"].forEach((evt) => {
      els.filterName.addEventListener(evt, applyFilters);
      els.filterEmail.addEventListener(evt, applyFilters);
      els.filterInterests.addEventListener(evt, applyFilters);
    });
    els.filterRole.addEventListener("change", applyFilters);
    els.filterSection.addEventListener("change", applyFilters);
    els.filterCurrentJournal.addEventListener("change", applyFilters);
    els.filterExact.addEventListener("change", applyFilters);

    els.clearAll.addEventListener("click", (e) => {
      e.preventDefault();
      els.filterName.value = "";
      els.filterEmail.value = "";
      els.filterRole.value = "";
      els.filterSection.value = "";
      els.filterCurrentJournal.checked = false;
      els.filterInterests.value = "";
      els.filterExact.checked = false;
      applyFilters();
    });

    els.sortInvite.addEventListener("click", () => {
      state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      render();
    });

    els.prevPage.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(state.page - 1);
    });
    els.nextPage.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(state.page + 1);
    });
    els.pageNumbers.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-page]");
      if (!btn) return;
      e.preventDefault();
      goTo(Number(btn.dataset.page));
    });

    els.jumpGo.addEventListener("click", () => goTo(Number(els.jumpInput.value) || 1));
    els.jumpInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") goTo(Number(els.jumpInput.value) || 1);
    });

    els.viewSelect.addEventListener("change", () => {
      state.perPage = Number(els.viewSelect.value);
      state.page = 1;
      render();
    });

    els.body.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;
      e.preventDefault();
      const row = actionEl.closest("tr");
      const name = row ? row.querySelector(".name-link").textContent : "editor";
      const action = actionEl.dataset.action;
      if (action === "invite") showToast(`Invitation sent to ${name}`);
      if (action === "profile") showToast(`Open profile: ${name}`);
      if (action === "note") showToast(`Editor notes: ${name}`);
      if (action === "history") showToast(`Invitation history: ${name}`);
    });

    els.closeBtn.addEventListener("click", () => {
      els.overlay.hidden = true;
    });

    els.openEditor.addEventListener("click", () => {
      els.overlay.hidden = false;
    });
  }

  fillSelects();
  bind();
  render();
})();
