import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import '../CSS/TextPanel.css';

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
  'Doto ExtraBold', // Adjusted for font weight
  'Doto Rounded Bold',
  'Fascinate Inline',
  // Adjusted name
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

const TextPanel = ({ textSettings, updateTextSettings, isTextEmpty }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: googleFonts,
      },
    });
  }, []);

  // Parse font family to extract weight and style
  const parseFont = (fontFamily) => {
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

  // Get styles for the selected font
  const { family, weight, style } = parseFont(textSettings.fontFamily);  

  return (
    <div className="section-content tool-subpanel text-tool-panel">
      <h3>Text Settings</h3>
      <div className="control-group">
        <label>Text Content</label>
        <textarea
          value={textSettings.text}
          onChange={(e) => updateTextSettings({ ...textSettings, text: e.target.value })}
          rows="4"
          style={{
            width: '100%',
            resize: 'vertical',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: isTextEmpty ? '2px solid red' : '1px solid #ccc',
            boxSizing: 'border-box',
          }}
          placeholder={isTextEmpty ? 'Text cannot be empty' : 'Enter text (press Enter for new line)'}
        />
      </div>
      <div className="control-group">
        <label>Font Family</label>
        <select
          value={textSettings.fontFamily}
          onChange={(e) => updateTextSettings({ ...textSettings, fontFamily: e.target.value })}
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
          <option value="Calibri" style={{ fontFamily: 'Calibri' }}>
          Calibri
          </option>
          <option value="Verdana" style={{ fontFamily: 'Verdana' }}>Verdana</option>
          <option value="Georgia" style={{ fontFamily: 'Georgia' }}>Georgia</option>
          <option value="Comic Sans MS" style={{ fontFamily: 'Comic Sans MS' }}>Comic Sans MS</option>
          <option value="Impact" style={{ fontFamily: 'Impact' }}>Impact</option>
          <option value="Tahoma" style={{ fontFamily: 'Tahoma'}}>Tahoma</option>

          {/* Google Fonts & Custom Fonts */}
          <option value="Alumni Sans Pinstripe" style={{ fontFamily: 'Alumni Sans Pinstripe' }}>Alumni Sans Pinstripe</option>
          <option value="Amatic SC" style={{ fontFamily: 'Amatic SC' }}>Amatic SC</option>
          <option value="Amatic SC Bold" style={{ fontFamily: 'Amatic SC', fontWeight: 'bold' }}>Amatic SC Bold</option>
          <option value="Arimo" style={{ fontFamily: 'Arimo' }}>Arimo</option>
          <option value="Arimo Bold" style={{ fontFamily: 'Arimo', fontWeight: 'bold' }}>Arimo Bold</option>
          <option value="Arimo Bold Italic" style={{ fontFamily: 'Arimo', fontWeight: 'bold', fontStyle: 'italic' }}>Arimo Bold Italic</option>
          <option value="Arimo Italic" style={{ fontFamily: 'Arimo', fontStyle: 'italic' }}>Arimo Italic</option>
          <option value="Barriecito" style={{ fontFamily: 'Barriecito' }}>Barriecito</option>
          <option value="Barrio" style={{ fontFamily: 'Barrio' }}>Barrio</option>
          <option value="Birthstone" style={{ fontFamily: 'Birthstone' }}>Birthstone</option>
          <option value="Bungee Hairline" style={{ fontFamily: 'Bungee Hairline' }}>Bungee Hairline</option>
          <option value="Butcherman" style={{ fontFamily: 'Butcherman' }}>
          Butcherman</option>
          <option value="Carlito" style={{ fontFamily: 'Carlito' }}>
          Carlito</option>
          <option value="Carlito Bold" style={{ fontFamily: 'Carlito', fontWeight: 'bold' }}>
            Carlito Bold
          </option>
          <option value="Carlito Bold Italic" style={{ fontFamily: 'Carlito', fontWeight: 'bold', fontStyle: 'italic' }}>
            Carlito Bold Italic
          </option>
          <option value="Carlito Italic" style={{ fontFamily: 'Carlito', fontStyle: 'italic' }}>
            Carlito Italic
          </option>
          <option value="Comic Neue" style={{ fontFamily: 'Comic Neue' }}>
            Comic Neue
          </option>
          <option value="Comic Neue Bold" style={{ fontFamily: 'Comic Neue', fontWeight: 'bold' }}>
            Comic Neue Bold
          </option>
          <option value="Comic Neue Bold Italic" style={{ fontFamily: 'Comic Neue', fontWeight: 'bold', fontStyle: 'italic' }}>
            Comic Neue Bold Italic
          </option>
          <option value="Comic Neue Italic" style={{ fontFamily: 'Comic Neue', fontStyle: 'italic' }}>
            Comic Neue Italic
          </option>
          <option value="Courier Prime" style={{ fontFamily: 'Courier Prime' }}>
            Courier Prime
          </option>
          <option value="Courier Prime Bold" style={{ fontFamily: 'Courier Prime', fontWeight: 'bold' }}>
            Courier Prime Bold
          </option>
          <option value="Courier Prime Bold Italic" style={{ fontFamily: 'Courier Prime', fontWeight: 'bold', fontStyle: 'italic' }}>
            Courier Prime Bold Italic
          </option>
          <option value="Courier Prime Italic" style={{ fontFamily: 'Courier Prime', fontStyle: 'italic' }}>
            Courier Prime Italic
          </option>
          <option value="Doto Black" style={{ fontFamily: 'Doto', fontWeight: '900' }}>
            Doto Black
          </option>
          <option value="Doto ExtraBold" style={{ fontFamily: 'Doto', fontWeight: '800' }}>
            Doto ExtraBold
          </option>
          <option value="Doto Rounded Bold" style={{ fontFamily: 'Doto', fontWeight: 'bold' }}>
            Doto Rounded Bold
          </option>
          <option value="Fascinate Inline" style={{ fontFamily: 'Fascinate Inline' }}>
            Fascinate Inline
          </option>
          <option value="Freckle Face" style={{ fontFamily: 'Freckle Face' }}>
            Freckle Face
          </option>
          <option value="Fredericka the Great" style={{ fontFamily: 'Fredericka the Great' }}>
            Fredericka the Great
          </option>
          <option value="Gelasio" style={{ fontFamily: 'Gelasio' }}>
            Gelasio
          </option>
          <option value="Gelasio Bold" style={{ fontFamily: 'Gelasio', fontWeight: 'bold' }}>
            Gelasio Bold
          </option>
          <option value="Gelasio Bold Italic" style={{ fontFamily: 'Gelasio', fontWeight: 'bold', fontStyle: 'italic' }}>
            Gelasio Bold Italic
          </option>
          <option value="Gelasio Italic" style={{ fontFamily: 'Gelasio', fontStyle: 'italic' }}>
            Gelasio Italic
          </option>
          <option value="Imperial Script" style={{ fontFamily: 'Imperial Script' }}>
            Imperial Script
          </option>
          <option value="Kings" style={{ fontFamily: 'Kings' }}>
            Kings
          </option>
          <option value="Kirang Haerang" style={{ fontFamily: 'Kirang Haerang' }}>
            Kirang Haerang
          </option>
          <option value="Lavishly Yours" style={{ fontFamily: 'Lavishly Yours' }}>
            Lavishly Yours
          </option>
          <option value="Lexend Giga" style={{ fontFamily: 'Lexend Giga' }}>
            Lexend Giga
          </option>
          <option value="Lexend Giga Black" style={{ fontFamily: 'Lexend Giga', fontWeight: '900' }}>
            Lexend Giga Black
          </option>
          <option value="Lexend Giga Bold" style={{ fontFamily: 'Lexend Giga', fontWeight: 'bold' }}>
            Lexend Giga Bold
          </option>
          <option value="Montserrat Alternates" style={{ fontFamily: 'Montserrat Alternates' }}>
            Montserrat Alternates
          </option>
          <option value="Montserrat Alternates Black" style={{ fontFamily: 'Montserrat Alternates', fontWeight: '900' }}>
            Montserrat Alternates Black
          </option>
          <option value="Montserrat Alternates Medium Italic" style={{ fontFamily: 'Montserrat Alternates', fontWeight: '500', fontStyle: 'italic' }}>
            Montserrat Alternates Medium Italic
          </option>
          <option value="Mountains of Christmas" style={{ fontFamily: 'Mountains of Christmas' }}>
            Mountains of Christmas
          </option>
          <option value="Mountains of Christmas Bold" style={{ fontFamily: 'Mountains of Christmas', fontWeight: 'bold' }}>
            Mountains of Christmas Bold
          </option>
          <option value="Noto Sans Mono" style={{ fontFamily: 'Noto Sans Mono' }}>
            Noto Sans Mono
          </option>
          <option value="Noto Sans Mono Bold" style={{ fontFamily: 'Noto Sans Mono', fontWeight: 'bold' }}>
            Noto Sans Mono Bold
          </option>
          <option value="Poiret One" style={{ fontFamily: 'Poiret One' }}>
            Poiret One
          </option>
          <option value="Rampart One" style={{ fontFamily: 'Rampart One' }}>
            Rampart One
          </option>
          <option value="Rubik Wet Paint" style={{ fontFamily: 'Rubik Wet Paint' }}>
            Rubik Wet Paint
          </option>
          <option value="Tangerine" style={{ fontFamily: 'Tangerine' }}>
            Tangerine
          </option>
          <option value="Tangerine Bold" style={{ fontFamily: 'Tangerine', fontWeight: 'bold' }}>
            Tangerine Bold
          </option>
          <option value="Tinos" style={{ fontFamily: 'Tinos' }}>
            Tinos
          </option>
          <option value="Tinos Bold" style={{ fontFamily: 'Tinos', fontWeight: 'bold' }}>
            Tinos Bold
          </option>
          <option value="Tinos Bold Italic" style={{ fontFamily: 'Tinos', fontWeight: 'bold', fontStyle: 'italic' }}>
            Tinos Bold Italic
          </option>
          <option value="Tinos Italic" style={{ fontFamily: 'Tinos', fontStyle: 'italic' }}>
            Tinos Italic
          </option>
          <option value="Yesteryear" style={{ fontFamily: 'Yesteryear' }}>
            Yesteryear
          </option>
        </select>
      </div>
      {/* ... (Rest of the component remains unchanged) */}
      <div className="control-group">
        <label>Font Color</label>
        <input
          type="color"
          value={textSettings.fontColor}
          onChange={(e) => updateTextSettings({ ...textSettings, fontColor: e.target.value })}
        />
      </div>
      <div className="control-group">
        <label>Background Color</label>
        <input
          type="color"
          value={textSettings.backgroundColor === 'transparent' ? '#000000' : textSettings.backgroundColor}
          onChange={(e) =>
            updateTextSettings({
              ...textSettings,
              backgroundColor: e.target.value === '#000000' ? 'transparent' : e.target.value,
            })
          }
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
            value={textSettings.backgroundOpacity}
            onChange={(e) => updateTextSettings({ ...textSettings, backgroundOpacity: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            value={textSettings.backgroundOpacity}
            onChange={(e) => updateTextSettings({ ...textSettings, backgroundOpacity: parseFloat(e.target.value) || 1.0 })}
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
          value={textSettings.backgroundBorderWidth}
          onChange={(e) => updateTextSettings({ ...textSettings, backgroundBorderWidth: parseInt(e.target.value) || 0 })}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Border Color</label>
        <input
          type="color"
          value={textSettings.backgroundBorderColor}
          onChange={(e) => updateTextSettings({ ...textSettings, backgroundBorderColor: e.target.value })}
        />
      </div>
      <div className="control-group">
        <label>Background Height</label>
        <input
          type="number"
          value={textSettings.backgroundH}
          onChange={(e) => updateTextSettings({ ...textSettings, backgroundH: parseInt(e.target.value) })}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Width</label>
        <input
          type="number"
          value={textSettings.backgroundW}
          onChange={(e) => updateTextSettings({ ...textSettings, backgroundW: parseInt(e.target.value) })}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Background Border Radius</label>
        <input
          type="number"
          value={textSettings.backgroundBorderRadius}
          onChange={(e) => updateTextSettings({ ...textSettings, backgroundBorderRadius: parseInt(e.target.value) || 0 })}
          min="0"
          step="1"
          style={{ width: '60px' }}
        />
      </div>
      <div className="control-group">
        <label>Text Border Color</label>
        <input
          type="color"
          value={textSettings.textBorderColor === 'transparent' ? '#000000' : textSettings.textBorderColor}
          onChange={(e) =>
            updateTextSettings({
              ...textSettings,
              textBorderColor: e.target.value === '#000000' ? 'transparent' : e.target.value,
            })
          }
        />
      </div>
      <div className="control-group">
        <label>Text Border Width</label>
        <input
          type="number"
          value={textSettings.textBorderWidth}
          onChange={(e) => updateTextSettings({ ...textSettings, textBorderWidth: parseInt(e.target.value) || 0 })}
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
            value={textSettings.textBorderOpacity}
            onChange={(e) => updateTextSettings({ ...textSettings, textBorderOpacity: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            value={textSettings.textBorderOpacity}
            onChange={(e) => updateTextSettings({ ...textSettings, textBorderOpacity: parseFloat(e.target.value) || 1.0 })}
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
          value={textSettings.letterSpacing}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            if (value >= 0) {
              updateTextSettings({ ...textSettings, letterSpacing: value });
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
          value={textSettings.lineSpacing}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            if (value >= 0) {
              updateTextSettings({ ...textSettings, lineSpacing: value });
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
          value={textSettings.alignment}
          onChange={(e) => updateTextSettings({ ...textSettings, alignment: e.target.value })}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  );
};

export default TextPanel;