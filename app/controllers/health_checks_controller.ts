import { healthChecks } from '#start/health'
import type { HttpContext } from '@adonisjs/core/http'

export default class HealthChecksController {
  async ready({ response }: HttpContext) {
    const report = await healthChecks.run()
    if (report.isHealthy) {
      return response.ok({ status: 'ok' })
    }

    console.warn(report)
    return response.serviceUnavailable({ status: 'unavailable' })
  }
}
