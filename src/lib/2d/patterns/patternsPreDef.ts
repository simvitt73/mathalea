import { PatternNumerique } from '../polygones'
export type PatternRiche = {
  fonction: (x: number) => number,
  formule: string,
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
  fonction: (x:number) => 2 * x + 1,
  formule: '2\\times n + 1',
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
  fonction: (x:number) => x * x,
  formule: 'n^2',
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
  fonction: (x:number) => 2 * x - 1,
  formule: '2\\times n -1',
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
  fonction: (x:number) => x * x + x,
  formule: 'n^2 + n',
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
  fonction: (n:number) => n * (n + 1) / 2,
  formule: '\\frac{n\\times (n+1)}{2}',
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
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
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
  fonction: (n:number) => 4 * n + 1,
  formule: '4\\times n + 1',
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
  fonction: (x:number) => x * x,
  formule: 'n^2',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique, n) {
    const newCells = new Set<string>()
    if (n === undefined) n = 1
    for (let i = 0; i <= n; i++) { // de ligne 0 à n
      let x = i
      for (let j = i; j <= 2 * n - i; j++) { // la ligne commence à i et finit à
        newCells.add(PatternNumerique.coordToKey([x++, i]))
      }
    }
    return newCells
  }
}
const pattern8:PatternRiche = {
  fonction: (x:number) => x ** 2 + 4,
  formule: 'n^2 + 4',
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
  fonction: (x:number) => x * x + 2 * x,
  formule: '(n+1)^2-1',
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
  fonction: (x:number) => 4 * x + 4,
  formule: '4\\times n + 4',
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
  fonction: (x:number) => x * x + 1,
  formule: 'n^2 + 1',
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
  fonction: (x:number) => 3 * x,
  formule: '3\\times n',
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
  fonction: (x:number) => 7 * x,
  formule: '7\\times n',
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
  fonction: (x:number) => 8 * x - 1,
  formule: '8\\times n - 1',
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
  fonction: (x:number) => 4 * x - 3,
  formule: '4\\times n - 3',
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
      newCells.add(PatternNumerique.coordToKey([0.5 + (i - 1) * 3, 0]))
      newCells.add(PatternNumerique.coordToKey([1.5 + (i - 1) * 3, 0]))
      newCells.add(PatternNumerique.coordToKey([2.5 + (i - 1) * 3, 0]))
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
  pattern15
]
export { listePatternsPreDef }
