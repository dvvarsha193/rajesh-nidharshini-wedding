/* ==========================================================================
   ROYAL WEDDING INVITATION - CONTROLLER & MULTILINGUAL SCRIPT
   Chi. Rajesh Mani Kumar & Chi. La. Sow. Nidharshini
   ========================================================================== */

// 1. COMPREHENSIVE TRANSLATION DICTIONARY (ENGLISH & TELUGU)
const i18nData = {
  en: {
    page_title: "Wedding Invitation | Rajesh Mani Kumar & Nidharshini",
    music_btn: "Music On",
    music_paused: "Play Music",
    nav_3d_walk: "3D Walk",
    nav_muhurtham: "Muhurtham",
    nav_venue: "Venue",
    nav_calendar: "Save Date",
    nav_share: "Share",
    intro_headline: "Two Hearts, One Soul, A Divine Journey Begins",
    intro_subheadline: "You are warmly welcomed to the auspicious union of",
    the_groom_badge: "The Groom",
    the_bride_badge: "The Bride",
    royal_wedding_tag: "ROYAL WEDDING INVITATION",
    gate_date: "Friday, 27th November 2026 • Guntur",
    gate_open_text: "Open",
    gate_touch_hint: "Touch anywhere to open & enter with royal music",
    groom_short_name: "Chi. Rajesh Mani Kumar",
    bride_short_name: "Chi. La. Sow. Nidharshini",
    namaste_badge: "Namaste",
    "3d_hint": "Move mouse / tilt device for interactive 3D spatial depth",
    tap_music_prompt: "🎵 Tap anywhere to play royal music 🪔",
    intro_speech: "🌸 \"Walking towards our forever... Come join our joyous celebration!\" 🌸",
    intro_speech_center: "💍 \"Namaste! We are tying the knot! Tap below to open our royal invitation ✨\" 🙏",
    intro_speech_welcome: "✨ \"Welcome to our royal wedding! Let us celebrate together!\" ✨",
    enter_btn: "Open Royal Invitation",
    skip_hint: "Click above or scroll down to enter",
    salutation_title: "Wedding Invitation",
    solicitation_text: "We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our Son",
    groom_honorific: "Chi.",
    groom_full_name: "Rajesh Mani Kumar",
    bride_honorific: "Chi. La. Sow.",
    bride_full_name: "Nidharshini",
    with_word: "with",
    parentage_text: "<span class=\"feather-decor\">🪶</span> Youngest Daughter of <strong>Sri Kallakula Pochala Rao</strong> &amp; <strong>Smt. Sridevi</strong>, <em>Bhadrachalam</em> <span class=\"feather-decor\">🪶</span>",
    countdown_title: "Countdown to Muhurtham",
    days_unit: "Days",
    hours_unit: "Hours",
    minutes_unit: "Minutes",
    seconds_unit: "Seconds",
    countdown_badge: "Friday, 27th November 2026 • 09:25 PM",
    muhurtham_sec_title: "Auspicious Sumuhurtham",
    muhurtham_sec_subtitle: "Sacred Vedic Muhurtham determined by planetary blessings",
    muhurtham_label: "SUMUHURTHAM",
    muhurtham_date: "Friday, 27th November 2026",
    at_separator: "at",
    muhurtham_time: "9:25 PM",
    muhurtham_description: "In the divine lagna, amidst sacred Vedic chanting and the holy Jeelakarra Bellam ceremony, Chi. Rajesh Mani Kumar and Chi. La. Sow. Nidharshini enter lifelong matrimony.",
    feast_tag: "Royal Wedding Feast",
    dinner_reception_title: "Dinner Reception",
    dinner_time: "8:00 PM Onwards",
    dinner_note: "Please join us for an exquisite traditional and multi-cuisine royal feast prepared with utmost love and warmth.",
    rituals_tag: "Sacred Wedding Rituals",
    ceremony_name: "Kanyadaanam & Sumuhurtham",
    ceremony_time: "9:25 PM Exact Muhurtham",
    ceremony_note: "Bless the couple during Mangalya Dharana, Talambralu, and Saptapadi as they take their sacred vows.",
    add_gcal_btn: "Add to Google Calendar",
    download_ics_btn: "Download Apple/Outlook (.ICS)",
    couple_sec_title: "The Royal Couple",
    couple_sec_subtitle: "Two brilliant minds from IIT, destined to walk together in love",
    btn_real_portraits: "Real Portraits",
    btn_3d_miniatures: "3D Miniatures",
    tag_groom: "Groom",
    tag_bride: "Bride",
    groom_bio: "A dynamic visionary and accomplished IITian with immense passion for engineering and technology. Known for his cheerful smile, warmth, and devotion to family values.",
    bride_bio: "A graceful, brilliant IIT post-graduate endowed with wisdom, artistic elegance, and boundless positivity. Youngest daughter of Sri Kallakula Pochala Rao & Smt. Sridevi from Bhadrachalam.",
    venue_sec_title: "The Wedding Destination",
    venue_sec_subtitle: "Where sacred traditions come alive in royal grandeur",
    official_venue_badge: "Official Venue",
    venue_name_text: "ARM CONVENTION",
    venue_address_text: "<strong>MG Inner Ring Road, Phase-1</strong><br>Gorantla, Guntur, Andhra Pradesh",
    vh_parking: "Spacious Valet Parking Available",
    vh_ac: "Centrally Air-Conditioned Grand Hall",
    vh_road: "Conveniently Connected via MG Inner Ring Road",
    gmaps_btn: "Open in Google Maps",
    copy_address_btn: "Copy Full Address",
    copied_address_btn: "Address Copied!",
    gallery_sec_title: "Glimpses of Joy",
    gallery_sec_subtitle: "Moments captured as our journey to forever unfolds",
    gallery_miniature_overlay: "3D Wedding Miniatures",
    gallery_miniature_title: "Royal 3D Miniatures",
    gallery_miniature_desc: "Cherished handcrafted couple 3D miniatures",
    gallery_varmala_overlay: "Varmala Celebration",
    gallery_varmala_title: "Bond of Love",
    gallery_varmala_desc: "Exchange of fragrant garlands amidst loving smiles",
    gallery_jhula_overlay: "Heritage Portrait",
    gallery_jhula_title: "Traditional Elegance",
    gallery_jhula_desc: "Cherishing heritage traditions together",
    compliments_title: "With Best Compliments from:",
    groom_parents_name: "Sri Dasari Srinivasa Rao & Smt. Parvathi",
    groom_family_label: "(Groom's Parents & Family)",
    bride_parents_name: "Sri Kallakula Pochala Rao & Smt. Sridevi",
    bride_family_label: "Bhadrachalam (Bride's Parents & Family)",
    near_dear_title: "Near & Dear",
    near_dear_sub: "Friends, Well-Wishers & Extended Family",
    footer_cordial: "Cordially inviting you to create lifelong memories together • 27th November 2026",
    share_text: "*Wedding Invitation: Chi. Rajesh Mani Kumar (IIT) & Chi. La. Sow. Nidharshini (IIT)*\n\nWe solicit your gracious presence on our auspicious marriage celebration:\n🗓 *Date:* Friday, 27th November 2026\n⏰ *Sumuhurtham:* 9:25 PM\n🍽 *Dinner:* 8:00 PM Onwards\n📍 *Venue:* ARM CONVENTION, MG Inner Ring Road, Phase-1, Gorantla, Guntur\n\nWith Best Compliments from:\n1. Sri Dasari Srinivasa Rao & Smt. Parvathi\n2. Sri Kallakula Pochala Rao & Smt. Sridevi (Bhadrachalam)\n3. Near & Dear\n\nPlease join us in blessing the couple!"
  },
  te: {
    page_title: "వివాహ ఆహ్వాన పత్రిక | రాజేష్ మణి కుమార్ & నిధర్శిని",
    music_btn: "సంగీతం ఆన్",
    music_paused: "సంగీతం ప్లే",
    nav_3d_walk: "3D పరిచయం",
    nav_muhurtham: "ముహూర్తం",
    nav_venue: "కళ్యాణ వేదిక",
    nav_calendar: "తేదీ సేవ్",
    nav_share: "షేర్ చేయండి",
    intro_headline: "రెండు హృదయాలు, ఒకే బంధం - నూతన జీవితానికి శుభారంభం",
    intro_subheadline: "ఈ క్రింది శుభకార్యానికి మీకు మా హృదయపూర్వక ఆహ్వానం",
    the_groom_badge: "వరుడు",
    the_bride_badge: "వధువు",
    royal_wedding_tag: "వివాహ మహోత్సవ ఆహ్వాన పత్రిక",
    gate_date: "శుక్రవారం, 27 నవంబర్ 2026 • గుంటూరు",
    gate_open_text: "తెరవండి",
    gate_touch_hint: "స్పర్శించి శుభ సంగీతంతో ఆహ్వానాన్ని వీక్షించండి",
    groom_short_name: "చి. రాజేష్ మణి కుమార్",
    bride_short_name: "చి. ల. సౌ. నిధర్శిని",
    namaste_badge: "నమస్కారం",
    "3d_hint": "3D అనుభూతి కోసం మౌస్ లేదా స్క్రీన్‌ని తిప్పండి",
    tap_music_prompt: "🎵 సంగీతాన్ని ఆస్వాదించడానికి తాకండి 🪔",
    intro_speech: "🌸 \"నూతన దాంపత్య జీవితంలోకి అడుగుపెడుతున్న మా శుభకార్యానికి విచ్చేయండి!\" 🌸",
    intro_speech_center: "💍 \"నమస్కారములు! మేము ఒక్కటవుతున్న శుభసందర్భంలో ఆహ్వాన పత్రికను వీక్షించండి ✨\" 🙏",
    intro_speech_welcome: "✨ \"మా వివాహ మహోత్సవానికి సాదర సుస్వాగతం!\" ✨",
    enter_btn: "ఆహ్వాన పత్రికను వీక్షించండి",
    skip_hint: "పై బటన్ క్లిక్ చేసి ఆహ్వానాన్ని చూడండి",
    salutation_title: "వివాహ మహోత్సవ ఆహ్వాన పత్రిక",
    solicitation_text: "మా కుమారుని యొక్క వివాహ మహోత్సవ శుభ సందర్భంగా, తామెల్లరు సకుటుంబ సపరివార సమేతముగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించ ప్రార్థన",
    groom_honorific: "చి.",
    groom_full_name: "రాజేష్ మణి కుమార్",
    bride_honorific: "చి. ల. సౌ.",
    bride_full_name: "నిధర్శిని",
    with_word: "సహిత",
    parentage_text: "<span class=\"feather-decor\">🪶</span> భద్రాచలం నివాసులు <strong>శ్రీ కళ్ళకూల పోచాలు రావు</strong> &amp; <strong>శ్రీమతి శ్రీదేవి</strong> దంపతుల కనిష్ఠ పుత్రిక <span class=\"feather-decor\">🪶</span>",
    countdown_title: "శుభ ముహూర్తానికి సమయం",
    days_unit: "రోజులు",
    hours_unit: "గంటలు",
    minutes_unit: "నిమిషాలు",
    seconds_unit: "సెకన్లు",
    countdown_badge: "శుక్రవారం, 27 నవంబర్ 2026 • రాత్రి 09:25 గంటలకు",
    muhurtham_sec_title: "శుభ ముహూర్తం",
    muhurtham_sec_subtitle: "గ్రహానుకూల శుభ లగ్నమందు వేద మంత్రోచ్ఛారణల మధ్య",
    muhurtham_label: "సుముహూర్తం",
    muhurtham_date: "శుక్రవారం, 27 నవంబర్ 2026",
    at_separator: "రాత్రి",
    muhurtham_time: "9:25 గంటలకు",
    muhurtham_description: "సర్వసిద్ధి శుభ ముహూర్తమున, మంగళ వాద్యాలు, జీలకర్ర-బెల్లం సమర్పణ సమయమందు చి. రాజేష్ మణి కుమార్ మరియు చి. ల. సౌ. నిధర్శిని గృహస్థాశ్రమ ప్రవేశం.",
    feast_tag: "విందు భోజనం",
    dinner_reception_title: "వివాహ విందు",
    dinner_time: "రాత్రి 8:00 గంటల నుండి",
    dinner_note: "విచ్చేసిన బంధుమిత్రులందరికీ రాజభోజన సాంప్రదాయాలతో కూడిన రసవత్తర వివాహ విందు ఏర్పాటు చేయబడినది.",
    rituals_tag: "వైదిక వివాహ వేడుక",
    ceremony_name: "కన్యాదానం & సుముహూర్తం",
    ceremony_time: "రాత్రి 9:25 గంటల ఖచ్చిత ముహూర్తము",
    ceremony_note: "మాంగల్య ధారణ, తలంబ్రాలు మరియు సప్తపది పవిత్ర కార్యక్రమాలలో వధూవరులను ఆశీర్వదించండి.",
    add_gcal_btn: "గూగుల్ క్యాలెండర్‌లో చేర్చండి",
    download_ics_btn: "క్యాలెండర్ ఇన్విటేషన్ డౌన్‌లోడ్ (.ICS)",
    couple_sec_title: "నూతన వధూవరులు",
    couple_sec_subtitle: "ఐఐటీ (IIT) విద్యావంతులైన ఉత్తమ జంట",
    btn_real_portraits: "ఫోటోలు",
    btn_3d_miniatures: "3D మినియేచర్స్",
    tag_groom: "వరుడు",
    tag_bride: "వధువు",
    groom_bio: "ఐఐటీ గ్రాడ్యుయేట్, సాంకేతిక రంగంలో ప్రతిభాశాలి, సంస్కారవంతమైన కుటుంబ విలువలు కలిగిన ఉత్తమ యువకుడు.",
    bride_bio: "ఐఐటీ పోస్ట్ గ్రాడ్యుయేట్, సౌమ్యురాలు, సకల కళాశోభితమైన భద్రాచలం కళ్ళకూల పోచాలు రావు & శ్రీదేవి గార్ల ప్రియ పుత్రిక.",
    venue_sec_title: "కళ్యాణ వేదిక & మార్గదర్శనం",
    venue_sec_subtitle: "రమణీయమైన రాజసౌధ వేదికలో వైభవంగా వివాహం",
    official_venue_badge: "కళ్యాణ మండపం",
    venue_name_text: "ARM కన్వెన్షన్ (ARM CONVENTION)",
    venue_address_text: "<strong>MG ఇన్నర్ రింగ్ రోడ్, ఫేజ్-1</strong><br>గోరంట్ల, గుంటూరు, ఆంధ్రప్రదేశ్",
    vh_parking: "విశాలమైన వాలెట్ పార్కింగ్ సదుపాయం కలదు",
    vh_ac: "కేంద్రీకృత ఎయిర్ కండిషన్డ్ కల్యాణ మహల్",
    vh_road: "MG ఇన్నర్ రింగ్ రోడ్ ద్వారా నేరుగా చేరుకోవచ్చు",
    gmaps_btn: "గూగుల్ మ్యాప్స్‌లో చూడండి",
    copy_address_btn: "పూర్తి చిరునామాను కాపీ చేయండి",
    copied_address_btn: "చిరునామా కాపీ చేయబడింది!",
    gallery_sec_title: "మధుర క్షణాలు",
    gallery_sec_subtitle: "నూతన ప్రయాణానికి ఆనందకర జ్ఞాపకాలు",
    gallery_miniature_overlay: "3D వివాహ మినియేచర్స్",
    gallery_miniature_title: "రాయల్ 3D మినియేచర్స్",
    gallery_miniature_desc: "ముచ్చటైన వధూవరుల 3D శిల్ప రూపాలు",
    gallery_varmala_overlay: "వరమాల మహోత్సవం",
    gallery_varmala_title: "ప్రేమ బంధం",
    gallery_varmala_desc: "సుగంధ పుష్పమాలలతో పరిణయ ఆనందం",
    gallery_jhula_overlay: "సాంప్రదాయ ఊయల చిత్రమాలిక",
    gallery_jhula_title: "సాంప్రదాయ సొగసు",
    gallery_jhula_desc: "తెలుగుదనం ఉట్టిపడే మధుర దృశ్యం",
    compliments_title: "ఆహ్వానించువారు & శుభాకాంక్షలతో:",
    groom_parents_name: "శ్రీ దాసరి శ్రీనివాసరావు & శ్రీమతి పార్వతి",
    groom_family_label: "(వరుని తల్లిదండ్రులు మరియు కుటుంబ సభ్యులు)",
    bride_parents_name: "శ్రీ కళ్ళకూల పోచాలు రావు & శ్రీమతి శ్రీదేవి",
    bride_family_label: "భద్రాచలం (వధువు తల్లిదండ్రులు మరియు కుటుంబ సభ్యులు)",
    near_dear_title: "బంధుమిత్రులు మరియు శ్రేయోభిలాషులు",
    near_dear_sub: "సర్వ బంధువులు మరియు మిత్ర బృందం",
    footer_cordial: "సకుటుంబ సపరివార సమేతంగా విచ్చేసి ఆశీర్వదించవలసిందిగా కోరుచున్నాము • 27 నవంబర్ 2026",
    share_text: "*వివాహ మహోత్సవ ఆహ్వాన పత్రిక: చి. రాజేష్ మణి కుమార్ (IIT) & చి. ల. సౌ. నిధర్శిని (IIT)*\n\nమా వివాహ మహోత్సవ శుభ సందర్భంగా తామెల్లరు విచ్చేసి ఆశీర్వదించ ప్రార్థన:\n🗓 *తేదీ:* శుక్రవారం, 27 నవంబర్ 2026\n⏰ *సుముహూర్తం:* రాత్రి 9:25 గంటలకు\n🍽 *విందు భోజనం:* రాత్రి 8:00 గంటల నుండి\n📍 *కళ్యాణ వేదిక:* ARM CONVENTION, MG ఇన్నర్ రింగ్ రోడ్, ఫేజ్-1, గోరంట్ల, గుంటూరు\n\nశుభాకాంక్షలతో:\n1. శ్రీ దాసరి శ్రీనివాసరావు & శ్రీమతి పార్వతి\n2. శ్రీ కళ్ళకూల పోచాలు రావు & శ్రీమతి శ్రీదేవి (భద్రాచలం)\n3. బంధుమిత్రులు మరియు శ్రేయోభిలాషులు"
  }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  // 1. PETALS CANVAS ANIMATION
  initPetalsCanvas();

  // 2. 3D MINIATURE WALK & INTRO
  initMiniatureIntro();

  // 3. COUNTDOWN TIMER
  initCountdownTimer();

  // 4. ROMANTIC AUDIO TOGGLE
  initAudioControls();

  // 5. VENUE ADDRESS COPY
  initVenueCopy();

  // 7. PHOTO GALLERY LIGHTBOX
  initGalleryModal();

  // 8. REAL VS 3D AVATAR TOGGLE
  initAvatarToggle();

  // 9. MULTILINGUAL SWITCHER (ENGLISH & TELUGU)
  initMultilingual();

  // 10. WHATSAPP SHARE ACTION
  initShareAction();
});

