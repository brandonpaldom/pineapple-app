import creditCardIcon from '../assets/credit_card.svg'
import localShippingIcon from '../assets/local_shipping.svg'
import monetizationOnIcon from '../assets/monetization_on.svg'

const features = [
  {
    title: 'Apple Card Monthly Installments',
    description:
      'Pay over time, interest-free when you choose to check out with Apple Card Monthly Installments.',
    icon: creditCardIcon,
  },
  {
    title: 'Trade in for credit',
    description:
      'Get credit toward your purchase when you trade in an eligible Mac.',
    icon: monetizationOnIcon,
  },
  {
    title: 'Free delivery',
    description: 'And free returns. See checkout for delivery dates.',
    icon: localShippingIcon,
  },
]

export default function Features() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-2 rounded-lg p-4 shadow-md">
          <div className="h-6 w-6 shrink-0 rounded-full bg-neutral-100">
            <img
              src={feature.icon}
              alt={feature.title}
              className="m-1 h-4 w-4"
            />
          </div>
          <div>
            <h3 className="text-[0.875rem] font-semibold">{feature.title}</h3>
            <p className="text-[0.75rem] text-neutral-500">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
