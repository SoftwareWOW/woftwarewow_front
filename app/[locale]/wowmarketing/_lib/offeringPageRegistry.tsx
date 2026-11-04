import type { ComponentType } from 'react'

type OfferingPageProps = { params: Promise<{ locale: string }> }

import BrandAwarenessVisibilityPage from '@/app/[locale]/wowmarketing/solutions/brand-awareness-visibility/page'
import LeadGenerationCustomerAcquisitionPage from '@/app/[locale]/wowmarketing/solutions/lead-generation-customer-acquisition/page'
import EcommerceSalesGrowthPage from '@/app/[locale]/wowmarketing/solutions/ecommerce-sales-growth/page'
import ProductLaunchGoToMarketPage from '@/app/[locale]/wowmarketing/solutions/product-launch-go-to-market/page'
import CustomerRetentionEngagementPage from '@/app/[locale]/wowmarketing/solutions/customer-retention-engagement/page'
import MarketingPerformanceOptimizationPage from '@/app/[locale]/wowmarketing/solutions/marketing-performance-optimization/page'

import SearchEngineOptimizationPage from '@/app/[locale]/wowmarketing/services/search-engine-optimization/page'
import PayPerClickAdvertisingPage from '@/app/[locale]/wowmarketing/services/pay-per-click-advertising/page'
import ContentMarketingPage from '@/app/[locale]/wowmarketing/services/content-marketing/page'
import EmailMarketingPage from '@/app/[locale]/wowmarketing/services/email-marketing/page'
import AnalyticsReportingPage from '@/app/[locale]/wowmarketing/services/analytics-reporting/page'
import LocalSeoPage from '@/app/[locale]/wowmarketing/services/local-seo/page'
import MarketingAutomationPage from '@/app/[locale]/wowmarketing/services/marketing-automation/page'
import LeadGenerationPage from '@/app/[locale]/wowmarketing/services/lead-generation/page'
import SocialMediaMarketingPage from '@/app/[locale]/wowmarketing/services/social-media-marketing/page'
import DigitalStrategyPage from '@/app/[locale]/wowmarketing/services/digital-strategy/page'

export const WOW_MARKETING_SERVICE_PAGES: Record<string, ComponentType<OfferingPageProps>> = {
  'search-engine-optimization': SearchEngineOptimizationPage,
  'pay-per-click-advertising': PayPerClickAdvertisingPage,
  'content-marketing': ContentMarketingPage,
  'email-marketing': EmailMarketingPage,
  'analytics-reporting': AnalyticsReportingPage,
  'local-seo': LocalSeoPage,
  'marketing-automation': MarketingAutomationPage,
  'lead-generation': LeadGenerationPage,
  'social-media-marketing': SocialMediaMarketingPage,
  'digital-strategy': DigitalStrategyPage,
}

export const WOW_MARKETING_SOLUTION_PAGES: Record<string, ComponentType<OfferingPageProps>> = {
  'brand-awareness-visibility': BrandAwarenessVisibilityPage,
  'lead-generation-customer-acquisition': LeadGenerationCustomerAcquisitionPage,
  'ecommerce-sales-growth': EcommerceSalesGrowthPage,
  'product-launch-go-to-market': ProductLaunchGoToMarketPage,
  'customer-retention-engagement': CustomerRetentionEngagementPage,
  'marketing-performance-optimization': MarketingPerformanceOptimizationPage,
}