/* ==============================================================
   1. CANVAS FLOWER PETALS (ROSE & MARIGOLD)
   ============================================================== */
function initPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const isMobile = window.innerWidth < 768;
  const petals = [];
  const petalCount = isMobile ? 12 : 24;
  const colors = [
    { r: 218, g: 41, b: 68 },   // Rose Red
    { r: 255, g: 153, b: 51 },  // Marigold Orange
    { r: 255, g: 215, b: 0 },   // Warm Gold
    { r: 247, g: 202, b: 201 }  // Soft Pink
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * (isMobile ? 5 : 7) + 5,
      speedY: Math.random() * 1.1 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.2 - 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.4 + 0.35
    });
  }

  let isCanvasActive = true;
  document.addEventListener('visibilitychange', () => {
    isCanvasActive = !document.hidden;
    if (isCanvasActive) requestAnimationFrame(draw);
  });

  function draw() {
    if (!isCanvasActive) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.6 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.opacity})`;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==============================================================
   2. 3D MINIATURE WALK INTRO SCREEN (THREE.JS)
   ============================================================== */
function initMiniatureIntro() {
  const introOverlay = document.getElementById('miniature-intro');
  const gateEl = document.getElementById('invitation-gate');
  const openSealBtn = document.getElementById('open-envelope-btn');
  const curtainLeft = document.querySelector('.curtain-left');
  const curtainRight = document.querySelector('.curtain-right');
  const enterBtn = document.getElementById('enter-invitation-btn');
  const replayBtn = document.getElementById('replay-miniature-btn');
  const speechText = document.getElementById('speech-text');

  if (!introOverlay) return;

  // 1. UNSEAL ENVELOPE GATE -> UNLOCKS AUDIO & OPENS CURTAINS & STARTS 3D WALK
  let gateOpened = false;
  function unsealInvitation() {
    if (gateOpened) return;
    gateOpened = true;

    // Immediately start unmuted music & temple bell (direct user interaction!)
    if (window.weddingAmbience) {
      window.weddingAmbience.playTempleBell();
      window.weddingAmbience.start();
      updateAudioBtnState(true);
    }

    // Unseal gate with sparkling fade
    if (gateEl) {
      gateEl.classList.add('unsealed');
      setTimeout(() => { gateEl.style.display = 'none'; }, 850);
    }

    // Glide royal curtains open
    if (curtainLeft) curtainLeft.classList.add('open');
    if (curtainRight) curtainRight.classList.add('open');

    // Begin 3D miniature walk with music playing
    if (window.royal3DStage && typeof window.royal3DStage.startWalk === 'function') {
      window.royal3DStage.startWalk();
    }
  }

  if (gateEl) {
    gateEl.addEventListener('click', unsealInvitation);
  }
  if (openSealBtn) {
    openSealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      unsealInvitation();
    });
  }

  // Listen to 3D miniatures reaching center
  window.addEventListener('miniaturesReachedCenter', () => {
    if (speechText) {
      speechText.innerHTML = i18nData[currentLang].intro_speech_center;
    }
  });

  function openInvitation() {
    if (speechText) {
      speechText.innerHTML = i18nData[currentLang].intro_speech_welcome;
    }

    // Ensure music is active
    if (window.weddingAmbience && !window.weddingAmbience.isPlaying) {
      window.weddingAmbience.start();
      updateAudioBtnState(true);
    }

    // Trigger smooth fade & curtain separation
    introOverlay.classList.add('dismissed');
    document.body.style.overflow = 'auto';

    // 3D Camera swoops forward down the palace hall
    if (window.royal3DStage && typeof window.royal3DStage.flyIntoPalace === 'function') {
      window.royal3DStage.flyIntoPalace();
    }

    // Hide overlay completely, pause Three.js background rendering, and scroll smoothly into main content
    setTimeout(() => {
      introOverlay.style.display = 'none';
      if (window.royal3DStage && typeof window.royal3DStage.pause === 'function') {
        window.royal3DStage.pause();
      }
      const mainEl = document.getElementById('main-content');
      if (mainEl) {
        mainEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  }

  // 1. Direct Tap / Click triggers on Button and Skip Hint
  ['click', 'touchend', 'pointerup'].forEach(evt => {
    enterBtn.addEventListener(evt, (e) => {
      e.preventDefault();
      openInvitation();
    });
  });

  const skipHint = document.querySelector('.skip-hint');
  if (skipHint) {
    skipHint.style.cursor = 'pointer';
    ['click', 'touchend', 'pointerup'].forEach(evt => {
      skipHint.addEventListener(evt, (e) => {
        e.preventDefault();
        openInvitation();
      });
    });
  }

  // Also tap speech bubble to enter
  const speechBubble = document.getElementById('speech-bubble');
  if (speechBubble) {
    speechBubble.style.cursor = 'pointer';
    speechBubble.addEventListener('click', openInvitation);
  }

  // 2. Gesture Scroll / Swipe Down Triggers to Enter
  let touchStartY = null;
  window.addEventListener('touchstart', (e) => {
    if (introOverlay.style.display !== 'none' && !introOverlay.classList.contains('dismissed')) {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (touchStartY !== null && introOverlay.style.display !== 'none' && !introOverlay.classList.contains('dismissed')) {
      if (e.touches && e.touches.length > 0) {
        const deltaY = touchStartY - e.touches[0].clientY;
        // Natural scroll-down gesture (swiping finger up by > 35px)
        if (deltaY > 35) {
          touchStartY = null;
          openInvitation();
        }
      }
    }
  }, { passive: true });

  window.addEventListener('wheel', (e) => {
    if (introOverlay.style.display !== 'none' && !introOverlay.classList.contains('dismissed')) {
      if (e.deltaY > 15) {
        openInvitation();
      }
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (introOverlay.style.display !== 'none' && !introOverlay.classList.contains('dismissed')) {
      if (['ArrowDown', 'PageDown', 'Space', 'Enter'].includes(e.code)) {
        openInvitation();
      }
    }
  });

  // Allow replaying 3D walk
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      introOverlay.style.display = 'flex';
      void introOverlay.offsetWidth;
      introOverlay.classList.remove('dismissed');
      document.body.style.overflow = 'hidden';

      // Keep gate hidden during replay and open curtains
      if (gateEl) gateEl.style.display = 'none';
      if (curtainLeft) curtainLeft.classList.add('open');
      if (curtainRight) curtainRight.classList.add('open');

      if (window.royal3DStage) {
        if (typeof window.royal3DStage.resume === 'function') {
          window.royal3DStage.resume();
        }
        if (typeof window.royal3DStage.replayWalk === 'function') {
          window.royal3DStage.replayWalk();
        }
      }

      if (window.weddingAmbience && !window.weddingAmbience.isPlaying) {
        window.weddingAmbience.start();
      }

      if (speechText) {
        speechText.innerHTML = i18nData[currentLang].intro_speech;
      }
    });
  }
}

/* ==============================================================
   3. COUNTDOWN TIMER
   Target: Friday, 27th November 2026, 9:25 PM IST
   ============================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl) return;

  const targetDate = new Date('2026-11-27T21:25:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? '0' + days : days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  update();
  setInterval(update, 1000);
}

/* ==============================================================
   4. ROMANTIC AUDIO CONTROLS
   ============================================================== */
function updateAudioBtnState(isPlaying) {
  const btn = document.getElementById('audio-toggle-btn');
  if (!btn) return;
  const label = btn.querySelector('.audio-label');
  if (isPlaying) {
    btn.classList.remove('paused');
    if (label) label.textContent = i18nData[currentLang].music_btn;
  } else {
    btn.classList.add('paused');
    if (label) label.textContent = i18nData[currentLang].music_paused;
  }
}

function initAudioControls() {
  const btn = document.getElementById('audio-toggle-btn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.weddingAmbience) {
        const active = window.weddingAmbience.toggle();
        updateAudioBtnState(active);
      }
    });
  }

  // Play music right from intro
  const tryStartAudio = () => {
    if (window.weddingAmbience && !window.weddingAmbience.isPlaying) {
      window.weddingAmbience.start();
    }
  };

  // Attempt immediate playback on load
  tryStartAudio();

  // Tap anywhere on intro overlay starts music immediately
  const introEl = document.getElementById('miniature-intro');
  if (introEl) {
    ['click', 'touchstart', 'pointerdown'].forEach(evt => {
      introEl.addEventListener(evt, () => {
        tryStartAudio();
      }, { passive: true });
    });
  }

  // Modern browsers require a user interaction gesture (touch, click, key) before unmuting
  const startOnFirstGesture = () => {
    tryStartAudio();
    ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, startOnFirstGesture);
    });
  };

  ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
    window.addEventListener(evt, startOnFirstGesture, { passive: true, once: true });
  });
}

/* ==============================================================
   5. COPY VENUE ADDRESS
   ============================================================== */
function initVenueCopy() {
  const copyBtn = document.getElementById('copy-address-btn');
  if (!copyBtn) return;

  const address = 'ARM CONVENTION, MG Inner Ring Road, Phase-1, Gorantla, Guntur, Andhra Pradesh';

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(address).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i class="fas fa-check"></i> ${i18nData[currentLang].copied_address_btn}`;
      copyBtn.style.background = '#E8F5E9';
      copyBtn.style.color = '#2E7D32';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '';
        copyBtn.style.color = '';
      }, 2500);
    });
  });
}

