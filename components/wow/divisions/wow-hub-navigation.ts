import type { NavigationData } from '@/components/wow/nav/navigation-types'

const panel = (
  title: string,
  description: string,
  includes: string[],
  ctaLabel = 'Learn more',
) => ({
  title,
  description,
  includes,
  ctaLabel,
  image: 'default' as const,
})

const coursesHref = '/hub#explore'
const communityHref = '/hub#community'

const link = (
  id: string,
  label: string,
  description: string,
  href: string,
) => ({
  id,
  label,
  description,
  type: 'link' as const,
  href,
  detailPanel: id,
})

/** WOW Hub mega-nav — Figma-aligned Courses, Programs, Community, and detail panels. */
export const wowHubNavigation = {
  detailPanels: {
    default: panel(
      'Marketing & Growth',
      'Learn practical marketing skills and strategies to grow brands, audiences, and businesses.',
      [
        'Digital marketing fundamentals',
        'SEO & content marketing',
        'Social media strategies',
        'Growth planning & analytics',
      ],
    ),
    hubCoursesMarketingGrowth: panel(
      'Marketing & Growth',
      'Learn practical marketing skills and strategies to grow brands, audiences, and businesses.',
      [
        'Digital marketing fundamentals',
        'SEO & content marketing',
        'Social media strategies',
        'Growth planning & analytics',
      ],
    ),
    hubCoursesDesignCreativity: panel(
      'Design & Creativity',
      'Develop creative skills and bring your ideas to life through effective design.',
      [
        'Graphic design fundamentals',
        'Branding & visual identity',
        'UI/UX design principles',
        'Creative tools & techniques',
      ],
    ),
    hubCoursesTechnologyAi: panel(
      'Technology & AI',
      'Explore emerging technologies and discover practical ways to use AI in everyday work.',
      [
        'AI tools & applications',
        'Automation fundamentals',
        'Digital technology essentials',
        'Practical AI workflows',
      ],
    ),
    hubCoursesSalesBusiness: panel(
      'Sales & Business',
      'Build essential sales and business skills to turn ideas into sustainable growth.',
      [
        'Sales fundamentals & techniques',
        'Business planning & strategy',
        'Customer acquisition & retention',
        'Entrepreneurship & growth',
      ],
    ),
    hubCoursesLeadershipBranding: panel(
      'Leadership & Personal Branding',
      'Develop leadership confidence, strengthen your personal brand, and grow your professional influence.',
      [
        'Leadership & communication skills',
        'Personal branding strategies',
        'Professional development',
        'Public speaking & influence',
      ],
    ),
    hubCoursesCommunityCollaboration: panel(
      'Community & Collaboration',
      'Learn to collaborate, share knowledge, and build meaningful professional relationships.',
      [
        'Teamwork & collaboration',
        'Community building fundamentals',
        'Networking & relationship skills',
        'Knowledge sharing & peer learning',
      ],
    ),
    hubCommunityAskDiscuss: panel(
      'Ask & Discuss',
      'Ask questions, exchange ideas, and learn from a supportive community of curious minds.',
      [
        'Community discussions',
        'Questions & answers',
        'Peer knowledge sharing',
        'Topic-based conversations',
      ],
    ),
    hubCommunityLiveSessions: panel(
      'Live Sessions',
      'Join interactive sessions to learn, exchange insights, and connect with experts.',
      [
        'Live learning discussions',
        'Expert Q&A sessions',
        'Interactive group activities',
        'Community learning events',
      ],
    ),
    hubCommunityMeetConnect: panel(
      'Meet & Connect',
      'Discover like-minded people, build professional relationships, and explore new opportunities together.',
      [
        'Member introductions',
        'Professional networking',
        'Interest-based connections',
        'Collaboration opportunities',
      ],
    ),
    hubCommunityShareWork: panel(
      'Share Your Work',
      'Showcase your projects, exchange feedback, and inspire others with your creativity.',
      [
        'Project & portfolio sharing',
        'Community feedback',
        'Creative showcases',
        'Peer recognition & inspiration',
      ],
    ),
  },
  items: [
    {
      id: 'courses',
      label: 'Courses',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'hubCoursesMarketingGrowth',
        columns: [
          {
            id: 'coursesList',
            title: null,
            items: [
              link(
                'hubCoursesMarketingGrowth',
                'Marketing & Growth',
                'Learn strategies. Grow smarter.',
                coursesHref,
              ),
              link(
                'hubCoursesDesignCreativity',
                'Design & Creativity',
                'Unlock creativity. Build new skills.',
                coursesHref,
              ),
              link(
                'hubCoursesTechnologyAi',
                'Technology & AI',
                'Explore technology. Master AI.',
                coursesHref,
              ),
              link(
                'hubCoursesSalesBusiness',
                'Sales & Business',
                'Sell smarter. Build better businesses.',
                coursesHref,
              ),
              link(
                'hubCoursesLeadershipBranding',
                'Leadership & Personal Branding',
                'Lead confidently. Build your influence.',
                coursesHref,
              ),
              link(
                'hubCoursesCommunityCollaboration',
                'Community & Collaboration',
                'Learn together. Grow together.',
                coursesHref,
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'courses',
            title: 'Courses',
            items: [
              {
                id: 'hubCoursesMarketingGrowth',
                label: 'Marketing & Growth',
                description: 'Learn strategies. Grow smarter.',
                href: coursesHref,
              },
              {
                id: 'hubCoursesDesignCreativity',
                label: 'Design & Creativity',
                description: 'Unlock creativity. Build new skills.',
                href: coursesHref,
              },
              {
                id: 'hubCoursesTechnologyAi',
                label: 'Technology & AI',
                description: 'Explore technology. Master AI.',
                href: coursesHref,
              },
              {
                id: 'hubCoursesSalesBusiness',
                label: 'Sales & Business',
                description: 'Sell smarter. Build better businesses.',
                href: coursesHref,
              },
              {
                id: 'hubCoursesLeadershipBranding',
                label: 'Leadership & Personal Branding',
                description: 'Lead confidently. Build your influence.',
                href: coursesHref,
              },
              {
                id: 'hubCoursesCommunityCollaboration',
                label: 'Community & Collaboration',
                description: 'Learn together. Grow together.',
                href: coursesHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'programs',
      label: 'Programs',
      navKind: 'link' as const,
      href: '/hub#programs',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'programs',
        columns: [],
      },
      mobile: { pages: [] },
    },
    {
      id: 'community',
      label: 'Community',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'hubCommunityAskDiscuss',
        columns: [
          {
            id: 'communityList',
            title: null,
            items: [
              link(
                'hubCommunityAskDiscuss',
                'Ask & Discuss',
                'Ask questions. Share ideas.',
                communityHref,
              ),
              link(
                'hubCommunityLiveSessions',
                'Live Sessions',
                'Join live. Learn together.',
                communityHref,
              ),
              link(
                'hubCommunityMeetConnect',
                'Meet & Connect',
                'Meet people. Build connections.',
                communityHref,
              ),
              link(
                'hubCommunityShareWork',
                'Share Your Work',
                'Showcase ideas. Inspire others.',
                communityHref,
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'community',
            title: 'Community',
            items: [
              {
                id: 'hubCommunityAskDiscuss',
                label: 'Ask & Discuss',
                description: 'Ask questions. Share ideas.',
                href: communityHref,
              },
              {
                id: 'hubCommunityLiveSessions',
                label: 'Live Sessions',
                description: 'Join live. Learn together.',
                href: communityHref,
              },
              {
                id: 'hubCommunityMeetConnect',
                label: 'Meet & Connect',
                description: 'Meet people. Build connections.',
                href: communityHref,
              },
              {
                id: 'hubCommunityShareWork',
                label: 'Share Your Work',
                description: 'Showcase ideas. Inspire others.',
                href: communityHref,
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as NavigationData
