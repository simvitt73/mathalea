import type { Shape2D } from '../Figures2D'
import { shapeCarre, shapeCubeIso, shapeCubeIsoRot40 } from '../figures2d/shapes2d'
import { PatternNumerique } from '../polygones'
export type PatternRiche = {
  shapeDefault: Shape2D,
  fonction: (x: number) => number,
  formule: string,
  type: 'linéaire' | 'affine' | 'degré2' | 'degré3' | 'autre',
  pattern: PatternNumerique,
  iterate: (this: PatternNumerique, n?:number) => Set<string>
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
const pattern0:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 2 * x + 1,
  formule: '2\\times n + 1',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [0, 1],
      [1, 0],
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()

    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      let replaced = false
      // Check neighbor below
      if (this.hasCell(x, y - 1)) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x, y + 1]))
        replaced = true
      }

      // Check neighbor to the left
      if (this.hasCell(x - 1, y)) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y]))
        replaced = true
      }

      // If no replacement triggered, keep original cell
      if (!replaced) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
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
const pattern1:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * x,
  formule: 'n^2',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      newCells.add(PatternNumerique.coordToKey([x, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      newCells.add(PatternNumerique.coordToKey([x, y + 1]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y + 1]))
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
const pattern2:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 2 * x - 1,
  formule: '2\\times n -1',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      if (y === 0) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x, y + 1]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      } else {
        newCells.add(PatternNumerique.coordToKey([x, y]))
      }
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

const pattern3:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * x + x,
  formule: 'n^2 + n',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [0, 1]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      newCells.add(PatternNumerique.coordToKey([x, y]))
      newCells.add(PatternNumerique.coordToKey([x, y + 1]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y + 1]))
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
const pattern4:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (n:number) => n * (n + 1) / 2,
  formule: '\\dfrac{n\\times (n+1)}{2}',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      newCells.add(PatternNumerique.coordToKey([x, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      newCells.add(PatternNumerique.coordToKey([x, y + 1]))
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
const pattern5:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [1, 1],
      [2, 2],
      [0, 2],
      [0, 0],
      [2, 0]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let x = 0; x <= 2 * n; x++) {
      for (let y = 0; y <= 2 * n; y++) {
        if (x === y || x + y === 2 * n) {
          newCells.add(PatternNumerique.coordToKey([x, y]))
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
const pattern6:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [1, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 1]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    const keys = Array.from(this.cells)
    for (let i = 0; i < this.cells.size; i++) {
      const key = keys[i]
      const [x, y] = PatternNumerique.keyToCoord(key)
      if (i === keys.length - 1) {
        newCells.add(PatternNumerique.coordToKey([x + 1, y + 1]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y - 1]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y]))
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x + 2, y]))
      } else {
        newCells.add(PatternNumerique.coordToKey([x, y]))
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
const pattern7:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * x,
  formule: 'n^2',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    const newCells = new Set<string>()
    if (n === undefined) n = 1
    for (let i = 0; i < n; i++) { // de ligne 0 à n
      let x = i
      for (let j = i; j < 2 * n - i - 1; j++) { // la ligne commence à i et finit à
        newCells.add(PatternNumerique.coordToKey([x++, i]))
      }
    }
    return newCells
  }
}
const pattern8:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x ** 2 + 4,
  formule: 'n^2 + 4',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [0, 2],
      [2, 0]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(PatternNumerique.coordToKey([0, 0]))
    newCells.add(PatternNumerique.coordToKey([1 + n, 0]))
    newCells.add(PatternNumerique.coordToKey([0, 1 + n]))
    newCells.add(PatternNumerique.coordToKey([1 + n, 1 + n]))
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    return newCells
  }
}
const pattern9:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * x + 2 * x,
  formule: '(n+1)^2-1',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [0, 1],
      [1, 0]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if (!(i === n && j === n)) {
          newCells.add(PatternNumerique.coordToKey([i, j]))
        }
      }
    }
    return newCells
  }
}
const pattern10:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 4 * x + 4,
  formule: '4\\times n + 4',
  type: 'affine',
  pattern: new PatternNumerique(
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
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n + 1; i++) {
      for (let j = 0; j <= n + 1; j++) {
        if (i === 0 || i === n + 1 || j === 0 || j === n + 1) {
          newCells.add(PatternNumerique.coordToKey([i, j]))
        }
      }
    }
    return newCells
  }
}
const pattern11:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * x + 1,
  formule: 'n^2 + 1',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 1]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(PatternNumerique.coordToKey([0, 0]))
    newCells.add(PatternNumerique.coordToKey([n, n]))
    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= n; j++) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    return newCells
  }
}
const pattern12:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 3 * x,
  formule: '3\\times n',
  type: 'linéaire',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 0],
      [0, 1]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        newCells.add(PatternNumerique.coordToKey([0, 0]))
      } else {
        newCells.add(PatternNumerique.coordToKey([i, 0]))
        newCells.add(PatternNumerique.coordToKey([0, i]))
        if (i > 1) newCells.add(PatternNumerique.coordToKey([i - 1, i - 1]))
      }
    }
    return newCells
  }
}

