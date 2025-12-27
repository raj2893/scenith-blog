import React from 'react';
import '../CSS/FilterControls.css';

const FilterControls = ({
  selectedSegment,
  filterParams,
  appliedFilters,
  updateFilterSetting,
  resetFilters
}) => {

  const handleFilterChange = (filterName, value) => {
      console.log(`Updating filter ${filterName} to ${value}`); // Debug log
      updateFilterSetting(filterName, value);
    };

  return (
    <div className="filters-panel" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <h3>
        {selectedSegment && (selectedSegment.type === 'video' || selectedSegment.type === 'image') && (
          <button
            onClick={resetFilters}
            style={{
              marginLeft: '10px',
              padding: '2px 6px',
              fontSize: '12px',
              cursor: 'pointer',
              background: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
            title="Reset all filters"
          >
            ↺
          </button>
        )}
      </h3>
      {!selectedSegment || (selectedSegment.type !== 'video' && selectedSegment.type !== 'image') ? (
        <p>Select a video or image segment to apply filters</p>
      ) : (
        <>
          {/* Color Adjustments */}
          <div className="filter-group">
            <h4>Color Adjustments</h4>
            <div className="control-group">
              <label>Brightness (-1 to 1)</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={filterParams.brightness !== undefined ? filterParams.brightness : 0}
                  onChange={(e) => updateFilterSetting('brightness', parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={filterParams.brightness !== undefined ? filterParams.brightness : 0}
                  onChange={(e) => updateFilterSetting('brightness', parseFloat(e.target.value))}
                  step="0.01"
                  min="-1"
                  max="1"
                  style={{ width: '60px', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div className="control-group">
              <label>Contrast (0 to 2)</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.01"
                  value={filterParams.contrast !== undefined ? filterParams.contrast : 1}
                  onChange={(e) => updateFilterSetting('contrast', parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={filterParams.contrast !== undefined ? filterParams.contrast : 1}
                  onChange={(e) => updateFilterSetting('contrast', parseFloat(e.target.value))}
                  step="0.01"
                  min="0"
                  max="2"
                  style={{ width: '60px', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div className="control-group">
              <label>Saturation (0 to 2)</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.01"
                  value={filterParams.saturation !== undefined ? filterParams.saturation : 1}
                  onChange={(e) => updateFilterSetting('saturation', parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={filterParams.saturation !== undefined ? filterParams.saturation : 1}
                  onChange={(e) => updateFilterSetting('saturation', parseFloat(e.target.value))}
                  step="0.01"
                  min="0"
                  max="2"
                  style={{ width: '60px', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div className="control-group">
              <label>Hue (-180 to 180)</label>
              <div className="slider-container" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div
                  style={{
                    width: '100%',
                    height: '10px',
                    background: 'linear-gradient(to right, hsl(-180, 100%, 50%), hsl(-120, 100%, 50%), hsl(-60, 100%, 50%), hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%))',
                    borderRadius: '2px',
                  }}
                />
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={filterParams.hue !== undefined ? filterParams.hue : 0}
                  onChange={(e) => updateFilterSetting('hue', parseInt(e.target.value))}
                  style={{ width: '100%' }}
                />
                <input
                  type="number"
                  value={filterParams.hue !== undefined ? filterParams.hue : 0}
                  onChange={(e) => updateFilterSetting('hue', parseInt(e.target.value))}
                  step="1"
                  min="-180"
                  max="180"
                  style={{ width: '60px', marginTop: '5px' }}
                />
              </div>
            </div>
          </div>

          {/* Stylization Filters */}
          <div className="filter-group">
            <h4>Stylization</h4>
            <div className="control-group">
              <label>Grayscale</label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 'auto' }}>
                <input
                  type="checkbox"
                  checked={!!filterParams.grayscale}
                  onChange={(e) => updateFilterSetting('grayscale', e.target.checked ? '1' : '')}
                  style={{ margin: '0 5px 0 0' }}
                />
                <span style={{ margin: 0 }}></span>
              </div>
            </div>
            <div className="control-group">
              <label>Invert</label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto' }}>
                <input
                  type="checkbox"
                  checked={!!filterParams.invert}
                  onChange={(e) => updateFilterSetting('invert', e.target.checked ? '1' : '')}
                  style={{ margin: '0 5px 0 0' }}
                />
                <span style={{ margin: 0 }}></span>
              </div>
            </div>
            <div className="control-group">
              <label>Vignette (0 to 1)</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={filterParams.vignette !== undefined ? filterParams.vignette : 0}
                  onChange={(e) => updateFilterSetting('vignette', parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={filterParams.vignette !== undefined ? filterParams.vignette : 0}
                  onChange={(e) => updateFilterSetting('vignette', parseFloat(e.target.value))}
                  step="0.01"
                  min="0"
                  max="1"
                  style={{ width: '60px', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div className="control-group">
              <label>Blur (0 to 1)</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={filterParams.blur !== undefined ? filterParams.blur : 0}
                  onChange={(e) => updateFilterSetting('blur', parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={filterParams.blur !== undefined ? filterParams.blur : 0}
                  onChange={(e) => updateFilterSetting('blur', parseFloat(e.target.value))}
                  step="0.01"
                  min="0"
                  max="1"
                  style={{ width: '60px', marginLeft: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Transformation */}
          <div className="filter-group">
            <h4>Transformation</h4>              
            <div className="control-group">
              <label style={{ marginBottom: '10px' }}>Flip</label>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 'auto' }}>
                  <input
                    type="checkbox"
                    checked={filterParams.flip === 'horizontal' || filterParams.flip === 'both'}
                    onChange={(e) => {
                      const isHorizontalChecked = e.target.checked;
                      const isVerticalChecked = filterParams.flip === 'vertical' || filterParams.flip === 'both';
                      let newValue = '';
                      if (isHorizontalChecked && isVerticalChecked) {
                        newValue = 'both';
                      } else if (isHorizontalChecked) {
                        newValue = 'horizontal';
                      } else if (isVerticalChecked) {
                        newValue = 'vertical';
                      }
                      updateFilterSetting('flip', newValue);
                    }}
                    style={{ margin: '0 5px 0 0' }}
                  />
                  <span style={{ margin: 0 }}>Horizontal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 'auto', marginTop: '8px' }}>
                  <input
                    type="checkbox"
                    checked={filterParams.flip === 'vertical' || filterParams.flip === 'both'}
                    onChange={(e) => {
                      const isVerticalChecked = e.target.checked;
                      const isHorizontalChecked = filterParams.flip === 'horizontal' || filterParams.flip === 'both';
                      let newValue = '';
                      if (isHorizontalChecked && isVerticalChecked) {
                        newValue = 'both';
                      } else if (isHorizontalChecked) {
                        newValue = 'horizontal';
                      } else if (isVerticalChecked) {
                        newValue = 'vertical';
                      }
                      updateFilterSetting('flip', newValue);
                    }}
                    style={{ margin: '0 5px 0 0' }}
                  />
                  <span style={{ margin: 0 }}>Vertical</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterControls;