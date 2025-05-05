import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Appointment from './components/Appointment.js'
import AdminLogin from './components/AdminLogin.js'
import AdminRegister from './components/AdminRegister.js'
import PatientLogin from './components/PatientLogin.js'
import PatientRegister from './components/PatientRegister.js'
import Footer from './components/Footer.js'

export function createApp() {
  return `
    ${Header()}
    ${Hero()}
    ${Services()}
    ${Appointment()}
    ${AdminLogin()}
    ${AdminRegister()}
    ${PatientLogin()}
    ${PatientRegister()}
    ${Footer()}
  `
}
