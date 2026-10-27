(() => {
  const data = window.FAMILY_TREE;
  const tree = document.querySelector("#tree");
  const search = document.querySelector("#search");
  const dialog = document.querySelector("#person-dialog");
  const peopleCount = document.querySelector("#people-count");
  const generationCount = document.querySelector("#generation-count");
  const branchCount = document.querySelector("#branch-count");
  let expanded = true;
  let allPeople = [];

  function visit(person, depth, parentName = "") {
    if (!person) return;
    allPeople.push({ ...person, depth, parentName });
    (person.unions || []).forEach((union) => {
      if (union.spouse) allPeople.push({ ...union.spouse, depth, parentName: person.name });
      (union.children || []).forEach((child) => visit(child, depth + 1, person.name));
    });
  }

  function personCard(person, relationship = "") {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `person-card${person.placeholder ? " is-placeholder" : ""}${person.gender ? ` gender-${person.gender}` : ""}${person.status === "late" ? " is-late" : ""}`;
    card.dataset.name = person.name.toLowerCase();
    card.setAttribute("aria-label", `${person.name}${relationship ? `, ${relationship}` : ""}. View details`);
    card.innerHTML = `<span class="card-monogram">${person.placeholder ? "?" : initials(person.name)}</span><span class="card-copy"><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml(person.role || relationship || "Family member")}</small></span>${person.status === "late" ? '<span class="late-mark" title="Late">†</span>' : ""}<span class="card-arrow" aria-hidden="true">↗</span>`;
    card.addEventListener("click", () => showDetails(person, relationship));
    return card;
  }

  function renderPerson(person, isRoot = false) {
    const node = document.createElement("div");
    const unions = person.unions || [];
    node.className = `family-node${isRoot ? " root-node" : ""}${unions.length === 1 ? " single-union-node" : ""}`;

    if (unions.length === 1) {
      const union = unions[0];
      const couple = document.createElement("div");
      couple.className = "couple-pair";
      couple.append(personCard(person, isRoot ? "Family root" : ""));
      couple.append(personCard(union.spouse || { name: "Spouse not listed", placeholder: true }, "Spouse"));
      node.append(couple);
      const children = union.children || [];
      if (children.length) {
        const childWrap = document.createElement("div");
        childWrap.className = "children-row";
        children.forEach((child) => childWrap.append(renderPerson(child)));
        node.append(childWrap);
      }
      return node;
    }

    node.append(personCard(person, isRoot ? "Family root" : ""));
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
    node.append(branches);
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
      if (query && match) matches += 1;
    });
    document.querySelector("#no-results").hidden = !query || matches > 0;
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
  document.querySelector("#expand-all").addEventListener("click", (event) => {
    expanded = !expanded;
    tree.classList.toggle("is-collapsed", !expanded);
    event.currentTarget.textContent = expanded ? "Collapse branches" : "Expand all";
  });
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  render();
})();
