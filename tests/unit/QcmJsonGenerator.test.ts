import { describe, it, expect } from 'vitest'
import QcmJsonGenerator from '../../src/exercices/QcmJsonGenerator'
import type { QcmJsonData } from '../../src/exercices/QcmJsonGenerator'
import { createSimpleQcm, createMultipleChoiceQcm, createQcmFromJson, parseQcmJson } from '../../src/exercices/utils/qcmUtils'

describe('QcmJsonGenerator', () => {
  const validQcmData: QcmJsonData = {
    titre: 'Test QCM',
    questions: [
      {
        enonce: 'Combien font 2 + 2 ?',
        reponses: ['4', '3', '5', '22'],
        corrections: [
          'Correct ! 2 + 2 = 4',
          'Erreur de calcul',
          'Erreur de calcul',
          'Ce n\'est pas une concaténation'
        ]
      },
      {
        enonce: 'Quelle est la racine carrée de 16 ?',
        reponses: ['4', '8', '2', '6'],
        corrections: [
          'Correct ! √16 = 4',
          'Erreur : 8² = 64',
          'Erreur : 2² = 4',
          'Erreur : 6² = 36'
        ]
      }
    ]
  }

  const validMultipleChoiceData: QcmJsonData = {
    titre: 'QCM à réponses multiples',
    questions: [
      {
        enonce: 'Quels sont les nombres pairs ?',
        reponses: ['2', '3', '4', '5'],
        bonnesReponses: [true, false, true, false],
        corrections: [
          'Correct ! 2 est pair',
          'Faux ! 3 est impair',
          'Correct ! 4 est pair',
          'Faux ! 5 est impair'
        ]
      }
    ]
  }

  describe('constructor', () => {
    it('creates a QCM generator with valid data', () => {
      const generator = new QcmJsonGenerator(validQcmData)

      expect(generator.titre).toBe('Test QCM')
      expect(generator.nbQuestions).toBe(2)
      expect(generator.nbQuestionsModifiable).toBe(true)
    })

    it('sets single question when only one question is provided', () => {
      const singleQuestionData: QcmJsonData = {
        titre: 'Single Question',
        questions: [validQcmData.questions[0]]
      }

      const generator = new QcmJsonGenerator(singleQuestionData)

      expect(generator.nbQuestions).toBe(1)
      expect(generator.nbQuestionsModifiable).toBe(false)
    })

    it('applies custom options when provided', () => {
      const dataWithOptions: QcmJsonData = {
        ...validQcmData,
        options: {
          vertical: true,
          ordered: true,
          lastChoice: 5
        }
      }

      const generator = new QcmJsonGenerator(dataWithOptions)

      expect(generator.options.vertical).toBe(true)
      expect(generator.options.ordered).toBe(true)
      expect(generator.options.lastChoice).toBe(5)
    })
  })

  describe('versionOriginale', () => {
    it('sets up the first question correctly', () => {
      const generator = new QcmJsonGenerator(validQcmData)
      generator.versionOriginale()

      expect(generator.enonce).toBe('Combien font 2 + 2 ?')
      expect(generator.reponses).toEqual(['4', '3', '5', '22'])
      expect(generator.corrections).toEqual([
        'Correct ! 2 + 2 = 4',
        'Erreur de calcul',
        'Erreur de calcul',
        'Ce n\'est pas une concaténation'
      ])
    })

    it('handles multiple choice questions', () => {
      const generator = new QcmJsonGenerator(validMultipleChoiceData)
      generator.versionOriginale()

      expect(generator.bonnesReponses).toEqual([true, false, true, false])
    })

    it('throws error when no questions available', () => {
      const emptyData: QcmJsonData = {
        titre: 'Empty',
        questions: []
      }

      const generator = new QcmJsonGenerator(emptyData)

      expect(() => generator.versionOriginale()).toThrow('Aucune question disponible')
    })
  })

  describe('versionAleatoire', () => {
    it('selects a random question', () => {
      const generator = new QcmJsonGenerator(validQcmData)
      generator.versionAleatoire()

      // Vérifier que l'énoncé correspond à une des questions
      const enonces = validQcmData.questions.map(q => q.enonce)
      expect(enonces).toContain(generator.enonce)
    })

    it('throws error when no questions available', () => {
      const emptyData: QcmJsonData = {
        titre: 'Empty',
        questions: []
      }

      const generator = new QcmJsonGenerator(emptyData)

      expect(() => generator.versionAleatoire()).toThrow('Aucune question disponible')
    })
  })

  describe('validateJsonData', () => {
    it('validates correct data structure', () => {
      expect(QcmJsonGenerator.validateJsonData(validQcmData)).toBe(true)
    })

    it('rejects data without title', () => {
      const invalidData = { ...validQcmData }
      delete (invalidData as any).titre

      expect(QcmJsonGenerator.validateJsonData(invalidData)).toBe(false)
    })

    it('rejects data without questions', () => {
      const invalidData = {
        titre: 'Test',
        questions: []
      }

      expect(QcmJsonGenerator.validateJsonData(invalidData)).toBe(false)
    })

    it('rejects questions without enonce', () => {
      const invalidData: any = {
        titre: 'Test',
        questions: [
          {
            reponses: ['A', 'B']
          }
        ]
      }

      expect(QcmJsonGenerator.validateJsonData(invalidData)).toBe(false)
    })

    it('rejects questions with insufficient responses', () => {
      const invalidData: any = {
        titre: 'Test',
        questions: [
          {
            enonce: 'Question ?',
            reponses: ['A'] // Moins de 2 réponses
          }
        ]
      }

      expect(QcmJsonGenerator.validateJsonData(invalidData)).toBe(false)
    })

    it('rejects questions with mismatched bonnesReponses length', () => {
      const invalidData: any = {
        titre: 'Test',
        questions: [
          {
            enonce: 'Question ?',
            reponses: ['A', 'B', 'C'],
            bonnesReponses: [true, false] // Longueur différente
          }
        ]
      }

      expect(QcmJsonGenerator.validateJsonData(invalidData)).toBe(false)
    })
  })

  describe('fromJson static method', () => {
    it('creates instance from valid JSON data', () => {
      const generator = QcmJsonGenerator.fromJson(validQcmData)

      expect(generator).toBeInstanceOf(QcmJsonGenerator)
      expect(generator.titre).toBe('Test QCM')
    })
  })

  describe('nouvelleVersion', () => {
    it('generates exercise version successfully', () => {
      const generator = new QcmJsonGenerator(validQcmData)

      expect(() => generator.nouvelleVersion()).not.toThrow()
      expect(generator.listeQuestions).toBeDefined()
      expect(generator.listeCorrections).toBeDefined()
    })
  })
})

