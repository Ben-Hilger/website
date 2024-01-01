'use client';

import { usePathname } from 'next/navigation';
import LinkItem from './link';
import SocialIcon, { SocialIconType } from './social.icon';

export default function Navigation() {

    const pathName = usePathname();

    function isSelected(href: string) {
        return href === pathName;
    }

    return (
            <nav className="navigation fixed w-100 z-20 top-0 start-0">
                <div className="navigation-wrapper align-items-center justify-content-between ml-auto mr-auto p-1">
                    <span className="align-self-center fs-1_5 fw-semibold whitespace-nowrap">Ben Hilger</span>
                    <div id="navbar-sticky">
                        <ul className="w-100 p-0_25 fw-medium rounded">
                            <li>
                                <LinkItem href="/" isSelected={ isSelected("/") } label="Home"/>
                            </li>
                            <li>
                                <LinkItem href="/portfolio" isSelected= { isSelected("/portfolio") } label="Portfolio" />
                            </li>
                            <li>
                                <LinkItem href="/about" isSelected= { isSelected("/about") } label="About" />
                            </li>
                            <li>
                                <LinkItem target="_blank" href="https://dev.to/benhilger" isSelected={ false } label="Blog" />
                            </li>
                        </ul>
                    </div>
                    <div className="flex mr-1">
                        <div className='mr-1'>
                            <SocialIcon 
                                type={ SocialIconType.Github }
                            />
                        </div>

                        <SocialIcon 
                            type={ SocialIconType.LinkedIn }
                        />
                    </div>
                </div>
            </nav>
        );
}
