import type { Shape2D } from '../Figures2D'
import { shapeCarre, shapeCarreArrondi, shapeChat, shapeEtoile4Branches, shapeHexagone, shapeLosange, shapeSoleil } from '../figures2d/shapes2d'
import { Shape3D, shapeCubeIso } from '../figures2d/Shape3d'
import { VisualPattern } from './VisualPattern'
import { VisualPattern3D } from './VisualPattern3D'
export type PatternRiche = {
  visualImg?: string,
  visualId?: number,
  shapeDefault: Shape2D,
  fonction: (x: number) => number,
  formule: string,
  type: 'linéaire' | 'affine' | 'degré2' | 'degré3' | 'autre',
  pattern: VisualPattern,
  iterate: (this: VisualPattern, n?:number) => Set<string>
}
export type PatternRiche3D = {
  visualImg?: string,
  visualId?: number,
  shapeDefault: Shape3D,
  fonction: (x: number) => number,
  formule: string,
  type: 'linéaire' | 'affine' | 'degré2' | 'degré3' | 'autre',
  pattern: VisualPattern3D,
  iterate3d: (this: VisualPattern3D, angle: number) => Set<string>
}

// Il faudra peut-être trouver un moyen de classer les patterns.

/*
Pattern 0: '2×n + 1'
Itérations:
n=1      n=2        n=3
■     ■           ■
■ ■   ■           ■
      ■ ■ ■       ■
                  ■ ■ ■ ■
*/
const pattern1:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/5da32a25-8bdd-4072-bd76-5e94635ba57d/vp11_2.png?format=2500w',
  visualId: 11,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 * x + 1,
  formule: '2\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1],
      [1, 0],
    ]
  ),
  iterate: function (this: VisualPattern) {
    const newCells = new Set<string>()

    for (const key of this.cells) {
      const [x, y] = VisualPattern.keyToCoord(key)
      let replaced = false
      // Check neighbor below
      if (this.hasCell(x, y - 1)) {
        newCells.add(VisualPattern.coordToKey([x, y]))
        newCells.add(VisualPattern.coordToKey([x, y + 1]))
        replaced = true
      }

      // Check neighbor to the left
      if (this.hasCell(x - 1, y)) {
        newCells.add(VisualPattern.coordToKey([x, y]))
        newCells.add(VisualPattern.coordToKey([x + 1, y]))
        replaced = true
      }

      // If no replacement triggered, keep original cell
      if (!replaced) {
        newCells.add(VisualPattern.coordToKey([x, y]))
      }
    }
    return newCells
  }
}
/*
Pattern 1: 'n^2'
Itérations:
n=1      n=2        n=3
■       ■ ■      ■ ■ ■
        ■ ■      ■ ■ ■
                 ■ ■ ■
*/
const pattern2:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/54e5912a-d7ae-4d39-82ba-c0a3822ba19c/2020-09-26-09-37-38_orig+%281%29.jpg?format=2500w',
  visualId: 1,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * x,
  formule: 'n^2',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: VisualPattern) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = VisualPattern.keyToCoord(key)
      newCells.add(VisualPattern.coordToKey([x, y]))
      newCells.add(VisualPattern.coordToKey([x + 1, y]))
      newCells.add(VisualPattern.coordToKey([x, y + 1]))
      newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
    }
    return newCells
  }
}
/*
Pattern 2: '2×n - 1'
Itérations:
n=1      n=2        n=3
■       ■         ■ ■
        ■ ■       ■ ■ ■
À chaque itération, on ajoute un carré à droite et un carré au-dessus du dernier carré à droite.
*/
const pattern3:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/bae949b2-d658-41ad-a0ab-ff08226865f3/vp10_2_orig.png?format=2500w',
  visualId: 10,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 * x - 1,
  formule: '2\\times n -1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    const newCells = new Set<string>()
    if (n === undefined) n = 1
    newCells.add(VisualPattern.coordToKey([0, 1]))
    for (let i = 1; i < n; i++) {
      newCells.add(VisualPattern.coordToKey([i - 1, 0]))
      newCells.add(VisualPattern.coordToKey([i, 1]))
    }
    return newCells
  }
}

// Pattern 3: 'n^2 + n'
// Itérations:
// n=1      n=2        n=3
// ■       ■ ■       ■ ■ ■
// ■       ■ ■       ■ ■ ■
//         ■ ■       ■ ■ ■
//                   ■ ■ ■

