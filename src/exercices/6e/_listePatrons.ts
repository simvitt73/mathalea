export const vraiCubes:(number[][])[] = [
  [[0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0]],
  [[0, 1, 0],
    [0, 1, 1],
    [1, 1, 0],
    [0, 1, 0]],
  [[1, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 0]],
  [[1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0]],
  [[1, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0]],
  [[0, 1, 0],
    [0, 1, 1],
    [1, 1, 0],
    [1, 0, 0]],
  [[1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]],
  [[0, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]],
  [[0, 1, 1],
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]],
  [[1, 0],
    [1, 0],
    [1, 1],
    [0, 1],
    [0, 1]],
  [[0, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
    [1, 0, 0]],
]

export const fauxCubes:(number[][])[] = [
  [[1, 0],
    [1, 0],
    [1, 1],
    [1, 0],
    [1, 0]],
  [[1, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0]],
  [[1, 0],
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 0]],
  [[1, 1],
    [1, 0],
    [1, 1],
    [1, 0]],
  [[1, 0, 1],
    [1, 1, 1],
    [0, 1, 0]],
  [[0, 1, 0],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0]],
  [[1, 1, 1],
    [0, 1, 0],
    [1, 1, 0]],
  [[1],
    [1],
    [1],
    [1],
    [1],
    [1]],
  [[1, 1],
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0]],
  [[1, 1],
    [1, 0],
    [1, 0],
    [1, 1]],
  [[0, 1],
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 0]],
  [[1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]],
  [[1, 1],
    [1, 0],
    [1, 1],
    [0, 1]],
  [[1, 1, 1],
    [1, 0, 1],
    [1, 0, 0]],
  [[0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0]],
  [[0, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0]],
]

export type objetFace = {
  width?: number;
  height?: number;
  numero: number;
  isFace: boolean;
  collision?: number; // optionnel car pas présent partout
}

export const cubesObj:(objetFace[][])[] = [
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }, { numero: 4, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 3, isFace: true }, { numero: 4, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 4, isFace: true }, { numero: 5, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 1, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }, { numero: 4, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 2, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 0, isFace: false }, { numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 2, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ],
  [[{ numero: 1, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 3, isFace: true }, { numero: 4, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 5, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }]
  ],
  [[{ numero: 0, isFace: false }, { numero: 0, isFace: false }, { numero: 1, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ],
]

export const fauxCubesObj:(objetFace[][])[] = [
  [[{ numero: 1, isFace: true, collision: 6 }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 3, isFace: true }, { numero: 4, isFace: true }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }, { numero: 4, isFace: true, collision: 6 }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true, collision: 6 }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true, collision: 5 }],
    [{ numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true, collision: 2 }, { numero: 0, isFace: false }, { numero: 2, isFace: true }],
    [{ numero: 3, isFace: true }, { numero: 4, isFace: true }, { numero: 5, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }, { numero: 4, isFace: true, collision: 6 }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true, collision: 5 }, { numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true, collision: 5 }],
    [{ numero: 2, isFace: true, collision: 6 }],
    [{ numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }],
    [{ numero: 5, isFace: true }],
    [{ numero: 6, isFace: true }]
  ], // fait
  [[{ numero: 1, isFace: true, collision: 6 }, { numero: 2, isFace: true }],
    [{ numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true, collision: 6 }],
    [{ numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 6, isFace: true }]
  ], // fait
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true, collision: 6 }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }],
    [{ numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true }, { numero: 3, isFace: true, collision: 6 }],
    [{ numero: 4, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true, collision: 5 }],
    [{ numero: 3, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 4, isFace: true }, { numero: 5, isFace: true }],
    [{ numero: 0, isFace: false }, { numero: 6, isFace: true }]
  ], // fait
  [[{ numero: 1, isFace: true }, { numero: 2, isFace: true }, { numero: 3, isFace: true, collision: 6 }],
    [{ numero: 4, isFace: true, collision: 5 }, { numero: 0, isFace: false }, { numero: 5, isFace: true }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait ce patron ci dessus risque de poser problème a l'animation
  [[{ numero: 0, isFace: false }, { numero: 0, isFace: false }, { numero: 1, isFace: true }],
    [{ numero: 2, isFace: true }, { numero: 3, isFace: true }, { numero: 4, isFace: true, collision: 6 }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait
  [[{ numero: 0, isFace: false }, { numero: 1, isFace: true }, { numero: 2, isFace: true, collision: 6 }],
    [{ numero: 3, isFace: true }, { numero: 4, isFace: true }, { numero: 0, isFace: false }],
    [{ numero: 5, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }],
    [{ numero: 6, isFace: true }, { numero: 0, isFace: false }, { numero: 0, isFace: false }]
  ], // fait
]

/* const matrice = [
[{ width: 1, height: 1,numero: 1, isFace: true, collision: 5}],
[{ width: 1, height: 1,numero: 2, isFace: true, collision: 6}],
[{ width: 1, height: 1,numero: 3, isFace: true}],
[{ width: 1, height: 1,numero: 4, isFace: true}],
[{ width: 1, height: 1,numero: 5, isFace: true}],
[{ width: 1, height: 1,numero: 6, isFace: true}]
] */
