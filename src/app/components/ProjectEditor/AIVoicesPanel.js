import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../Config.js';
import '../CSS/AIVoicesPanel.css';

const AIVoicesPanel = ({
  voices,
  setVoices,
  selectedVoice,
  setSelectedVoice,
  aiVoiceText,
  setAiVoiceText,
  handleGenerateAiAudio,
  isAddingToTimeline,
}) => {
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [uniqueLanguages, setUniqueLanguages] = useState([]);
  const [uniqueGenders, setUniqueGenders] = useState([]);

  // Fetch unique languages and genders for dropdowns
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Assuming you have an endpoint to get all voices for populating dropdowns
        const response = await fetch(`${API_BASE_URL}/api/ai-voices/get-all-voices`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setUniqueLanguages([...new Set(data.map((v) => v.language))]);
        setUniqueGenders([...new Set(data.map((v) => v.gender))]);
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setUniqueLanguages([]);
        setUniqueGenders([]);
      }
    };
    fetchMetadata();
  }, []);

  // Fetch filtered voices based on language and gender
  useEffect(() => {
    const fetchFilteredVoices = async () => {
      try {
        let url = `${API_BASE_URL}/api/ai-voices/get-all-voices`;
        if (filterLanguage && filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language-and-gender?language=${encodeURIComponent(filterLanguage)}&gender=${encodeURIComponent(filterGender)}`;
        } else if (filterLanguage) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language?language=${encodeURIComponent(filterLanguage)}`;
        } else if (filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-gender?gender=${encodeURIComponent(filterGender)}`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setVoices(data);
      } catch (error) {
        console.error('Error fetching filtered voices:', error);
        setVoices([]);
      }
    };
    fetchFilteredVoices();
  }, [filterLanguage, filterGender, setVoices]);

  return (
    <div className="section-content ai-voices-panel">
      <div className="fixed-header">
        <h3>AI Voice</h3>
        <textarea
          value={aiVoiceText}
          onChange={(e) => setAiVoiceText(e.target.value)}
          placeholder="Enter text for text-to-speech..."
          className="ai-voice-textarea"
        />
        <button
          className="generate-voice-button"
          onClick={handleGenerateAiAudio}
          disabled={!aiVoiceText.trim() || !selectedVoice || isAddingToTimeline}
        >
          Generate AI Voice
        </button>

        <div className="filter-section">
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="filter-select"
          >
            <option value="">All Languages</option>
            {uniqueLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="filter-select"
          >
            <option value="">All Genders</option>
            {uniqueGenders.map((gen) => (
              <option key={gen} value={gen}>
                {gen}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="scrollable-voices">
        {voices.length === 0 ? (
          <div className="empty-state">No voices available!</div>
        ) : (
          <div className="voice-list">
            {voices.map((voice) => (
              <div
                key={voice.voiceName}
                className={`voice-item ${selectedVoice?.voiceName === voice.voiceName ? 'selected' : ''}`}
                onClick={() => setSelectedVoice(voice)}
              >
                <img
                  src={voice.profileUrl}
                  alt={`${voice.humanName || voice.voiceName} profile`}
                  className="voice-profile-image"
                />
                <div className="voice-details">
                  <div className="voice-title">{voice.humanName || voice.voiceName}</div>
                  <div className="voice-info">{`${voice.language} (${voice.gender})`}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIVoicesPanel;