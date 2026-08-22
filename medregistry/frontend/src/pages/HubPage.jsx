import React, { useState } from 'react';
import { 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  FileText, 
  Calendar, 
  UserPlus, 
  CheckCircle2, 
  Image, 
  Send, 
  TrendingUp, 
  Sparkles,
  Paperclip,
  Stethoscope,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { currentUser, medicalFeedPosts, trendingMedicalNews, upcomingMeetings, suggestedPeers } from '../data/mockData';

export function HubPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All Feeds');
  const [posts, setPosts] = useState(medicalFeedPosts);
  const [newPostText, setNewPostText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Clinical Cases');
  const [isPosting, setIsPosting] = useState(false);
  const [openCommentPostId, setOpenCommentPostId] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});
  const [connectedPeers, setConnectedPeers] = useState({});

  const categories = ['All Feeds', 'Clinical Cases', 'Student Corner', 'Research & Papers', 'Residency & CME'];

  // Handle post creation
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      author: {
        id: currentUser.id,
        name: currentUser.name,
        verified: currentUser.verified,
        title: `${currentUser.degree} • ${currentUser.specialty}`,
        institution: currentUser.institution,
        avatar: currentUser.avatar
      },
      time: 'Just now',
      category: selectedCategory,
      content: newPostText,
      tags: selectedCategory === 'Clinical Cases' ? ['#ClinicalCase', '#MedRegistry'] :
            selectedCategory === 'Student Corner' ? ['#MedStudent', '#MBBS'] : ['#MedicalResearch', '#Healthcare'],
      likes: 0,
      comments: [],
      shares: 0,
      bookmarked: false,
      isLiked: false
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    setIsPosting(false);
  };

  // Toggle Like
  const handleToggleLike = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        const isLiked = !p.isLiked;
        return {
          ...p,
          isLiked,
          likes: isLiked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));
  };

  // Toggle Bookmark
  const handleToggleBookmark = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return { ...p, bookmarked: !p.bookmarked };
      }
      return p;
    }));
  };

  // Add Comment
  const handleAddComment = (postId) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: currentUser.name,
      avatar: currentUser.avatar,
      text: text.trim(),
      time: 'Just now'
    };

    setPosts(posts.map(p => {
      if (p.id === postId) {
        return { ...p, comments: [...p.comments, newComment] };
      }
      return p;
    }));

    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  // Toggle Peer Connection
  const handleToggleConnect = (peerId) => {
    setConnectedPeers(prev => ({ ...prev, [peerId]: !prev[peerId] }));
  };

  // Filter posts
  const filteredPosts = activeCategory === 'All Feeds' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div style={{ padding: '24px 32px', display: 'flex', gap: '28px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* LEFT SIDEBAR: Mini Profile Stats */}
      <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="card" style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}>
          {/* Header Banner */}
          <div style={{ height: '64px', background: 'linear-gradient(135deg, #0e5c63 0%, #1c3b3e 100%)' }} />
          
          {/* Profile Avatar & Info */}
          <div style={{ padding: '0 16px 20px', marginTop: '-36px' }}>
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name}
              style={{ 
                width: '72px', 
                height: '72px', 
                borderRadius: '50%', 
                border: '4px solid #ffffff', 
                objectFit: 'cover',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
              }} 
            />
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826', marginTop: '8px' }}>
              {currentUser.name}
            </h3>
            <p style={{ fontSize: '12px', color: '#5b6b6c', marginTop: '2px', lineHeight: 1.4 }}>
              {currentUser.degree}
            </p>
            <p style={{ fontSize: '11px', color: '#88999b', fontWeight: 600 }}>
              {currentUser.institution}
            </p>

            <div style={{ borderTop: '1px solid #edf1f1', marginTop: '16px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#5b6b6c' }}>Profile Views</span>
                <span style={{ fontWeight: 700, color: '#0e5c63' }}>342</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#5b6b6c' }}>Connections</span>
                <span style={{ fontWeight: 700, color: '#0e5c63' }}>1,280</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#5b6b6c' }}>Saved Cases</span>
                <span style={{ fontWeight: 700, color: '#0e5c63' }}>24</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Card */}
        <div className="card" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Quick Shortcuts
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <button 
              onClick={() => onNavigate('opportunities')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#5b6b6c', fontWeight: 600, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Stethoscope size={16} color="#0e5c63" />
              Clinical Opportunities
            </button>
            <button 
              onClick={() => onNavigate('network')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#5b6b6c', fontWeight: 600, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <UserPlus size={16} color="#b66113" />
              Alumni & Peer Directory
            </button>
            <button 
              onClick={() => onNavigate('institution')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#5b6b6c', fontWeight: 600, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <BookOpen size={16} color="#0e5c63" />
              Institution Board
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT FEED */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Create Post Card (LinkedIn Style) */}
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <button
              onClick={() => setIsPosting(true)}
              style={{
                flex: 1,
                backgroundColor: '#f4f7f7',
                border: '1px solid #e1e7e7',
                borderRadius: '24px',
                padding: '12px 20px',
                textAlign: 'left',
                color: '#5b6b6c',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
            >
              Share a clinical case, research paper, or medical insight...
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #edf1f1' }}>
            <button 
              onClick={() => setIsPosting(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#0e5c63', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Image size={18} color="#0e5c63" /> Clinical Image / ECG
            </button>
            <button 
              onClick={() => setIsPosting(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#b66113', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <FileText size={18} color="#b66113" /> Research Paper
            </button>
            <button 
              onClick={() => setIsPosting(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#0d7348', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Sparkles size={18} color="#0d7348" /> Case Discussion
            </button>
          </div>

          {/* Expanded Post Dialog / Form */}
          {isPosting && (
            <form onSubmit={handleCreatePost} style={{ marginTop: '16px', paddingTop: '16px', borderTop: '2px solid #0e5c63' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1c2826' }}>Category:</span>
                {['Clinical Cases', 'Student Corner', 'Research & Papers', 'Residency & CME'].map(cat => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: selectedCategory === cat ? '#0e5c63' : '#f1f5f5',
                      color: selectedCategory === cat ? '#ffffff' : '#5b6b6c',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <textarea
                rows={4}
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="Write your clinical case notes, medical inquiry, or academic presentation summary..."
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #c8d5d6',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', color: '#88999b', fontSize: '13px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <Paperclip size={16} /> Attach PDF / Report
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setIsPosting(false)}
                    style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#5b6b6c', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', cursor: 'pointer' }}
                  >
                    Post to Network <Send size={14} />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Category Feed Filters */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                backgroundColor: activeCategory === cat ? '#1c2826' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#5b6b6c',
                border: '1px solid #dbe2e3',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feed Posts List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredPosts.map((post) => (
            <div key={post.id} className="card" style={{ padding: '20px' }}>
              
              {/* Post Author Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826' }}>
                        {post.author.name}
                      </span>
                      {post.author.verified && (
                        <CheckCircle2 size={16} color="#0e5c63" style={{ fill: '#e2f4eb' }} title="Verified Medical Practitioner" />
                      )}
                    </div>
                    <div style={{ fontSize: '12px', color: '#5b6b6c' }}>
                      {post.author.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#88999b', display: 'flex', gap: '8px', alignItems: 'center', marginTop: '2px' }}>
                      <span>{post.author.institution}</span>
                      <span>•</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span 
                    className="badge"
                    style={{
                      backgroundColor: post.category === 'Clinical Cases' ? '#e2f4eb' :
                                       post.category === 'Student Corner' ? '#ffeedb' :
                                       post.category === 'Research & Papers' ? '#e6f0fa' : '#f1f5f5',
                      color: post.category === 'Clinical Cases' ? '#0d7348' :
                             post.category === 'Student Corner' ? '#b66113' :
                             post.category === 'Research & Papers' ? '#1d65a6' : '#5b6b6c',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {post.category}
                  </span>
                  <button 
                    onClick={() => handleToggleBookmark(post.id)}
                    style={{ color: post.bookmarked ? '#0e5c63' : '#88999b', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }} 
                    title="Save Post"
                  >
                    <Bookmark size={18} fill={post.bookmarked ? '#0e5c63' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Post Body Content */}
              <div style={{ fontSize: '14px', color: '#2c3e3a', lineHeight: 1.6, whiteSpace: 'pre-line', marginBottom: '14px' }}>
                {post.content}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {post.tags.map((tag, idx) => (
                    <span key={idx} style={{ fontSize: '12px', fontWeight: 600, color: '#0e5c63', cursor: 'pointer' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Attachment: Image */}
              {post.image && (
                <div style={{ marginBottom: '14px', borderRadius: '8px', overflow: 'hidden', maxHeight: '380px', backgroundColor: '#f6f8f8' }}>
                  <img 
                    src={post.image} 
                    alt="Clinical attachment" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Attachment: Document */}
              {post.attachment && (
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    backgroundColor: '#f6f8f8', 
                    border: '1px solid #e1e7e7', 
                    borderRadius: '8px', 
                    padding: '12px 16px',
                    marginBottom: '14px',
                    cursor: 'pointer'
                  }}
                  onClick={() => alert(`Downloading document: ${post.attachment.name}`)}
                >
                  <FileText size={24} color="#0e5c63" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>
                      {post.attachment.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#88999b' }}>
                      {post.attachment.size}
                    </div>
                  </div>
                </div>
              )}

              {/* Social Reaction Metrics Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#88999b', paddingBottom: '10px', borderBottom: '1px solid #edf1f1' }}>
                <span>{post.likes} Doctor & Student Endorsements</span>
                <span>{post.comments.length} Comments • {post.shares} Shares</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '8px' }}>
                <button
                  onClick={() => handleToggleLike(post.id)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '13px', 
                    fontWeight: 600, 
                    color: post.isLiked ? '#0e5c63' : '#5b6b6c',
                    padding: '6px 12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <ThumbsUp size={16} fill={post.isLiked ? '#0e5c63' : 'none'} />
                  {post.isLiked ? 'Endorsed' : 'Endorse'}
                </button>

                <button
                  onClick={() => setOpenCommentPostId(openCommentPostId === post.id ? null : post.id)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '13px', 
                    fontWeight: 600, 
                    color: '#5b6b6c',
                    padding: '6px 12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <MessageSquare size={16} />
                  Comment
                </button>

                <button
                  onClick={() => alert("Post link copied to clipboard!")}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '13px', 
                    fontWeight: 600, 
                    color: '#5b6b6c',
                    padding: '6px 12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>

              {/* Expanded Comments Drawer */}
              {openCommentPostId === post.id && (
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #edf1f1' }}>
                  {/* Existing Comments */}
                  {post.comments.map((comment) => (
                    <div key={comment.id} style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                      <img 
                        src={comment.avatar} 
                        alt={comment.author}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div style={{ backgroundColor: '#f6f8f8', padding: '10px 14px', borderRadius: '12px', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{comment.author}</span>
                          <span style={{ fontSize: '11px', color: '#88999b' }}>{comment.time}</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#2c3e3a', margin: 0 }}>{comment.text}</p>
                      </div>
                    </div>
                  ))}

                  {/* Comment Input */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <input
                      type="text"
                      placeholder="Add a clinical comment or discussion point..."
                      value={commentInputs[post.id] || ''}
                      onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleAddComment(post.id); }}
                      style={{
                        flex: 1,
                        padding: '8px 14px',
                        borderRadius: '20px',
                        border: '1px solid #c8d5d6',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      style={{
                        backgroundColor: '#0e5c63',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '16px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDEBAR: Trending News & Suggested Network */}
      <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Trending Medical News Widget (LinkedIn News Style) */}
        <div className="card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={18} color="#0e5c63" />
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826' }}>MedRegistry News</h3>
            </div>
            <span style={{ fontSize: '11px', color: '#88999b', fontWeight: 600 }}>Top Stories</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trendingMedicalNews.map((news) => (
              <div 
                key={news.id} 
                style={{ cursor: 'pointer' }}
                onClick={() => alert(`Opening News Article: "${news.title}"`)}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1c2826', lineHeight: 1.3 }}>
                  • {news.title}
                </div>
                <div style={{ fontSize: '11px', color: '#88999b', marginTop: '2px', marginLeft: '10px' }}>
                  {news.readers}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Peers Widget */}
        <div className="card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <UserPlus size={18} color="#0e5c63" />
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826' }}>Suggested Connections</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '14px' }}>
            {suggestedPeers.map((peer) => {
              const isConnected = connectedPeers[peer.id];
              return (
                <div key={peer.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src={peer.avatar} 
                      alt={peer.name} 
                      style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{peer.name}</div>
                      <div style={{ fontSize: '11px', color: '#88999b' }}>{peer.dept}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleToggleConnect(peer.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 10px',
                      borderRadius: '14px',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: isConnected ? '#e2f4eb' : '#f1f5f5',
                      color: isConnected ? '#0d7348' : '#0e5c63',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {isConnected ? <UserCheck size={14} /> : <UserPlus size={14} />}
                    {isConnected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Meetings & CMEs */}
        <div className="card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="#0e5c63" />
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826' }}>Upcoming CMEs</h3>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {upcomingMeetings.map((m) => (
              <div key={m.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ 
                  backgroundColor: '#f1f5f5', 
                  borderRadius: '6px', 
                  padding: '6px 8px', 
                  textAlign: 'center',
                  minWidth: '46px'
                }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#5b6b6c', letterSpacing: '0.5px' }}>{m.month}</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#1c2826' }}>{m.day}</div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{m.title}</div>
                  <div style={{ fontSize: '11px', color: '#88999b' }}>{m.time} • {m.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HubPage;
