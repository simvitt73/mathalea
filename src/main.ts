import 'boxicons/css/boxicons.min.css'
import './app.css'
import { mount } from 'svelte'
import App from './components/App.svelte'
import './bugsnag'
import './modules/stats'

const app = mount(App, {
  target: document.getElementById('appMathalea') as HTMLElement,
})

export default app