const pattern4:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/65bbb191-819f-42aa-b269-3c393e88a68b/8497466_orig+%281%29.png?format=2500w',
  visualId: 32,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * x + x,
  formule: 'n^2 + n',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1]
    ]
  ),
  iterate: function (this: VisualPattern) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = VisualPattern.keyToCoord(key)
      newCells.add(VisualPattern.coordToKey([x, y]))
      newCells.add(VisualPattern.coordToKey([x, y + 1]))
      newCells.add(VisualPattern.coordToKey([x + 1, y]))
      newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
    }
    return newCells
  }
}
// Pattern 4: 'n×(n+1)/2'
// Itérations:
// n=1      n=2        n=3
// ■       ■        ■
//         ■ ■      ■ ■
//                  ■ ■ ■
const pattern5:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/79dbcbbf-d2b5-4578-857e-fcdccb4fb8af/2023-03-22-10-30-31.png?format=2500w',
  visualId: 3,
  shapeDefault: shapeCarre,
  fonction: (n:number) => n * (n + 1) / 2,
  formule: '\\dfrac{n\\times (n+1)}{2}',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: VisualPattern) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = VisualPattern.keyToCoord(key)
      newCells.add(VisualPattern.coordToKey([x, y]))
      newCells.add(VisualPattern.coordToKey([x + 1, y]))
      newCells.add(VisualPattern.coordToKey([x, y + 1]))
    }
    return newCells
  }
}
// Pattern 5: '4×n + 1'
// Itérations:
// n=1      n=2
// ■   ■    ■       ■
//   ■        ■   ■
// ■   ■        ■
//            ■   ■
//          ■       ■
const pattern6:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/272cb8f2-585b-4b90-aca5-a115fe8b555d/vp5_3.png?format=2500w',
  visualId: 4,
  shapeDefault: shapeCarre,
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [1, 1],
      [2, 2],
      [0, 2],
      [0, 0],
      [2, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let x = 0; x <= 2 * n; x++) {
      for (let y = 0; y <= 2 * n; y++) {
        if (x === y || x + y === 2 * n) {
          newCells.add(VisualPattern.coordToKey([x, y]))
        }
      }
    }
    return newCells
  }
}
// Pattern 6: '4×n + 1'
// Itérations:
// n=1      n=2
//   ■        ■   ■        ■   ■   ■
// ■ ■ ■    ■ ■ ■ ■ ■    ■ ■ ■ ■ ■ ■ ■
//   ■        ■   ■        ■   ■   ■
const pattern7:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/a3f4ea08-cdcb-46c2-bcc8-bd6aa2722f96/720875_orig.png?format=2500w',
  visualId: 15,
  shapeDefault: shapeCarre,
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [1, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 1]
    ]
  ),
  iterate: function (this: VisualPattern) {
    const newCells = new Set<string>()
    const keys = Array.from(this.cells)
    for (let i = 0; i < this.cells.size; i++) {
      const key = keys[i]
      const [x, y] = VisualPattern.keyToCoord(key)
      if (i === keys.length - 1) {
        newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
        newCells.add(VisualPattern.coordToKey([x + 1, y - 1]))
        newCells.add(VisualPattern.coordToKey([x + 1, y]))
        newCells.add(VisualPattern.coordToKey([x, y]))
        newCells.add(VisualPattern.coordToKey([x + 2, y]))
      } else {
        newCells.add(VisualPattern.coordToKey([x, y]))
      }
    }
    return newCells
  }
}

// Pattern 7: 'n^2'
// Itérations:
// n=1      n=2
//
//                        ■
//           ■          ■ ■ ■
// ■       ■ ■ ■      ■ ■ ■ ■ ■
const pattern8:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/bda4693c-4923-4c87-a3a1-06ef7762c45f/4203089_orig.png?format=2500w',
  visualId: 16,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * x,
  formule: 'n^2',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    const newCells = new Set<string>()
    if (n === undefined) n = 1
    for (let i = 0; i < n; i++) { // de ligne 0 à n
      let x = i
      for (let j = i; j < 2 * n - i - 1; j++) { // la ligne commence à i et finit à
        newCells.add(VisualPattern.coordToKey([x++, i]))
      }
    }
    return newCells
  }
}
const pattern9:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/09099fb7-f01e-49d4-a328-25507dde66e5/4982399.png?format=2500w',
  visualId: 101,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x ** 2 + 4,
  formule: 'n^2 + 4',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [0, 2],
      [2, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 0]))
    newCells.add(VisualPattern.coordToKey([1 + n, 0]))
    newCells.add(VisualPattern.coordToKey([0, 1 + n]))
    newCells.add(VisualPattern.coordToKey([1 + n, 1 + n]))
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}
const pattern10:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/9f3f398b-13e6-45a1-8929-446af89cb1d6/2020-09-08-09-47-44_orig.png?format=2500w',
  visualId: 391,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * x + 2 * x,
  formule: '(n+1)^2-1',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1],
      [1, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if (!(i === n && j === n)) {
          newCells.add(VisualPattern.coordToKey([i, j]))
        }
      }
    }
    return newCells
  }
}
const pattern11:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/9ef9630a-170f-41ec-9b43-a698a57cfa0e/vp22_orig.png?format=2500w',
  visualId: 296,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 4 * x + 4,
  formule: '4\\times n + 4',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [0, 1],
      [0, 2],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n + 1; i++) {
      for (let j = 0; j <= n + 1; j++) {
        if (i === 0 || i === n + 1 || j === 0 || j === n + 1) {
          newCells.add(VisualPattern.coordToKey([i, j]))
        }
      }
    }
    return newCells
  }
}

