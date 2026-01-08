
const services = [
    {
        title: 'Individualized Strategy',
        description: 'Custom tailored plans designed for your unique physiology and goals.',
    },
    {
        title: 'Personalized Nutrition',
        description: 'Data-backed nutrition protocols to fuel performance and recovery.',
    },
    {
        title: 'Strength & Elite Performance',
        description: 'Training programs used by elite athletes to maximize power and endurance.',
    },
    {
        title: 'Mindset Development',
        description: 'Mental resilience training to overcome barriers and reach new heights.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
                        Our Approach
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        Comprehensive coaching that covers every aspect of your health and performance.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.title} className="flex flex-col border border-white/10 rounded-2xl p-10 hover:border-primary/50 transition-colors bg-white/5">
                                <dt className="text-xl font-semibold leading-7 text-white font-display tracking-wide">
                                    {service.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
