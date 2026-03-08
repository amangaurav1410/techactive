"use client";

export function TrustedBy() {
    const companies = [
        "Google Cloud", "Amazon AWS", "Microsoft Azure", "Snowflake", "Stripe", "Datadog", "Vercel", "Oracle"
    ];

    return (
        <section className="py-14 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-8">
                    Integrated with the world's leading platforms
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5 opacity-30 grayscale">
                    {companies.map((name) => (
                        <span
                            key={name}
                            className="text-sm font-black text-slate-900 tracking-[0.15em] hover:opacity-70 transition-opacity cursor-default"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