const pattern13:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 7 * x,
  formule: '7\\times n',
  type: 'linéaire',
  pattern: new PatternNumerique(
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
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let j = 0; j <= 3; j++) {
      for (let i = 0; i <= 2 * n; i++) {
        if (j < 2) {
          if (i > 0 && i < 2 * n) {
            newCells.add(PatternNumerique.coordToKey([i, j]))
          }
        }
        if (j === 2) {
          newCells.add(PatternNumerique.coordToKey([i, j]))
        }
        if (j === 3) {
          if (i % 2 === 0) {
            newCells.add(PatternNumerique.coordToKey([i, j]))
          }
        }
      }
    }
    return newCells
  }
}
const pattern14:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 8 * x - 1,
  formule: '8\\times n - 1',
  type: 'affine',
  pattern: new PatternNumerique(
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
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let j = 0; j <= 4; j++) {
      for (let i = 0; i <= 2 * n; i++) {
        if (j < 2) {
          if (i > 0 && i < 2 * n) {
            newCells.add(PatternNumerique.coordToKey([i, j]))
          }
        }
        if (j === 2) {
          newCells.add(PatternNumerique.coordToKey([i, j]))
        }
        if (j === 3) {
          if (i % 2 === 0) {
            newCells.add(PatternNumerique.coordToKey([i, j]))
          }
        }
        if (j === 4) {
          if (i % 2 === 0 && i > 1 && i < 2 * n) {
            newCells.add(PatternNumerique.coordToKey([i, j]))
          }
        }
      }
    }
    return newCells
  }
}

const pattern15:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 4 * x - 3,
  formule: '4\\times n - 3',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [0, 1]

    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 1; i < n; i++) {
      newCells.add(PatternNumerique.coordToKey([i, 1]))
      newCells.add(PatternNumerique.coordToKey([i + 1, 1]))
      newCells.add(PatternNumerique.coordToKey([0.5 + (i - 1) * 3, 0]))
      newCells.add(PatternNumerique.coordToKey([1.5 + (i - 1) * 3, 0]))
      newCells.add(PatternNumerique.coordToKey([2.5 + (i - 1) * 3, 0]))
    }
    return newCells
  }
}

const pattern16:PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 2 * (x * x + x),
  formule: '2\\times (n^2 +  n)',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newCells.add(PatternNumerique.coordToKey([n + i, n + j]))
      }
    }
    return newCells
  }
}

const pattern17: PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 2 + 2 * x * (1 + x),
  formule: '2\\times (n^2+2\\times n + 1)',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 0],
      [1, 2],
      [1, 3]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(PatternNumerique.coordToKey([0, 1]))
    for (let j = 0; j < 2 * n + 2; j++) {
      for (let i = 1; i <= n; i++) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    newCells.add(PatternNumerique.coordToKey([n + 1, 1]))
    return newCells
  }
}

const pattern18: PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x ** 2 + 4 * x + 2,
  formule: 'n^2+4\\times n + 2',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i < 2 * n + 1; i++) {
      newCells.add(PatternNumerique.coordToKey([i, 0]))
    }
    for (let i = n; i < 2 * n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    for (let i = n; i < 3 * n + 2; i++) {
      newCells.add(PatternNumerique.coordToKey([i, n]))
    }
    return newCells
  }
}

const pattern19: PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => x * (x + 1) / 2 + 2,
  formule: '\\dfrac{n\\times (n+1)}{2}+2',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0],
      [1, 0],
      [2, 0]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    newCells.add(PatternNumerique.coordToKey([0, 0]))
    newCells.add(PatternNumerique.coordToKey([n + 1, 0]))
    for (let i = 1; i <= n; i++) {
      for (let j = n - i; j >= 0; j--) {
        newCells.add(PatternNumerique.coordToKey([i, j]))
      }
    }
    return newCells
  }
}

