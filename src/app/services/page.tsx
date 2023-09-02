const features = [
	{
		name: 'Bees and Wasps',
		description:
			'Bees and wasps are flying insects that can be found in various environments. They can build nests in trees, attics, or other structures, and can sting humans when they feel threatened. Some people are allergic to bee and wasp stings, which can cause severe reactions and require medical attention.',
		imgsrc: 'https://res.cloudinary.com/dq6endwuq/image/upload/v1693683036/wasps_wyg7mz.webp',
		imageAlt: 'Photo by Bee Safe on Unsplash'
	},
	{
		name: 'Bed Bugs',
		description:
			'Bed bugs are tiny pests that can easily travel between buildings and go unnoticed by humans. They can hitch a ride on luggage, purses, backpacks, or other items placed on soft or upholstered surfaces. They can also come into your home on used furniture, bedding, or boxes.',
		imageSrc: 'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415243/bed-bugs-in-mattress_fnvb9c.jpg',
		imageAlt: 'Image of some bed bugs.'
	},

	{
		name: 'Cockroaches',
		description:
			'Cockroaches are highly adaptable insects from the order Blattodea and are incredibly successful on Earth. They can contaminate food and surfaces with bacteria and allergens, damage organic materials like books and fabrics, and cause asthma and allergic reactions in humans. They are also associated with spreading diseases like dysentery, salmonellosis, and gastroenteritis.',
		imageSrc: 'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415256/mj-ne-Cng-7HIgry8-unsplash_qdzecp.jpg',
		imageAlt: 'Photo by MJ NE on Unsplash'
	},
	{
		name: 'Ants',
		description:
			'Ants can cause various damages, including structural damage by tunneling through wood and insulation, compromising the stability of buildings and other structures. They can contaminate food and stored products by carrying bacteria and pathogens. Some ant species, like fire ants, can deliver painful bites or stings, causing allergic reactions or medical emergencies. Additionally, certain ants, such as carpenter ants, can weaken wooden structures by excavating galleries within them.',
		imageSrc:
			'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415246/peter-f-wolf-XG8eYNYdz54-unsplash_t6xrsg.jpg',
		imageAlt: 'Photo by Peter F. Wolf on Unsplash'
	},
	{
		name: 'Rats',
		description:
			'Rats can cause significant damage in various ways. They have a tendency to gnaw on electrical wiring, leading to potential fire hazards in homes and buildings. Their constant chewing and nesting activities can also damage structures, piping systems, and insulation. Additionally, rats are known carriers of diseases and can contaminate food and surfaces with their droppings, posing health risks to humans.',
		imageSrc:
			'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415249/svetozar-cenisev-KKPV5hGmQkA-unsplash_mdmhqg.jpg',
		imageAlt: 'Detail of laptop sleeve side pouch zipper opening.'
	},
	{
		name: 'Mice',
		description:
			'Mice can cause various damages in homes and other environments. Firstly, they can chew through electrical wiring, leading to potential fire hazards. Secondly, they contaminate food and surfaces with their urine, feces, and hair, posing health risks and requiring thorough cleaning. Lastly, their constant gnawing can harm furniture, insulation, and other structures, leading to property damage and costly repairs.',
		imageSrc:
			'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415251/wolfgang-hasselmann-VrgmStUnoVo-unsplash_l1zust.jpg',
		imageAlt: 'Photo by Wolfgang Hasselmann on Unsplash'
	},
	{
		name: 'Spiders',
		description:
			'Spiders can cause minimal damages as they are generally harmless to humans. However, their bites can sometimes result in mild skin irritation and allergic reactions for susceptible individuals. Additionally, in rare cases, certain venomous spider species can cause more severe symptoms and require medical attention.',
		imageSrc: 'https://res.cloudinary.com/dq6endwuq/image/upload/v1693415247/dev-leigh-aLDuLRjZknE-unsplash_gpwb7a.jpg',
		imageAlt: 'Photo by Dev Leigh on Unsplash'
	}
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Services() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services to Fit Your Needs</h2>
					<p className="mt-4 text-gray-500">
						Here is a list of services we offer. If you don’t see what you need, please contact us and we will be happy
						to help.
					</p>
				</div>

				<div className="mt-16 space-y-16">
					{features.map((feature, featureIdx) => (
						<div
							key={feature.name}
							className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
						>
							<div
								className={classNames(
									featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
									'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
								)}
							>
								<h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
								<p className="mt-2 text-sm text-gray-500">{feature.description}</p>
							</div>
							<div
								className={classNames(
									featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
									'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
								)}
							>
								<div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
									<img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