/* ==============================================================
   7. PHOTO GALLERY LIGHTBOX
   ============================================================== */
function initGalleryModal() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.querySelector('.close-modal');
  const items = document.querySelectorAll('.gallery-item-card');

  if (!modal || !modalImg) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.getAttribute('data-full');
      const caption = item.getAttribute('data-caption');
      modal.style.display = 'flex';
      modalImg.src = fullSrc;
      modalCaption.textContent = caption;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

/* ==============================================================
   8. REAL VS 3D AVATAR TOGGLE
   ============================================================== */
function initAvatarToggle() {
  const realBtn = document.getElementById('toggle-real-avatar');
  const chibiBtn = document.getElementById('toggle-chibi-avatar');
  const groomImg = document.getElementById('groom-profile-img');
  const brideImg = document.getElementById('bride-profile-img');

  if (!realBtn || !chibiBtn || !groomImg || !brideImg) return;

  const realGroom = 'assets/groom_portrait.jpg';
  const realBride = 'assets/bride_portrait.jpg';
  const chibiGroom = 'assets/groom_3d_real_miniature.png';
  const chibiBride = 'assets/bride_3d_real_miniature.png';

  realBtn.addEventListener('click', () => {
    realBtn.classList.add('active');
    chibiBtn.classList.remove('active');

    groomImg.classList.remove('chibi-mode');
    brideImg.classList.remove('chibi-mode');

    groomImg.src = realGroom;
    brideImg.src = realBride;
  });

  chibiBtn.addEventListener('click', () => {
    chibiBtn.classList.add('active');
    realBtn.classList.remove('active');

    groomImg.classList.add('chibi-mode');
    brideImg.classList.add('chibi-mode');

    groomImg.src = chibiGroom;
    brideImg.src = chibiBride;

    if (window.weddingAmbience) {
      window.weddingAmbience.playTempleBell();
    }
  });
}

