"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/BlogIndex.module.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  gradient: string;
  tags: string[];
  featured: boolean;
  views: string;
  slug: string;
}

export default function BlogIndex() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Stop Wasting Hours on Subtitles: Add Them to Any Video in 30 Seconds (2025)",
      excerpt: "Reality check: You're probably spending 3-5 hours manually typing subtitles when AI can do it in 30 seconds with 98% accuracy.",
      category: "AI Tools",
      readTime: "4 min read",
      publishDate: "2025-01-15",
      author: "Scenith Team",
      image: "🚀",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["AI", "Subtitles", "Video Editing", "Productivity"],
      featured: true,
      views: "12.5K",
      slug: "how-to-add-subtitles-to-video",
    },
    {
      id: 2,
      title: "How to Reach 4000 Hours of YouTube Watch Time Fast in 2025",
      excerpt: "Discover how to hit 4000 hours of YouTube watch time fast using AI-powered subtitles with Scenith. Boost viewer retention and skyrocket your channel’s growth.",
      category: "YouTube Growth",
      readTime: "5 min read",
      publishDate: "2025-08-19",
      author: "Scenith Team",
      image: "📈",
      gradient: "linear-gradient(135deg, #00b894 0%, #38a169 100%)",
      tags: ["YouTube", "Subtitles", "AI Tools", "Watch Time"],
      featured: false,
      views: "10.2K",
      slug: "how-to-reach-4000-hours-watch-time",
    },
    {
      id: 3,
      title: "How to Use Layers in Video Editing with Scenith (2025)",
      excerpt: "Learn how to use layers in video editing with Scenith to create professional-looking videos. Master the Transform panel and boost your video’s engagement.",
      category: "Video Editing",
      readTime: "4 min read",
      publishDate: "2025-08-22",
      author: "Scenith Team",
      image: "🎬",
      gradient: "linear-gradient(135deg, #00b894 0%, #38a169 100%)",
      tags: ["Video Editing", "Layers", "Scenith", "Tutorials"],
      featured: false,
      views: "8.7K",
      slug: "how-to-use-layers-in-video-editing",
    },
    {
      id: 4,
      title: "How to Create a Video Editing Project in Scenith (2025)",
      excerpt: "Learn how to create a video editing project in Scenith with this beginner-friendly guide. Discover easy steps to start your video project and choose the perfect settings.",
      category: "Video Editing",
      readTime: "3 min read",
      publishDate: "2025-08-26",
      author: "Scenith Team",
      image: "🎥",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)",
      tags: ["Video Editing", "Scenith", "Tutorials", "Beginner"],
      featured: false,
      views: "5.0K",
      slug: "how-to-create-video-editing-project",
    },     
  ];

  const categories = ['all', 'AI Tools', 'Video Editing', 'YouTube Growth', 'Productivity', 'Tutorials'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('.nav-bar')?.getBoundingClientRect().height || 80;
      window.scrollTo({
        top: section.offsetTop - navHeight - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scenith | Video Editing & AI Tools Blog</title>
        <meta
          name="description"
          content="Explore Scenith’s blog for expert tips on video editing, AI tools, YouTube growth, and productivity hacks to elevate your content creation in 2025."
        />
        <meta
          name="keywords"
          content="video editing, AI tools, YouTube growth, subtitles, layers, productivity, Scenith"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Scenith | Video Editing & AI Tools Blog" />
        <meta
          property="og:description"
          content="Discover cutting-edge techniques, AI-powered tools, and tutorials to transform your video content creation with Scenith’s blog."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/blogs" />
        <meta property="og:image" content="/images/blog-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scenith | Video Editing & AI Tools Blog" />
        <meta
          name="twitter:description"
          content="Discover cutting-edge techniques, AI-powered tools, and tutorials to transform your video content creation with Scenith’s blog."
        />
        <meta name="twitter:image" content="/images/blog-og.jpg" />
        <link rel="canonical" href="https://scenith.in/blogs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              headline: 'Scenith Video Editing & AI Tools Blog',
              description:
                'Explore Scenith’s blog for expert tips on video editing, AI tools, YouTube growth, and productivity hacks to elevate your content creation in 2025.',
              publisher: {
                '@type': 'Organization',
                name: 'Scenith',
                logo: {
                  '@type': 'ImageObject',
                  url: '/images/logo.png',
                },
              },
              datePublished: '2025-08-22',
              url: 'https://scenith.in/blogs',
            }),
          }}
        />
      </Head>
      <div className={styles.blogContainer} id="blog-section">
        <div className={styles.heroSectionBlog}>
          <div className={styles.heroContentBlog}>
            <div className={styles.heroBadgeBlog}>
              <span className={styles.badgeText}>📚 Knowledge Hub</span>
            </div>
            <h1 className={styles.heroTitleBlog}>
              Master Video Creation with
              <span className={styles.gradientText}> AI-Powered Insights</span>
            </h1>
            <p className={styles.heroDescriptionBlog}>
              Discover cutting-edge techniques, insider tips, and game-changing tools that will
              transform your video content creation process forever.
            </p>
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                <div className={styles.searchIcon}>🔍</div>
                <input
                  type="text"
                  placeholder="Search for AI tools, tutorials, productivity hacks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.floatingElements}>
            <div className={`${styles.floatingCard} ${styles.card1}`}>🎬</div>
            <div className={`${styles.floatingCard} ${styles.card2}`}>⚡</div>
            <div className={`${styles.floatingCard} ${styles.card3}`}>🚀</div>
            <div className={`${styles.floatingCard} ${styles.card4}`}>🤖</div>
          </div>
        </div>

        <div className={styles.filterSection} id="filter-section">
          <div className={styles.filterContainer}>
            <h3 className={styles.filterTitle}>Browse by Category</h3>
            <div className={styles.categoryFilters}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.postsSection}>
          <div className={styles.postsContainer}>
            {filteredPosts.find((post) => post.featured) && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>🔥 Featured Article</h2>
                {filteredPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <Link href={`/blogs/${post.slug}`} key={post.id}>
                      <div
                        className={styles.featuredCard}
                        onMouseEnter={() => setHoveredCard(`featured-${post.id}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className={styles.featuredContent}>
                          <div className={styles.featuredLeft}>
                            <div className={styles.featuredMeta}>
                              <span className={styles.featuredBadge}>⭐ FEATURED</span>
                              <span className={styles.postCategory}>{post.category}</span>
                            </div>
                            <h3 className={styles.featuredTitle}>{post.title}</h3>
                            <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                            <div className={styles.featuredStats}>
                              <span className={styles.stat}>👁️ {post.views} views</span>
                              <span className={styles.stat}>⏱️ {post.readTime}</span>
                              <span className={styles.stat}>
                                📅 {new Date(post.publishDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className={styles.featuredTags}>
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className={styles.tag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button className={styles.readMoreBtn}>Read Full Article →</button>
                          </div>
                          <div className={styles.featuredRight}>
                            <div className={styles.featuredVisual} style={{ background: post.gradient }}>
                              <div className={styles.featuredIcon}>{post.image}</div>
                              <div className={styles.visualOverlay}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}

            <div className={styles.regularPosts}>
              <h2 className={styles.sectionTitle}>📖 Latest Articles</h2>
              <div className={styles.postsGrid}>
                {filteredPosts.filter((post) => !post.featured).length === 0 ? (
                  <div className={styles.noPosts}>
                    <div className={styles.noPostsIcon}>📝</div>
                    <h3>More Amazing Content Coming Soon!</h3>
                    <p>We're working on more game-changing articles. Check back soon!</p>
                  </div>
                ) : (
                  filteredPosts
                    .filter((post) => !post.featured)
                    .map((post) => (
                      <Link href={`/blogs/${post.slug}`} key={post.id}>
                        <div
                          className={`${styles.postCard} ${hoveredCard === post.id.toString() ? styles.hovered : ''}`}
                          onMouseEnter={() => setHoveredCard(post.id.toString())}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className={styles.postVisual} style={{ background: post.gradient }}>
                            <div className={styles.postIcon}>{post.image}</div>
                            <div className={styles.postOverlay}></div>
                          </div>
                          <div className={styles.postContent}>
                            <div className={styles.postHeader}>
                              <span className={styles.postCategory}>{post.category}</span>
                              <span className={styles.postViews}>👁️ {post.views}</span>
                            </div>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postTags}>
                              {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className={styles.tag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className={styles.postFooter}>
                              <div className={styles.postMeta}>
                                <span className={styles.readTime}>⏱️ {post.readTime}</span>
                                <span className={styles.postDate}>
                                  📅 {new Date(post.publishDate).toLocaleDateString()}
                                </span>
                              </div>
                              <button className={styles.readBtn}>Read →</button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
              <div className={styles.newsletterIcon}>📧</div>
              <h2>Never Miss a Game-Changing Tip</h2>
              <p>
                Get the latest AI tools, video creation hacks, and productivity secrets delivered to
                your inbox every week.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterBtn}>No Subscription Needed →</button>
              </div>
              <p className={styles.newsletterDisclaimer}>
                ✨ Join 25,000+ creators • FOR FREE • Zero spam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}