import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How long does it take for the chemical to work?",
    answer:
      " It depends on the size of the infestation. It may last a short time but normally 30 to 60 days in most cases.",
  },
    {
        question:"Do I have to be out of the house for treatment? ",
        answer:"Normally, when pesticides are applied, it's recommended that you should be out of the house for 2 to 4 hours."
    },
    {
        question:"Will you have to come back out?",
        answer:"In some cases, we will have to provide multiple services."
    },{
        question:"How safe is the chemical?",
        answer:"Some chemicals are toxic but following the recommended dosage according to the label and the guidelines will make the chemicals less harmful. Follow instructions given by technicians when entering home."
    },{
        question:"Will my pets be okay?",
        answer:"It’s recommended to have pets out of the house during treatment."
    },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
