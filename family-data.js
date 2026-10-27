/*
 * Family tree data. Give each person a unique id and put each marriage/partnership
 * in that person's unions array. Children belong to the union they came from.
 * A person can have several unions. Use null for an unknown spouse if needed.
 * Add children using the same shape so the tree can grow to any depth.
 */
window.FAMILY_TREE = {
  root: {
    id: "olumese",
    name: "Olumese",
    role: "Family root",
    unions: [
      {
        spouse: { id: "first-wife", name: "Name not remembered", role: "First wife · name not remembered", placeholder: true },
        children: [
          {
            id: "robert-oriabor-olumese",
            name: "Robert Oriabor Olumese",
            role: "Son · Late",
            gender: "boy",
            status: "late",
            unions: [
              {
                spouse: { id: "lucy", name: "Lucy", role: "Wife of Robert Oriabor" },
                children: [
                  { id: "rita-oriabor", name: "Rita Oriabor", role: "Daughter", gender: "girl", unions: [] },
                  { id: "pat-oriabor", name: "Pat Oriabor", role: "Son", gender: "boy", unions: [] },
                  { id: "margaret-oriabor", name: "Margaret Oriabor", role: "Daughter", gender: "girl", unions: [] },
                  { id: "saturday-oriabor", name: "Saturday Oriabor", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "anthony-oriabor", name: "Anthony Oriabor", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "flora-oriabor", name: "Flora Oriabor", role: "Daughter", gender: "girl", unions: [] }
                ]
              }
            ]
          },
          { id: "ewohon-olumese", name: "Ewohon Olumese", role: "Daughter", gender: "girl", unions: [] }
        ]
      },
      {
        spouse: { id: "cowesu", name: "Cowesu", role: "Second wife · Late", status: "late" },
        children: [
          { id: "agberonkhe", name: "Agberonkhe", role: "Daughter", gender: "girl", unions: [] },
          { id: "richard-olumese", name: "Richard Olumese", role: "Son", gender: "boy", unions: [] },
          { id: "samson-olumese", name: "Samson Olumese", role: "Son", gender: "boy", unions: [] }
        ]
      }
    ]
  }
};
