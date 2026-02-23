"use client";

import React from "react";
import PDFToolsWorkspace from "../PDFToolsWorkspace";

export default function CompressPdfClient() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools/pdf-tools" itemProp="item"><span itemProp="name">PDF Tools</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Compress PDF</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      <PDFToolsWorkspace operation="compress-pdf" />

      {/* SEO Content Section */}
      <div className="seo-content-section" style={{ maxWidth: '1200px', margin: '80px auto 60px', padding: '0 20px', lineHeight: '1.7' }}>
        <article>
          <h1 style={{ fontSize: '32px', marginBottom: '25px', color: '#1e293b', fontWeight: 800, lineHeight: '1.3' }}>
            Compress PDF Online Free – Reduce PDF File Size Up to 90% (No Limits)
          </h1>
          {' '}Need to combine files first? Use our{' '}
          <a href="/tools/pdf-tools/merge-pdf-online" style={{ color: '#3b82f6' }}>free PDF merger</a>.          
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#334155', marginBottom: '25px', fontWeight: 500 }}>
              <strong>SCENITH's PDF compressor</strong> reduces file sizes by up to <strong>90%</strong> while maintaining excellent visual quality. Whether you need to email large documents, upload files to websites with size limits, save storage space, or optimize PDFs for web use, our intelligent compression algorithm delivers perfect balance between file size reduction and quality preservation.
            </p>

            <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', borderLeft: '5px solid #10b981', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#047857', marginBottom: '15px', fontWeight: 700 }}>✨ Compression Results Examples:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '20px', color: '#10b981', fontWeight: 'bold', marginBottom: '5px' }}>100MB → 25MB</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>High Quality (75% reduction)</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '20px', color: '#10b981', fontWeight: 'bold', marginBottom: '5px' }}>50MB → 10MB</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Medium Quality (80% reduction)</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '20px', color: '#10b981', fontWeight: 'bold', marginBottom: '5px' }}>20MB → 2MB</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>Maximum Compression (90% reduction)</div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🎯 Three Intelligent Compression Levels
            </h2>

            <div className="levels-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '12px', borderTop: '4px solid #22c55e', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>🟢</div>
                  <h3 style={{ fontSize: '22px', color: '#15803d', margin: 0, fontWeight: 700 }}>Low Compression</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Professional printing, archival, documents requiring maximum quality
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Reduces file size by ~25-50%</li>
                  <li style={{ marginBottom: '10px' }}>• Maintains 100% text quality</li>
                  <li style={{ marginBottom: '10px' }}>• Preserves high-resolution images</li>
                  <li style={{ marginBottom: '10px' }}>• Perfect for legal/medical documents</li>
                  <li style={{ marginBottom: '10px' }}>• Ideal for professional publishing</li>
                </ul>
                <div style={{ backgroundColor: '#dcfce7', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Contracts, theses, research papers, high-quality prints
                </div>
              </div>

              <div style={{ backgroundColor: '#fefce8', padding: '30px', borderRadius: '12px', borderTop: '4px solid #eab308', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#eab308', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>🟡</div>
                  <h3 style={{ fontSize: '22px', color: '#a16207', margin: 0, fontWeight: 700 }}>Medium Compression</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Email attachments, web uploads, general business use
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Reduces file size by ~50-75%</li>
                  <li style={{ marginBottom: '10px' }}>• Maintains excellent text clarity</li>
                  <li style={{ marginBottom: '10px' }}>• Optimizes images for screen viewing</li>
                  <li style={{ marginBottom: '10px' }}>• Balances quality and file size</li>
                  <li style={{ marginBottom: '10px' }}>• Most commonly used setting</li>
                </ul>
                <div style={{ backgroundColor: '#fef9c3', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Reports, presentations, email attachments, web documents
                </div>
              </div>

              <div style={{ backgroundColor: '#fef2f2', padding: '30px', borderRadius: '12px', borderTop: '4px solid #ef4444', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px', flexShrink: 0 }}>🔴</div>
                  <h3 style={{ fontSize: '22px', color: '#b91c1c', margin: 0, fontWeight: 700 }}>High Compression</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  <strong>Best for:</strong> Mobile sharing, quick downloads, storage optimization
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '10px' }}>• Reduces file size by ~75-90%</li>
                  <li style={{ marginBottom: '10px' }}>• Maintains readable text quality</li>
                  <li style={{ marginBottom: '10px' }}>• Significantly compresses images</li>
                  <li style={{ marginBottom: '10px' }}>• Creates smallest possible files</li>
                  <li style={{ marginBottom: '10px' }}>• Ideal for bandwidth-limited situations</li>
                </ul>
                <div style={{ backgroundColor: '#fee2e2', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '14px' }}>
                  <strong>Recommended for:</strong> Mobile viewing, large document collections, slow connections
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🚀 Complete Step-by-Step Compression Guide
            </h2>

            <div className="step-guide" style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>1</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Upload Your PDF Document</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  <strong>Method A:</strong> Click the upload area or drag your PDF directly into the browser.
                  <br/><strong>Method B:</strong> Upload from cloud storage via browser integration.
                </p>
                <div style={{ backgroundColor: '#d1fae5', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Pro Tip:</strong> The tool automatically analyzes your PDF's structure to determine optimal compression settings based on content type (text-heavy vs image-heavy).
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>2</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Choose Compression Level</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Select from three intelligent compression levels or customize your own:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981', marginBottom: '10px' }}>Low</div>
                    <div style={{ fontSize: '14px' }}>25-50% reduction</div>
                  </div>
                  <div style={{ backgroundColor: '#fefce8', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#eab308', marginBottom: '10px' }}>Medium</div>
                    <div style={{ fontSize: '14px' }}>50-75% reduction</div>
                  </div>
                  <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef4444', marginBottom: '10px' }}>High</div>
                    <div style={{ fontSize: '14px' }}>75-90% reduction</div>
                  </div>
                </div>
                <div style={{ backgroundColor: '#d1fae5', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                  <strong>💡 Custom Option:</strong> Use the custom compression slider for precise control (1-99% compression).
                </div>
              </div>

              <div className="step" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px dashed #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>3</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Smart Quality Analysis</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Our algorithm intelligently analyzes your PDF content to optimize compression:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Text compression: Lossless optimization maintains perfect readability</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Image compression: Smart resizing based on viewing context</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Font optimization: Embedded font subsetting reduces size</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Metadata cleaning: Removes unnecessary document data</li>
                </ul>
              </div>

              <div className="step" style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>4</div>
                  <h3 style={{ fontSize: '22px', color: '#1e293b', margin: 0, fontWeight: 600 }}>Download Compressed PDF</h3>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                  Click "Process Compress PDF" and receive your optimized document:
                </p>
                <ul style={{ marginTop: '15px', marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Instant download of compressed file</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Visual quality maintained per your settings</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Text remains fully searchable and selectable</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Perfect for email, web uploads, or storage</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• Original file automatically deleted for privacy</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              📊 When Should You Compress PDF Files?
            </h2>

            <div className="scenarios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', borderTop: '4px solid #22c55e' }}>
                <h3 style={{ fontSize: '20px', color: '#15803d', marginBottom: '15px', fontWeight: 600 }}>📧 Email Attachments</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Reduce files below 25MB email limits</li>
                  <li style={{ marginBottom: '8px' }}>• Faster upload/download times</li>
                  <li style={{ marginBottom: '8px' }}>• Avoid bounce-backs from large files</li>
                  <li style={{ marginBottom: '8px' }}>• Professional file size management</li>
                  <li style={{ marginBottom: '8px' }}>• Mobile-friendly attachment sizes</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fefce8', padding: '25px', borderRadius: '12px', borderTop: '4px solid #eab308' }}>
                <h3 style={{ fontSize: '20px', color: '#a16207', marginBottom: '15px', fontWeight: 600 }}>🌐 Website & Cloud Uploads</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Meet website file size restrictions</li>
                  <li style={{ marginBottom: '8px' }}>• Faster website loading times</li>
                  <li style={{ marginBottom: '8px' }}>• Reduce cloud storage costs</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize for web viewing</li>
                  <li style={{ marginBottom: '8px' }}>• Improve user download experience</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
                <h3 style={{ fontSize: '20px', color: '#b91c1c', marginBottom: '15px', fontWeight: 600 }}>💾 Storage Optimization</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Free up hard drive space</li>
                  <li style={{ marginBottom: '8px' }}>• Archive large document collections</li>
                  <li style={{ marginBottom: '8px' }}>• Reduce backup storage requirements</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize database storage</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare documents for long-term archival</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
                <h3 style={{ fontSize: '20px', color: '#1e40af', marginBottom: '15px', fontWeight: 600 }}>📱 Mobile & Remote Work</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Faster mobile downloads</li>
                  <li style={{ marginBottom: '8px' }}>• Reduce data usage costs</li>
                  <li style={{ marginBottom: '8px' }}>• Work efficiently on slow connections</li>
                  <li style={{ marginBottom: '8px' }}>• Share documents via messaging apps</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize for tablet/phone viewing</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🏢 Industry-Specific Compression Applications
            </h2>

            <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', borderTop: '4px solid #22c55e' }}>
                <h3 style={{ fontSize: '20px', color: '#15803d', marginBottom: '15px', fontWeight: 600 }}>📈 Business & Corporate</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Compress quarterly reports for email distribution</li>
                  <li style={{ marginBottom: '8px' }}>• Reduce presentation file sizes for sharing</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize financial statements for cloud storage</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare marketing materials for web upload</li>
                  <li style={{ marginBottom: '8px' }}>• Archive old contracts and documents</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fefce8', padding: '25px', borderRadius: '12px', borderTop: '4px solid #eab308' }}>
                <h3 style={{ fontSize: '20px', color: '#a16207', marginBottom: '15px', fontWeight: 600 }}>🎓 Education & Research</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Reduce thesis/document file sizes</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize research papers for journal submission</li>
                  <li style={{ marginBottom: '8px' }}>• Compress lecture notes for student distribution</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare academic portfolios for online submission</li>
                  <li style={{ marginBottom: '8px' }}>• Archive academic publications</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#fef2f2', padding: '25px', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
                <h3 style={{ fontSize: '20px', color: '#b91c1c', marginBottom: '15px', fontWeight: 600 }}>⚖️ Legal & Government</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Reduce court filing document sizes</li>
                  <li style={{ marginBottom: '8px' }}>• Optimize contracts for digital signing platforms</li>
                  <li style={{ marginBottom: '8px' }}>• Compress legal briefs for email distribution</li>
                  <li style={{ marginBottom: '8px' }}>• Archive case files while preserving quality</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare regulatory submissions</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#eff6ff', padding: '25px', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
                <h3 style={{ fontSize: '20px', color: '#1e40af', marginBottom: '15px', fontWeight: 600 }}>🏥 Healthcare & Medical</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px' }}>
                  <li style={{ marginBottom: '8px' }}>• Optimize medical records for secure transfer</li>
                  <li style={{ marginBottom: '8px' }}>• Reduce research paper file sizes</li>
                  <li style={{ marginBottom: '8px' }}>• Compress patient education materials</li>
                  <li style={{ marginBottom: '8px' }}>• Prepare clinical trial documentation</li>
                  <li style={{ marginBottom: '8px' }}>• Archive medical imaging reports</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              🎓 Advanced Compression Techniques
            </h2>

            <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '20px', fontWeight: 600 }}>Intelligent Compression Strategies</h3>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>1. Content-Aware Compression</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Our algorithm analyzes document content to apply optimal compression:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Text documents:</strong> Lossless compression maintains perfect readability</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Image-heavy documents:</strong> Smart image resizing based on viewing context</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Mixed content:</strong> Balanced approach preserving both text and images</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Scanned documents:</strong> OCR-friendly compression maintaining scan quality</li>
                </ul>
              </div>

              <div className="technique" style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed #cbd5e1' }}>
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>2. Progressive Compression Workflow</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Multi-stage approach for maximum efficiency:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Stage 1:</strong> Remove unnecessary metadata and hidden data</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Stage 2:</strong> Optimize fonts (subsetting and compression)</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Stage 3:</strong> Compress images based on selected quality level</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Stage 4:</strong> Apply overall document structure optimization</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Stage 5:</strong> Final quality validation and output generation</li>
                </ul>
              </div>

              <div className="technique">
                <h4 style={{ fontSize: '18px', color: '#475569', marginBottom: '10px', fontWeight: 600 }}>3. Quality Preservation Methods</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '15px' }}>
                  Advanced techniques to maintain document integrity:
                </p>
                <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Text preservation:</strong> Mathematical text remains crisp and searchable</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Image optimization:</strong> Smart resampling maintains visual quality</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Color management:</strong> Color profiles preserved for accurate reproduction</li>
                  <li style={{ marginBottom: '8px', fontSize: '16px' }}>• <strong>Document structure:</strong> Bookmarks, links, and form fields maintained</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ⚡ Technical Specifications & Performance
            </h2>

            <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}>📄</div>
                <h3 style={{ fontSize: '18px', color: '#047857', marginBottom: '10px', fontWeight: 600 }}>File Size Limit</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>No maximum limit</p>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ fontSize: '18px', color: '#047857', marginBottom: '10px', fontWeight: 600 }}>Processing Speed</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>10-60 seconds average</p>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}>💎</div>
                <h3 style={{ fontSize: '18px', color: '#047857', marginBottom: '10px', fontWeight: 600 }}>Compression Ratio</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>Up to 90% reduction</p>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}>🔒</div>
                <h3 style={{ fontSize: '18px', color: '#047857', marginBottom: '10px', fontWeight: 600 }}>Security</h3>
                <p style={{ fontSize: '16px', margin: 0 }}>256-bit SSL encryption</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#d1fae5', padding: '25px', borderRadius: '12px', marginTop: '30px' }}>
              <h3 style={{ fontSize: '20px', color: '#047857', marginBottom: '15px', fontWeight: 600 }}>✅ Quality Guarantee</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
                Our compression algorithm uses intelligent, content-aware technology to maximize file size reduction while preserving document quality. Text remains crisp and searchable, images maintain appropriate resolution for their intended use, and all document functionality (links, bookmarks, form fields) is preserved. The compressed PDF maintains professional appearance suitable for both screen viewing and printing, based on your selected quality level.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e293b', fontWeight: 700, paddingBottom: '10px', borderBottom: '2px solid #e2e8f0' }}>
              ❓ Frequently Asked Questions
            </h2>

            <div className="faq-grid" style={{ display: 'grid', gap: '20px' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>💎 Will compression reduce PDF quality?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Intelligent quality preservation.</strong> Our algorithm reduces file size while maintaining appropriate quality for your selected compression level. Low compression preserves near-original quality, medium compression balances size and quality for screen viewing, and high compression optimizes for smallest size while maintaining readability. Text remains searchable and selectable at all levels.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📊 What compression level should I choose?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Depends on your needs:</strong> <strong>Low</strong> (professional printing, archival), <strong>Medium</strong> (email, web, general use), <strong>High</strong> (mobile sharing, storage optimization). For precise control, use the custom percentage slider (1-99%). Start with Medium compression and adjust based on results—you can always recompress with different settings.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔒 Are my documents secure during compression?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Maximum security guaranteed.</strong> All file transfers use 256-bit SSL encryption. Files are processed in isolated, secure containers and automatically deleted immediately after you download the compressed version. We never store, analyze, or share your documents. Your privacy is protected throughout the entire process.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>📱 Can I compress password-protected PDFs?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Yes, with the password.</strong> If your PDF is password-protected, you'll need to enter the password during upload. The compression process maintains password protection on the output file unless you specifically choose to remove it. For maximum security, we recommend keeping protection enabled during compression.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>🔄 Can I compress multiple PDFs at once?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>One at a time for optimal results.</strong> Our tool processes each PDF individually to apply content-aware compression settings specific to that document. For batch processing, compress files sequentially—the process is fast (10-60 seconds per file). This ensures each document gets personalized optimization based on its content.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>💾 Will compressed PDFs work with all viewers?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                  <strong>Universal compatibility.</strong> Compressed PDFs work with all standard PDF viewers including Adobe Acrobat, Preview (Mac), Chrome, Firefox, Edge, and mobile PDF apps. The compression follows official PDF specifications, ensuring broad compatibility. No special software needed to view compressed files.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '12px', border: '2px solid #10b981', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', color: '#047857', marginBottom: '15px', fontWeight: 700 }}>🚀 Compress Your PDFs Now!</h3>
              <p style={{ fontSize: '18px', color: '#065f46', marginBottom: '20px' }}>
                Reduce file sizes by up to 90% while maintaining quality—completely free!
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}