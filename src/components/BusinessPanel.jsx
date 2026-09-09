import { BUSINESS } from '../data/businessData'

// Desktop-only decorative label shown above the phone simulation.
// Hidden on mobile so the chat can occupy the full screen there.
export default function BusinessPanel() {
  return (
    <div className="text-center" style={{ marginBottom: 18 }}>
      <div className="text-lg font-semibold" style={{ color: '#241A12', letterSpacing: 0.2 }}>
        {BUSINESS.businessName}
      </div>
      <div className="text-sm" style={{ color: '#B8923F', marginTop: 2 }}>
        WhatsApp Automation Demo
      </div>
      <div className="text-xs" style={{ color: '#9C9080', marginTop: 2 }}>
        Customer Experience Preview
      </div>
    </div>
  )
}
