export type CmsSocialLink = {
  platform: string;
  url: string;
  icon: string;
  label: string;
};

const PLATFORM_ICON_MAP: Record<string, string> = {
  twitter: 'simple-icons:x',
  x: 'simple-icons:x',
  facebook: 'simple-icons:facebook',
  youtube: 'simple-icons:youtube',
  linkedin: 'simple-icons:linkedin',
  instagram: 'simple-icons:instagram',
  github: 'simple-icons:github',
  gitlab: 'simple-icons:gitlab',
  dribbble: 'simple-icons:dribbble',
  behance: 'simple-icons:behance',
  figma: 'simple-icons:figma',
  discord: 'simple-icons:discord',
  tiktok: 'simple-icons:tiktok',
  pinterest: 'simple-icons:pinterest',
  medium: 'simple-icons:medium',
  devdotto: 'simple-icons:devdotto',
  devto: 'simple-icons:devdotto',
  stackoverflow: 'simple-icons:stackoverflow',
  threads: 'simple-icons:threads',
  whatsapp: 'simple-icons:whatsapp',
  telegram: 'simple-icons:telegram',
  snapchat: 'simple-icons:snapchat',
  reddit: 'simple-icons:reddit',
  mastodon: 'simple-icons:mastodon',
};

function normalizePlatform(value: string): string {
  return value.trim().toLowerCase().replace(/[\s_-]+/g, '');
}

function inferPlatformFromUrl(url: string): string | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '').toLowerCase();

    if (host.includes('linkedin')) return 'linkedin';
    if (host.includes('github')) return 'github';
    if (host.includes('gitlab')) return 'gitlab';
    if (host === 'x.com' || host.includes('twitter')) return 'x';
    if (host.includes('facebook') || host === 'fb.com') return 'facebook';
    if (host.includes('youtube') || host.includes('youtu.be')) return 'youtube';
    if (host.includes('instagram')) return 'instagram';
    if (host.includes('dribbble')) return 'dribbble';
    if (host.includes('behance')) return 'behance';
    if (host.includes('figma')) return 'figma';
    if (host.includes('discord')) return 'discord';
    if (host.includes('tiktok')) return 'tiktok';
    if (host.includes('pinterest')) return 'pinterest';
    if (host.includes('medium.com')) return 'medium';
    if (host.includes('dev.to')) return 'devto';
    if (host.includes('stackoverflow')) return 'stackoverflow';
    if (host.includes('threads.net')) return 'threads';
    if (host.includes('whatsapp')) return 'whatsapp';
    if (host.includes('t.me') || host.includes('telegram')) return 'telegram';
    if (host.includes('snapchat')) return 'snapchat';
    if (host.includes('reddit')) return 'reddit';
    if (host.includes('mastodon')) return 'mastodon';
  } catch {
    return null;
  }

  return null;
}

export function resolveSocialIcon(platform: string, url: string): string {
  const normalizedPlatform = normalizePlatform(platform);
  if (PLATFORM_ICON_MAP[normalizedPlatform]) {
    return PLATFORM_ICON_MAP[normalizedPlatform];
  }

  const inferred = inferPlatformFromUrl(url);
  if (inferred && PLATFORM_ICON_MAP[inferred]) {
    return PLATFORM_ICON_MAP[inferred];
  }

  return 'generic-link';
}

export function mapSocialLinks(
  links?: Array<{ platform?: string | null; url?: string | null }> | null,
): CmsSocialLink[] {
  if (!links?.length) return [];

  return links
    .filter((link): link is { platform: string; url: string } => Boolean(link?.platform && link?.url))
    .map((link) => ({
      platform: link.platform,
      url: link.url,
      icon: resolveSocialIcon(link.platform, link.url),
      label: link.platform,
    }));
}