// J'ai decidé de décaler le rang du pattern sur l'image le rang 1 correspond à mon rang 2.
const pattern12:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/d2fc2e2a-14e2-4446-85c0-3ba743bb5adf/8815256_orig.png?format=2500w',
  visualId: 108,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * x + 1,
  formule: 'n^2 + 1',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 0]))
    newCells.add(VisualPattern.coordToKey([n, n]))
    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

// J'ai decidé de décaler le rang du pattern sur l'image le rang 1 correspond à mon rang 2.
const pattern13:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/7fc51d33-c4af-4d94-9786-b7d75aab62a8/2163990_orig.png?format=2500w',
  visualId: 114,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 3 * x,
  formule: '3\\times n',
  type: 'linéaire',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [0, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        newCells.add(VisualPattern.coordToKey([0, 0]))
      } else {
        newCells.add(VisualPattern.coordToKey([i, 0]))
        newCells.add(VisualPattern.coordToKey([0, i]))
        if (i > 1) newCells.add(VisualPattern.coordToKey([i - 1, i - 1]))
      }
    }
    return newCells
  }
}

const pattern14:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/1098eb03-4083-40d7-9d63-c4cbc87f1093/682934_orig.png?format=2500w',
  visualId: 115,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 7 * x,
  formule: '7\\times n',
  type: 'linéaire',
  pattern: new VisualPattern(
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 2],
      [2, 2],
      [2, 3],
      [0, 3]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let j = 0; j <= 3; j++) {
      for (let i = 0; i <= 2 * n; i++) {
        if (j < 2) {
          if (i > 0 && i < 2 * n) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
        if (j === 2) {
          newCells.add(VisualPattern.coordToKey([i, j]))
        }
        if (j === 3) {
          if (i % 2 === 0) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
      }
    }
    return newCells
  }
}
const pattern15:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/c3792615-d769-4c6b-a0f5-5c4397fe5d1b/7970874_orig.png?format=2500w',
  visualId: 116,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 8 * x - 1,
  formule: '8\\times n - 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 2],
      [2, 2],
      [2, 3],
      [0, 3]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let j = 0; j <= 4; j++) {
      for (let i = 0; i <= 2 * n; i++) {
        if (j < 2) {
          if (i > 0 && i < 2 * n) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
        if (j === 2) {
          newCells.add(VisualPattern.coordToKey([i, j]))
        }
        if (j === 3) {
          if (i % 2 === 0) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
        if (j === 4) {
          if (i % 2 === 0 && i > 1 && i < 2 * n) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
      }
    }
    return newCells
  }
}

const pattern16:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/b9f7df36-66e8-452a-8619-06c1161736a3/2023-07-03_05-43-43.png?format=2500w',
  visualId: 128,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 4 * x - 3,
  formule: '4\\times n - 3',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 1]

    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 1; i < n; i++) {
      newCells.add(VisualPattern.coordToKey([i, 1]))
      newCells.add(VisualPattern.coordToKey([i + 1, 1]))
      newCells.add(VisualPattern.coordToKey([0.5 + (i - 1) * 3, 0]))
      newCells.add(VisualPattern.coordToKey([1.5 + (i - 1) * 3, 0]))
      newCells.add(VisualPattern.coordToKey([2.5 + (i - 1) * 3, 0]))
    }
    return newCells
  }
}

const pattern17:PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/a9b947a5-1a65-49cd-ab8d-ff824ffbf718/2023-07-03_04-23-55.png?format=2500w',
  visualId: 85,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 * (x * x + x),
  formule: '2\\times (n^2 +  n)',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newCells.add(VisualPattern.coordToKey([n + i, n + j]))
      }
    }
    return newCells
  }
}