const pattern20: PatternRiche = {
  shapeDefault: shapeCarre(),
  fonction: (x:number) => 2 * x + 3,
  formule: '2\\times n + 3',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 1],
      [2, 1]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    for (let i = 0; i <= 2 * n; i++) {
      if (i === n) {
        newCells.add(PatternNumerique.coordToKey([i, 0]))
        newCells.add(PatternNumerique.coordToKey([i, 2]))
      }
      newCells.add(PatternNumerique.coordToKey([i, 1]))
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

const project = function (x: number, y: number, z: number, n: number): [number, number] {
  // Projection isometric simple
  const xIso = (x + y) * 0.866 // x * cos(30°) = x * √3/2
  const yIso = 0.5 * (1 + n - x + y) + z // y * sin(30°) = y / 2
  return [xIso, yIso]
}
/**
 *
 * @param x une fonction pour calculer les coordonnées 2D d'un cube dans l'espace isométrique avec rotation de 10 degrés autour de z
 * @param y
 * @param z
 * @returns
 */
function projectRot40 (x: number, y: number, z: number, n:number): [number, number] {
  const xIso = (x + y) * 0.766 // x * cos(30°) = x * √3/2
  const yIso = 0.643 * (1 + n - x + y) + z // y * sin(30°) = y / 2
  return [xIso, yIso]
}
const pattern21: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => (x + 1) * (x + 2) / 2,
  formule: '\\dfrac{(n+1)\\times (n+2)}{2}',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 1],
      [0, 2],
      [0.866, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n - i; j++) {
        cubes.push([i, 0, j])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
  }
}

const pattern22: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => 6 * x - 5,
  formule: '6\\times n-5',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [0, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let i = 0; i <= 2 * n - 2; i++) {
      cubes.push([i, n - 1, n - 1])
    }

    for (let i = 0; i <= 2 * n - 2; i++) {
      cubes.push([n - 1, i, n - 1])
    }

    for (let i = 0; i <= 2 * n - 2; i++) {
      cubes.push([n - 1, n - 1, i])
    }

    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
    return newCells
  }
}

const pattern23: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => (2 * x ** 3 + 3 * x ** 2 + x) / 6,
  formule: '\\dfrac{2\\times n^3 + 3\\times n^2 + n}{6}',
  type: 'degré3',
  pattern: new PatternNumerique(
    [
      [0, 0.5],
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      for (let y = 1; y <= n - z; y++) {
        for (let x = 0; x <= n - z - 1; x++) {
          cubes.push([x, n - y, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
  }
}

const pattern24: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => x ** 3,
  formule: 'n^3',
  type: 'degré3',
  pattern: new PatternNumerique(
    [
      [0, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          cubes.push([x, n - y - 1, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
  }
}
const pattern25: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => x ** 3 - (x - 1) ** 3,
  formule: '3\\times n^2 - 3\\times n + 1',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z === 0) {
        for (let y = n - 1; y > -1; y--) {
          for (let x = 0; x < n; x++) {
            cubes.push([x, y, z])
          }
        }
      } else {
        for (let y = n - 1; y > -1; y--) {
          cubes.push([0, y, z]) // Ajouter la première colonne de chaque ligne
        }
        for (let x = 0; x < n; x++) {
          cubes.push([x, n - 1, z])
        }
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
  }
}
const pattern26: PatternRiche = {
  shapeDefault: shapeCubeIso(),
  fonction: (x:number) => 5 * x - 4,
  formule: '5\\times n - 4',
  type: 'affine',
  pattern: new PatternNumerique(
    [
      [0, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z === 0) {
        for (let y = 2 * n - 2; y > -1; y--) {
          cubes.push([n - 1, y, 0])
        }
        for (let x = 0; x <= 2 * n - 2; x++) {
          cubes.push([x, n - 1, 0])
        }
      } else {
        cubes.push([n - 1, n - 1, z])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(project(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(project(x, y, z, n)))
    }
    return newCells
  }
}

const pattern27: PatternRiche = {
  shapeDefault: shapeCubeIsoRot40(),

  fonction: (x:number) => 2 * x ** 2 - x,
  formule: 'n\\times (2\\times n - 1)',
  type: 'degré2',
  pattern: new PatternNumerique(
    [
      [0, 0.5]
    ]),
  iterate: function (this: PatternNumerique, n) {
    if (n === undefined) n = 1
    const newCells = new Set<string>()
    const cubes: [number, number, number][] = []
    for (let z = 0; z < n; z++) {
      if (z < n - 1) {
        for (let y = 2 * n - z - 2; y >= z; y--) {
          cubes.push([n - 1, y, z])
        }
        for (let x = z; x <= 2 * n - z - 2; x++) {
          cubes.push([x, n - 1, z])
        }
      } else {
        cubes.push([n - 1, n - 1, z])
      }
    }
    const cubesSorted = rangeCubes(cubes)
    for (const [x, y, z] of cubesSorted) {
      const key = PatternNumerique.coordToKey(projectRot40(x, y, z, n))
      if (newCells.has(key)) {
        newCells.delete(key) // Supprimer la cellule si elle existe déjà car en 3d il peut y avoir des superpositions et c'est la dernière qui doit être dessinée.
      }
      newCells.add(PatternNumerique.coordToKey(projectRot40(x, y, z, n)))
    }
    return newCells
  }
}

const listePatternsPreDef: PatternRiche[] = [
  pattern0,
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
  pattern27
]
export { listePatternsPreDef }
