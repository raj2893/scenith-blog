"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFilePdf,
  FaImages,
  FaCompress,
  FaSync,
  FaObjectGroup,
  FaCut,
  FaLock,
  FaUnlock,
  FaTint,
  FaArrowLeft
} from "react-icons/fa";
import "@/styles/tools/PDFTools.css";

interface PDFTool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  available: boolean;
}

const PDFToolsPage: React.FC = () => {
  const router = useRouter();
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: PDFTool[] = [
    {
      id: "merge-pdf",
      name: "Merge PDFs",
      description: "Combine multiple PDF files into one document",
      icon: <FaObjectGroup size={32} />,
      color: "#3b82f6",
      available: true,
    },
    {
      id: "split-pdf",
      name: "Split PDF",
      description: "Extract pages or split PDF into multiple files",
      icon: <FaCut size={32} />,
      color: "#8b5cf6",
      available: true,
    },
    {
      id: "compress-pdf",
      name: "Compress PDF",
      description: "Reduce PDF file size while maintaining quality",
      icon: <FaCompress size={32} />,
      color: "#10b981",
      available: true,
    },
    {
      id: "rotate-pdf",
      name: "Rotate PDF",
      description: "Rotate pages in your PDF document",
      icon: <FaSync size={32} />,
      color: "#f59e0b",
      available: true,
    },
    {
      id: "images-to-pdf",
      name: "Images to PDF",
      description: "Convert multiple images into a single PDF",
      icon: <FaImages size={32} />,
      color: "#ec4899",
      available: true,
    },
    {
      id: "pdf-to-images",
      name: "PDF to Images",
      description: "Extract all pages as high-quality images",
      icon: <FaFilePdf size={32} />,
      color: "#06b6d4",
      available: true,
    },
    {
      id: "add-watermark",
      name: "Add Watermark",
      description: "Add text watermark to protect your PDFs",
      icon: <FaTint size={32} />,
      color: "#6366f1",
      available: true,
    },
    {
      id: "lock-pdf",
      name: "Lock PDF",
      description: "Password-protect your PDF documents",
      icon: <FaLock size={32} />,
      color: "#ef4444",
      available: true,
    },
    {
      id: "unlock-pdf",
      name: "Unlock PDF",
      description: "Remove password protection from PDFs",
      icon: <FaUnlock size={32} />,
      color: "#14b8a6",
      available: true,
    },
  ];

  const handleToolClick = (toolId: string, available: boolean) => {
    if (available) {
      router.push(`/pdf-tools/${toolId}`);
    }
  };

  return (
    <div className="pdf-tools-container">
      {/* Header */}
      <div className="pdf-tools-header">
        <button
          className="back-btn"
          onClick={() => router.push("/tools")}
        >
          <FaArrowLeft size={18} />
          <span>Back to Tools</span>
        </button>

        <div className="header-content">
          <div className="header-icon">
            <FaFilePdf size={48} />
          </div>
          <h1>Free PDF Tools Online - Professional PDF Editor</h1>
          <p>All-in-one PDF toolkit for merging, splitting, compressing, and converting PDFs. Fast, secure, and completely free - no signup required!</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`tool-card ${!tool.available ? "unavailable" : ""} ${
              hoveredTool === tool.id ? "hovered" : ""
            }`}
            onClick={() => handleToolClick(tool.id, tool.available)}
            onMouseEnter={() => setHoveredTool(tool.id)}
            onMouseLeave={() => setHoveredTool(null)}
            style={{
              "--tool-color": tool.color,
            } as React.CSSProperties}
          >
            <div className="tool-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>

            <div className="tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            {!tool.available && (
              <div className="coming-soon-badge">Coming Soon</div>
            )}

            <div className="tool-arrow">→</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose SCENITH PDF Tools?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h4>Lightning Fast Processing</h4>
            <p>Process PDFs in seconds with our optimized engine. No waiting, no delays - instant results for all operations.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h4>100% Secure & Private</h4>
            <p>Your files are processed securely and automatically deleted after download. We never store or share your documents.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✨</div>
            <h4>High Quality Output</h4>
            <p>Maintain original quality with advanced processing algorithms. Your PDFs stay crisp and professional.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💯</div>
            <h4>Completely Free</h4>
            <p>All PDF tools are free to use with unlimited conversions. No hidden fees, no file size limits, no signup required.</p>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="seo-content-section" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
          Complete PDF Solution for All Your Document Needs
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          SCENITH offers a comprehensive suite of professional PDF tools designed to handle all your document processing needs. Whether you're a student, professional, or business owner, our free online PDF tools help you work smarter and faster with your documents.
        </p>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          Popular PDF Operations
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          <strong>Merge PDFs:</strong> Combine multiple PDF documents into a single file. Perfect for consolidating reports, creating presentations, or organizing related documents. Simply upload your files, arrange them in your preferred order, and download the merged PDF instantly.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          <strong>Split PDFs:</strong> Extract specific pages or divide large PDFs into smaller, manageable documents. Choose to split all pages individually or define custom page ranges. Ideal for sharing specific sections without sending entire documents.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          <strong>Compress PDFs:</strong> Reduce file size by up to 75% while maintaining quality. Choose from preset compression levels or set a custom percentage. Essential for email attachments, cloud storage, and faster file sharing.
        </p>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          Advanced PDF Features
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          Our toolkit includes specialized features for professional document management. Convert images to PDF format, extract pages as high-quality images, add watermarks for document protection, and secure your files with password encryption. Each tool is designed with simplicity and efficiency in mind.
        </p>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          Why Use Online PDF Tools?
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          Online PDF tools eliminate the need for expensive desktop software or complicated installations. Access powerful PDF editing capabilities from any device with a web browser. Work on Windows, Mac, Linux, or mobile devices with the same fast, reliable experience. Your files are processed in the cloud, saving your device's storage and processing power.
        </p>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          Security and Privacy First
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          We take your privacy seriously. All uploaded files are encrypted during transmission and processing. Files are automatically deleted from our servers after you download the processed document. We never store, analyze, or share your documents with third parties. Your data remains completely private and secure.
        </p>
      </div>
      {/* Add after the existing SEO Content Section */}

      {/* NEW: Understanding PDF Tools Section */}
      <div className="understanding-pdf-section" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px', background: '#f8fafc', borderRadius: '12px', padding: '40px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
          Understanding PDF Tools: The Complete Guide to Document Management
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          PDF (Portable Document Format) has become the universal standard for document sharing and archiving. Created by Adobe in 1993, PDFs preserve formatting across all devices and platforms, making them essential for business, education, and personal use. However, working with PDFs often requires specialized tools to merge, split, compress, or convert files efficiently.
        </p>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          Why Online PDF Tools Are Essential in 2024
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          Traditional PDF software like Adobe Acrobat Pro costs $239.88 per year, while many users only need basic PDF operations occasionally. <strong>Online PDF tools eliminate subscription costs</strong> and complex installations, providing instant access to professional features through your web browser. Whether you're a student managing research papers, a professional handling contracts, or a business owner organizing documents, free online PDF tools offer enterprise-grade functionality without the enterprise price tag.
        </p>

        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginTop: '24px', border: '2px solid #e2e8f0' }}>
          <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#1e293b' }}>Key Benefits of Browser-Based PDF Processing:</h4>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', paddingLeft: '24px' }}>
            <li><strong>Zero Installation:</strong> No software downloads, no system requirements, no compatibility issues. Works on Windows, Mac, Linux, Chromebook, and mobile devices instantly.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Access your PDF tools from any device with a web browser. Start on desktop, continue on mobile - your workflow isn't tied to a specific machine.</li>
            <li><strong>Automatic Updates:</strong> Always use the latest features and security improvements without manual updates or version management.</li>
            <li><strong>Storage Savings:</strong> PDF editing software can consume 2-3GB of disk space. Browser-based tools free up valuable storage for your actual files.</li>
            <li><strong>Collaboration Ready:</strong> Share processed PDFs instantly via cloud storage or email without worrying about software version compatibility.</li>
          </ul>
        </div>

        <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
          How PDF Tools Work: Behind the Scenes
        </h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
          Modern online PDF tools leverage powerful server-side processing to handle complex document operations. When you upload a PDF, our system analyzes the file structure, performs the requested operation (merging, splitting, compressing, etc.), and generates an optimized output file. Here's what happens during each operation:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '17px', marginBottom: '10px', color: '#1e293b' }}>📄 Document Analysis</h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
              Our system parses PDF structure, identifying pages, fonts, images, and embedded resources. This analysis ensures accurate processing while preserving document integrity.
            </p>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '17px', marginBottom: '10px', color: '#1e293b' }}>🔄 Smart Processing</h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
              Advanced algorithms optimize operations based on file content. Images are compressed intelligently, pages are reorganized efficiently, and quality is maintained throughout.
            </p>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '17px', marginBottom: '10px', color: '#1e293b' }}>✨ Quality Preservation</h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
              Unlike basic tools that degrade quality, our system maintains original resolution, font rendering, and layout precision across all operations.
            </p>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '17px', marginBottom: '10px', color: '#1e293b' }}>🔒 Secure Processing</h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
              Files are encrypted during transfer and processing, then automatically deleted from servers after you download the result. Your documents remain completely private.
            </p>
          </div>
        </div>
      </div>

      {/* NEW: Detailed Tool Comparison Section */}
      <div className="tool-comparison-section" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>

        <div style={{ marginTop: '30px', padding: '20px', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))', borderRadius: '12px', border: '2px solid #667eea' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#1e293b' }}>
            💡 Why SCENITH Stands Out
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
            Unlike competitors that nickel-and-dime users with file size limits, watermarks, and premium tiers, <strong>SCENITH provides professional PDF tools completely free</strong>. No hidden costs, no artificial restrictions, no compromises on quality. We believe powerful PDF editing should be accessible to everyone - students, freelancers, small businesses, and enterprises alike.
          </p>
        </div>
      </div>

      {/* NEW: Common PDF Problems & Solutions */}
      <div className="pdf-problems-solutions" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
          Common PDF Problems & How to Solve Them
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '30px' }}>
          PDF documents can present various challenges in daily workflows. Here are the most common issues users face and exactly how SCENITH's tools solve them.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: File Too Large to Email
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              Most email services limit attachments to 25MB. A single high-resolution PDF can easily exceed this, making it impossible to share important documents.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: PDF Compression</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                Use our <strong>Compress PDF</strong> tool to reduce file size by up to 75% while maintaining readability. Choose from low, medium, or high compression, or set a custom percentage (1-99%) to hit exact file size targets. Perfect for email attachments, faster uploads, and storage savings.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: Need Only Specific Pages from a Large PDF
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              You receive a 200-page report but only need pages 45-60. Sending the entire file wastes bandwidth and confuses recipients.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: PDF Splitting</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                Our <strong>Split PDF</strong> tool lets you extract exact page ranges. Split pages 45-60 into a separate file in seconds. Define multiple ranges to create several focused documents from one large PDF. Perfect for sharing relevant sections, creating study materials, or organizing chapters.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: Multiple PDFs Need to Be Combined
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              You have separate PDFs for cover letter, resume, portfolio samples, and references. Employers want one consolidated file.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: PDF Merging</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                Use <strong>Merge PDF</strong> to combine all documents into one professional file. Drag-and-drop page reordering lets you arrange content perfectly. Select specific pages from each PDF for complete control. Ideal for job applications, client presentations, and document consolidation.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: Document Scanned Upside Down
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              Scanner mishaps result in inverted or sideways pages, making documents difficult to read and unprofessional in appearance.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: PDF Rotation</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                <strong>Rotate PDF</strong> instantly fixes orientation issues. Choose 90° clockwise, 90° counterclockwise, or 180° flip. Processed in seconds, download immediately. Perfect for correcting scanned documents, mobile-captured PDFs, or orientation mismatches.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: Confidential Document Needs Protection
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              Sensitive files like contracts, financial statements, or personal documents must be protected from unauthorized access.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: Password Protection</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                <strong>Lock PDF</strong> adds military-grade encryption requiring a password to open. Perfect for legal documents, financial records, and confidential communications. Recipients need the password to view contents, ensuring complete security during transmission and storage.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ef4444' }}>
              ❌ Problem: Images Needed for Website/Presentation
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '12px' }}>
              You have diagrams, charts, or graphics in a PDF but need them as individual image files for PowerPoint, websites, or social media.
            </p>
            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: '#059669' }}>✅ Solution: PDF to Images Conversion</h4>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#064e3b', margin: 0 }}>
                <strong>PDF to Images</strong> extracts every page as high-quality JPG or PNG files. Maintains original resolution and clarity. Perfect for creating thumbnails, extracting graphics, sharing specific pages on social media, or importing into design software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: SEO-Optimized FAQ Section */}
      <div className="detailed-faq-section" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
          Frequently Asked Questions About PDF Tools
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* FAQ Items */}
          {[
            {
              q: "Are online PDF tools safe to use?",
              a: "Yes, when using reputable services like SCENITH. We employ bank-grade SSL encryption for file transfers, process documents on secure servers, and automatically delete all files within 1 hour after processing. Unlike some competitors that retain files for analytics, we prioritize your privacy. Never use PDF tools for extremely sensitive documents like tax returns or medical records - process those locally with offline software."
            },
            {
              q: "Why choose online PDF tools over desktop software?",
              a: "Online tools offer several advantages: (1) Zero installation - works instantly on any device, (2) No storage consumption - desktop PDF editors can use 2-3GB of disk space, (3) Always updated - access latest features without manual updates, (4) Cross-platform - use on Windows, Mac, Linux, ChromeOS, and mobile devices, (5) Cost-effective - professional desktop software costs $200+ annually. Online tools are perfect for occasional PDF operations without financial commitment."
            },
            {
              q: "Will merging PDFs affect quality or formatting?",
              a: "No. Our merge tool preserves original quality, fonts, images, and formatting. Each PDF's structure is maintained exactly as uploaded. We don't re-compress or downscale content during merging. The output file contains all original elements at their native resolution. Hyperlinks, bookmarks, and embedded media are preserved when technically possible (though some complex interactive elements may have limitations)."
            },
            {
              q: "How much can I compress a PDF without losing quality?",
              a: "It depends on content type. Text-heavy PDFs compress efficiently (50-75%) with minimal visible quality loss. Image-heavy PDFs see more noticeable compression at high levels. We recommend: (1) Low compression (75%) for documents with critical graphics, (2) Medium compression (50%) for most business documents, (3) High compression (25%) for text-only files or when quality is less critical. Our custom compression slider lets you fine-tune the balance between file size and quality for your specific needs."
            },
            {
              q: "Can I edit text inside PDFs using these tools?",
              a: "Our current tools focus on document-level operations (merging, splitting, compressing, rotating). For text editing within PDFs, consider Adobe Acrobat, PDFescape, or Sejda. However, you can use our tools to split out specific pages, edit them in another tool, then merge the edited pages back. This workflow is surprisingly efficient for occasional editing needs without subscription costs."
            },
            {
              q: "Do you store my uploaded PDF files?",
              a: "No. Files are automatically deleted from our servers within 1 hour after processing, usually much sooner. We do not retain, analyze, or use your documents for any purpose beyond the specific operation you requested. For maximum security with highly sensitive documents, consider using offline PDF software that processes files entirely on your local device."
            },
            {
              q: "What's the maximum PDF file size I can process?",
              a: "Currently, there are no hard file size limits on SCENITH. However, very large files (500MB+) may take longer to upload and process depending on your internet connection. Most users process files under 100MB without issues. If you regularly work with massive PDFs, consider splitting them first for faster processing."
            },
            {
              q: "Can I use these tools on my phone or tablet?",
              a: "Absolutely! All SCENITH PDF tools are fully responsive and work seamlessly on mobile devices. The interface adapts to touchscreens, making it easy to upload files, select options, and download results on smartphones and tablets. Processing happens server-side, so mobile performance matches desktop speed."
            },
            {
              q: "Are there any watermarks on processed PDFs?",
              a: "No watermarks, ever. Unlike many free PDF services that add branding to output files, SCENITH produces clean, professional PDFs without any marks, logos, or attribution. Your processed documents are yours - use them freely for personal or commercial purposes without restrictions."
            },
            {
              q: "How do I password-protect a PDF?",
              a: "Use our Lock PDF tool: (1) Upload your PDF file, (2) Enter a strong password (8+ characters recommended), (3) Click 'Process' to encrypt the file, (4) Download the password-protected PDF. The password will be required every time someone tries to open the file. Store your password securely - encrypted PDFs cannot be recovered without the correct password."
            }
          ].map((faq, index) => (
            <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#1e293b', fontWeight: 600 }}>
                {faq.q}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFToolsPage;