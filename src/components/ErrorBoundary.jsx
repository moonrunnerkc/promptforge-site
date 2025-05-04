// src/components/ErrorBoundary.jsx

import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("💥 Error caught in ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-900 text-white min-h-screen">
          <h1 className="text-2xl font-bold mb-4">⚠️ Something broke.</h1>
          <p className="text-sm whitespace-pre-wrap">
            {this.state.error?.toString()}
          </p>
        </div>
      )
    }

    return this.props.children
  }
}
