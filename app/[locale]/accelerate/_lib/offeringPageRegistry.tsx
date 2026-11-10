import type { ComponentType } from 'react'

type OfferingPageProps = { params: Promise<{ locale: string }> }

import LeadGenerationServicePage from '@/app/[locale]/accelerate/services/lead-generation/page'
import AppointmentSettingOutreachPage from '@/app/[locale]/accelerate/services/appointment-setting-outreach/page'
import SalesFunnelDevelopmentPage from '@/app/[locale]/accelerate/services/sales-funnel-development/page'
import LeadQualificationNurturingPage from '@/app/[locale]/accelerate/services/lead-qualification-nurturing/page'
import CrmSetupOptimizationPage from '@/app/[locale]/accelerate/services/crm-setup-optimization/page'
import SalesAutomationServicePage from '@/app/[locale]/accelerate/services/sales-automation/page'
import SalesAnalyticsReportingPage from '@/app/[locale]/accelerate/services/sales-analytics-reporting/page'
import SalesProcessOptimizationPage from '@/app/[locale]/accelerate/services/sales-process-optimization/page'

import LeadGenerationOutboundPage from '@/app/[locale]/accelerate/solutions/lead-generation-outbound/page'
import SalesFunnelsConversionPage from '@/app/[locale]/accelerate/solutions/sales-funnels-conversion/page'
import CrmSalesSystemsPage from '@/app/[locale]/accelerate/solutions/crm-sales-systems/page'
import SalesAutomationEnablementPage from '@/app/[locale]/accelerate/solutions/sales-automation-enablement/page'

export const WOW_ACCELERATE_SERVICE_PAGES: Record<string, ComponentType<OfferingPageProps>> = {
  'lead-generation': LeadGenerationServicePage,
  'appointment-setting-outreach': AppointmentSettingOutreachPage,
  'sales-funnel-development': SalesFunnelDevelopmentPage,
  'lead-qualification-nurturing': LeadQualificationNurturingPage,
  'crm-setup-optimization': CrmSetupOptimizationPage,
  'sales-automation': SalesAutomationServicePage,
  'sales-analytics-reporting': SalesAnalyticsReportingPage,
  'sales-process-optimization': SalesProcessOptimizationPage,
}

export const WOW_ACCELERATE_SOLUTION_PAGES: Record<string, ComponentType<OfferingPageProps>> = {
  'lead-generation-outbound': LeadGenerationOutboundPage,
  'sales-funnels-conversion': SalesFunnelsConversionPage,
  'crm-sales-systems': CrmSalesSystemsPage,
  'sales-automation-enablement': SalesAutomationEnablementPage,
}
