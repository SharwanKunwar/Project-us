
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProposalCard from './components/ProposalCard';
import SurpriseCard from './components/SurpriseCard';
import DatePickerCard from './components/DatePickerCard';
import FoodSelectionCard from './components/FoodSelectionCard';
import ConfirmationCard from './components/ConfirmationCard';
import PaymentCard from './components/PaymentCard';
import QRCodeCard from './components/QRCodeCard';
import FinalCard from './components/FinalCard';
import ProgressIndicator from './components/ProgressIndicator';
import SoundToggle from './components/SoundToggle';
import FloatingHearts from './components/FloatingHearts';

const TOTAL_STEPS = 8;

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    // Disable context menu for extra cuteness
    const handleContextMenu = (e) => {
      if (Math.random() > 0.7) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const playSound = () => {
    if (!isSoundEnabled) return;

    // Create a simple beep sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Audio context not available, silently fail
    }
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleReplay = () => {
    setCurrentStep(1);
    setSelectedDate(null);
    setSelectedFood(null);
  };

  const handleDateChange = (dateData) => {
    setSelectedDate(dateData);
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-50 to-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Sound Toggle */}
      <SoundToggle
        isSoundEnabled={isSoundEnabled}
        onToggle={() => setIsSoundEnabled(!isSoundEnabled)}
      />

      {/* Floating hearts cursor effect */}
      <FloatingHearts />

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-4">
        {currentStep < TOTAL_STEPS && (
          <ProgressIndicator current={currentStep} total={TOTAL_STEPS} />
        )}

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <ProposalCard
              key="proposal"
              onYes={handleNextStep}
              onPlaySound={playSound}
            />
          )}

          {currentStep === 2 && (
            <SurpriseCard
              key="surprise"
              onNext={handleNextStep}
              onPlaySound={playSound}
            />
          )}

          {currentStep === 3 && (
            <DatePickerCard
              key="datepicker"
              onNext={handleNextStep}
              onPlaySound={playSound}
              onDateChange={handleDateChange}
            />
          )}

          {currentStep === 4 && (
            <FoodSelectionCard
              key="food"
              onNext={handleNextStep}
              onPlaySound={playSound}
              onFoodSelect={handleFoodSelect}
            />
          )}

          {currentStep === 5 && (
            <ConfirmationCard
              key="confirmation"
              selectedFood={selectedFood}
              onNext={handleNextStep}
              onPlaySound={playSound}
            />
          )}

          {currentStep === 6 && (
            <PaymentCard
              key="payment"
              onNext={handleNextStep}
              onPlaySound={playSound}
            />
          )}

          {currentStep === 7 && (
            <QRCodeCard
              key="qrcode"
              onNext={handleNextStep}
              onPlaySound={playSound}
            />
          )}

          {currentStep === 8 && (
            <FinalCard
              key="final"
              onReplay={handleReplay}
              onPlaySound={playSound}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
