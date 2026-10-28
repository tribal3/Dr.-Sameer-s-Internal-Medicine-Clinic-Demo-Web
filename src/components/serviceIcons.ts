import {
  Activity,
  Pill,
  Stethoscope,
  TestTube,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceId } from '../content/site'

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  consultation: Stethoscope,
  laboratory: TestTube,
  ecg: Activity,
  pharmacy: Pill,
}
