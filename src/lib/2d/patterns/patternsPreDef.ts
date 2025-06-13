import { PatternNumerique } from '../polygones'

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
const pattern0 = {
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
const pattern1 = {
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
const pattern2 = {
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

const pattern3 = {
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
const pattern4 = {
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
const pattern5 = {
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
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    const n = (this.cells.size - 1) / 4 + 1
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
const pattern6 = {
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
const pattern7 = {
  fonction: (x:number) => x * x,
  formule: 'n^2',
  pattern: new PatternNumerique(
    [
      [0, 0]
    ]
  ),
  iterate: function (this: PatternNumerique) {
    const newCells = new Set<string>()
    const n = Math.sqrt(this.cells.size)
    for (let i = 0; i <= n; i++) { // de ligne 0 à n
      let x = i
      for (let j = i; j <= 2 * n - i; j++) { // la ligne commence à i et finit à
        newCells.add(PatternNumerique.coordToKey([x++, i]))
      }
    }
    return newCells
  }
}
const listePatternsPreDef: { pattern: PatternNumerique, iterate: (this: PatternNumerique) => Set<string> }[] = [
  pattern0,
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7
]
export { listePatternsPreDef }
