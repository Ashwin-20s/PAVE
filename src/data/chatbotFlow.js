import {
  Gem, Factory, Gavel, Package, Coins, HelpCircle, Phone, PhoneCall,
  ArrowLeft, Circle, Link2, Sparkles, Ear, Wand2, Palette, Laptop,
  Boxes, Diamond, ListChecks, ClipboardList, FileText,
} from 'lucide-react'

// Every predefined conversation node. Keep chatbot content separate from
// UI components so this file is what you edit to change what the bot says.

export const NODES = {
  welcome: {
    text: '👋 Welcome to CV Jewellery!\n\nWe are Gold & Diamonds Jewel Manufacturers, offering jewellery manufacturing, custom jewellery solutions, wholesale services and selected bank-auction jewellery.\n\nHow can we help you today?',
    buttons: [
      { label: 'Our Jewellery', icon: Gem, next: 'jewellery' },
      { label: 'Manufacturing Services', icon: Factory, next: 'manufacturing' },
      { label: 'Bank Auction Jewellery', icon: Gavel, next: 'bank_auction' },
      { label: 'Wholesale / Bulk Orders', icon: Package, next: 'wholesale' },
      { label: 'Pricing & Quotations', icon: Coins, next: 'pricing_quotations' },
      { label: 'FAQs', icon: HelpCircle, next: 'faq' },
      { label: 'Contact Us', icon: Phone, next: 'contact' },
    ],
  },

  // ---------------------------------------------------------------------
  // 1. OUR JEWELLERY
  // ---------------------------------------------------------------------
  jewellery: {
    text: '💎 Our Jewellery\n\nExplore our jewellery categories.\n\nPlease select a category:',
    buttons: [
      { label: 'Rings', icon: Circle, next: 'jewellery_rings' },
      { label: 'Chains & Necklaces', icon: Link2, next: 'jewellery_chains' },
      { label: 'Bangles & Bracelets', icon: Sparkles, next: 'jewellery_bangles' },
      { label: 'Earrings', icon: Ear, next: 'jewellery_earrings' },
      { label: 'Custom Jewellery', icon: Wand2, next: 'jewellery_custom' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  jewellery_rings: {
    text: '💍 Rings\n\nWe offer a range of gold and diamond rings in different designs and specifications.\n\nFor current designs and availability, please contact our team.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  jewellery_chains: {
    text: '📿 Chains & Necklaces\n\nWe offer various styles of chains and necklaces suitable for retail and wholesale requirements.\n\nContact our team for current designs and availability.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  jewellery_bangles: {
    text: '✨ Bangles & Bracelets\n\nOur collection includes traditional and contemporary designs.\n\nAvailability and pricing depend on the selected design and specifications.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  jewellery_earrings: {
    text: '👂 Earrings\n\nWe offer a variety of earring designs suitable for different occasions and customer requirements.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  jewellery_custom: {
    text: '💎 Custom Jewellery\n\nHave a specific design in mind?\n\nWe can discuss custom manufacturing requirements based on your design, material, quantity and specifications.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },

  // ---------------------------------------------------------------------
  // 2. MANUFACTURING SERVICES
  // ---------------------------------------------------------------------
  manufacturing: {
    text: '🏭 Manufacturing Services\n\nWe provide jewellery manufacturing solutions for businesses and retailers.\n\nPlease select a service:',
    buttons: [
      { label: 'Custom Manufacturing', icon: Palette, next: 'manufacturing_custom' },
      { label: 'CAD / Jewellery Design', icon: Laptop, next: 'manufacturing_cad' },
      { label: 'Bulk Production', icon: Boxes, next: 'manufacturing_bulk' },
      { label: 'Gold Jewellery', icon: Gem, next: 'manufacturing_gold' },
      { label: 'Diamond Jewellery', icon: Diamond, next: 'manufacturing_diamond' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  manufacturing_custom: {
    text: '🎨 Custom Manufacturing\n\nShare your design or requirements with our team and we can discuss the manufacturing possibilities.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  manufacturing_cad: {
    text: '💻 CAD / Jewellery Design\n\nDesign support can be provided for suitable jewellery manufacturing requirements.\n\nContact our team to discuss your design.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  manufacturing_bulk: {
    text: '🏭 Bulk Production\n\nWe accept bulk manufacturing requirements based on design, quantity, metal specifications and other requirements.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  manufacturing_gold: {
    text: '💎 Gold Jewellery Manufacturing\n\nWe manufacture gold jewellery according to the required design and specifications.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  manufacturing_diamond: {
    text: '💍 Diamond Jewellery Manufacturing\n\nWe manufacture selected diamond jewellery according to customer requirements and specifications.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },

  // ---------------------------------------------------------------------
  // 3. BANK AUCTION JEWELLERY
  // ---------------------------------------------------------------------
  bank_auction: {
    text: '🔨 Bank Auction Jewellery\n\nWe also offer selected jewellery available through bank auctions, subject to availability.\n\nWhat would you like to know?',
    buttons: [
      { label: 'Available Jewellery', icon: ListChecks, next: 'auction_available' },
      { label: 'Current Pricing', icon: Coins, next: 'auction_pricing' },
      { label: 'Auction Information', icon: ClipboardList, next: 'auction_info' },
      { label: 'Enquire Now', icon: PhoneCall, next: 'auction_enquire' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  auction_available: {
    text: '💍 Available Jewellery\n\nOur bank-auction jewellery selection may include:\n• Gold Chains\n• Rings\n• Bangles\n• Earrings\n• Necklaces\n• Other jewellery items\n\nAvailable stock changes periodically.\n\nPlease contact our team for the latest available items.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  auction_pricing: {
    text: '💰 Current Pricing\n\nThe price of each item depends on factors such as:\n• Weight\n• Purity\n• Jewellery type\n• Applicable current market rates\n• Other item-specific factors\n\nPlease contact our team for the latest price of a specific item.',
    buttons: [
      { label: 'Enquire Now', icon: PhoneCall, next: 'auction_enquire' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  auction_info: {
    text: '📋 Auction Information\n\nSelected jewellery may become available through bank auctions.\n\nFor information about a specific available item, applicable pricing and purchase details, please contact our team.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  auction_enquire: {
    text: '📞 Bank Auction Enquiry\n\nInterested in available bank-auction jewellery?\n\nOur team can provide information about current available items and pricing.\n\nPlease contact us for assistance.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },

  // ---------------------------------------------------------------------
  // 4. WHOLESALE / BULK ORDERS
  // ---------------------------------------------------------------------
  wholesale: {
    text: '📦 Wholesale / Bulk Orders\n\nWe work with jewellery businesses and customers requiring larger quantities.\n\nFor wholesale enquiries, please contact our sales team with your requirements.',
    buttons: [
      { label: 'Contact Sales', icon: Phone, next: 'contact' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },

  // ---------------------------------------------------------------------
  // 5. PRICING & QUOTATIONS
  // ---------------------------------------------------------------------
  pricing_quotations: {
    text: '💰 Pricing & Quotations\n\nJewellery pricing can depend on:\n• Metal type and purity\n• Weight\n• Design\n• Stones used\n• Quantity\n• Current applicable market rates\n\nFor an accurate quotation, please contact our team.',
    buttons: [
      { label: 'Request a Quote', icon: FileText, next: 'contact' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },

  // ---------------------------------------------------------------------
  // 6. FAQ
  // ---------------------------------------------------------------------
  faq: {
    text: '❓ Frequently Asked Questions\n\nPlease select a question.',
    buttons: [
      { label: 'Do you manufacture jewellery?', icon: HelpCircle, next: 'faq_manufacture' },
      { label: 'Do you accept bulk orders?', icon: HelpCircle, next: 'faq_bulk' },
      { label: 'Can I provide my own design?', icon: HelpCircle, next: 'faq_design' },
      { label: 'Do you sell bank-auction jewellery?', icon: HelpCircle, next: 'faq_bank_auction' },
      { label: 'How is the price calculated?', icon: HelpCircle, next: 'faq_price_calc' },
      { label: 'How can I contact you?', icon: HelpCircle, next: 'faq_contact' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  faq_manufacture: {
    text: 'Yes. We provide jewellery manufacturing services based on design, material, quantity and customer requirements.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  faq_bulk: {
    text: 'Yes. We accept wholesale and bulk manufacturing enquiries. Please contact our team with your requirements.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  faq_design: {
    text: 'Yes. You can discuss your design or manufacturing requirements with our team.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  faq_bank_auction: {
    text: 'Yes. We offer selected jewellery acquired through bank auctions, subject to availability.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  faq_price_calc: {
    text: 'Pricing depends on factors such as jewellery type, metal purity, weight, stones, design, quantity and applicable market rates.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
  faq_contact: {
    text: 'You can contact our team through the contact details provided below.',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },

  // ---------------------------------------------------------------------
  // 7. CONTACT US
  // ---------------------------------------------------------------------
  contact: {
    text: '📞 Contact CV Jewellery\n\nOur team is available to assist you with:\n• Jewellery enquiries\n• Manufacturing requirements\n• Wholesale orders\n• Bank-auction jewellery\n• Pricing and quotations\n\n📱 +91 98765 43210\n📧 sales@cvjewellery.com\n🕐 Monday – Saturday\n9:00 AM – 6:00 PM',
    buttons: [
      { label: 'Call Us', icon: PhoneCall, next: 'call_demo' },
      { label: 'Main Menu', icon: ArrowLeft, next: 'welcome' },
    ],
  },
  call_demo: {
    text: '📞 Connecting your call to +91 98765 43210…\n\n(This is a demo — no real call will be placed.)',
    buttons: [{ label: 'Main Menu', icon: ArrowLeft, next: 'welcome' }],
  },
}

export const FALLBACK_NODE = {
  text: "🤖 I'm currently able to help with the options below.\n\nPlease select an option from the menu.",
  buttons: NODES.welcome.buttons,
}