const pattern18: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/fbb334a6-f77e-402d-b438-c78f294ff6b3/2023-07-17_06-56-59.png?format=2500w',
  visualId: 93,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 + 2 * x * (1 + x),
  formule: '2\\times (n^2+2\\times n + 1)',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 0],
      [1, 2],
      [1, 3]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 1]))
    for (let j = 0; j < 2 * n + 2; j++) {
      for (let i = 1; i <= n; i++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    newCells.add(VisualPattern.coordToKey([n + 1, 1]))
    return newCells
  }
}

const pattern19: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/9e7e0715-850c-4ce4-9b3c-7b9d5b93bd75/2023-07-06_00-51-38.png?format=2500w',
  visualId: 91,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x ** 2 + 4 * x + 2,
  formule: 'n^2+4\\times n + 2',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i < 2 * n + 1; i++) {
      newCells.add(VisualPattern.coordToKey([i, 0]))
    }
    for (let i = n; i < 2 * n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    for (let i = n; i < 3 * n + 2; i++) {
      newCells.add(VisualPattern.coordToKey([i, n]))
    }
    return newCells
  }
}

const pattern20: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/b78ea1f9-f4ff-4121-964a-cb0ff2be2afc/2023-07-06_01-18-35.png?format=2500w',
  visualId: 94,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x * (x + 1) / 2 + 2,
  formule: '\\dfrac{n\\times (n+1)}{2}+2',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 0]))
    newCells.add(VisualPattern.coordToKey([n + 1, 0]))
    for (let i = 1; i <= n; i++) {
      for (let j = n - i; j >= 0; j--) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

// J'ai transposé horizontalement pour prendre moins de place
const pattern21: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/62fb6a8b-01d1-4d0c-8cac-7eeb30fbba41/4528553_orig.png?format=2500w',
  visualId: 165,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 * x + 3,
  formule: '2\\times n + 3',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 1],
      [2, 1]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= 2 * n; i++) {
      if (i === n) {
        newCells.add(VisualPattern.coordToKey([i, 0]))
        newCells.add(VisualPattern.coordToKey([i, 2]))
      }
      newCells.add(VisualPattern.coordToKey([i, 1]))
    }
    return newCells
  }
}

/**
 * Trie les coordonnées de cubes dans l'espace pour que les cubes du dessus ou de droite
 * recouvrent ceux du dessous ou de gauche.
 * On trie d'abord par z croissant (du bas vers le haut), puis par y croissant (de gauche à droite),
 * puis par x croissant (de l'arrière vers l'avant).
 */
const rangeCubes = function (coords: [number, number, number][]): [number, number, number][] {
  // Regrouper par z croissant
  const byZ = new Map<number, [number, number, number][]>()
  for (const coord of coords) {
    const z = coord[2]
    if (!byZ.has(z)) byZ.set(z, [])
    byZ.get(z)!.push(coord)
  }
  const result: [number, number, number][] = []
  const zs = Array.from(byZ.keys()).sort((a, b) => a - b)
  for (const z of zs) {
    const groupZ = byZ.get(z)!
    // Regrouper par y décroissant dans chaque z
    const byY = new Map<number, [number, number, number][]>()
    for (const coord of groupZ) {
      const y = coord[1]
      if (!byY.has(y)) byY.set(y, [])
      byY.get(y)!.push(coord)
    }
    const ys = Array.from(byY.keys()).sort((a, b) => b - a)
    for (const y of ys) {
      const groupY = byY.get(y)!
      // Trier par x croissant dans chaque (z, y)
      groupY.sort((a, b) => a[0] - b[0])
      result.push(...groupY)
    }
  }
  return result
}

