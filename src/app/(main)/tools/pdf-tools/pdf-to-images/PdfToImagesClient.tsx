"use client";

import React from "react";
import PDFToolsWorkspace from "../PDFToolsWorkspace";

export default function PdfToImagesClient() {
  return (
    <>
      <PDFToolsWorkspace operation="pdf-to-images" />

      {/* SEO Content Section */}
      <div className="seo-content-section" style={{ maxWidth: '1200px', margin: '80px auto 60px', padding: '0 20px', lineHeight: '1.7' }}>
        <article>
          <h1 style={{ fontSize: '32px', marginBottom: '25px', color: '#1e293b', fontWeight: 800, lineHeight: '1.3' }}>
            Convert PDF to Images Online Free - Extract High-Quality Images from PDF Documents
          </h1>
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#334155', marginBottom: '25px', fontWeight: 500 }}>
              <strong>SCENITH's PDF to Image converter</strong> extracts every page from your PDF as high-quality images perfect for presentations, websites, social media, or image editing. Convert PDF pages to JPG, PNG, or WebP format with customizable DPI settings for optimal quality—from screen resolution to professional print quality.
            </p>

            <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', borderLeft: '5px solid #06b6d4', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 700 }}>🎯 Key Extraction Features:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #a5f3fc' }}>
                  <div style={{ fontSize: '20px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '5px' }}>300 DPI</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Professional Print Quality</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #a5f3fc' }}>
                  <div style={{ fontSize: '20px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '5px' }}>150 DPI</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>High-Quality Web & Display</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #a5f3fc' }}>
                  <div style={{ fontSize: '20px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '5px' }}>72 DPI</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Optimized Screen Quality</div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🖼️ Three Image Format Options
            </h2>

            <div className="format-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#ecfeff', padding: '30px', borderRadius: '12px', borderTop: '4px solid #06b6d4', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>JPG</div>
                  <h3 style={{ fontSize: '22px', color: '#0e7490', margin: 0, fontWeight: 700 }}>JPG Format</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Photos, complex graphics, and general-purpose use
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Excellent compression (smaller file sizes)</li>
                  <li style={{ marginBottom: '10px' }}>• Supports millions of colors</li>
                  <li style={{ marginBottom: '10px' }}>• Universal compatibility</li>
                  <li style={{ marginBottom: '10px' }}>• Ideal for web use and sharing</li>
                  <li style={{ marginBottom: '10px' }}>• Most common image format</li>
                </ul>
                <div style={{ backgroundColor: '#cffafe', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Web graphics, email attachments, general sharing
                </div>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '30px', borderRadius: '12px', borderTop: '4px solid #06b6d4', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>PNG</div>
                  <h3 style={{ fontSize: '22px', color: '#0e7490', margin: 0, fontWeight: 700 }}>PNG Format</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Text documents, screenshots, and graphics with transparency
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Lossless compression (perfect quality)</li>
                  <li style={{ marginBottom: '10px' }}>• Supports transparency (alpha channel)</li>
                  <li style={{ marginBottom: '10px' }}>• Ideal for text and line art</li>
                  <li style={{ marginBottom: '10px' }}>• Larger file sizes than JPG</li>
                  <li style={{ marginBottom: '10px' }}>• Perfect for editing and archiving</li>
                </ul>
                <div style={{ backgroundColor: '#cffafe', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Document pages, screenshots, graphics with text
                </div>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '30px', borderRadius: '12px', borderTop: '4px solid #06b6d4', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>WEBP</div>
                  <h3 style={{ fontSize: '22px', color: '#0e7490', margin: 0, fontWeight: 700 }}>WebP Format</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Modern web applications and optimized file sizes
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Superior compression (smaller than JPG/PNG)</li>
                  <li style={{ marginBottom: '10px' }}>• Supports both lossy and lossless</li>
                  <li style={{ marginBottom: '10px' }}>• Modern web standard</li>
                  <li style={{ marginBottom: '10px' }}>• Excellent quality-to-size ratio</li>
                  <li style={{ marginBottom: '10px' }}>• Ideal for websites and progressive apps</li>
                </ul>
                <div style={{ backgroundColor: '#cffafe', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Websites, progressive web apps, modern applications
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🚀 Complete Extraction Guide
            </h2>

            <div className="step-guide" style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>1</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Upload Your PDF Document</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  <strong>Method A:</strong> Click the upload area or drag your PDF directly into the browser.
                  <br/><strong>Method B:</strong> Upload from cloud storage via browser integration.
                </p>
                <div style={{ backgroundColor: '#cffafe', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Pro Tip:</strong> The tool automatically detects page count—you'll see this information after upload to help plan your extraction.
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>2</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Choose Output Format & Quality</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#06b6d4', marginBottom: '10px' }}>JPG</div>
                    <div style={{ fontSize: '14px' }}>Best for photos & web</div>
                  </div>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#06b6d4', marginBottom: '10px' }}>PNG</div>
                    <div style={{ fontSize: '14px' }}>Best for text & graphics</div>
                  </div>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#06b6d4', marginBottom: '10px' }}>WebP</div>
                    <div style={{ fontSize: '14px' }}>Best for modern web</div>
                  </div>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                  Select the format that best matches your intended use. Each format has specific strengths optimized for different scenarios.
                </p>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>3</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Configure Quality Settings</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Choose appropriate DPI (dots per inch) for your needs:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>72 DPI</h4>
                    <p style={{ fontSize: '14px', margin: 0 }}>Screen viewing, web use, emails</p>
                  </div>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>150 DPI</h4>
                    <p style={{ fontSize: '14px', margin: 0 }}>High-quality displays, presentations</p>
                  </div>
                  <div style={{ backgroundColor: '#ecfeff', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>300 DPI</h4>
                    <p style={{ fontSize: '14px', margin: 0 }}>Professional printing, archival</p>
                  </div>
                </div>
                <div style={{ backgroundColor: '#cffafe', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Quality Tip:</strong> Higher DPI = better quality but larger file sizes. Choose based on your specific needs.
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#06b6d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>4</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Download Extracted Images</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                  Click "Process PDF to Images" and receive all pages as high-quality images:
                </p>
                <ul style={{ marginTop: '15px', marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• All pages extracted as individual image files</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Files delivered in a single ZIP archive</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Automatic naming: page-1.jpg, page-2.jpg, etc.</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Perfect quality preservation based on your settings</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Ready for immediate use in any application</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🏢 Professional Use Cases & Applications
            </h2>

            <div className="applications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #06b6d4' }}>
                <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 600 }}>🌐 Web & Digital Content</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Extract images for website content</li>
                  <li style={{ marginBottom: '8px' }}>• Create social media graphics from PDF pages</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare images for blog posts and articles</li>
                  <li style={{ marginBottom: '8px' }}>• Convert PDF slides to web-friendly images</li>
                  <li style={{ marginBottom: '8px' }}>• Create thumbnails for document previews</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #06b6d4' }}>
                <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 600 }}>🎓 Education & Publishing</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Extract textbook illustrations for presentations</li>
                  <li style={{ marginBottom: '8px' }}>• Convert research paper figures for reuse</li>
                  <li style={{ marginBottom: '8px' }}>• Create study materials from PDF pages</li>
                  <li style={{ marginBottom: '8px' }}>• Extract diagrams for educational content</li>
                  <li style={{ marginBottom: '8px' }}>• Convert book pages for digital annotation</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #06b6d4' }}>
                <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 600 }}>💼 Business & Marketing</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Extract charts from business reports</li>
                  <li style={{ marginBottom: '8px' }}>• Convert presentation slides to images</li>
                  <li style={{ marginBottom: '8px' }}>• Create marketing materials from PDF content</li>
                  <li style={{ marginBottom: '8px' }}>• Extract product images from catalogs</li>
                  <li style={{ marginBottom: '8px' }}>• Convert infographics for social media</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #06b6d4' }}>
                <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 600 }}>🎨 Creative & Design</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Extract graphics for editing in Photoshop</li>
                  <li style={{ marginBottom: '8px' }}>• Convert PDF artwork to image formats</li>
                  <li style={{ marginBottom: '8px' }}>• Create reference images from PDF portfolios</li>
                  <li style={{ marginBottom: '8px' }}>• Extract design elements for reuse</li>
                  <li style={{ marginBottom: '8px' }}>• Convert PDF mockups to image files</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🎓 Advanced Extraction Techniques
            </h2>

            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '20px', fontWeight: 600 }}>Optimizing Image Extraction Results</h3>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>1. Format Selection Strategy</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Choose the right format for your specific needs:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>JPG:</strong> Photos, complex graphics, web use (smaller files)</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>PNG:</strong> Text documents, screenshots, graphics with transparency (perfect quality)</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>WebP:</strong> Modern web applications, progressive apps (best compression)</li>
                </ul>
              </div>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>2. DPI Selection Guide</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Match DPI settings to your intended use:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>72 DPI:</strong> Web screens, mobile viewing, email attachments</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>150 DPI:</strong> High-resolution displays, presentations, digital archives</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>300 DPI:</strong> Professional printing, high-quality reproductions, archival</li>
                </ul>
              </div>

              <div className="technique">
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>3. Batch Processing & Organization</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Handle multiple PDFs efficiently:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Process similar documents with same settings</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Use consistent naming conventions for extracted images</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Group extracted images by project or category</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Create separate folders for different quality levels</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ⚡ Technical Specifications
            </h2>

            <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#06b6d4', marginBottom: '10px' }}>📄</div>
                <h3 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>Page Limit</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>Unlimited pages per PDF</p>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#06b6d4', marginBottom: '10px' }}>🖼️</div>
                <h3 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>Output Formats</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>JPG, PNG, WebP</p>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#06b6d4', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>Processing Speed</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>10-60 seconds average</p>
              </div>

              <div style={{ backgroundColor: '#ecfeff', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#06b6d4', marginBottom: '10px' }}>💎</div>
                <h3 style={{ fontSize: '18px', color: '#0e7490', marginBottom: '10px', fontWeight: 600 }}>Quality Levels</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>72, 150, 300 DPI</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#cffafe', padding: '25px', borderRadius: '12px', marginTop: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#0e7490', marginBottom: '15px', fontWeight: 600 }}>✅ Quality Guarantee</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
                Our extraction algorithm preserves maximum quality based on your selected settings. Text remains sharp and readable, graphics maintain clarity, colors stay accurate, and all visual elements are faithfully reproduced. For PDFs with vector graphics, we extract at the highest possible resolution for your chosen DPI setting.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ❓ Frequently Asked Questions
            </h2>

            <div className="faq-grid" style={{ display: 'grid', gap: '20px' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🖼️ What image formats can I choose from?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Three optimized formats:</strong> JPG (best for photos/web), PNG (best for text/perfect quality), and WebP (best for modern web/smallest files). Each format has specific strengths for different use cases. Choose based on whether you prioritize file size, quality, or specific features like transparency.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📊 How does DPI affect image quality and size?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>DPI = Dots Per Inch = Resolution.</strong> Higher DPI means higher resolution and better quality but larger file sizes. 72 DPI is standard for screens, 150 DPI is good for high-quality displays, 300 DPI is professional print quality. Choose based on your needs: web/screen use = 72 DPI, presentations = 150 DPI, printing = 300 DPI.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>💎 Will extracted images maintain PDF quality?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Yes, with intelligent optimization.</strong> Our algorithm extracts at the highest possible quality for your chosen settings. Text remains crisp, graphics stay sharp, and colors are accurately reproduced. For vector-based PDF content, we extract at maximum resolution. The quality matches or exceeds what you see in the PDF viewer.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📦 How are extracted images delivered?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Single ZIP file containing all images.</strong> Each PDF page becomes a separate image file, automatically named (page-1.jpg, page-2.jpg, etc.). The ZIP file contains all images organized sequentially. This makes it easy to download and extract all images at once while keeping them organized.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔒 What about password-protected PDFs?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Requires password first.</strong> If your PDF is password-protected, use our <strong>Unlock PDF tool</strong> first (you need the password), then convert the unlocked document to images. We cannot extract images from encrypted PDFs without the password for security reasons.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📱 Can I extract specific pages instead of all?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Yes, with a two-step process.</strong> First use our <strong>Split PDF tool</strong> to extract specific pages into a separate PDF, then convert that smaller PDF to images. This gives you complete control over which pages become images while maintaining optimal quality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div style={{ backgroundColor: '#ecfeff', padding: '30px', borderRadius: '12px', border: '2px solid #06b6d4', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', color: '#0e7490', marginBottom: '15px', fontWeight: 700 }}>🚀 Extract Images from PDF Now!</h3>
              <p style={{ fontSize: '18px', color: '#155e75', marginBottom: '20px' }}>
                Convert PDF pages to high-quality images in your preferred format—completely free!
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}