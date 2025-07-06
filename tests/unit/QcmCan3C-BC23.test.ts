import { describe, it, expect } from 'vitest'
import ExerciceQcmCan3C from '../../src/exercices/exemples/QcmCan3C-BC23'
import qcmData from '../../src/exercices/exemples/modele-qcm-bc23.json'

describe('QCM CAN 3e BC23', () => {
  it('validates JSON data structure', () => {
    expect(qcmData.titre).toBe('QCM - CAN 3e (BC23)')
    expect(qcmData.questions).toHaveLength(5)
  })

  it('validates all questions have correct structure', () => {
    qcmData.questions.forEach((question, index) => {
      expect(question.enonce).toBeDefined()
      expect(question.reponses).toHaveLength(4)
      expect(question.corrections).toHaveLength(4)
      expect(question.enonce.length).toBeGreaterThan(0)
    })
  })

  it('creates exercise class successfully', () => {
    expect(ExerciceQcmCan3C).toBeDefined()
    expect(typeof ExerciceQcmCan3C).toBe('function')
  })

  it('has proper LaTeX formatting in questions', () => {
    // Vérifier que les formules LaTeX sont bien formatées
    const latexQuestions = qcmData.questions.filter(q =>
      q.enonce.includes('$') || q.reponses.some(r => r.includes('$'))
    )

    expect(latexQuestions.length).toBeGreaterThan(0)

    latexQuestions.forEach(question => {
      // Vérifier que les $ sont bien appariés
      const dollarCount = (question.enonce.match(/\$/g) || []).length
      expect(dollarCount % 2).toBe(0)
    })
  })

  it('has meaningful corrections for each answer', () => {
    qcmData.questions.forEach((question, qIndex) => {
      question.corrections.forEach((correction, cIndex) => {
        expect(correction.length).toBeGreaterThan(10) // Corrections substantielles

        if (cIndex === 0) {
          // La première correction doit mentionner que c'est correct
          expect(correction.toLowerCase()).toMatch(/(correct|juste|bonne?)/)
        } else {
          // Les autres corrections doivent mentionner une erreur
          expect(correction.toLowerCase()).toMatch(/(erreur|faux|incorrect|attention)/)
        }
      })
    })
  })

  it('has appropriate difficulty levels in distractors', () => {
    qcmData.questions.forEach(question => {
      // Vérifier que les réponses sont distinctes
      const uniqueReponses = new Set(question.reponses)
      expect(uniqueReponses.size).toBe(question.reponses.length)

      // Vérifier qu'il n'y a pas de réponses vides
      question.reponses.forEach(reponse => {
        expect(reponse.trim().length).toBeGreaterThan(0)
      })
    })
  })

  it('covers multiple mathematical domains', () => {
    const enonces = qcmData.questions.map(q => q.enonce.toLowerCase())

    // Vérifier la présence de différents domaines mathématiques
    const hasExponents = enonces.some(e => e.includes('3^') || e.includes('^'))
    const hasFractions = enonces.some(e => e.includes('frac') || e.includes('fraction'))
    const hasAverage = enonces.some(e => e.includes('moyenne'))
    const hasDecimal = enonces.some(e => e.includes('décimale') || e.includes('10^'))

    expect(hasExponents).toBe(true)
    expect(hasFractions).toBe(true)
    expect(hasAverage).toBe(true)
    expect(hasDecimal).toBe(true)
  })
})
