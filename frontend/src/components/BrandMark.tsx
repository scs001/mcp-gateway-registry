import React from 'react';

interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES: Record<NonNullable<BrandMarkProps['size']>, string> = {
  sm: 'w-8 h-8 rounded-[7px] text-[1.2rem]',
  md: 'w-9 h-9 rounded-[8px] text-[1.35rem]',
  lg: 'w-14 h-14 rounded-[10px] text-[2.1rem]',
};

// 阳文实底公司父印「寻」— mint seal, Songti 寻. Ported from the official-web
// BrandMark.astro brand spec (accent #38e1c8 / ink #06201b). Deliberately NOT
// routed through t(): the seal glyph is locale-invariant brand chrome.
const BrandMark: React.FC<BrandMarkProps> = ({ size = 'md', className = '' }) => (
  <span
    role="img"
    aria-label="寻数 FindData"
    className={`inline-flex items-center justify-center flex-none bg-[#38e1c8] text-[#06201b] font-bold ${SIZES[size]} ${className}`}
    style={{
      fontFamily: "'Songti SC', 'STSong', 'Noto Serif SC', 'SimSun', serif",
      lineHeight: 1,
    }}
  >
    寻
  </span>
);

export default BrandMark;
