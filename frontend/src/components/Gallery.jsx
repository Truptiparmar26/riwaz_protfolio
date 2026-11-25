import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineZoomIn, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

// Event-focused mock data tailored for the editor's specific niche with accurate aspect ratios
const mockGallery = [
  { id: 1, title: 'Baraat Euphoria', category: 'Wedding', image: '/gallery/wedding/wedding-car-celebration.webp', aspect: 1.5 },
  { id: 2, title: 'The Royal Bride', category: 'Wedding', image: '/gallery/wedding/wedding-bride-lehenga.webp', aspect: 1.5 },
  { id: 3, title: 'The Regal Groom', category: 'Wedding', image: '/gallery/wedding/wedding-groom-entry.webp', aspect: 0.67 },
  { id: 4, title: 'Radiant Bride Moments', category: 'Wedding', image: '/gallery/wedding/wedding-bride-radiant.webp', aspect: 0.67 },
  { id: 5, title: 'Bridal Henna & Chooda', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-henna.webp', aspect: 0.67 },
  { id: 6, title: 'Heritage Bridal Adornment', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-jewels.webp', aspect: 0.67 },
  { id: 7, title: 'The Royal Mojari', category: 'Wedding', image: '/gallery/wedding/wedding-groom-mojari.webp', aspect: 0.67 },
  { id: 8, title: 'Haldi Sunshine Moments', category: 'Wedding', image: '/gallery/wedding/wedding-haldi-groom-watch.webp', aspect: 1.5 },
  { id: 9, title: 'Haldi Celebration Swag', category: 'Wedding', image: '/gallery/wedding/wedding-haldi-groom-portrait.webp', aspect: 1.5 },
  { id: 10, title: 'Whispers of Love', category: 'Wedding', image: '/gallery/wedding/wedding-couple-sweet-glance.webp', aspect: 1.5 },
  { id: 11, title: 'Grace Beneath the Veil', category: 'Wedding', image: '/gallery/wedding/wedding-bride-veil-portrait.webp', aspect: 1.5 },
  { id: 12, title: 'Garden of Elegance', category: 'Wedding', image: '/gallery/wedding/wedding-bride-garden-twirl.webp', aspect: 1.5 },
  { id: 13, title: 'Eternal Bond', category: 'Wedding', image: '/gallery/wedding/wedding-couple-tender-smile.webp', aspect: 0.67 },
  { id: 14, title: 'Crimson Royalty', category: 'Wedding', image: '/gallery/wedding/wedding-bride-crimson-elegance.webp', aspect: 1.5 },
  { id: 15, title: 'Bridal Radiance', category: 'Wedding', image: '/gallery/wedding/wedding-bride-candid-glow.webp', aspect: 1.5 },
  { id: 16, title: 'Warm Embrace', category: 'Wedding', image: '/gallery/wedding/wedding-couple-magenta-hug.webp', aspect: 1.5 },
  { id: 17, title: 'Serenade in Pastel', category: 'Wedding', image: '/gallery/wedding/wedding-couple-serene-moment.webp', aspect: 1.5 },
  { id: 18, title: 'Walking into Forever', category: 'Wedding', image: '/gallery/wedding/wedding-couple-walking-hand-in-hand.webp', aspect: 1.33 },
  { id: 19, title: 'Soulful Connection', category: 'Wedding', image: '/gallery/wedding/wedding-couple-intimate-touch.webp', aspect: 1.5 },
  { id: 20, title: 'The Royal Ghodi Entry', category: 'Wedding', image: '/gallery/wedding/wedding-groom-horse-entry.webp', aspect: 1.5 },
  { id: 21, title: 'Hand in Hand Forever', category: 'Wedding', image: '/gallery/wedding/wedding-hand-holding-vows.webp', aspect: 0.67 },
  { id: 22, title: 'Twirl of Romance', category: 'Wedding', image: '/gallery/wedding/wedding-couple-pastel-dance.webp', aspect: 1.5 },
  { id: 23, title: 'Gentleman\'s Preparation', category: 'Wedding', image: '/gallery/wedding/wedding-groom-getting-ready.webp', aspect: 1.5 },
  { id: 24, title: 'Leading My Groom', category: 'Wedding', image: '/gallery/wedding/wedding-bride-leading-ghodi.webp', aspect: 1.5 },
  { id: 25, title: 'Regal Smile & Kundan', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-smile-jewels.webp', aspect: 0.67 },
  { id: 26, title: 'Bride\'s Joyful Cheers', category: 'Wedding', image: '/gallery/wedding/wedding-bride-sunroof-cheer.webp', aspect: 0.67 },
  { id: 27, title: 'The Royal Swag Entry', category: 'Wedding', image: '/gallery/wedding/wedding-groom-katar-entry.webp', aspect: 1.5 },
  { id: 28, title: 'Tender Kiss of Love', category: 'Wedding', image: '/gallery/wedding/wedding-couple-kiss-cheek.webp', aspect: 1.5 },
  { id: 29, title: 'Seated in Royalty', category: 'Wedding', image: '/gallery/wedding/wedding-bride-seated-grace.webp', aspect: 1.33 },
  { id: 30, title: 'Tropical Grove Stroll', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-banana-grove-walk.webp', aspect: 1.78 },
  { id: 31, title: 'Nature\'s Grace', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-bride-banana-leaf.webp', aspect: 1.78 },
  { id: 32, title: 'Footsteps in the Sand', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-beach-stroll-hand-in-hand.webp', aspect: 1.78 },
  { id: 33, title: 'Hand in Hand by Fort', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-saree-beach-backview.webp', aspect: 1.78 },
  { id: 34, title: 'Whispering Waves', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-beach-romance-portrait.webp', aspect: 1.78 },
  { id: 35, title: 'Warmth of Twilight', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-intimate-beach-whisper.webp', aspect: 1.78 },
  { id: 36, title: 'By the Rocky Shore', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-rocks-hand-in-hand.webp', aspect: 1.5 },
  { id: 37, title: 'Golden Shoreline', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-shoreline-candid-walk.webp', aspect: 1.78 },
  { id: 38, title: 'By the Ocean Edge', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-rocky-shore-embrace.webp', aspect: 1.78 },
  { id: 39, title: 'Serene Coastal Portrait', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-groom-sitting-bride-standing.webp', aspect: 1.5 },
  { id: 40, title: 'Coastal Whispers', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-coastal-breeze-couple.webp', aspect: 1.78 },
  { id: 41, title: 'Tender Currents', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-gentle-seaside-moment.webp', aspect: 1.78 },
  { id: 42, title: 'Warmth of Hearts', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-close-intimate-forehead.webp', aspect: 1.5 },
  { id: 43, title: 'Twilight Promise', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-sunset-silhouette-twilight.webp', aspect: 1.78 },
  { id: 44, title: 'Laughing by the Ruins', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-stone-bench-laughter.webp', aspect: 1.5 },
  { id: 45, title: 'Rockside Romance', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-sitting-rocks-together.webp', aspect: 1.5 },
  { id: 46, title: 'Historic Wall Walk', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-fort-wall-walk.webp', aspect: 0.67 },
  { id: 47, title: 'Seaside Embrace', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-sitting-rock-intimate.webp', aspect: 1.5 },
  { id: 48, title: 'Beyond the Horizon', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-ocean-horizon-gaze.webp', aspect: 0.56 },
  { id: 49, title: 'Gentle Support', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-leaning-on-shoulder-rocks.webp', aspect: 1.5 },
  { id: 50, title: 'Tidal Joy', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-water-splash-laughter.webp', aspect: 0.56 },
  { id: 51, title: 'Silent Promise', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-forehead-touch-beach.webp', aspect: 0.67 },
  { id: 52, title: 'Calm Waters', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-serene-sea-reflection.webp', aspect: 0.56 },
  { id: 53, title: 'Echoes of the Sea', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-waves-and-laughter.webp', aspect: 0.56 },
  { id: 54, title: 'Tender Gaze', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-beach-tender-gaze.webp', aspect: 0.56 },
  { id: 55, title: 'Looking to Tomorrow', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-pointing-horizon.webp', aspect: 0.56 },
  { id: 56, title: 'Infinite Horizon', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-sand-and-sky-panorama.webp', aspect: 0.56 },
  { id: 57, title: 'Casual Shoreline Steps', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-casual-beach-walk.webp', aspect: 0.56 },
  { id: 58, title: 'Sunset by the Tide', category: 'Pre-Wedding', image: '/gallery/prewedding/prewedding-seaside-sunset-embrace.webp', aspect: 0.56 },
  { id: 59, title: 'His Voice, His Magic', category: 'Post', image: '/gallery/post/post-singer-his-voice-his-magic.webp', aspect: 1.25 },
  { id: 60, title: 'First Birthday Cruise', category: 'Post', image: '/gallery/post/post-birthday-police-car-night.webp', aspect: 1.25 },
  { id: 61, title: 'Evan One Year', category: 'Post', image: '/gallery/post/post-evan-one-year-milestone.webp', aspect: 1.25 },
  { id: 62, title: 'Tiny Hands, Big Dreams', category: 'Post', image: '/gallery/post/post-baby-shower-tiny-hands.webp', aspect: 1.25 },
  { id: 63, title: 'Stage Magic', category: 'Post', image: '/gallery/post/post-concert-stage-magic.webp', aspect: 1.25 },
  { id: 64, title: 'Live Performance Poster', category: 'Post', image: '/gallery/post/post-kaushik-bharwad-live.webp', aspect: 1.25 },
  { id: 65, title: 'Griha Pravesh', category: 'Post', image: '/gallery/post/post-griha-pravesh-blessings.webp', aspect: 1.25 },
  { id: 66, title: 'A Sacred Beginning', category: 'Post', image: '/gallery/post/post-vastu-pujan-sacred-beginning.webp', aspect: 1.25 },
  { id: 67, title: 'A Little Miracle', category: 'Post', image: '/gallery/post/post-maternity-little-miracle.webp', aspect: 1.25 },
  { id: 68, title: 'Kaushik Bharwad', category: 'Post', image: '/gallery/post/post-kaushik-bharwad-singer-portrait.webp', aspect: 1.25 },
  { id: 69, title: 'Little Blessing', category: 'Post', image: '/gallery/post/post-first-birthday-little-blessing.webp', aspect: 1.25 },
  { id: 70, title: 'Maternity Journey', category: 'Post', image: '/gallery/post/post-maternity-transformation.webp', aspect: 1.25 },
  { id: 71, title: 'Moments in Love', category: 'Post', image: '/gallery/post/post-couple-moments-komal-mitesh.webp', aspect: 1.25 },
  { id: 72, title: 'Heartbeat', category: 'Post', image: '/gallery/post/post-maternity-heartbeat.webp', aspect: 1.25 },
  { id: 73, title: 'Motherhood', category: 'Post', image: '/gallery/post/post-motherhood-journey.webp', aspect: 1.25 },
  { id: 74, title: 'Touch of Love', category: 'Post', image: '/gallery/post/post-touch-dharmesh-nidhi.webp', aspect: 1.25 },
  { id: 75, title: 'Connected Souls', category: 'Post', image: '/gallery/post/post-connected-dharmesh-nidhi.webp', aspect: 1.25 },
  { id: 76, title: 'Fairytale Choice', category: 'Post', image: '/gallery/post/post-dharmistha-ronit-fairytale.webp', aspect: 1.25 },
  { id: 77, title: 'The Regal Groom', category: 'Post', image: '/gallery/post/post-the-groom-regal-collage.webp', aspect: 1.25 },
  { id: 78, title: 'Beautiful Bride', category: 'Post', image: '/gallery/post/post-beautiful-minaxi-bride.webp', aspect: 1.25 },
  { id: 79, title: 'Two Hearts, One Soul', category: 'Post', image: '/gallery/post/post-two-hearts-one-soul.webp', aspect: 1.25 },
  { id: 80, title: 'Grace in Stillness', category: 'Post', image: '/gallery/post/post-minaxi-grace-portrait.webp', aspect: 1.25 },
  { id: 81, title: 'Wedding Joy Car', category: 'Post', image: '/gallery/post/post-riwaz-studio-car-cheer.webp', aspect: 1.25 },
  { id: 82, title: 'Ray of Sunshine', category: 'Post', image: '/gallery/post/post-ray-of-sunshine-bride.webp', aspect: 1.25 },
  { id: 83, title: 'His Queen', category: 'Post', image: '/gallery/post/post-queen-fiancee-fairytale.webp', aspect: 1.25 },
  { id: 84, title: 'Rings of Forever', category: 'Post', image: '/gallery/post/post-dharmistha-ronit-rings.webp', aspect: 1.25 },
  { id: 85, title: 'Momentous Elegance', category: 'Post', image: '/gallery/post/post-momentous-bridal-elegance.webp', aspect: 1.25 },
  { id: 86, title: "Kajal's Baby Shower", category: 'Post', image: '/gallery/post/post-kajals-baby-shower.webp', aspect: 1.25 },
  { id: 87, title: 'Beloved Chapter', category: 'Post', image: '/gallery/post/post-beloved-maternity-blessing.webp', aspect: 1.25 },
  { id: 88, title: 'Quiet Charm', category: 'Post', image: '/gallery/post/post-nidhi-dharmesh-crimson-elegance.webp', aspect: 1.25 },
  { id: 89, title: 'The Groom Look', category: 'Post', image: '/gallery/post/post-groom-look-elegance.webp', aspect: 1.25 },
  { id: 90, title: 'Groom Divyesh', category: 'Post', image: '/gallery/post/post-groom-divyesh-ghodi.webp', aspect: 1.25 },
  { id: 91, title: 'Regal Smile', category: 'Post', image: '/gallery/post/post-groom-smile-sherwani.webp', aspect: 1.25 },
  { id: 92, title: 'My Forever', category: 'Post', image: '/gallery/post/post-my-forever-connection.webp', aspect: 1.25 },
  { id: 93, title: 'Bhavya Prem', category: 'Post', image: '/gallery/post/post-bhavya-prem-holding-hands.webp', aspect: 1.25 },
  { id: 94, title: 'One Journey', category: 'Post', image: '/gallery/post/post-two-hearts-one-journey.webp', aspect: 1.25 },
  { id: 95, title: 'Nisha & Bhavesh', category: 'Post', image: '/gallery/post/post-nisha-bhavesh-wedding-story.webp', aspect: 1.25 },
  { id: 96, title: 'Dhaval & Shital', category: 'Post', image: '/gallery/post/post-dhaval-shital-closeness.webp', aspect: 1.25 },
  { id: 97, title: 'Two Souls', category: 'Post', image: '/gallery/post/post-two-souls-complete.webp', aspect: 1.25 },
  { id: 98, title: 'Serenade by the Pool', category: 'Engagement', image: '/gallery/engagement/engagement-resort-pool-bride-seated.webp', aspect: 1.5 },
  { id: 99, title: 'Hand in Hand Forever', category: 'Engagement', image: '/gallery/engagement/engagement-holding-hands-rings-close.webp', aspect: 1.5 },
  { id: 100, title: 'Vow of Eternity', category: 'Engagement', image: '/gallery/engagement/engagement-rings-on-mehndi-palm.webp', aspect: 1.5 },
  { id: 101, title: 'Whispers of Tomorrow', category: 'Engagement', image: '/gallery/engagement/engagement-intimate-forehead-glance.webp', aspect: 1.5 },
  { id: 102, title: 'Adorned in Pastel', category: 'Engagement', image: '/gallery/engagement/engagement-bride-garden-bangles.webp', aspect: 1.5 },
  { id: 103, title: 'Courtyard Grace', category: 'Engagement', image: '/gallery/engagement/engagement-bride-resort-courtyard.webp', aspect: 1.5 },
  { id: 104, title: 'Radiance in Nature', category: 'Engagement', image: '/gallery/engagement/engagement-bride-meadow-full.webp', aspect: 1.5 },
  { id: 105, title: 'Cascading Curls', category: 'Engagement', image: '/gallery/engagement/engagement-bride-hairstyles-flowers.webp', aspect: 1.5 },
  { id: 106, title: 'Pastel Glow', category: 'Engagement', image: '/gallery/engagement/engagement-bride-portrait-greenery.webp', aspect: 1.5 },
  { id: 107, title: 'Woodland Romance', category: 'Engagement', image: '/gallery/engagement/engagement-couple-forest-glance.webp', aspect: 1.5 },
  { id: 108, title: 'In Your Arms', category: 'Engagement', image: '/gallery/engagement/engagement-couple-tender-embrace.webp', aspect: 1.5 },
  { id: 109, title: 'The Proposal', category: 'Engagement', image: '/gallery/engagement/engagement-groom-kneeling-proposal.webp', aspect: 1.5 },
  { id: 110, title: 'Grand Chandelier Entry', category: 'Engagement', image: '/gallery/engagement/engagement-ballroom-fog-dance-entry.webp', aspect: 1.5 },
  { id: 111, title: 'Steps into Forever', category: 'Engagement', image: '/gallery/engagement/engagement-couple-garden-stroll.webp', aspect: 1.5 },
  { id: 112, title: 'Bond of Hearts', category: 'Engagement', image: '/gallery/engagement/engagement-rings-arm-detail.webp', aspect: 1.5 },
  { id: 113, title: 'Sacred Bump', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-saree-belly-gajra.webp', aspect: 1.5 },
  { id: 114, title: 'Miracle in Hand', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-sonography-field.webp', aspect: 1.5 },
  { id: 115, title: 'Joyful Expectance', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-joyful-mother-flowers.webp', aspect: 1.5 },
  { id: 116, title: 'Golden Hour Glow', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-golden-hour-maternity.webp', aspect: 1.5 },
  { id: 117, title: 'Sacred Footsteps', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-traditional-alta-footsteps.webp', aspect: 1.5 },
  { id: 118, title: 'Embrace of Tomorrow', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-sunset-embrace.webp', aspect: 1.5 },
  { id: 119, title: 'Tiny Steps Ahead', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-tiny-baby-shoes-leaf.webp', aspect: 1.5 },
  { id: 120, title: "A Father's Whisper", category: 'Baby Shower', image: '/gallery/babyshower/babyshower-father-kissing-belly.webp', aspect: 1.5 },
  { id: 121, title: 'Sacred Wisdom', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-bhagavad-gita-blessing.webp', aspect: 1.5 },
  { id: 122, title: 'Krishna Mehendi', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-krishna-mehendi-palms.webp', aspect: 1.5 },
  { id: 123, title: 'Serene Grace', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-mother-henna-grace.webp', aspect: 1.5 },
  { id: 124, title: 'Bridal Adornment', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-traditional-jhumka-adornment.webp', aspect: 1.5 },
  { id: 125, title: 'Together in Love', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-staircase-gaze.webp', aspect: 1.5 },
  { id: 126, title: 'Family Blessing', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-family-portrait-daughter.webp', aspect: 1.5 },
  { id: 127, title: 'Sisterly Joy', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-mother-daughter-laughter.webp', aspect: 1.5 },
  { id: 128, title: 'Golden Hour Serenade', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-mother-yellow-gown-sunset-profile.webp', aspect: 1.5 },
  { id: 129, title: 'Radiant Joy', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-radiant-mother-golden-field.webp', aspect: 1.5 },
  { id: 130, title: 'Steps Together', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-meadow-sunburst-walk.webp', aspect: 1.5 },
  { id: 131, title: 'A Love in Bloom', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-tender-glance-tallgrass.webp', aspect: 1.5 },
  { id: 132, title: 'Sweetest Whisper', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-father-kissing-mother-cheek.webp', aspect: 1.5 },
  { id: 133, title: 'Heart to Heart', category: 'Baby Shower', image: '/gallery/babyshower/babyshower-couple-forehead-touch-bump-hands.webp', aspect: 1.5 },
  { id: 134, title: 'Folk Energy', category: 'Events', image: '/gallery/events/events-folk-singer-stage-dance.webp', aspect: 1.5, cols: { 3: 0 } },
  { id: 135, title: 'Electric Beats', category: 'Events', image: '/gallery/events/events-dj-artist-profile-colors.webp', aspect: 1.5, cols: { 3: 1 } },
  { id: 136, title: 'Griha Pravesh Steps', category: 'Events', image: '/gallery/events/events-griha-pravesh-kumkum-footsteps.webp', aspect: 1.5, cols: { 3: 2 } },
  { id: 137, title: 'Neon Shadows', category: 'Events', image: '/gallery/events/events-party-crowd-silhouette-laser.webp', aspect: 0.67, cols: { 3: 0 } },
  { id: 138, title: 'Warlock Arena', category: 'Events', image: '/gallery/events/events-dj-stage-warlock-cube-screen.webp', aspect: 0.67, cols: { 3: 1 } },
  { id: 139, title: 'Sonic Dimension', category: 'Events', image: '/gallery/events/events-dj-radial-led-stage-burst.webp', aspect: 0.484, cols: { 3: 2 } },
  { id: 140, title: 'Live Serenade', category: 'Events', image: '/gallery/events/events-live-concert-singer-performance.webp', aspect: 1.5, cols: { 3: 0 } },
  { id: 141, title: 'Midnight Pulse', category: 'Events', image: '/gallery/events/events-dj-warlock-neon-console.webp', aspect: 1.5, cols: { 3: 1 } },
  { id: 142, title: 'Voice of Passion', category: 'Events', image: '/gallery/events/events-folk-singer-passionate-high-note.webp', aspect: 1.5, cols: { 3: 2 } },
  { id: 143, title: 'Red Light Rhythm', category: 'Events', image: '/gallery/events/events-dj-red-spotlight-headphones-console.webp', aspect: 0.67, cols: { 3: 0 } },
  { id: 144, title: 'Concert Euphoria', category: 'Events', image: '/gallery/events/events-concert-crowd-truss-lighting.webp', aspect: 0.67, cols: { 3: 1 } },
  { id: 145, title: 'Divine Jalabhishek', category: 'Events', image: '/gallery/events/events-couple-jalabhishek-puja-urli.webp', aspect: 0.484, cols: { 3: 2 } },
  { id: 146, title: 'Soulful Melody', category: 'Events', image: '/gallery/events/events-singer-profile-mic-passion.webp', aspect: 1.5, cols: { 3: 0 } },
  { id: 147, title: 'The Turntable Vibe', category: 'Events', image: '/gallery/events/events-dj-mixing-cyan-spotlight.webp', aspect: 1.5, cols: { 3: 1 } },
  { id: 148, title: 'Melodic Joy', category: 'Events', image: '/gallery/events/events-folk-singer-smiling-stage.webp', aspect: 1.5, cols: { 3: 2 } },
  { id: 149, title: 'Tunnel of Lights', category: 'Events', image: '/gallery/events/events-dj-console-green-tunnel-screen.webp', aspect: 0.67, cols: { 3: 0 } },
  { id: 150, title: 'Party on the Floor', category: 'Events', image: '/gallery/events/events-dance-floor-crowd-blue-lights.webp', aspect: 0.67, cols: { 3: 1 } },
  { id: 151, title: 'Vastu Hawan Ceremony', category: 'Events', image: '/gallery/events/events-vastu-hawan-puja-living-room.webp', aspect: 0.484, cols: { 3: 2 } },
  { id: 152, title: 'Sacred Kalash Offering', category: 'Events', image: '/gallery/events/events-sacred-coconut-puja-offering.webp', aspect: 1.5, cols: { 3: 0 } },
  { id: 153, title: 'Holy Shringi Abhishek', category: 'Events', image: '/gallery/events/events-shringi-abhishek-deity-puja.webp', aspect: 1.5, cols: { 3: 1 } },
  { id: 154, title: 'The Royal Turban Singer', category: 'Events', image: '/gallery/events/events-singer-red-turban-stage.webp', aspect: 1.5, cols: { 3: 2 } },
  { id: 155, title: 'Shubh Avasar  Footprints', category: 'Events', image: '/gallery/events/events-shubh-avasar-kumkum-footprints.webp', aspect: 0.484, cols: { 3: 2 } },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Post', 'Engagement', 'Baby Shower', 'Events'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [columnsCount, setColumnsCount] = useState(3);

  // Responsive column count listener
  useEffect(() => {
    const updateColumns = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setColumnsCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnsCount(2);
      } else {
        setColumnsCount(3);
      }
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const filteredImages = useMemo(() => {
    return filter === 'All' 
      ? mockGallery 
      : mockGallery.filter(img => img.category === filter);
  }, [filter]);

  // Close lightbox if filter changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [filter]);

  // Keyboard navigation for lightbox (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        setSelectedIndex(prev => prev - 1);
      }
      if (e.key === 'ArrowRight' && selectedIndex < filteredImages.length - 1) {
        setSelectedIndex(prev => prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredImages.length]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(prev => prev - 1);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < filteredImages.length - 1) {
      setSelectedIndex(prev => prev + 1);
    }
  };

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  // Prevent background scroll and pause Lenis when lightbox is active
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
    };
  }, [selectedImage]);

  // Exact Height-Balanced Distribution Algorithm
  const columnData = useMemo(() => {
    const cols = Array.from({ length: columnsCount }, () => []);

    const hasExplicitCols = filteredImages.length > 0 && filteredImages.every(
      img => typeof img.cols === 'object' && img.cols?.[columnsCount] !== undefined
    );

    if (hasExplicitCols) {
      filteredImages.forEach((img) => {
        const colIdx = (img.cols?.[columnsCount] ?? 0) % columnsCount;
        cols[colIdx].push(img);
      });
      return cols;
    }

    const colHeights = Array(columnsCount).fill(0);
    filteredImages.forEach((img) => {
      const ratio = img.aspect || 1.0;

      let shortestCol = 0;
      for (let i = 1; i < columnsCount; i++) {
        if (colHeights[i] < colHeights[shortestCol]) {
          shortestCol = i;
        }
      }

      cols[shortestCol].push(img);
      colHeights[shortestCol] += ratio;
    });

    return cols;
  }, [filteredImages, columnsCount]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div className="overflow-hidden mb-4">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              Portfolio
            </motion.h4>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-warm-white tracking-tight"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase, delay: 0.1 }}
            >
              Selected Works.
            </motion.h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-500 cursor-pointer ${
                filter === cat 
                  ? 'bg-gold text-primary-black font-semibold shadow-lg shadow-gold/20 scale-105' 
                  : 'bg-transparent border border-charcoal text-muted-purple hover:border-gold/50 hover:text-gold'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: premiumEase }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Balanced Responsive Masonry Grid (Clean - No Text on Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {columnData.map((colImages, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {colImages.map((img) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    key={img.id}
                    className="relative overflow-hidden rounded-xl group cursor-pointer shadow-xl bg-primary-black border border-charcoal/40 hover:border-gold/60 transition-all duration-500"
                    onClick={() => {
                      const idx = filteredImages.findIndex(item => item.id === img.id);
                      setSelectedIndex(idx !== -1 ? idx : 0);
                    }}
                  >
                    <div className="relative overflow-hidden w-full bg-charcoal/10">
                      <img 
                        src={img.image} 
                        alt={img.title} 
                        onError={(e) => {
                          if (e.currentTarget.src.endsWith('.webp')) {
                            e.currentTarget.src = e.currentTarget.src.replace(/\.webp$/, '.jpg');
                          }
                        }}
                        className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Clean Minimal Hover Overlay (Without Any Text) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-gold/60 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <HiOutlineZoomIn className="text-gold text-xl md:text-2xl" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox With Next / Previous Navigation Arrows */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-primary-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer select-none overscroll-contain"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Right: Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-10 text-muted-purple hover:text-gold transition-colors z-[120] bg-black/30 hover:bg-black/60 p-2.5 rounded-full backdrop-blur-md border border-charcoal/80 cursor-pointer"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close Lightbox"
            >
              <HiX size={26} />
            </button>
            
            {/* Previous Arrow Button (Hidden on First Image) */}
            {selectedIndex > 0 && (
              <button 
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-warm-white hover:text-gold transition-all duration-300 z-[120] bg-black/50 hover:bg-black/80 p-3 md:p-4 rounded-full backdrop-blur-md border border-charcoal/80 hover:border-gold/60 cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <HiChevronLeft className="text-2xl md:text-3xl" />
              </button>
            )}

            {/* Next Arrow Button (Hidden on Last Image) */}
            {selectedIndex < filteredImages.length - 1 && (
              <button 
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-warm-white hover:text-gold transition-all duration-300 z-[120] bg-black/50 hover:bg-black/80 p-3 md:p-4 rounded-full backdrop-blur-md border border-charcoal/80 hover:border-gold/60 cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
                onClick={handleNext}
                aria-label="Next Image"
              >
                <HiChevronRight className="text-2xl md:text-3xl" />
              </button>
            )}

            {/* Center: Image Display (No Text) */}
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedImage.id}
                src={selectedImage.image} 
                alt={selectedImage.title}
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('.webp')) {
                    e.currentTarget.src = e.currentTarget.src.replace(/\.webp$/, '.jpg');
                  }
                }}
                className="max-w-full max-h-[82vh] md:max-h-[88vh] object-contain shadow-2xl rounded-lg border border-charcoal/30 select-none"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: premiumEase }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  ); 
};

export default Gallery;