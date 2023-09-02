import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const features = [
	{
		name: 'Spiders',
		description:
			'Bites can sometimes result in mild skin irritation and allergic reactions for susceptible individuals. Additionally, in rare cases, certain venomous spider species can cause more severe symptoms and require medical attention.',
		icon: ArrowRightCircleIcon
	},
	{
		name: 'Roach’s',
		description:
			'Cockroaches are highly adaptable insects and can contaminate food and surfaces with bacteria and allergens, damage organic materials like books and fabrics, and cause asthma and allergic reactions in humans',
		icon: ArrowRightCircleIcon
	},
	{
		name: 'Bee’s and Wasp’s',
		description:
			'Some people are allergic to bee and wasp stings, which can cause severe reactions and require medical attention.',
		icon: ArrowRightCircleIcon
	},
	{
		name: 'Fleas',
		description:
			'Fleas can cause harm by biting and irritating their hosts, leading to discomfort, itching, and potential skin infections. Additionally, fleas are known carriers of diseases such as typhus and tapeworms, posing a health risk to both humans and animals.',
		icon: ArrowRightCircleIcon
	},
	{
		name: 'Rodents',
		description:
			'Can cause significant damage in various ways. They have a tendency to gnaw on electrical wiring, leading to potential fire hazards in homes and buildings.',
		icon: ArrowRightCircleIcon
	},
	{
		name: 'Live trapping',
		description: 'Any critter that is not a rodent, we can live trap and relocate.',
		icon: ArrowRightCircleIcon
	}
]

export default function Example() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="text-base font-semibold leading-7 text-sky-600">We Take Care of All Pests</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Your Back!</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						These are the most common pests we deal with. If you have a pest that is not listed here, please contact us
					</p>
				</div>
			</div>
			<div className="relative overflow-hidden pt-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<img
						src="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="App screenshot"
						className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
						width={2432}
						height={1442}
					/>
					<div className="relative" aria-hidden="true">
						<div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
					</div>
				</div>
			</div>
			<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
				<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-9">
							<dt className="inline font-semibold text-gray-900">
								<feature.icon className="absolute left-1 top-1 h-5 w-5 text-sky-600" aria-hidden="true" />
								{feature.name}
							</dt>{' '}
							<dd className="inline">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}
