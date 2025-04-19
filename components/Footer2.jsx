"use client"
import React, { useState, useEffect } from 'react';

const FooterWithModals = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const moveCarousel = (index) => {
    const inner = document.getElementById('carousel-inner');
    if (inner) {
      inner.style.transform = `translateX(-${index * 100}%)`;
      const dots = document.querySelectorAll('#carousel-dots button');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  };

  const toggleFAQ = (e) => {
    const answer = e.currentTarget.nextElementSibling;
    if (answer) {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">Verco</h3>
            <p>For a cleaner, greener future.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="list-none p-0 space-y-1">
              <li>Email : <a href="mailto:contact@verco.dz" className="underline text-gray-300">contact@verco.dz</a></li>
              <li>Tél : +213 770 00 00 00</li>
              <li>Tél : +213 550 00 00 00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Légal</h4>
            <ul className="list-none p-0 space-y-1">
              <li><span className="underline cursor-pointer text-gray-300" onClick={() => openModal('privacy')}>Politique de confidentialité</span></li>
              <li><span className="underline cursor-pointer text-gray-300" onClick={() => openModal('cookies')}>Gestion des cookies</span></li>
              <li><span className="underline cursor-pointer text-gray-300" onClick={() => openModal('legal')}>Mentions légales</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © 2025 Verco. Tous droits réservés.
        </div>
      </footer>

      {/* MODALS */}
      {activeModal === 'privacy' && (
        <div className="modal fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-lg relative">
            <span className="absolute top-4 right-5 text-xl cursor-pointer" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold mb-4">Politique de confidentialité</h2>
            <p>Nous collectons uniquement les données nécessaires pour assurer nos services (email, nom, téléphone). Vos informations ne sont ni vendues ni partagées sans votre consentement. Vous pouvez demander la suppression de vos données à tout moment.</p>
          </div>
        </div>
      )}

      {activeModal === 'cookies' && (
        <div className="modal fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-lg relative">
            <span className="absolute top-4 right-5 text-xl cursor-pointer" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold mb-4">Gestion des cookies</h2>
            <p>Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser le trafic du site. Vous pouvez configurer vos préférences ou désactiver les cookies à tout moment via votre navigateur.</p>
          </div>
        </div>
      )}

      {activeModal === 'legal' && (
        <div className="modal fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-lg relative">
            <span className="absolute top-4 right-5 text-xl cursor-pointer" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold mb-4">Mentions légales</h2>
            <p>Ce site est édité par La Team 1 du GGC Challenge à Alger. Contact : contact@verco.dz</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterWithModals;