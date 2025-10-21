// src/lib/mathFonctions/Stat.test.ts
import { describe, expect, test } from 'vitest'
import Stat from '../../src/lib/mathFonctions/Stat'

describe('Stat', () => {
  test('constructor with number array and basic properties', () => {
    const s = new Stat([1, 2, 3, 4])
    expect(s.moyenne()).toBe(2.5)
    expect(s.min()).toBe(1)
    expect(s.max()).toBe(4)
    expect(s.etendue()).toBe(3)
  })

  test('constructor with frequency pairs expands properly', () => {
    const s = new Stat([
      [1, 2],
      [3, 1],
      [5, 4],
    ]) // expands to [1,1,3,5,5,5,5]
    expect(s.moyenne()).toBeCloseTo(25 / 7)
    expect(s.mediane()).toBe(5)
    expect(s.mode()).toEqual([5])
  })

  test('empty series throws', () => {
    expect(() => new Stat([] as any)).toThrow()
  })

  test('variance, ecartType and coefVariation on known series', () => {
    const s = new Stat([1, 2, 3, 4])
    expect(s.moyenne()).toBeCloseTo(2.5)
    expect(s.variance()).toBeCloseTo(1.25)
    expect(s.ecartType()).toBeCloseTo(Math.sqrt(1.25))
    expect(s.mediane()).toBeCloseTo(2.5)
    expect(s.min()).toBe(1)
    expect(s.max()).toBe(4)
    expect(s.etendue()).toBe(3)
    expect(s.coefVariation()).toBeCloseTo(s.ecartType() / s.moyenne())
  })

  test('mediane for odd-length series', () => {
    const s = new Stat([5, 1, 3])
    expect(s.mediane()).toBe(3)
  })

  test('mode single and multiple modes', () => {
    const single = new Stat([1, 2, 2, 3])
    expect(single.mode()).toEqual([2])

    const multiple = new Stat([1, 1, 2, 2, 3])
    const modes = multiple
      .mode()
      .slice()
      .sort((a, b) => a - b)
    expect(modes).toEqual([1, 2])
  })

  test('static methods match instance methods', () => {
    const tableau = [2, 4, 4, 6]
    const instance = new Stat(tableau)

    expect(Stat.moyenne(tableau)).toBeCloseTo(instance.moyenne())
    expect(Stat.variance(tableau)).toBeCloseTo(instance.variance())
    expect(Stat.ecartType(tableau)).toBeCloseTo(instance.ecartType())
    expect(Stat.mediane(tableau)).toBeCloseTo(instance.mediane())
    // compare modes sorted for determinism
    expect(
      Stat.mode(tableau)
        .slice()
        .sort((a, b) => a - b),
    ).toEqual(
      instance
        .mode()
        .slice()
        .sort((a, b) => a - b),
    )
    expect(Stat.min(tableau)).toBe(instance.min())
    expect(Stat.max(tableau)).toBe(instance.max())
    expect(Stat.etendue(tableau)).toBe(instance.etendue())
    expect(Stat.coefVariation(tableau)).toBeCloseTo(instance.coefVariation())
  })

  test('boiteAMoustache retourne quantiles, moustaches et valeurs aberrantes correctement', () => {
    const s = new Stat([1, 2, 2, 3, 4, 100])
    const box = s.boiteAMoustache()
    // valeurs triées
    expect(box.valeurs).toEqual([1, 2, 2, 3, 4, 100])
    // quantiles
    expect(box.q1).toBe(2)
    expect(box.q2).toBeCloseTo(2.5)
    expect(box.q3).toBe(4)
    // IQR et fences
    expect(box.iqr).toBe(2)
    expect(box.borneInferieure).toBe(-1)
    expect(box.borneSuperieure).toBe(7)
    // whiskers (valeurs extrêmes non-outliers)
    expect(box.moustacheInferieure).toBe(1)
    expect(box.moustacheSuperieure).toBe(4)
    // outliers
    expect(box.valeursAberrantes).toEqual([100])
    // min / max
    expect(box.min).toBe(1)
    expect(box.max).toBe(100)
  })

  test('traceBoiteAMoustache retourne une chaîne et contient les quantiles attendus', () => {
    const s = new Stat([1, 2, 2, 3, 4, 100])
    const out = s.traceBoiteAMoustache({ size: 25 })
    expect(typeof out).toBe('string')
    expect(out.length).toBeGreaterThan(0)
    // vérifier que la représentation contient au moins les valeurs Q1 et Q3 connues
    expect(out).toContain('2')
    expect(out).toContain('4')
  })

  test('createSerieFromQuartiles respecte q1,q2,q3,min,max et renvoie des entiers si demandé', () => {
    const serie = Stat.createSerieFromQuartiles({
      q1: 20,
      mediane: 45,
      q3: 60,
      min: 5,
      max: 95,
      n: 20,
      isInteger: true,
    })
    expect(serie.length).toBe(20)
    // triée et extrêmes corrects
    expect(serie).toEqual([...serie].sort((a, b) => a - b))
    expect(serie[0]).toBe(5)
    expect(serie[serie.length - 1]).toBe(95)
    // tous les éléments sont des entiers et dans les bornes
    expect(serie.every((v) => Number.isInteger(v))).toBe(true)
    expect(serie.every((v) => v >= 5 && v <= 95)).toBe(true)
    // quartiles exacts
    const qs = Stat.quartiles(serie)
    expect(qs.q1).toBe(20)
    expect(qs.q2).toBe(45)
    expect(qs.q3).toBe(60)
  })
})