const pattern22: PatternRiche3D = {
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => (x + 1) * (x + 2) / 2,
  formule: '\\dfrac{(n+1)\\times (n+2)}{2}',
  type: 'degré2',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0],
      [0, 0, 1],
      [1, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []

    for (let i = -Math.round(n / 2); i < n + Math.round(n / 2); i++) {
      for (let j = 0; j <= n - i - Math.round(n / 2); j++) {
        cubes.push([i, 0, j])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern23: PatternRiche3D = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/34b73461-9c26-4e8c-a979-82a32a319f1e/1188365_orig.png?format=2500w',
  visualId: 155,
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => 6 * x - 5,
  formule: '6\\times n-5',
  type: 'affine',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let i = -n + 0.5; i <= n - 1.5; i += 1) {
      cubes.push([i, -0.5, n - 1])
    }

    for (let i = -n + 0.5; i <= n - 1.5; i += 1) {
      cubes.push([-0.5, i, n - 1])
    }

    for (let i = 0; i <= 2 * n - 2; i++) {
      cubes.push([-0.5, -0.5, i])
    }

    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern24: PatternRiche3D = {
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => (2 * x ** 3 + 3 * x ** 2 + x) / 6,
  formule: '\\dfrac{2\\times n^3 + 3\\times n^2 + n}{6}',
  type: 'degré3',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n:number) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      for (let y = 0; y < n - z; y++) {
        for (let x = 0; x < n - z; x++) {
          cubes.push([x - 1, n - y - 2, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern25: PatternRiche3D = {
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => x ** 3,
  formule: 'n^3',
  type: 'degré3',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    const demiPas = n / 2
    for (let z = 0; z < n; z++) {
      for (let y = 0 - demiPas; y < n - demiPas; y++) {
        for (let x = 0 - demiPas; x < n - demiPas; x++) {
          cubes.push([x, y, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}
const pattern26: PatternRiche3D = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/4150fdf6-f9ee-47f8-bc47-d96b8455c073/4158599_orig.png?format=2500w',
  visualId: 28,
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => x ** 3 - (x - 1) ** 3,
  formule: '3\\times n^2 - 3\\times n + 1',
  type: 'degré2',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const demiPas = n / 2
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z === 0) {
        for (let y = 0; y < n; y++) {
          for (let x = 0; x < n; x++) {
            cubes.push([x - demiPas, y - demiPas, z])
          }
        }
      } else {
        for (let y = 0; y < n; y++) {
          cubes.push([0 - demiPas, y - demiPas, z]) // Ajouter la première colonne de chaque ligne
        }
        for (let x = 0; x < n; x++) {
          cubes.push([x - demiPas, n - 1 - demiPas, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}
const pattern27: PatternRiche3D = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/17ccbdb3-2047-47f4-94cb-1ed0723982cd/8681279_orig.png?format=2500w',
  visualId: 46,
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => 5 * x - 4,
  formule: '5\\times n - 4',
  type: 'affine',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z === 0) {
        for (let y = -n + 1; y <= n - 1; y++) {
          cubes.push([0, y, 0])
        }
        for (let x = -n + 1; x <= n - 1; x++) {
          cubes.push([x, 0, 0])
        }
      } else {
        cubes.push([0, 0, z])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern28: PatternRiche3D = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/af167f89-9c72-4ba5-b406-697f59d73412/9861425_orig.png?format=2500w',
  visualId: 52,
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),

  fonction: (x:number) => 2 * x ** 2 - x,
  formule: 'n\\times (2\\times n - 1)',
  type: 'degré2',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z < n - 1) {
        for (let y = n - z - 1; y >= z - n + 1; y--) {
          cubes.push([-0.5, y - 0.5, z])
        }
        for (let x = z - n + 1; x <= n - z - 1; x++) {
          cubes.push([x - 0.5, -0.5, z])
        }
      } else {
        cubes.push([-0.5, -0.5, z])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}
const pattern29: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/5c72d74d-af6b-437e-a1a2-69495c67202d/2018-10-14-13-34-36_orig.png?format=2500w',
  visualId: 263,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 2 * x + 1,
  formule: '2\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 1],
      [1, 0],
      [1, 2]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      newCells.add(VisualPattern.coordToKey([n - i, i]))
      newCells.add(VisualPattern.coordToKey([n - i, 2 * n - i]))
    }
    newCells.add(VisualPattern.coordToKey([0, n]))
    return newCells
  }
}

const pattern30: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/c3833797-d82a-4c4b-bff7-d22d877c000b/2018-11-18-11-34-08_orig.png?format=2500w',
  visualId: 266,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 3 * x + 2,
  formule: '3\\times n + 2',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 0]))
    newCells.add(VisualPattern.coordToKey([4, 0]))
    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

const pattern31: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/3b345e8a-ccab-4fb2-bec6-f21b650d79bc/2023-07-05_15-04-34.png?format=2500w',
  visualId: 256,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 3 * x + 1,
  formule: '3\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 1; i < n + 2; i++) {
      newCells.add(VisualPattern.coordToKey([i, n - 1]))
      if (i < n + 1) {
        newCells.add(VisualPattern.coordToKey([i, n]))
      }
    }
    for (let j = 0; j > -n; j--) {
      newCells.add(VisualPattern.coordToKey([0, j + n - 1]))
    }
    return newCells
  }
}

const pattern32: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/382218dd-df17-4747-8215-cbe3f950f453/p4_orig.png?format=2500w',
  visualId: 257,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x ** 2 + 4 * x - 2,
  formule: 'n^2 + 4\\times n - 2',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 1],
      [2, 2]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (x === y) {
          for (let k = 0; k < n; k++) {
            for (let l = 0; l < n; l++) {
              newCells.add(VisualPattern.coordToKey([x + k, y + l]))
            }
          }
        }
      }
    }
    return newCells
  }
}