describe('QCM Utils Functions', () => {
  const testQcmData: QcmJsonData = {
    titre: 'Test Utils QCM',
    questions: [
      {
        enonce: 'Test question for utils',
        reponses: ['Good', 'Bad1', 'Bad2'],
        corrections: ['Correct!', 'Wrong', 'Wrong']
      }
    ]
  }

  describe('createSimpleQcm', () => {
    it('creates a simple QCM class', () => {
      const QcmClass = createSimpleQcm(
        'Test question',
        ['Good', 'Bad1', 'Bad2'],
        ['Correct!', 'Wrong', 'Wrong'],
        'Test Title'
      )

      // Les classes générées n'ont pas de constructeur avec paramètres
      expect(QcmClass).toBeDefined()
      expect(typeof QcmClass).toBe('function')
    })
  })

  describe('createMultipleChoiceQcm', () => {
    it('creates a multiple choice QCM class', () => {
      const QcmClass = createMultipleChoiceQcm(
        'Select all correct',
        ['A', 'B', 'C'],
        [true, false, true],
        ['Good', 'Bad', 'Good'],
        'Multiple Choice Test'
      )

      expect(QcmClass).toBeDefined()
      expect(typeof QcmClass).toBe('function')
    })
  })

  describe('createQcmFromJson', () => {
    it('creates QCM class from JSON data', () => {
      const QcmClass = createQcmFromJson(testQcmData)

      expect(QcmClass).toBeDefined()
      expect(typeof QcmClass).toBe('function')
    })

    it('throws error for invalid JSON data', () => {
      const invalidData: any = {
        titre: 'Invalid',
        questions: []
      }

      expect(() => createQcmFromJson(invalidData)).toThrow('Les données JSON ne sont pas valides')
    })
  })

  describe('parseQcmJson', () => {
    it('parses valid JSON string', () => {
      const jsonString = JSON.stringify(testQcmData)
      const parsed = parseQcmJson(jsonString)

      expect(parsed).toEqual(testQcmData)
    })

    it('throws error for malformed JSON', () => {
      const invalidJson = '{ "titre": "Invalid"'

      expect(() => parseQcmJson(invalidJson)).toThrow('JSON malformé')
    })

    it('throws error for invalid QCM structure', () => {
      const invalidData = JSON.stringify({
        titre: 'Invalid',
        questions: []
      })

      expect(() => parseQcmJson(invalidData)).toThrow('Format JSON invalide')
    })
  })
})
