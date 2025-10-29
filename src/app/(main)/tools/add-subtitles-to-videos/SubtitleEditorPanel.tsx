"use client";

import React, { useCallback, useEffect } from 'react';
import { SubtitleDTO } from './SubtitleClient';
import { debounce } from 'lodash';
import { FaTimes } from 'react-icons/fa';
import './SubtitleEditorPanel.css';

interface SubtitleEditorPanelProps {
  subtitle: SubtitleDTO;
  onUpdate: (updatedSubtitle: SubtitleDTO) => void;
  onClose: () => void;
  availableFonts: string[];
  onApplyToAll: (field: string, value: any) => void;
}

const googleFonts = [
  'Alumni Sans Pinstripe',
  'Amatic SC',
  'Amatic SC:700',
  'Arimo',
  'Arimo:700',
  'Arimo:700italic',
  'Arimo:italic',
  'Barriecito',
  'Barrio',
  'Birthstone',
  'Bungee Hairline',
  'Butcherman',
  'Carlito',
  'Carlito:700',
  'Carlito:700italic',
  'Carlito:italic',
  'Comic Neue',
  'Comic Neue:700',
  'Comic Neue:700italic',
  'Comic Neue:italic',
  'Courier Prime',
  'Courier Prime:700',
  'Courier Prime:700italic',
  'Courier Prime:italic',
  'Doto Black',
  'Doto ExtraBold',
  'Doto Rounded Bold',
  'Fascinate Inline',
  'Freckle Face',
  'Fredericka the Great',
  'Gelasio',
  'Gelasio:700',
  'Gelasio:700italic',
  'Gelasio:italic',
  'Imperial Script',
  'Kings',
  'Kirang Haerang',
  'Lavishly Yours',
  'Lexend Giga',
  'Lexend Giga:900',
  'Lexend Giga:700',
  'Montserrat Alternates',
  'Montserrat Alternates:900',
  'Montserrat Alternates:500italic',
  'Mountains of Christmas',
  'Mountains of Christmas:700',
  'Noto Sans Mono',
  'Noto Sans Mono:700',
  'Poiret One',
  'Rampart One',
  'Rubik Wet Paint',
  'Tangerine',
  'Tangerine:700',
  'Tinos',
  'Tinos:700',
  'Tinos:700italic',
  'Tinos:italic',
  'Yesteryear',
];

