"use client";

import React from "react";
import PDFToolsWorkspace from "../PDFToolsWorkspace";
import '../../../../../styles/tools/CommonPdfToolForMargin.css';

export default function RotatePdfClient() {
  return (
    <>
      <PDFToolsWorkspace operation="rotate-pdf" />

      {/* SEO Content Section */}
      <div className="seo-content-section" style={{ maxWidth: '1200px', margin: '80px auto 60px', padding: '0 20px', lineHeight: '1.7' }}>
        <article>
          <h1 style={{ fontSize: '32px', marginBottom: '25px', color: '#1e293b', fontWeight: 800, lineHeight: '1.3' }}>
            Rotate PDF Pages Online Free - Fix Orientation & Align Documents Perfectly
          </h1>
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#334155', marginBottom: '25px', fontWeight: 500 }}>
              <strong>SCENITH's PDF rotation tool</strong> instantly fixes misaligned pages, corrects scanning errors, and optimizes document orientation for perfect viewing and printing. Rotate individual pages, specific ranges, or entire documents by 90°, 180°, or 270° with pixel-perfect precision and zero quality loss.
            </p>

            <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', borderLeft: '5px solid #f59e0b', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 700 }}>🎯 Common Rotation Scenarios:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #fde68a' }}>
                  <div style={{ fontSize: '16px', color: '#b45309', fontWeight: 'bold', marginBottom: '5px' }}>📱 Mobile Scanning</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Fix pages scanned sideways with phones</div>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #fde68a' }}>
                  <div style={{ fontSize: '16px', color: '#b45309', fontWeight: 'bold', marginBottom: '5px' }}>🖨️ Mixed Orientation</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Align landscape/portrait pages in same document</div>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #fde68a' }}>
                  <div style={{ fontSize: '16px', color: '#b45309', fontWeight: 'bold', marginBottom: '5px' }}>📄 Document Assembly</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Prepare pages for consistent merging/printing</div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🔄 Three Rotation Options Explained
            </h2>

            <div className="rotation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#fffbeb', padding: '30px', borderRadius: '12px', borderTop: '4px solid #f59e0b', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>↪️</div>
                  <h3 style={{ fontSize: '22px', color: '#b45309', margin: 0, fontWeight: 700 }}>90° Right (Clockwise)</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Use when:</strong> Pages are sideways and need to be rotated right to become upright
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Turns landscape pages to portrait orientation</li>
                  <li style={{ marginBottom: '10px' }}>• Corrects mobile scanning orientation</li>
                  <li style={{ marginBottom: '10px' }}>• Most common rotation needed</li>
                  <li style={{ marginBottom: '10px' }}>• Preserves all text and image quality</li>
                  <li style={{ marginBottom: '10px' }}>• Maintains document structure</li>
                </ul>
                <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Example:</strong> Portrait document scanned sideways on a flatbed scanner
                </div>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '30px', borderRadius: '12px', borderTop: '4px solid #f59e0b', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>↩️</div>
                  <h3 style={{ fontSize: '22px', color: '#b45309', margin: 0, fontWeight: 700 }}>90° Left (Counter-Clockwise)</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Use when:</strong> Pages are sideways and need to be rotated left to become upright
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Opposite direction of right rotation</li>
                  <li style={{ marginBottom: '10px' }}>• Corrects specific scanner configurations</li>
                  <li style={{ marginBottom: '10px' }}>• Useful for certain mobile scanning apps</li>
                  <li style={{ marginBottom: '10px' }}>• Same quality preservation as right rotation</li>
                  <li style={{ marginBottom: '10px' }}>• Perfect for mixed-origin documents</li>
                </ul>
                <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Example:</strong> Document scanned with a feeder that loads pages upside-down
                </div>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '30px', borderRadius: '12px', borderTop: '4px solid #f59e0b', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>↕️</div>
                  <h3 style={{ fontSize: '22px', color: '#b45309', margin: 0, fontWeight: 700 }}>180° (Upside Down)</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Use when:</strong> Entire pages are upside down and need complete inversion
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Flips pages completely upside down</li>
                  <li style={{ marginBottom: '10px' }}>• Corrects double-sided scanning errors</li>
                  <li style={{ marginBottom: '10px' }}>• Fixes improperly loaded documents</li>
                  <li style={{ marginBottom: '10px' }}>• Useful for booklet creation</li>
                  <li style={{ marginBottom: '10px' }}>• Maintains all document properties</li>
                </ul>
                <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Example:</strong> Double-sided document where back sides scanned upside-down
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🚀 Complete Step-by-Step Rotation Guide
            </h2>

            <div className="step-guide" style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>1</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Upload Your PDF Document</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  <strong>Method A:</strong> Click the upload area or drag your PDF directly into the browser.
                  <br/><strong>Method B:</strong> Upload from cloud storage via browser integration.
                </p>
                <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Pro Tip:</strong> The tool automatically detects page count—helpful for selecting specific pages to rotate.
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>2</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Choose Rotation Direction</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>↪️</div>
                    <div style={{ fontSize: '16px', fontWeight: '600' }}>90° Right</div>
                  </div>
                  <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>↩️</div>
                    <div style={{ fontSize: '16px', fontWeight: '600' }}>90° Left</div>
                  </div>
                  <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>↕️</div>
                    <div style={{ fontSize: '16px', fontWeight: '600' }}>180°</div>
                  </div>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                  Select the appropriate rotation direction based on how your pages are currently oriented and how you want them to appear.
                </p>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>3</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Select Pages to Rotate</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Choose between rotating all pages or selecting specific pages:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>All Pages</h4>
                    <p style={{ fontSize: '14px', margin: 0 }}>Rotate every page in the document uniformly</p>
                  </div>
                  <div style={{ backgroundColor: '#fffbeb', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>Custom Pages</h4>
                    <p style={{ fontSize: '14px', margin: 0 }}>Specify exact page numbers or ranges</p>
                  </div>
                </div>
                <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Custom Page Examples:</strong> "1,3,5" (pages 1, 3, and 5), "1-5" (pages 1 through 5), "1,3-7,10" (mixed selection)
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>4</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Download Rotated PDF</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                  Click "Process Rotate PDF" and receive your perfectly aligned document:
                </p>
                <ul style={{ marginTop: '15px', marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Instant processing (typically 5-10 seconds)</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• 100% quality preservation</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• All text remains searchable</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Images maintain full resolution</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Formatting and layout preserved</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🏢 Real-World Applications & Use Cases
            </h2>

            <div className="applications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
                <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 600 }}>📱 Mobile & Scanning</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Correct smartphone-scanned documents</li>
                  <li style={{ marginBottom: '8px' }}>• Fix flatbed scanner orientation errors</li>
                  <li style={{ marginBottom: '8px' }}>• Adjust feeder-scanned multi-page documents</li>
                  <li style={{ marginBottom: '8px' }}>• Correct camera-captured document photos</li>
                  <li style={{ marginBottom: '8px' }}>• Fix scanning app misalignments</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
                <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 600 }}>🏢 Business & Office</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Prepare documents for consistent printing</li>
                  <li style={{ marginBottom: '8px' }}>• Align mixed-orientation reports</li>
                  <li style={{ marginBottom: '8px' }}>• Correct archival document orientations</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare presentations with uniform slides</li>
                  <li style={{ marginBottom: '8px' }}>• Fix converted document orientations</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
                <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 600 }}>🎓 Education & Publishing</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Correct scanned textbook pages</li>
                  <li style={{ marginBottom: '8px' }}>• Align research paper figures and tables</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare thesis documents for submission</li>
                  <li style={{ marginBottom: '8px' }}>• Fix converted ebook page orientations</li>
                  <li style={{ marginBottom: '8px' }}>• Align academic journal submissions</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
                <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 600 }}>📄 Document Assembly</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Prepare pages for merging into single document</li>
                  <li style={{ marginBottom: '8px' }}>• Correct orientations before adding to portfolios</li>
                  <li style={{ marginBottom: '8px' }}>• Align pages for booklet creation</li>
                  <li style={{ marginBottom: '8px' }}>• Fix mixed-orientation source documents</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare documents for binding</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🎓 Advanced Rotation Techniques
            </h2>

            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '20px', fontWeight: 600 }}>Strategic Page Rotation Strategies</h3>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>1. Selective Page Correction</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Instead of rotating entire documents, target only misaligned pages:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Identify specific sideways/upside-down pages</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Use custom page selection (e.g., "3,7,12")</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Preserve correctly oriented pages</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Save processing time and maintain quality</li>
                </ul>
              </div>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>2. Batch Processing Strategy</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Process multiple documents efficiently:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Rotate all similar documents with same settings</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Use consistent rotation for scanned collections</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Process documents in logical batches</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Maintain uniform orientation across document sets</li>
                </ul>
              </div>

              <div className="technique">
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>3. Quality Control & Verification</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Ensure perfect results every time:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Preview rotated pages before finalizing</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Check page numbers and orientation</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Verify text readability and image alignment</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Test print sample pages if needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ⚡ Technical Specifications & Quality Guarantee
            </h2>

            <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>Processing Speed</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>5-10 seconds average</p>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '10px' }}>💎</div>
                <h3 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>Quality Preservation</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>100% lossless rotation</p>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '10px' }}>🔧</div>
                <h3 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>Format Support</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>All PDF versions 1.0-2.0</p>
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '10px' }}>📄</div>
                <h3 style={{ fontSize: '18px', color: '#b45309', marginBottom: '10px', fontWeight: 600 }}>Page Limit</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>Unlimited pages per document</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#fef3c7', padding: '25px', borderRadius: '12px', marginTop: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#b45309', marginBottom: '15px', fontWeight: 600 }}>✅ Quality Guarantee</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
                Our rotation algorithm preserves 100% of original quality. Text remains crisp and searchable, images maintain full resolution, fonts render perfectly, and all document properties (metadata, bookmarks, links) are preserved. The rotated PDF is functionally identical to the original, just with corrected page orientation.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ❓ Frequently Asked Questions
            </h2>

            <div className="faq-grid" style={{ display: 'grid', gap: '20px' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔄 Will rotating PDF pages reduce quality?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Absolutely not.</strong> Our rotation is mathematically perfect—it simply changes page orientation coordinates without affecting pixel data. Text remains crisp and searchable, images keep full resolution, and all formatting is preserved. There is zero quality loss.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔢 Can I rotate specific pages instead of all pages?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Yes, complete control.</strong> Choose "Custom Pages" option and specify exact page numbers or ranges. Examples: "3" (page 3 only), "1-5" (pages 1 through 5), "1,3,7" (pages 1, 3, and 7), "1,3-7,10" (mixed selection).
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔁 Can I rotate pages multiple times?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Yes, unlimited rotations.</strong> You can rotate the same document multiple times. For example: rotate 90° right, then another 90° right = 180° rotation. Each rotation maintains 100% quality. There's no degradation from multiple rotations.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔒 What about password-protected PDFs?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Requires password first.</strong> If your PDF is password-protected, use our <strong>Unlock PDF tool</strong> first (you need the password), then rotate the unlocked document. We cannot rotate encrypted PDFs without the password for security reasons.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📱 Does rotation work on mobile devices?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Perfectly responsive.</strong> Our PDF rotation tool works flawlessly on smartphones and tablets. The interface adapts to your screen size, making it easy to rotate documents on-the-go. Ideal for fixing mobile-scanned documents directly on your phone.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>💾 Will rotation affect file size?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Minimal to no change.</strong> Rotation typically doesn't significantly affect file size since it's just changing orientation metadata. Any minor size changes are due to PDF optimization, not the rotation itself. File sizes remain essentially identical.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div style={{ backgroundColor: '#fffbeb', padding: '30px', borderRadius: '12px', border: '2px solid #f59e0b', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', color: '#b45309', marginBottom: '15px', fontWeight: 700 }}>🚀 Start Rotating Your PDFs Now!</h3>
              <p style={{ fontSize: '18px', color: '#92400e', marginBottom: '20px' }}>
                Fix misaligned documents in seconds with perfect quality preservation—completely free!
              </p>
              </div>
          </section>
        </article>
      </div>
    </>
  );
}