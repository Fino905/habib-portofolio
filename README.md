<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 240" width="100%" height="240">
  <defs>
    <style>
      @keyframes walkCycle {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-4px) rotate(2deg); }
      }
      @keyframes legLeft {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(18deg); }
      }
      @keyframes legRight {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-18deg); }
      }
      @keyframes crawlAndEat {
        0% { transform: translateX(950px); }
        15% { transform: translateX(750px); } /* mendekati B ke-2 */
        35% { transform: translateX(620px); } /* makan I */
        55% { transform: translateX(470px); } /* makan B ke-1 */
        75% { transform: translateX(310px); } /* makan A */
        95% { transform: translateX(120px); } /* makan H */
        100% { transform: translateX(-150px); } /* keluar layar */
      }
      @keyframes eatLetterB2 {
        0%, 20% { opacity: 1; transform: scale(1); }
        22% { opacity: 0.5; transform: scale(1.1) skewX(-10deg); }
        25%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes eatLetterI {
        0%, 40% { opacity: 1; transform: scale(1); }
        42% { opacity: 0.5; transform: scale(1.1) skewX(-10deg); }
        45%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes eatLetterB1 {
        0%, 60% { opacity: 1; transform: scale(1); }
        62% { opacity: 0.5; transform: scale(1.1) skewX(-10deg); }
        65%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes eatLetterA {
        0%, 78% { opacity: 1; transform: scale(1); }
        80% { opacity: 0.5; transform: scale(1.1) skewX(-10deg); }
        83%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes eatLetterH {
        0%, 93% { opacity: 1; transform: scale(1); }
        95% { opacity: 0.5; transform: scale(1.1) skewX(-10deg); }
        98%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes biteCrunch {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }

      .letter { font-family: 'Arial Black', Impact, sans-serif; font-size: 130px; font-weight: 900; fill: #ffffff; }
      .letter-glow { filter: drop-shadow(0 0 10px rgba(226, 54, 54, 0.8)); }
      .letter-h { animation: eatLetterH 8s infinite linear; }
      .letter-a { animation: eatLetterA 8s infinite linear; }
      .letter-b1 { animation: eatLetterB1 8s infinite linear; }
      .letter-i { animation: eatLetterI 8s infinite linear; }
      .letter-b2 { animation: eatLetterB2 8s infinite linear; }

      .spider-container { animation: crawlAndEat 8s infinite linear; }
      .spider-body-walk { animation: walkCycle 0.3s infinite ease-in-out; }
      .leg-l { transform-origin: 50px 50px; animation: legLeft 0.25s infinite ease-in-out; }
      .leg-r { transform-origin: 50px 50px; animation: legRight 0.25s infinite ease-in-out; }
      .chomp-fx { animation: biteCrunch 0.25s infinite; fill: #E23636; font-family: sans-serif; font-size: 14px; font-weight: bold; }
    </style>
  </defs>

  <!-- BACKGROUND -->
  <rect width="100%" height="100%" fill="#0d1117" rx="15" />
  
  <!-- JARING LABA-LABA DI SUDUT -->
  <path d="M0,0 L180,0 M0,0 L0,180 M0,0 L130,130 M0,60 Q60,60 60,0 M0,120 Q120,120 120,0" stroke="#30363d" stroke-width="2" fill="none" opacity="0.4" />

  <!-- HURUF TEKS GEDE HABIB -->
  <g class="letter-glow">
    <text x="140" y="160" class="letter letter-h">H</text>
    <text x="290" y="160" class="letter letter-a">A</text>
    <text x="440" y="160" class="letter letter-b1">B</text>
    <text x="590" y="160" class="letter letter-i">I</text>
    <text x="690" y="160" class="letter letter-b2">B</text>
  </g>

  <!-- LABA-LABA BERJALAN & MEMAKAN -->
  <g class="spider-container">
    <g transform="translate(0, 70)">
      
      <!-- EFEK CHOMP / GIGITAN -->
      <text x="-40" y="30" class="chomp-fx">*CHOMP*</text>
      
      <!-- SPIDER FIGURE -->
      <g class="spider-body-walk">
        <!-- KAKI KIRI -->
        <g class="leg-l">
          <path d="M40,40 Q10,10 0,30" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M40,45 Q5,35 -5,55" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M40,55 Q10,75 0,90" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M45,60 Q20,95 10,110" stroke="#E23636" stroke-width="4" fill="none" />
        </g>
        
        <!-- KAKI KANAN -->
        <g class="leg-r">
          <path d="M60,40 Q90,10 100,30" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M60,45 Q95,35 105,55" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M60,55 Q90,75 100,90" stroke="#E23636" stroke-width="4" fill="none" />
          <path d="M55,60 Q80,95 90,110" stroke="#E23636" stroke-width="4" fill="none" />
        </g>

        <!-- BADAN & KEPALA -->
        <ellipse cx="50" cy="52" rx="16" ry="22" fill="#E23636" />
        <ellipse cx="50" cy="52" rx="11" ry="16" fill="#111111" />
        <circle cx="50" cy="28" r="10" fill="#E23636" />
        
        <!-- TARING (FANGS) MENGUNYAH -->
        <polygon points="44,20 40,10 46,14" fill="#ffffff" />
        <polygon points="56,20 60,10 54,14" fill="#ffffff" />
        
        <!-- MATA SPIDER GLOW -->
        <circle cx="45" cy="27" r="2.5" fill="#ffffff" />
        <circle cx="55" cy="27" r="2.5" fill="#ffffff" />
      </g>
    </g>
  </g>
</svg>