const pattern33: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/d9c26deb-510e-43fc-85c5-4573f5d60735/vp54_2_orig.png?format=2500w',
  visualId: 54,
  shapeDefault: shapeCarre,
  fonction: (x:number) => x + 1,
  formule: 'n+1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let x = 0; x <= n; x++) {
      newCells.add(VisualPattern.coordToKey([x, 0]))
    }
    return newCells
  }
}

const pattern34: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/1fc58a54-b378-407b-9bea-b9a136fca28f/4700362_orig.png?format=2500w',
  visualId: 72,
  shapeDefault: shapeCarre,
  fonction: (x:number) => 8 * x ** 2 + 4 * x + 1,
  formule: '8\\times n^2 + 4\\times n + 1',
  type: 'degré2',
  pattern: new VisualPattern(
    [
      [-2, -2], [-2, 2], [2, -2], [2, 2],
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 0], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ].map(([x, y]) => [x + 2, y + 2] as [number, number])
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        newCells.add(VisualPattern.coordToKey([x, y]))
        newCells.add(VisualPattern.coordToKey([x + 3 * n + 1, y]))
        newCells.add(VisualPattern.coordToKey([x + 3 * n + 1, y + 3 * n + 1]))
        newCells.add(VisualPattern.coordToKey([x, y + 3 * n + 1]))
        const m = 3 * n + 1
        for (let i = n; i < m; i++) {
          for (let j = n; j < m; j++) {
            newCells.add(VisualPattern.coordToKey([i, j]))
          }
        }
      }
    }
    return newCells
  }
}
const pattern35: PatternRiche = {
  shapeDefault: shapeLosange,
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/fe162543-f853-4705-9964-6ceceb0959a3/9292613_orig.png?format=2500w',
  visualId: 75,
  fonction: (x:number) => 4 * x,
  formule: '4\\times n',
  type: 'linéaire',
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (const cell of this.cells) {
      const [x, y] = VisualPattern.keyToCoord(cell)
      if (this.cells.has(VisualPattern.coordToKey([x + 1, y])) && !this.cells.has(VisualPattern.coordToKey([x, y + 1]))) {
        newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
        newCells.add(VisualPattern.coordToKey([x + 1, y]))
        newCells.add(VisualPattern.coordToKey([x, y]))
      } else {
        newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
      }
      if (this.cells.has(VisualPattern.coordToKey([x - 1, y])) && !this.cells.has(VisualPattern.coordToKey([x, y + 1]))) {
        newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
        newCells.add(VisualPattern.coordToKey([x + 1, y]))
        newCells.add(VisualPattern.coordToKey([x + 2, y]))
      } else {
        newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
      }
    }
    return newCells
  }
}
const pattern36: PatternRiche3D = {
  shapeDefault: shapeCubeIso(),
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/7181e027-b3bc-4960-af21-07f38e5ebf03/9571721_orig.png?format=2500w',
  visualId: 79,
  fonction: (x:number) => (x * (x + 1) / 2) ** 2,
  formule: '\\left(\\dfrac{n\\times (n+1)}{2}\\right)^2',
  type: 'autre',
  pattern: new VisualPattern3D(
    [
      [0, 0, 0]
    ]
  ),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const altitude = function (base:number, etage:number) {
      let h = 0
      for (let i = 0; i < etage; i++) {
        h += base--
      }
      return h
    }
    const cubes: [number, number, number][] = []
    for (let arete = n; arete > 0; arete--) {
      const etage = n - arete
      for (let x = 0; x < arete; x++) {
        for (let y = 0; y < arete; y++) {
          for (let z = 0; z < arete; z++) {
            cubes.push([x, n - y, z + altitude(n, etage)])
          }
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern37: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/e0ee90d8-a577-4ce3-877f-e4b52fcead83/2023-10-11_11-20-15.png?format=2500w',
  visualId: 254,
  fonction: (x:number) => x ** 2 + 2 * x + 4,
  formule: 'n^2+2\\times n+4',
  type: 'degré2',
  shapeDefault: shapeSoleil,
  pattern: new VisualPattern(
    [
      [1, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2],
      [1, 3]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 1]))
    newCells.add(VisualPattern.coordToKey([1, 0]))
    newCells.add(VisualPattern.coordToKey([1, n + 2]))
    for (let i = 1; i <= n + 1; i++) {
      for (let j = 1; j <= n + 1; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

const pattern38: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/24421acb-3211-41ba-8974-7b33abb8bb70/vp8_orig.png?format=2500w',
  visualId: 281,
  fonction: (x:number) => x ** 2 + x + 2,
  formule: 'n^2+n+2',
  type: 'degré2',
  shapeDefault: shapeCarreArrondi,
  pattern: new VisualPattern(
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 1]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([n, 0]))
    newCells.add(VisualPattern.coordToKey([n, n + 1]))
    for (let i = 0; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

const pattern39: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/f817210e-0b89-42bb-8a37-dc3afa804f3a/vp10_orig.png?format=2500w',
  visualId: 283,
  fonction: (x:number) => x * x,
  formule: 'n^2',
  type: 'degré2',
  shapeDefault: shapeLosange,
  pattern: new VisualPattern(
    [
      [0, 0]
    ]),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newCells.add(VisualPattern.coordToKey([i * 0.5 - j * 0.5, j * 0.5 + i * 0.5]))
      }
    }
    return newCells
  }
}

const pattern40: PatternRiche3D = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/c3f1ff49-ca30-47ab-8ee9-acb7e253aa87/vp11_orig.png?format=2500w',
  visualId: 284,
  shapeDefault: shapeCubeIso('cubeIso', 0, 0),
  fonction: (x:number) => 2 * x + 2,
  formule: '2\\times n + 2',
  type: 'affine',
  pattern: new VisualPattern3D(
    [
      [-1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [-1, 0, 1]
    ]),
  iterate3d: function (this: VisualPattern3D, n) {
    if (n === undefined) n = 1
    const cubes: [number, number, number][] = []
    for (let z = 0; z <= n; z++) {
      cubes.push([-1, 0, z])
      if (z > 0 && z < n) cubes.push([1, 0, z])
    }
    cubes.push([0, 0, 0])
    cubes.push([1, 0, 0])
    const newCells = new Set<string>()

    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = VisualPattern3D.coordToKey([x, y, z])
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(VisualPattern3D.coordToKey([x, y, z]))
    }
    return newCells
  }
}

