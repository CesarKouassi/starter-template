'use client'
import Tag from '@/components/Tag';
import FeatureCard from '@/components/FeatureCard';
// Importing avatars of collaborators
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg';
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg';
import Image from "next/image";
// Importing Avatar component
import Avatar from '@/components/Avatar';
import Key from '@/components/key';
import { useI18n, useScopedI18n } from '../../locales/client';

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
    "Manager Port",
    "Chao Ops"
];

export default  function Features() {
    const t =  useI18n();
    const futurT =  useScopedI18n ("futur");
    const futursT =  useScopedI18n("futurs")
    return (
        <section className='py-24'>
            <div className="container">
                {/* Header */}
                <div className='flex justify-center'>
                    <Tag>Features</Tag>
                </div>
                <h2 className='text-6xl font-medium text-center mt-6 max-w-2xl mx-auto'>
                   {futurT('where')}  <span className='bg-gradient-to-t from-violet-vif to-jaune-orange bg-clip-text text-transparent'>{futurT('simplicity')}</span>
                </h2>

                {/* Main features list */}
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
                    {/* Team Collaboration */}
                    <FeatureCard  
                        title={futursT('titre.titles1.title')} 
                        description={futursT('titre.titles1.description')}
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            {/* Avatar component is used for displaying collaborators */}
                            <Avatar className='z-40'>
                                <Image src={avatar1} alt="avatar1" className='rounded-full' />
                            </Avatar>
                            <Avatar className='-ml-6 border-indigo-500 z-30'>
                                <Image src={avatar2} alt="avatar2" className='rounded-full' />
                            </Avatar>
                            <Avatar className='-ml-6 border-amber-500 z-20'>
                                <Image src={avatar3} alt="avatar3" className='rounded-full' />
                            </Avatar>
                            {/* Additional collaborators */}
                            <Avatar className="-ml-6 border-transparent group-hover:border-yellow-300 transition">
                                <div className="size-full bg-dark-purple rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image 
                                        src={avatar4} 
                                        alt="avatar4" 
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" 
                                    />
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <span 
                                            className="size-1.5 rounded-full bg-blanc-pur inline-flex" 
                                            key={index} 
                                            style={{ top: `${index * 10}%`, left: `${index * 10}%` }} 
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    {/* Interactive Prototype */}
                    <FeatureCard  
                        title={futursT('titre.title2.title')}    
                        description={futursT('titre.title2.description')}
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-dark-purple/20 group-hover:text-dark-purple/10 transition duration-500 text-center">
                                {futurT('achieved')}{"  "} 
                                <span className="bg-gradient-to-r from-violet-vif to-jaune-orange bg-clip-text text-transparent relative">
                                    <span>{futurT('incredible')}</span>
                                    <video 
                                        src="/assets/gif-incredible.mp4"   
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                                    />
                                </span> 
                                {" "}{futurT('growth')}
                            </p>
                        </div>
                    </FeatureCard>  

                    {/* Keyboard Shortcuts */}
                    <FeatureCard  
                        title={futursT('titre.title3.title')}
                        description={futursT('titre.title3.description')}
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-jaune-orange transition-all duration-500 group-hover:translate-y-1">Shift</Key>
                            <Key className='outline outline-2 outline-offset-4 outline-transparent group-hover:outline-jaune-orange transition-all duration-500 group-hover:translate-y-1 delay-150'>alt</Key>
                            <Key className='outline outline-2 outline-offset-4 outline-transparent group-hover:outline-jaune-orange transition-all duration-500 group-hover:translate-y-1 delay-300'>C</Key>
                        </div>
                    </FeatureCard> 
                </div>

                {/* Additional features list */}
                <div className='mt-8 flex flex-wrap gap-3 justify-center'>
                    {features.map((feature) => (
                        <div 
                            key={feature} 
                            className="bg-blanc-pur border border-blanc-pur/20 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-gradient-to-t from-violet-vif to-jaune-orange text-blanc-pur size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
