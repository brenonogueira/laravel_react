import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/global.css'
import Layout from './Pages/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<Layout><ToastContainer /><App {...props} /></Layout>, el)
  },
})

InertiaProgress.init({ color: '#4B5563', showSpinner: true });