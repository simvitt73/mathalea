class InteractiveClock extends HTMLElement {
  buttonContainer!: HTMLDivElement
  buttonHour!: HTMLButtonElement
  buttonMinute!: HTMLButtonElement
  currentAction = 'hour' // Par défaut, on déplace l'aiguille des heures
  handHour!: SVGElement
  handMinute!: SVGElement
  private _isDynamic = true
  radius = 200

  constructor () {
    super()
    this.hour = this.getAttribute('hour') ? Number(this.getAttribute('hour')) : 12
    this.minute = this.getAttribute('minute') ? Number(this.getAttribute('minute')) : 0
    this.handHour = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    this.handMinute = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    this.buttonContainer = document.createElement('div')
    this.isDynamic = !(this.getAttribute('isDynamic') === 'false')
  }

  /**
   * Méthode appelée lorsque l'élément est ajouté au DOM
   */
  connectedCallback () {
    const container = document.createElement('div')
    container.className = 'flex flex-wrap items-center'

    const svgContainer = document.createElement('div')
    svgContainer.className = 'flex-1 flex justify-center items-center p-8'

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svgContainer.appendChild(svg)
    svg.setAttribute('width', '200')
    svg.setAttribute('height', '200')
    svg.setAttribute('viewBox', '-200 -200 400 400')

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', '0')
    circle.setAttribute('cy', '0')
    circle.setAttribute('r', '200')
    circle.setAttribute('stroke', 'black')
    circle.setAttribute('stroke-opacity', '0.8')
    circle.setAttribute('fill', 'none')
    svg.appendChild(circle)

    const circleCentral = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circleCentral.setAttribute('cx', '0')
    circleCentral.setAttribute('cy', '0')
    circleCentral.setAttribute('r', '10')
    circleCentral.setAttribute('stroke', 'black')
    circleCentral.setAttribute('fill', 'black')
    svg.appendChild(circleCentral)

    // Ajouter les nombres de 1 à 12
    for (let i = 1; i <= 12; i++) {
      const angle = (i / 12) * 2 * Math.PI
      const x = Math.sin(angle) * 160
      const y = -Math.cos(angle) * 160
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', x.toString())
      text.setAttribute('y', y.toString())
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('alignment-baseline', 'middle')
      text.setAttribute('font-size', '20')
      text.textContent = i.toString()
      text.setAttribute('pointer-events', 'none')
      svg.appendChild(text)
    }

    // Ajouter les petits traits pour chaque graduation
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * 2 * Math.PI
      let x1 = Math.sin(angle) * 190
      let y1 = -Math.cos(angle) * 190
      const x2 = Math.sin(angle) * 200
      const y2 = -Math.cos(angle) * 200
      if (i % 5 === 0) {
        x1 = Math.sin(angle) * 180
        y1 = -Math.cos(angle) * 180
      }

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', x1.toString())
      line.setAttribute('y1', y1.toString())
      line.setAttribute('x2', x2.toString())
      line.setAttribute('y2', y2.toString())
      line.setAttribute('stroke', 'black')
      if (i % 5 === 0) {
        line.setAttribute('stroke-width', '5')
      }
      svg.appendChild(line)
    }

    // Ajouter les aiguilles
    if (this.isDynamic) {
      this.handHour = this.createHand(100, 'hour')
      this.handMinute = this.createHand(150, 'minute')
      this.updateHandHour()
      this.updateHandMinute()
      svg.appendChild(this.handHour)
      svg.appendChild(this.handMinute)
    }

    container.appendChild(svgContainer)

    // Ajouter les boutons
    if (this.isDynamic) {
      this.buttonContainer.className = 'flex-1 flex flex-col items-center justify-center'

      this.buttonHour = document.createElement('button')
      const defaultClassesForButtons = 'inline-block px-6 py-2.5 mr-10 my-5 ml-6 bg-coopmaths-action dark:bg-coopmathsdark-action text-coopmaths-canvas dark:text-coopmathsdark-canvas font-medium text-xs leading-tight uppercase rounded shadow-md transform hover:shadow-lg focus:bg-coopmaths-action-lightest dark:focus:bg-coopmathsdark-action-lightest focus:shadow-lg focus:outline-none focus:ring-0 active:bg-coopmaths-action-lightest dark:active:bg-coopmathsdark-action-lightest active:shadow-lg transition duration-150 ease-in-out'
      this.buttonHour.className = defaultClassesForButtons
      this.buttonHour.textContent = 'Cliquer pour déplacer la petite aiguille'
      this.buttonHour.onclick = () => this.setCurrentAction('hour')
      this.buttonContainer.appendChild(this.buttonHour)

      this.buttonMinute = document.createElement('button')
      this.buttonMinute.className = defaultClassesForButtons
      this.buttonMinute.classList.add('bg-opacity-50')
      this.buttonMinute.textContent = 'Cliquer pour déplacer la grande aiguille'
      this.buttonMinute.onclick = () => this.setCurrentAction('minute')
      this.buttonContainer.appendChild(this.buttonMinute)
      container.appendChild(this.buttonContainer)
    }

    this.appendChild(container)

    if (this.isDynamic) {
      svg.addEventListener('click', (event) => this.moveHand(event))
    }
  }

  /**
   * Création d'une aiguille
   */
  createHand (length: number, type: 'hour' | 'minute') {
    const hand = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    hand.setAttribute('x1', '0')
    hand.setAttribute('y1', '0')
    hand.setAttribute('stroke', 'black')
    hand.setAttribute('stroke-width', type === 'hour' ? '6' : '4')
    hand.setAttribute('stroke-linecap', 'round')
    hand.setAttribute('class', type + '-hand')
    return hand
  }

  updateHandHour (adaptHourHandToMinutes = true) {
    let angle = (this.hour / 12) * 2 * Math.PI
    if (adaptHourHandToMinutes) {
      angle += (this.minute / 360) * Math.PI
    }
    const x2 = Math.sin(angle) * 100
    const y2 = -Math.cos(angle) * 100
    this.handHour.setAttribute('x2', x2.toString())
    this.handHour.setAttribute('y2', y2.toString())
  }

  updateHandMinute () {
    const angle = (this.minute / 60) * 2 * Math.PI
    const x2 = Math.sin(angle) * 150
    const y2 = -Math.cos(angle) * 150
    this.handMinute.setAttribute('x2', x2.toString())
    this.handMinute.setAttribute('y2', y2.toString())
  }

  setCurrentAction (action: 'hour' | 'minute') {
    this.currentAction = action
    // Mettre à jour l'apparence des boutons pour indiquer quel est actif
    if (action === 'minute') {
      this.buttonHour.classList.add('bg-opacity-50')
      this.buttonMinute.classList.remove('bg-opacity-50')
    } else {
      this.buttonHour.classList.remove('bg-opacity-50')
      this.buttonMinute.classList.add('bg-opacity-50')
    }
  }

  moveHand (event: MouseEvent) {
    if (!this.isDynamic) return
    const rect = (event.target as SVGElement).getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    // Ne rien faire si on est trop près du centre
    if (Math.sqrt(x * x + y * y) < 20) return
    const angle = (Math.atan2(y, x) + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)
    const value = Math.round((angle / (2 * Math.PI)) * (this.currentAction === 'hour' ? 12 : 60))
    if (this.currentAction === 'hour') {
      this.hour = value
    } else {
      this.minute = value
    }
    // this.updateHandHour(!(this.currentAction === 'hour'))
    this.updateHandHour()
    this.updateHandMinute()
  }

  hideButtons () {
    this.buttonContainer.style.display = 'none'
  }

  disconnectedCallback () {
    // Code pour gérer la suppression de l'horloge du DOM
  }

  get hour () {
    return Number(this.getAttribute('hour'))
  }

  set hour (value: number) {
    this.setAttribute('hour', value.toString())
  }

  get isDynamic () {
    return this._isDynamic
  }

  set isDynamic (value: boolean) {
    this._isDynamic = value
    this.buttonContainer.style.display = value ? 'flex' : 'none'
  }

  get minute () {
    return Number(this.getAttribute('minute'))
  }

  set minute (value) {
    this.setAttribute('minute', value.toString())
  }
}

export default function handleInteractiveClock () {
  if (customElements.get('interactive-clock') === undefined) {
    customElements.define('interactive-clock', InteractiveClock)
  }
}
