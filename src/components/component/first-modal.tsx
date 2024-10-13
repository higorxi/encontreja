'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { X, Gift } from 'lucide-react'
import { ModalLogin } from './modal-login'

export default function FirstTimePanel() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 })
  const [showModalLogin, setShowModalLogin] = useState(false)

  useEffect(() => {
    const hasSeenPanel = localStorage.getItem('hasSeenPanel')
    if (!hasSeenPanel) {
      setIsVisible(true)
      localStorage.setItem('hasSeenPanel', 'true')
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const endDate = new Date('2024-10-30T23:59:59').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = endDate - now

      if (difference > 0) {
        setTimeLeft({
          Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          Segundos: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
        setTimeLeft({ Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 })
      }
    }, 1000)

    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (!isVisible) return null

  const closeModal = () => {
    setIsVisible(false)
    setIsModalOpen(false)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const renderContent = () => (
    <div className="p-6 overflow-y-auto max-h-full">
      <div className="flex items-center justify-center mb-4">
        <Gift className="h-12 w-12 text-yellow-300" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-2 text-yellow-300">Oferta Especial!</h2>
      <p className="text-center mb-4 text-lg">
        Prestadores de serviço, não percam!
      </p>
      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <p className="text-sm text-center font-medium">
          Cadastre-se agora e ganhe
        </p>
        <p className="text-4xl font-bold text-center text-yellow-300">
          30 DIAS GRÁTIS
        </p>
        <p className="text-sm text-center">
          de exibição premium
        </p>
      </div>
      <p className="text-sm text-center mb-4">
        Promoção válida de 01/11/2024 até 30/11/2024
      </p>
      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <p className="text-center text-sm mb-2">Tempo restante de promoção:</p>
        <div className="flex justify-center space-x-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-white text-blue-800 rounded-lg p-2 w-16 mb-1">
                <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
              </div>
              <div className="text-xs uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
      <ul className="mb-6 text-sm">
        <li className="flex items-center mb-2">
          <span className="mr-2 text-yellow-300">✓</span> Aumente sua visibilidade
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 text-yellow-300">✓</span> Conquiste novos clientes
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-yellow-300">✓</span> Sem custos por 30 dias
        </li>
        
      </ul>
      <Button 
        className="w-full bg-yellow-400 text-blue-800 hover:bg-yellow-300 transition-colors duration-300 font-bold text-lg py-3"
        onClick={() => {
          setShowModalLogin(true)
        }}
      >
        Cadastrar-se Agora
      </Button>
    </div>
  )

  return (
    <>
      {isMobile && !isModalOpen ? (
        <button
          onClick={toggleModal}
          className="fixed bottom-4 right-4 bg-blue-600 text-yellow-300 rounded-full p-3 shadow-lg animate-bounce z-50"
        >
          <Gift className="h-8 w-8" />
        </button>
      ) : (
        <div className={`fixed ${isMobile ? 'inset-0' : 'bottom-4 right-4 w-96'} bg-gradient-to-br from-blue-600 to-blue-800 text-white ${isMobile ? 'rounded-none' : 'rounded-lg'} shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${isMobile ? 'animate-fade-in' : 'animate-slide-up'} z-50 flex flex-col`}>
          <div className="absolute top-2 right-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={closeModal}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      )}
      {showModalLogin && <ModalLogin onClose={closeModal} />}
    </>
  )
}