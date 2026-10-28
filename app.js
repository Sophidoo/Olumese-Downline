(() => {
  const data = window.FAMILY_TREE;
  const tree = document.querySelector("#tree");
  const search = document.querySelector("#search");
  const dialog = document.querySelector("#person-dialog");
  const peopleCount = document.querySelector("#people-count");
  const generationCount = document.querySelector("#generation-count");
  const branchCount = document.querySelector("#branch-count");
  let zoomLevel = 1;
  let allPeople = [];
  const expandAllButton = document.querySelector("#expand-all");

  function updateExpandAllButton() {
    const downlines = [...tree.querySelectorAll(".family-node.has-downline")];
    const allExpanded = downlines.length > 0 && downlines.every((node) => node.classList.contains("is-expanded"));
    expandAllButton.textContent = allExpanded ? "Collapse all" : "Show all branches";
  }

  function addDownlineToggle(node) {
    node.classList.add("has-downline");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "branch-toggle";
    toggle.setAttribute("aria-label", "Show descendants");
    toggle.setAttribute("aria-expanded", "false");
    toggle.title = "Show descendants";
    toggle.innerHTML = '<span aria-hidden="true">⌄</span>';
    toggle.addEventListener("click", () => {
      const isExpanded = node.classList.toggle("is-expanded");
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.setAttribute("aria-label", isExpanded ? "Hide descendants" : "Show descendants");
      toggle.title = isExpanded ? "Hide descendants" : "Show descendants";
      updateExpandAllButton();
    });
    node.append(toggle);
  }

  function visit(person, depth, parentName = "") {
    if (!person) return;
    allPeople.push({ ...person, depth, parentName });
    (person.unions || []).forEach((union) => {
      if (union.spouse) allPeople.push({ ...union.spouse, depth, parentName: person.name });
      (union.children || []).forEach((child) => visit(child, depth + 1, person.name));
    });
  }

  function personCard(person, relationship = "", branchNode = null) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `person-card${relationship === "Spouse" ? " is-spouse" : ""}${person.placeholder ? " is-placeholder" : ""}${person.gender ? ` gender-${person.gender}` : ""}${person.status === "late" ? " is-late" : ""}`;
    card.dataset.name = person.name.toLowerCase();
    card.setAttribute("aria-label", `${person.name}${relationship ? `, ${relationship}` : ""}. View details`);
    card.innerHTML = `<span class="card-monogram">${person.placeholder ? "?" : initials(person.name)}</span><span class="card-copy"><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml(person.role || relationship || "Family member")}</small></span>${person.status === "late" ? '<span class="late-mark" title="Late">†</span>' : ""}<span class="card-arrow" aria-hidden="true">↗</span>`;
    card.addEventListener("click", () => showDetails(person, relationship));
    if (!branchNode) return card;
    const wrap = document.createElement("div");
    wrap.className = "person-card-wrap";
    wrap.append(card);
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "branch-toggle";
    toggle.setAttribute("aria-label", `Show descendants for ${person.name}`);
    toggle.setAttribute("aria-expanded", "false");
    toggle.title = `Show descendants for ${person.name}`;
    toggle.innerHTML = '<span aria-hidden="true">›</span>';
    toggle.addEventListener("click", () => {
      const isExpanded = branchNode.classList.toggle("is-expanded");
      toggle.classList.toggle("is-expanded", isExpanded);
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.setAttribute("aria-label", `${isExpanded ? "Hide" : "Show"} descendants for ${person.name}`);
      toggle.title = `${isExpanded ? "Hide" : "Show"} descendants for ${person.name}`;
      updateExpandAllButton();
    });
    wrap.append(toggle);
    return wrap;
  }

  function renderPerson(person, isRoot = false) {
    const node = document.createElement("div");
    const unions = person.unions || [];
    node.className = `family-node${isRoot ? " root-node" : ""}${unions.length === 1 ? " single-union-node" : ""}`;

    if (unions.length === 1) {
      const union = unions[0];
      const children = union.children || [];
      if (children.length) node.classList.add("has-downline");
      const couple = document.createElement("div");
      if (union.spouse) {
        couple.className = "couple-pair";
        couple.append(personCard(person, isRoot ? "Family root" : "", children.length ? node : null));
        couple.append(personCard(union.spouse, "Spouse"));
        node.append(couple);
      } else {
        couple.className = "single-parent";
        couple.append(personCard(person, isRoot ? "Family root" : "", children.length ? node : null));
        node.append(couple);
      }
      if (children.length) {
        const downline = document.createElement("div");
        downline.className = "downline";
        const childWrap = document.createElement("div");
        childWrap.className = "children-row";
        children.forEach((child) => childWrap.append(renderPerson(child)));
        downline.append(childWrap);
        node.append(downline);
      }
      return node;
    }

    const hasChildren = unions.some((union) => (union.children || []).length > 0);
    if (hasChildren) node.classList.add("has-downline");
    node.append(personCard(person, isRoot ? "Family root" : "", hasChildren ? node : null));
    if (!unions.length) return node;

    const branches = document.createElement("div");
    branches.className = "unions";
    unions.forEach((union, index) => {
      const branch = document.createElement("section");
      branch.className = "union-branch";
      branch.dataset.branch = `${person.id}-${index}`;
      const couple = document.createElement("div");
      couple.className = "couple-row";
      couple.append(personCard(union.spouse || { name: "Spouse not listed", placeholder: true }, "Spouse"));
      branch.append(couple);

      const children = union.children || [];
      if (children.length) {
        const childWrap = document.createElement("div");
        childWrap.className = "children-row";
        children.forEach((child) => childWrap.append(renderPerson(child)));
        branch.append(childWrap);
      } else {
        const empty = document.createElement("div");
        empty.className = "branch-empty";
        empty.innerHTML = `<span class="empty-line"></span><span>${union.spouse?.placeholder ? "Children to be added" : "No children listed yet"}</span>`;
        branch.append(empty);
      }
      branches.append(branch);
    });
    const downline = document.createElement("div");
    downline.className = "downline";
    downline.append(branches);
    node.append(downline);
    return node;
  }

  function render() {
    allPeople = [];
    visit(data.root, 1);
    tree.replaceChildren(renderPerson(data.root, true));
    peopleCount.textContent = allPeople.filter((person) => !person.placeholder).length;
    generationCount.textContent = Math.max(1, ...allPeople.map((person) => person.depth));
    branchCount.textContent = data.root.unions?.length || 0;
    applySearch();
  }

  function applySearch() {
    const query = search.value.trim().toLowerCase();
    const cards = [...tree.querySelectorAll(".person-card")];
    let matches = 0;
    cards.forEach((card) => {
      const match = !query || card.dataset.name.includes(query);
      card.classList.toggle("search-dim", Boolean(query) && !match);
      card.classList.toggle("search-match", Boolean(query) && match);
      if (query && match) {
        matches += 1;
        let branch = card.closest(".family-node");
        while (branch && tree.contains(branch)) {
          if (branch.classList.contains("has-downline")) {
            branch.classList.add("is-expanded");
            const toggle = branch.querySelector(".branch-toggle");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Hide descendants");
            toggle.title = "Hide descendants";
            toggle.classList.add("is-expanded");
          }
          branch = branch.parentElement?.closest(".family-node") || null;
        }
      }
    });
    document.querySelector("#no-results").hidden = !query || matches > 0;
    updateExpandAllButton();
  }

  function showDetails(person, relationship) {
    document.querySelector("#dialog-name").textContent = person.name;
    document.querySelector("#dialog-role").textContent = person.role || relationship || "FAMILY MEMBER";
    const meta = [];
    if (person.parentName) meta.push(`Child of ${person.parentName}`);
    if (relationship && !person.parentName) meta.push(relationship);
    document.querySelector("#dialog-meta").textContent = meta.join(" · ") || "Part of the Olumese family tree";
    const notes = document.querySelector("#dialog-notes");
    notes.textContent = person.notes || (person.placeholder ? "This branch is ready for the name and details to be added." : "No additional details have been added yet.");
    dialog.showModal();
  }

  function initials(name) {
    return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  search.addEventListener("input", applySearch);
  expandAllButton.addEventListener("click", () => {
    const downlines = [...tree.querySelectorAll(".family-node.has-downline")];
    const shouldExpand = !downlines.every((node) => node.classList.contains("is-expanded"));
    downlines.forEach((node) => {
      node.classList.toggle("is-expanded", shouldExpand);
      const toggle = node.querySelector(".branch-toggle");
      toggle.setAttribute("aria-expanded", String(shouldExpand));
      toggle.setAttribute("aria-label", shouldExpand ? "Hide descendants" : "Show descendants");
      toggle.title = shouldExpand ? "Hide descendants" : "Show descendants";
      toggle.classList.toggle("is-expanded", shouldExpand);
    });
    updateExpandAllButton();
  });
  function setZoom(nextZoom) {
    zoomLevel = Math.max(0.1, Math.min(1.5, Math.round(nextZoom * 10) / 10));
    tree.style.zoom = String(zoomLevel);
    document.querySelector("#zoom-level").value = `${Math.round(zoomLevel * 100)}%`;
  }
  document.querySelector("#zoom-out").addEventListener("click", () => setZoom(zoomLevel - 0.1));
  document.querySelector("#zoom-in").addEventListener("click", () => setZoom(zoomLevel + 0.1));
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  render();
})();
