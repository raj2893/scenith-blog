"use client";

import { useState, useEffect } from 'react';
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
  slug: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('latest'); // Removed 'popular' option
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch');
        const data: BlogPost[] = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Optional: Set fallback empty array or error state
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  const filteredAndSortedPosts = () => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case 'quickRead':
        filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
        break;
      // No 'popular' case anymore
    }

    return filtered;
  };

  const paginatedPosts = () => {
    const filtered = filteredAndSortedPosts();
    const startIndex = (currentPage - 1) * postsPerPage;
    return filtered.slice(startIndex, startIndex + postsPerPage);
  };

  const totalPages = Math.ceil(filteredAndSortedPosts().length / postsPerPage);
  const featuredPost = blogPosts.find(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className={styles.blogContainer}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <span>Loading posts...</span> {/* Replace with a spinner component */}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Head unchanged */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scenith Blog | Video Editing & AI Tools Tutorials</title>
        <meta
          name="description"
          content="Master video editing with Scenith's comprehensive tutorials, AI tool guides, and expert tips. Learn from beginner basics to advanced techniques."
        />
        <meta
          name="keywords"
          content="video editing tutorials, AI tools, YouTube growth, subtitles, layers, productivity, Scenith"
        />
        <link rel="canonical" href="https://scenith.in/blogs" />
      </Head>

      <div className={styles.blogContainer}>
        {/* Hero Section unchanged */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeText}>📚 Knowledge Base</span>
            </div>
            <h1 className={styles.heroTitle}>
              Master Video Creation with
              <span className={styles.gradientText}> Expert Tutorials</span>
            </h1>
            <p className={styles.heroDescription}>
              From beginner basics to advanced AI techniques, discover everything you need to create stunning videos that captivate your audience.
            </p>
            
            {/* Search and Filter Controls - Updated select to remove 'popular' */}
            <div className={styles.controlsContainer}>
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search tutorials, tips, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              
              <div className={styles.filtersRow}>
                
                
                <div className={styles.sortControls}>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={styles.sortSelect}
                  >
                    <option value="latest">Latest First</option>
                    <option value="quickRead">Quick Reads</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {/* Featured Article - Removed views stat */}
          {featuredPost && selectedCategory === 'all' && !searchTerm && (
            <section className={styles.featuredSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>🔥 Featured Post</h2>
              </div>
              <Link href={`/blogs/${featuredPost.slug}`} className={styles.featuredLink}>
                <article className={styles.featuredCard}>
                  <div className={styles.featuredImage} style={{ background: featuredPost.gradient }}>
                    <span className={styles.featuredIcon}>{featuredPost.image}</span>
                    <div className={styles.featuredBadge}>FEATURED</div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredMeta}>
                      <span className={styles.category}>{featuredPost.category}</span>
                      <span className={styles.difficulty}>{featuredPost.difficulty}</span>
                    </div>
                    <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
                    <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                    <div className={styles.featuredStats}>
                      <span className={styles.stat}>
                        <span className={styles.statIcon}>⏱️</span>
                        {featuredPost.readTime} read
                      </span>
                      <span className={styles.stat}>
                        <span className={styles.statIcon}>📅</span>
                        {formatDate(featuredPost.publishDate)}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Articles Grid - Removed views stat; uses dynamic data */}
          <section className={styles.articlesSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchTerm ? `Search Results (${filteredAndSortedPosts().length})` : 'All Posts'}
              </h2>
              <div className={styles.resultsCount}>
                Showing {paginatedPosts().length} of {filteredAndSortedPosts().length} articles
              </div>
            </div>

            {paginatedPosts().length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📝</div>
                <h3 className={styles.emptyTitle}>No tutorials found</h3>
                <p className={styles.emptyText}>
                  {searchTerm 
                    ? `No tutorials match "${searchTerm}". Try different keywords.`
                    : 'No tutorials in this category yet. Check back soon!'
                  }
                </p>
              </div>
            ) : (
              <>
                <div className={styles.articlesGrid}>
                  {paginatedPosts()
                    .filter(post => !post.featured || searchTerm || selectedCategory !== 'all')
                    .map((post) => (
                      <Link href={`/blogs/${post.slug}`} key={post.id} className={styles.articleLink}>
                        <article className={styles.articleCard}>
                          <div className={styles.articleImage} style={{ background: post.gradient }}>
                            <span className={styles.articleIcon}>{post.image}</span>
                          </div>
                          <div className={styles.articleContent}>
                            <div className={styles.articleMeta}>
                              <span className={styles.category}>{post.category}</span>
                              {post.difficulty && (
                                <span className={styles.difficulty}>{post.difficulty}</span>
                              )}
                            </div>
                            <h3 className={styles.articleTitle}>{post.title}</h3>
                            <p className={styles.articleExcerpt}>{post.excerpt}</p>
                            <div className={styles.articleFooter}>
                              <div className={styles.articleStats}>
                                <span className={styles.stat}>
                                  <span className={styles.statIcon}>⏱️</span>
                                  {post.readTime}
                                </span>
                              </div>
                              <span className={styles.publishDate}>{formatDate(post.publishDate)}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                </div>

                {/* Pagination - Unchanged, but now with dynamic totalPages */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ''}`}
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>
                    
                    <div className={styles.pageNumbers}>
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ''}`}
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabled : ''}`}
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        {/* Newsletter Section unchanged */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
              <span className={styles.newsletterIcon}>📧</span>
              <h2 className={styles.newsletterTitle}>Stay Updated</h2>
              <p className={styles.newsletterText}>
                Get the latest tutorials and tips delivered to your inbox
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterBtn}>Subscribe</button>
              </div>
              <p className={styles.newsletterDisclaimer}>
                Join 25,000+ creators • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}