/* ==============================================================
   9. MULTILINGUAL CONTROLLER (ENGLISH & TELUGU)
   ============================================================== */
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  document.body.setAttribute('data-lang', lang);

  // Update Page Title
  document.title = i18nData[lang].page_title;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Toggle button active classes
  const enBtn = document.getElementById('lang-en-btn');
  const teBtn = document.getElementById('lang-te-btn');

  if (lang === 'te') {
    if (teBtn) teBtn.classList.add('active');
    if (enBtn) enBtn.classList.remove('active');
  } else {
    if (enBtn) enBtn.classList.add('active');
    if (teBtn) teBtn.classList.remove('active');
  }

  // Update audio label state text
  if (window.weddingAmbience) {
    updateAudioBtnState(window.weddingAmbience.isPlaying);
  }

  // Persist preference
  try {
    localStorage.setItem('wedding_lang_pref', lang);
  } catch (e) {}
}

function initMultilingual() {
  const enBtn = document.getElementById('lang-en-btn');
  const teBtn = document.getElementById('lang-te-btn');

  if (enBtn) {
    enBtn.addEventListener('click', () => setLanguage('en'));
  }
  if (teBtn) {
    teBtn.addEventListener('click', () => setLanguage('te'));
  }

  // Check saved preference
  try {
    const saved = localStorage.getItem('wedding_lang_pref');
    if (saved && (saved === 'en' || saved === 'te')) {
      setLanguage(saved);
    }
  } catch (e) {}
}

/* ==============================================================
   10. WHATSAPP SHARE ACTION
   ============================================================== */
function initShareAction() {
  const shareBtn = document.getElementById('share-invite-btn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', () => {
    const text = i18nData[currentLang].share_text;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  });
}
