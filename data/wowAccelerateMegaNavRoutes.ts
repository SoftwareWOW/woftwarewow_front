export type WowAccelerateMegaNavServiceRoute = {
  navId: string
  slug: string
  serviceSegment: string
}

export type WowAccelerateMegaNavSolutionRoute = {
  navId: string
  slug: string
  solutionSegment: string
}

import {
  WOW_ACCELERATE_NAV_SERVICES,
  WOW_ACCELERATE_NAV_SOLUTIONS,
} from './wowAccelerateNavContent'

export const WOW_ACCELERATE_MEGA_NAV_SERVICE_ROUTES: WowAccelerateMegaNavServiceRoute[] =
  WOW_ACCELERATE_NAV_SERVICES.map((o) => ({
    navId: o.navId,
    slug: o.slug,
    serviceSegment: o.slug,
  }))

export const WOW_ACCELERATE_MEGA_NAV_SOLUTION_ROUTES: WowAccelerateMegaNavSolutionRoute[] =
  WOW_ACCELERATE_NAV_SOLUTIONS.map((o) => ({
    navId: o.navId,
    slug: o.slug,
    solutionSegment: o.slug,
  }))

const serviceRouteByNavId = new Map(
  WOW_ACCELERATE_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySegment = new Map(
  WOW_ACCELERATE_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.serviceSegment, route]),
)

const solutionRouteByNavId = new Map(
  WOW_ACCELERATE_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.navId, route]),
)

const solutionRouteBySegment = new Map(
  WOW_ACCELERATE_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.solutionSegment, route]),
)

export function wowAccelerateServiceHref(serviceSegment: string): string {
  return `/accelerate/services/${serviceSegment}`
}

export function wowAccelerateSolutionHref(solutionSegment: string): string {
  return `/accelerate/solutions/${solutionSegment}`
}

export function wowAccelerateMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return wowAccelerateServiceHref(service.serviceSegment)

  const solution = solutionRouteByNavId.get(navId)
  if (solution) return wowAccelerateSolutionHref(solution.solutionSegment)

  return '/accelerate'
}

export function isWowAccelerateServiceSegment(segment: string): boolean {
  return serviceRouteBySegment.has(segment)
}

export function isWowAccelerateSolutionSegment(segment: string): boolean {
  return solutionRouteBySegment.has(segment)
}
