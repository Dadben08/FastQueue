import { Ticket, Clock, Bell, BarChart3 } from "lucide-react";

export const navItems = [
  { 
    label: "Home", 
    href: "/" 
  },

  {
    label: "About",
    href: "about",
  },

  {
    label: "Features",
    dropdown: [
      { 
        label: "Features", 
        href: "features" 
      },
      { 
        label: "How it Works", 
        href: "howitworks"
      },
    ],
  },

  {
    label: "Industries",
    path: "/industry",
  },

  {
    label: "Pricing",
    dropdown: [
      { 
        label: "Pricing", 
        href: "pricing"
      },
      { 
        label: "FAQ", 
        href: "faq" 
      },
    ],
  },

  { 
    label: "Contact", 
    href: "contact" 
  },
];

export const faqs = [
  {
    question: "What is FastQueues?",
    answer:
      "FastQueues is a smart queue management system that helps businesses reduce wait times, eliminate crowded lobbies, and improve customer satisfaction.",
  },
  {
    question: "How does the digital ticket system work?",
    answer:
      "Customers receive a digital ticket via QR code or link. They can monitor their position in the queue in real-time and get notified when it's their turn.",
  },
  {
    question: "Can FastQueues handle multiple branches?",
    answer:
      "Yes! Our Pro and Enterprise plans support multi-branch queue management, so you can manage multiple locations from one dashboard.",
  },
  {
    question: "Does FastQueues require special hardware?",
    answer:
      "No. FastQueues is a web-based solution that works on desktops, tablets, and smartphones. You don’t need to buy extra hardware to get started.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Free plan lets you try FastQueues with up to 50 tickets per day—perfect for small businesses or pilot testing. You can try the free plan today. The offers are unlimited.",
  },
  {
    question: "Can FastQueues integrate with other systems?",
    answer:
      "Our Pro and Enterprise tiers include API access, allowing seamless integration with CRMs, booking systems, and notification tools.",
  },
];

export const features = [
  {
    icon: <Ticket className="w-10 h-10 text-brand-primary" />,
    title: "Digital Tickets",
    description:
      "Customers get a digital ticket via QR code or link, eliminating paper waste and physical queues.",
  },
  {
    icon: <Clock className="w-10 h-10 text-green-600" />,
    title: "Real-time Updates",
    description:
      "Live status updates keep everyone informed, reducing anxiety and no-shows.",
  },
  {
    icon: <Bell className="w-10 h-10 text-yellow-600" />,
    title: "Notifications",
    description:
      "Automated SMS or push notifications alert customers when their turn is near.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
    title: "Analytics",
    description:
      "Gain insights into wait times, customer flow, and peak hours to optimize your service.",
  },
];

export const howItWorksItems = [
  {
    title: "Join the Queue",
    description:
      "Customers can easily join a queue via mobile, web, or on-site kiosk — no more standing in long lines.",
  },
  {
    title: "Track Your Spot",
    description:
      "Real-time updates let customers know their position in the queue and estimated wait time.",
  },
  {
    title: "Get Notifications",
    description:
      "FastQueues sends instant alerts when it's almost your turn, so you never miss your spot.",
  },
  {
    title: "Get Served Smoothly",
    description:
      "When it’s your turn, you’re notified to approach the counter or service point — simple and stress-free.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₦0",
    buttonText: "Start for Free",
    link: "/payment",
    features: [
      "Up to 50 tickets/day",
      "Basic queue management",
      "Real-time updates",
      "Email support",
    ],
  },
  {
    title: "Standard",
    price: "₦29",
    buttonText: "Get Standard",
    link: "/payment",
    features: [
      "Unlimited digital tickets",
      "Real-time notifications",
      "Basic analytics (wait times, peak hours)",
      "Queue branding",
    ],
  },
  {
    title: "Pro",
    price: "₦99",
    buttonText: "Get Pro",
    link: "/payment",
    features: [
      "Advanced analytics & reporting",
      "Multi-branch support",
      "Priority customer support",
      "API & integrations",
    ],
  },
];
