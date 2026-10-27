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
                  {
                    id: "pat-oriabor",
                    name: "Pat Oriabor",
                    role: "Son",
                    gender: "boy",
                    unions: [
                      {
                        spouse: { id: "maria", name: "Maria", role: "Wife of Pat Oriabor" },
                        children: [
                          {
                            id: "osemega-oriabor",
                            name: "Osemega Oriabor",
                            gender:"boy",
                            role: "Child of Pat Oriabor",
                            unions: [
                              {
                                spouse: { id: "dorathy", name: "Dorathy", role: "Wife of Osemega Oriabor" },
                                children: [
                                  { id: "samuel-markblessing-oriabor", gender: "boy", name: "Samuel MarkBlessing Oriabor", role: "Child of Osemega Oriabor", unions: [] }
                                ]
                              }
                            ]
                          },
                          { id: "osemegbe-oriabor", gender: "girl", name: "Osemegbe Oriabor", role: "Child of Pat Oriabor", unions: [] }
                        ]
                      }
                    ]
                  },
                  {
                    id: "margaret-oriabor",
                    name: "Margaret Oriabor",
                    role: "Daughter",
                    gender: "girl",
                    unions: [
                      {
                        spouse: { id: "christopher-okosodo", name: "Christopher Okosodo", role: "Husband of Margaret Oriabor" },
                        children: [
                          {
                            id: "vincent-okosodo",
                            name: "Vincent Okosodo",
                            role: "Son",
                            gender: "boy",
                            unions: [
                              { spouse: { id: "jessica-omodu", name: "Jessica Omodu", role: "Wife of Vincent Okosodo" }, children: [] }
                            ]
                          },
                          {
                            id: "jennifer-okosodo",
                            name: "Jennifer Okosodo",
                            role: "Daughter",
                            gender: "girl",
                            unions: [
                              {
                                spouse: { id: "ndukwo-ogbuja", name: "Ndukwo Ogbuja", role: "Husband of Jennifer Okosodo" },
                                children: [
                                  { id: "michelle-ndukwo-ogbuja", name: "Michelle Ndukwo_Ogbuja", role: "Daughter", gender: "girl", unions: [] },
                                  { id: "danielle-ndukwo-ogbuja", name: "Danielle Ndukwo-Ogbuja", role: "Daughter", gender: "girl", unions: [] }
                                ]
                              }
                            ]
                          },
                          { id: "sophia-okosodo", name: "Sophia Okosodo", role: "Daughter", gender: "girl", unions: [] }
                        ]
                      }
                    ]
                  },
                  { id: "saturday-oriabor", name: "Saturday Oriabor", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "anthony-oriabor", name: "Anthony Oriabor", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "flora-oriabor", name: "Flora Oriabor", role: "Daughter", gender: "girl", unions: [] }
                ]
              }
            ]
          },
          {
            id: "ewohon-olumese",
            name: "Ewohon Olumese",
            role: "Daughter",
            gender: "girl",
            unions: [
              {
                spouse: { id: "amedu", name: "Amedu", role: "Husband of Ewohon" },
                children: [
                  { id: "christopher-amedu", name: "Christopher Amedu", role: "Son", gender: "boy", unions: [] },
                  { id: "friday-amedu", name: "Friday Amedu", role: "Son", gender: "boy", unions: [] },
                  { id: "david-amedu", name: "David Amedu", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "not-known-daughter", name: "Not Known", role: "Daughter · name not known", gender: "girl", unions: [] }
                ]
              }
            ]
          }
        ]
      },
      {
        spouse: { id: "cowesu", name: "Cowesu", role: "Second wife · Late", status: "late" },
        children: [
          {
            id: "agberonkhe",
            name: "Agberonkhe",
            role: "Daughter",
            gender: "girl",
            unions: [
              {
                spouse: { id: "agberonkhe-husband", name: "Name not known", role: "Husband · name not known", placeholder: true },
                children: [
                  { id: "khiafe", name: "Khiafe", role: "Son", gender: "boy", unions: [] },
                  { id: "william", name: "William", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "awote", name: "Awote", role: "Son · Late", gender: "boy", status: "late", unions: [] },
                  { id: "christopher-agberonkhe", name: "Christopher", role: "Son · Late", gender: "boy", status: "late", unions: [] }
                ]
              }
            ]
          },
          {
            id: "richard-olumese",
            name: "Richard Olumese",
            role: "Son",
            gender: "boy",
            unions: [
              {
                spouse: { id: "richard-wife", name: "Name not known", role: "Wife · name not known", placeholder: true },
                children: [
                  { id: "dele-olumese", name: "Dele Olumese", role: "Daughter", gender: "girl", unions: [] },
                  { id: "friday-olumese", name: "Friday Olumese", role: "Son", gender: "boy", unions: [] },
                  { id: "modupe-olumese", name: "Modupe Olumese", role: "Daughter", gender: "girl", unions: [] }
                ]
              }
            ]
          },
          {
            id: "samson-olumese",
            name: "Samson Olumese",
            role: "Son",
            gender: "boy",
            unions: [
              {
                spouse: { id: "samson-wife", name: "Name not known", role: "Wife · name not known", placeholder: true },
                children: [
                  { id: "lucky-olumese", name: "Lucky Olumese", role: "Son", gender: "boy", unions: [] },
                  { id: "faith-olumese", name: "Faith Olumese", role: "Daughter", gender: "girl", unions: [] },
                  { id: "julie-olumese", name: "Julie Olumese", role: "Daughter", gender: "girl", unions: [] },
                  { id: "bratins-olumese", name: "Bratins Olumese", role: "Son", gender: "boy", unions: [] },
                  { id: "osemu-olumese", name: "Osemu Olumese", role: "Son", gender: "boy", unions: [] },
                  { id: "alex-olumese", name: "Alex Olumese", role: "Son", gender: "boy", unions: [] }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
