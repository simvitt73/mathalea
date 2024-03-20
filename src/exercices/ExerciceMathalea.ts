import type QuestionMathalea from './QuestionMathalea'

export default class ExerciceMathalea {
  public questions: QuestionMathalea[]
  public meta: {
    about: string
    author: string
    dateFirstRelease?: Date
    dateLastUpdate?: Date
  }

  public constructor () {
    this.questions = []
    this.meta = {
      about: '',
      author: ''
    }
  }

  newDatas () {
    this.questions.forEach(question => question.newData())
  }
}