const pattern41: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/58e493c4-91ae-408a-9eec-e5ac101bc5e0/vp24_orig.png?format=2500w',
  visualId: 298,
  fonction: (x:number) => (x + 2) * (x + 1) / 2 + 1,
  formule: '\\dfrac{(n+1)(n+2)}{2} + 1',
  type: 'degré2',
  shapeDefault: shapeEtoile4Branches,
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, 0]))
    for (let j = 1; j < n + 2; j++) {
      for (let i = 0; i < j; i++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    return newCells
  }
}
const pattern42: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/048b9214-fee6-400a-a28c-aa420054c3c9/vp30_orig.png?format=2500w',
  visualId: 300,
  shapeDefault: shapeChat,
  fonction: (x:number) => 2 * x * (x + 1) + 1,
  formule: '2\\times n\\times (n+1) + 1',
  type: 'degré3',
  pattern: new VisualPattern(
    [
      [0, 0],
      [2, 0],
      [0, 2],
      [2, 2],
      [1, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = n + 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        for (let k = 0; k < i; k++) {
          newCells.add(VisualPattern.coordToKey([n + 1 - i + j * 2, n - i + 1 + k * 2]))
        }
      }
    }
    return newCells
  }
}

const pattern43: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/7a81a3ec-f14f-4d8e-b440-bd24f8f3a58f/vp46_orig.png?format=2500w',
  visualId: 307,
  shapeDefault: shapeCarreArrondi,
  fonction: (x:number) => 3 * x + 1,
  formule: '3\\times n + 1',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1]
    ]
  ),
  iterate: function (this: VisualPattern, n?: number) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i < n; i++) {
      for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
          newCells.add(VisualPattern.coordToKey([i + x, i + y]))
        }
      }
    }
    return newCells
  }
}
const pattern44: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/a4735ae7-f530-45ae-aef0-4b46fb6cefa1/vp47_orig.png?format=2500w',
  visualId: 308,
  shapeDefault: shapeSoleil,
  fonction: (x:number) => 4 * x + 2,
  formule: '4\\times n + 2',
  type: 'affine',
  pattern: new VisualPattern(
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
      [1, 2],
      [2, 2]
    ]
  ),
  iterate: function (this: VisualPattern, n?: number) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 1; i <= 2 * n; i++) {
      newCells.add(VisualPattern.coordToKey([0, i]))
      newCells.add(VisualPattern.coordToKey([1, i]))
    }
    newCells.add(VisualPattern.coordToKey([0, 0]))
    newCells.add(VisualPattern.coordToKey([2, 2]))

    return newCells
  }
}

