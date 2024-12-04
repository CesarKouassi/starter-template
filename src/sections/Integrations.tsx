"use client";
import Tag from '@/components/Tag';
import FigmaIcon from '@/assets/images/figma-logo.svg'
import NotionIcon from '@/assets/images/notion-logo.svg'
import SlackIcon from '@/assets/images/slack-logo.svg'
import RelumeIcon from '@/assets/images/relume-logo.svg'
import FramerIcon from '@/assets/images/framer-logo.svg'
import GithubIcon from '@/assets/images/github-logo.svg'
import Integrationcolumn from '@/components/IntregratonColumn';


const integrations = [
    { name: "Figma", icon: FigmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: NotionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: SlackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: RelumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: FramerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: GithubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
    return (
       <section className='py-24 overflow-hidden'>
            <div className="container">
                <div className='grid lg:grid-cols-2 items-center lg:gap-16'>
                    <div>
                       <Tag>Integrations</Tag>
                       <h2 className='text-6xl font-medium mt-6'>Play well will 
                         <span className='bg-gradient-to-t from-violet-vif to-jaune-orange bg-clip-text text-transparent'> others</span>
                       </h2>
                       <p className='text-dark-purple/50 mt-4 text-lg'>Layers seamssly  connect with your favorite tool, marking a easy to plug into any woerkflows and collaborate accros plateformes 
                      </p>
                    </div>
                    <div>  
                        <div //placements des tofs des applications
                           className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                           <Integrationcolumn integrations={integrations} />
                            <Integrationcolumn integrations={integrations.slice().reverse()} 
                            reverse
                          className="hidden md:flex" />
                        </div>
                   </div>
               </div>
         </div>
       </section>
    );
}