const SubtitleEditorPanel: React.FC<SubtitleEditorPanelProps> = ({
  subtitle,
  onUpdate,
  onClose,
  availableFonts,
  onApplyToAll
}) => {
  useEffect(() => {
    // Only load WebFont in the browser
    if (typeof window !== 'undefined') {
      import('webfontloader').then((WebFont) => {
        WebFont.load({
          google: {
            families: googleFonts,
          },
        });
      });
    }
  }, []);

  // Parse font family to extract weight and style
  const parseFont = (fontFamily: string) => {
    let weight = 'normal';
    let style = 'normal';
    let family = fontFamily;

    if (fontFamily.includes('Bold')) {
      weight = 'bold';
      family = fontFamily.replace(' Bold', '');
    }
    if (fontFamily.includes('Italic')) {
      style = 'italic';
      family = family.replace(' Italic', '');
    }
    if (fontFamily.includes('Black')) {
      weight = '900';
      family = family.replace(' Black', '');
    }
    if (fontFamily.includes('ExtraBold')) {
      weight = '800';
      family = family.replace(' ExtraBold', '');
    }
    if (fontFamily.includes('Medium')) {
      weight = '500';
      family = family.replace(' Medium', '');
    }
    if (fontFamily.includes('Rounded Bold')) {
      weight = 'bold';
      family = family.replace(' Rounded Bold', '');
    }

    return { family, weight, style };
  };

  const debouncedUpdate = useCallback(
    debounce((field: keyof SubtitleDTO, value: any) => {
      onUpdate({ ...subtitle, [field]: value });
    }, 100),
    [subtitle, onUpdate]
  );

  const updateField = (field: keyof SubtitleDTO, value: any) => {
    if (field.includes('Color')) {
      debouncedUpdate(field, value === '#000000' && field !== 'fontColor' ? 'transparent' : value);
    } else if (['timelineStartTime', 'timelineEndTime', 'scale', 'opacity', 'backgroundOpacity', 'positionX', 'positionY', 'rotation', 'backgroundW', 'backgroundH', 'backgroundBorderRadius', 'backgroundBorderWidth', 'textBorderWidth', 'textBorderOpacity', 'letterSpacing', 'lineSpacing'].includes(field)) {
      const parsedValue = parseFloat(value) || 0;
      if (parsedValue >= 0 || ['positionX', 'positionY', 'rotation'].includes(field)) {
        onUpdate({ ...subtitle, [field]: parsedValue });
      }
    } else {
      onUpdate({ ...subtitle, [field]: value });
    }
  };

  // Get styles for the selected font
  const { family, weight, style } = parseFont(subtitle.fontFamily);

  return (
    <div className="section-content tool-subpanel subtitle-editor-panel">
      <h3>Subtitle Settings</h3>
      <div className="control-group">
        <button
          className="apply-text-btn close-editor-btn"
          onClick={onClose}
          title="Close Editor"
        >
          <FaTimes />
        </button>
      </div>      
      <div className="control-group">
        <label>Text Content</label>
        <textarea
          value={subtitle.text}
          onChange={(e) => updateField('text', e.target.value)}
          rows={4}
          style={{
            width: '100%',
            resize: 'vertical',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: subtitle.text.trim() === '' ? '2px solid red' : '1px solid #2a2a2a',
            boxSizing: 'border-box',
          }}
          placeholder={subtitle.text.trim() === '' ? 'Text cannot be empty' : 'Enter subtitle text (press Enter for new line)'}
        />
      </div>
      <div className="control-group">
        <label>Font Family</label>
        <select
          value={subtitle.fontFamily}
          onChange={(e) => updateField('fontFamily', e.target.value)}
          style={{
            fontFamily: family,
            fontWeight: weight,
            fontStyle: style,
          }}
        >
          {/* Standard System Fonts */}
          <option value="Arial" style={{ fontFamily: 'Arial' }}>Arial</option>
          <option value="Times New Roman" style={{ fontFamily: 'Times New Roman' }}>Times New Roman</option>
          <option value="Courier New" style={{ fontFamily: 'Courier New' }}>Courier New</option>
          <option value="Calibri" style={{ fontFamily: 'Calibri' }}>Calibri</option>
          <option value="Verdana" style={{ fontFamily: 'Verdana' }}>Verdana</option>
          <option value="Georgia" style={{ fontFamily: 'Georgia' }}>Georgia</option>
          <option value="Comic Sans MS" style={{ fontFamily: 'Comic Sans MS' }}>Comic Sans MS</option>
          <option value="Impact" style={{ fontFamily: 'Impact' }}>Impact</option>
          <option value="Tahoma" style={{ fontFamily: 'Tahoma' }}>Tahoma</option>
          {/* Google Fonts & Custom Fonts */}
          {Array.from(new Set(availableFonts)).map((font) => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="control-group">
        <label>Font Color</label>
        <input
          type="color"
          value={subtitle.fontColor}
          onChange={(e) => updateField('fontColor', e.target.value)}
        />
      </div>
      <div className="control-group">
        <label>Background Color</label>
        <input
          type="color"
          value={subtitle.backgroundColor === 'transparent' ? '#000000' : subtitle.backgroundColor}
          onChange={(e) => updateField('backgroundColor', e.target.value)}
        />
      </div>
      <div className="control-group">
        <label>Background Opacity</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={subtitle.backgroundOpacity}
            onChange={(e) => updateField('backgroundOpacity', parseFloat(e.target.value))}
          />
          <input
            type="number"
            value={subtitle.backgroundOpacity}
            onChange={(e) => updateField('backgroundOpacity', parseFloat(e.target.value) || 1.0)}
            step="0.01"
            min="0"
            max="1"
            style={{ width: '60px', marginLeft: '10px' }}
          />
        </div>
      </div>
      <div className="control-group">
        <label>Background Border Width</label>
        <input
          type="number"
          value={subtitle.backgroundBorderWidth}
          onChange={(e) => updateField('backgroundBorderWidth', parseInt(e.target.value) || 0)}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Border Color</label>
        <input
          type="color"
          value={subtitle.backgroundBorderColor}
          onChange={(e) => updateField('backgroundBorderColor', e.target.value)}
        />
      </div>
      <div className="control-group">
        <label>Background Height</label>
        <input
          type="number"
          value={subtitle.backgroundH}
          onChange={(e) => updateField('backgroundH', parseInt(e.target.value) || 0)}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Width</label>
        <input
          type="number"
          value={subtitle.backgroundW}
          onChange={(e) => updateField('backgroundW', parseInt(e.target.value) || 0)}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Border Radius</label>
        <input
          type="number"
          value={subtitle.backgroundBorderRadius}
          onChange={(e) => updateField('backgroundBorderRadius', parseInt(e.target.value) || 0)}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Text Border Color</label>
        <input
          type="color"
          value={subtitle.textBorderColor === 'transparent' ? '#000000' : subtitle.textBorderColor}
          onChange={(e) => updateField('textBorderColor', e.target.value)}
        />
      </div>
      <div className="control-group">
        <label>Text Border Width</label>
        <input
          type="number"
          value={subtitle.textBorderWidth}
          onChange={(e) => updateField('textBorderWidth', parseInt(e.target.value) || 0)}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Text Border Opacity</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={subtitle.textBorderOpacity}
            onChange={(e) => updateField('textBorderOpacity', parseFloat(e.target.value))}
          />
          <input
            type="number"
            value={subtitle.textBorderOpacity}
            onChange={(e) => updateField('textBorderOpacity', parseFloat(e.target.value) || 1.0)}
            step="0.01"
            min="0"
            max="1"
            style={{ width: '60px', marginLeft: '10px' }}
          />
        </div>
      </div>
      <div className="control-group">
        <label>Letter Spacing (px)</label>
        <input
          type="number"
          value={subtitle.letterSpacing}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            if (value >= 0) {
              updateField('letterSpacing', value);
            }
          }}
          min="0"
          step="0.1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Line Spacing</label>
        <input
          type="number"
          value={subtitle.lineSpacing}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            if (value >= 0) {
              updateField('lineSpacing', value);
            }
          }}
          min="0"
          step="0.1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Alignment</label>
        <select
          value={subtitle.alignment}
          onChange={(e) => updateField('alignment', e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="control-group">
        <label>Scale</label>
        <input
          type="number"
          value={subtitle.scale}
          onChange={(e) => updateField('scale', parseFloat(e.target.value) || 1.0)}
          min="0.5"
          step="0.1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Opacity</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={subtitle.opacity}
            onChange={(e) => updateField('opacity', parseFloat(e.target.value))}
          />
          <input
            type="number"
            value={subtitle.opacity}
            onChange={(e) => updateField('opacity', parseFloat(e.target.value) || 1.0)}
            step="0.01"
            min="0"
            max="1"
            style={{ width: '60px', marginLeft: '10px' }}
          />
        </div>
      </div>
      <div className="control-group">
        <label>Position X</label>
        <input
          type="number"
          value={subtitle.positionX}
          onChange={(e) => updateField('positionX', parseInt(e.target.value) || 0)}
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <button
          className="apply-to-all-btn"
          onClick={() => {
            onApplyToAll('positionX', subtitle.positionX);
          }}
          style={{
            padding: '8px 16px',
            background: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px',
            marginTop: '5px'
          }}
        >
          Apply Position X to All
        </button>
      </div>      
      <div className="control-group">
        <label>Position Y</label>
        <input
          type="number"
          value={subtitle.positionY}
          onChange={(e) => updateField('positionY', parseInt(e.target.value) || 0)}
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <button
          className="apply-to-all-btn"
          onClick={() => {
            onApplyToAll('positionY', subtitle.positionY);
          }}
          style={{
            padding: '8px 16px',
            background: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px',
            marginTop: '5px'
          }}
        >
          Apply Position Y to All
        </button>
      </div>      
      <div className="control-group">
        <label>Rotation (°)</label>
        <input
          type="number"
          value={subtitle.rotation}
          onChange={(e) => updateField('rotation', parseInt(e.target.value) || 0)}
          min="-180"
          max="180"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
    </div>
  );
};

export default SubtitleEditorPanel;