const pattern45: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/78b879d4-b760-4bd2-8ad3-316bb5607126/vp50_orig.png?format=2500w',
  visualId: 311,
  fonction: (x:number) => x ** 2 + x + 3,
  formule: 'n^2+n+3',
  type: 'degré2',
  shapeDefault: shapeCarreArrondi,
  pattern: new VisualPattern(
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 0],
      [2, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n?: number) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(VisualPattern.coordToKey([0, n]))
    newCells.add(VisualPattern.coordToKey([n + 1, 0]))
    newCells.add(VisualPattern.coordToKey([n + 1, n]))
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n + 1; j++) {
        newCells.add(VisualPattern.coordToKey([1 + i, j]))
      }
    }
    return newCells
  }
}

const pattern46: PatternRiche = {
  visualImg: 'https://images.squarespace-cdn.com/content/v1/647f8c4916cb6662848ba604/c894cc7a-f78b-401d-a6fb-0c8eabceb28c/vp55_orig.png?format=2500w',
  visualId: 316,
  fonction: (x:number) => x ** 2 + x,
  formule: 'n^2+n',
  type: 'degré2',
  shapeDefault: shapeHexagone,
  pattern: new VisualPattern(
    [
      [0, 0],
      [1, 0]
    ]
  ),
  iterate: function (this: VisualPattern, n?: number) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newCells.add(VisualPattern.coordToKey([i, j]))
      }
    }
    for (let i = 1; i < n; i++) {
      newCells.add(VisualPattern.coordToKey([i, n]))
    }
    newCells.add(VisualPattern.coordToKey([n, 0]))
    return newCells
  }
}

const listePatternsPreDef: (PatternRiche | PatternRiche3D)[] = [
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7,
  pattern8,
  pattern9,
  pattern10,
  pattern11,
  pattern12,
  pattern13,
  pattern14,
  pattern15,
  pattern16,
  pattern17,
  pattern18,
  pattern19,
  pattern20,
  pattern21,
  pattern22,
  pattern23,
  pattern24,
  pattern25,
  pattern26,
  pattern27,
  pattern28,
  pattern29,
  pattern30,
  pattern31,
  pattern32,
  pattern33,
  pattern34,
  pattern35,
  pattern36,
  pattern37,
  pattern38,
  pattern39,
  pattern40,
  pattern41,
  pattern42,
  pattern43,
  pattern44,
  pattern45,
  pattern46
]
/**
 * Liste des patterns prédéfinis, triés par type.
 * - listePattern2d : tous les patterns 2D
 * - listePattern3d : tous les patterns 3D
 * - listePatternAffine : tous les patterns affines
 * - listePatternLineaire : tous les patterns linéaires
 * - listePatternDegre2 : tous les patterns de degré 2
 * - listePatternDegre3 : tous les patterns de degré 3
 */
const listePattern2d: PatternRiche[] = listePatternsPreDef.filter((p) => p instanceof VisualPattern) as PatternRiche[]
const listePattern3d: PatternRiche3D[] = listePatternsPreDef.filter((p) => p instanceof VisualPattern3D) as PatternRiche3D[]
const listePatternAffine: (PatternRiche | PatternRiche3D)[] = listePatternsPreDef.filter((p) => p.type === 'affine')
const listePatternLineaire: (PatternRiche | PatternRiche3D)[] = listePatternsPreDef.filter((p) => p.type === 'linéaire')
const listePatternDegre2: (PatternRiche | PatternRiche3D)[] = listePatternsPreDef.filter((p) => p.type === 'degré2')
const listePatternDegre3: (PatternRiche | PatternRiche3D)[] = listePatternsPreDef.filter((p) => p.type === 'degré3')
const listePattern2dAffine: PatternRiche[] = listePattern2d.filter((p) => p instanceof VisualPattern && p.type === 'affine')
const listePattern2dLineaire: PatternRiche[] = listePattern2d.filter((p) => p instanceof VisualPattern && p.type === 'linéaire')
const listePatternAutres: (PatternRiche | PatternRiche3D)[] = listePattern2d.filter((p) => p.type === 'autre')

export { listePatternsPreDef, listePatternAutres, listePattern2d, listePattern3d, listePatternAffine, listePatternLineaire, listePatternDegre2, listePatternDegre3, listePattern2dAffine, listePattern2dLineaire }
