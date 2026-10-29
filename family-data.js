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
        spouse: { id: "first-wife", name: "Name not remembered", role: "First wife · name not remembered", gender: "girl", placeholder: true },
        children: [
          {
            id: "robert-oriabor-olumese",
            name: "Robert Oriabor Olumese",
            role: "Son · Late",
            gender: "boy",
            status: "late",
            unions: [
              {
                spouse: { id: "lucy", name: "Lucy", role: "Wife of Robert Oriabor", gender: "girl" },
                children: [
                  {
                    id: "rita-oriabor",
                    name: "Rita Oriabor",
                    role: "Daughter",
                    gender: "girl",
                    unions: [
                      {
                        spouse: { id: "joseph-oseghale", name: "Joseph Oseghale", role: "Husband of Rita Oriabor", gender: "boy" },
                        children: [
                          {
                            id: "rita-oseghale",
                            name: "Rita Oseghale",
                            role: "Daughter",
                            gender: "girl",
                            unions: [
                              {
                                spouse: { id: "raymond-tabet", name: "Raymond Tabet", role: "Husband of Rita Oseghale", gender: "boy" },
                                children: [
                                  { id: "isabel-tabet", name: "Isabel Tabet", role: "Daughter", gender: "girl", unions: [] },
                                  { id: "alysar-tabet", name: "Alysar Tabet", role: "Daughter", gender: "girl", unions: [] }
                                ]
                              }
                            ]
                          },
                          {
                            id: "aima-oseghale",
                            name: "Aima Oseghale",
                            role: "Daughter",
                            gender: "girl",
                            unions: [
                              {
                                spouse: { id: "osaze-iyamu", name: "Osaze Iyamu", role: "Spouse of Aima Oseghale" },
                                children: [
                                  { id: "nathan-iyamu", name: "Nathan Iyamu", role: "Child of Aima Oseghale", unions: [] },
                                  { id: "stefania-iyamu", name: "Stefania Iyamu", role: "Child of Aima Oseghale", unions: [] }
                                ]
                              }
                            ]
                          },
                          { id: "joseph-oseghale-child", name: "Joseph Oseghale", role: "Son", gender: "boy", unions: [
                            {
                              spouse: { id: "hillary", name: "Hillary", role: "Spouse of Joseph Oseghale" },
                              children: []
                            }
                          ] },
                          { id: "matthew-oseghale", name: "Matthew Oseghale", role: "Son", gender: "boy", unions: [] },
                          { id: "emma-oseghale", name: "Emma Oseghale", role: "Son", gender: "boy", unions: [{
                            spouse: { id: "salama", name: "Salama", role: "Spouse of Emmanuel Oseghale" },
                            children: []
                          }] },
                          { id: "margaret-oseghale", name: "Margaret Oseghale", role: "Daughter", gender: "girl", unions: [] },
                          { id: "cordia-oseghale", name: "Cordia Oseghale", role: "Daughter", gender: "girl", unions: [] },
                          { id: "fidelia-oseghale", name: "Fidelia Oseghale", role: "Daughter", gender: "girl", unions: [] },
                          { id: "ivadieho-oseghale", name: "Ivadieho Oseghale", role: "Daughter", gender: "girl", unions: [] },
                          { id: "florence-oseghale", name: "Florence Oseghale", role: "Daughter", gender: "girl", unions: [{
                            spouse: { id: "festus", name: "Festus", role: "Husband of Florence Oseghale" },
                            children: []
                          }] },
                          {
                            id: "churchill-oseghale",
                            name: "Churchill Oseghale",
                            role: "Son",
                            gender: "boy",
                            unions: [
                              {
                                spouse: { id: "treasure", name: "Treasure", role: "Spouse of Churchill Oseghale" },
                                children: [
                                  { id: "tremere-churchill", name: "Tremere Churchill", role: "Son", gender: "boy", unions: [] },
                                  { id: "treshaun-churchill", name: "Treshaun Churchill", role: "Son", gender: "boy", unions: [] }
                                ]
                              }
                            ]
                          },
                          {
                            id: "ehis-oseghale",
                            name: "Ehis Oseghale",
                            role: "Daughter",
                            gender: "girl",
                            unions: [
                              {
                                spouse: null,
                                children: [
                                  { id: "uriel", name: "Uriel", role: "Daughter", gender: "girl", unions: [] }
                                ]
                              }
                            ]
                          },
                          { id: "michael-oseghale", name: "Michael Oseghale", role: "Son", gender: "boy", unions: [] }
                        ]
                      }
                    ]
                  },
                  {
                    id: "pat-oriabor",
                    name: "Pat Oriabor",
                    role: "Son",
                    gender: "boy",
                    unions: [
                      {
                        spouse: { id: "maria", name: "Maria", role: "Wife of Pat Oriabor", gender: "girl" },
                        children: [
                          {
                            id: "osemega-oriabor",
                            name: "Osemega Oriabor",
                            gender:"boy",
                            role: "Child of Pat Oriabor",
                            unions: [
                              {
                                spouse: { id: "dorathy", name: "Dorathy", role: "Wife of Osemega Oriabor", gender: "girl" },
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
                        spouse: { id: "christopher-okosodo", name: "Christopher Okosodo", role: "Husband of Margaret Oriabor", gender: "boy" },
                        children: [
                          {
                            id: "vincent-okosodo",
                            name: "Vincent Okosodo",
                            role: "Son",
                            gender: "boy",
                            unions: [
                              { spouse: { id: "jessica-omodu", name: "Jessica Omodu", role: "Wife of Vincent Okosodo", gender: "girl" }, children: [] }
                            ]
                          },
                          {
                            id: "jennifer-okosodo",
                            name: "Jennifer Okosodo",
                            role: "Daughter",
                            gender: "girl",
                            unions: [
                              {
                                spouse: { id: "ndukwo-ogbuja", name: "Ndukwo Ogbuja", role: "Husband of Jennifer Okosodo", gender: "boy" },
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
                  {
                    id: "anthony-oriabor",
                    name: "Anthony Oriabor",
                    role: "Son · Late",
                    gender: "boy",
                    status: "late",
                    unions: [
                      { spouse: { id: "loveth", name: "Loveth", role: "Wife of Anthony Oriabor", gender: "girl" }, children: [] }
                    ]
                  },
                  {
                    id: "flora-oriabor",
                    name: "Flora Oriabor",
                    role: "Daughter",
                    gender: "girl",
                    unions: [
                      {
                        spouse: { id: "godwin-ikheola", name: "Godwin Ikheola", role: "Husband of Flora Oriabor", gender: "boy" },
                        children: [
                          { id: "ofure-ikheola", name: "Ofure Ikheola", role: "Son", gender: "boy", unions: [] },
                          { id: "osereme-ikheola-perpetual", name: "Osereme Ikheola Perpetual", role: "Daughter", gender: "girl", unions: [] },
                          { id: "ebosetale-ikheola-paul", name: "Ebosetale Ikheola Paul", role: "Son", gender: "boy", unions: [] },
                          { id: "ehizojie-ikheola-john", name: "Ehizojie Ikheola John", role: "Son", gender: "boy", unions: [] },
                          { id: "oseluese-ikheola-godwin", name: "Oseluese Ikheola Godwin", role: "Son", gender: "boy", unions: [] }
                        ]
                      }
                    ]
                  }
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
                spouse: { id: "amedu", name: "Amedu", role: "Husband of Ewohon", gender: "boy" },
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
        spouse: { id: "cowesu", name: "Cowesu", role: "Second wife · Late", gender: "girl", status: "late" },
        children: [
          {
            id: "agberonkhe",
            name: "Agberonkhe",
            role: "Daughter",
            gender: "girl",
            unions: [
              {
                spouse: { id: "agberonkhe-husband", name: "Name not known", role: "Husband · name not known", gender: "boy", placeholder: true },
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
                spouse: { id: "richard-wife", name: "Name not known", role: "Wife · name not known", gender: "girl", placeholder: true },
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
                spouse: { id: "samson-wife", name: "Name not known", role: "Wife · name not known", gender: "girl", placeholder: true },
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



