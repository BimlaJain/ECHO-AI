import React from 'react';
import { NAV_DATA_LINK } from '../utils/helper';
import { useEffect, useState } from 'react';
import CustomButton from '../common/CommonButton';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {

        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }

        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])

    return (
        <div className="sm:py-7 py-4 flex items-center lg:h-[100px] sm:h-20">
            <div className="container">
                <div className="flex justify-between items-center lg:h-[100px] sm:h-20">
                    <a href="/">
                        <img className='max-w-[192px] max-xl:pt-3' src="./assets/images/png/logo.png" alt="nav-logo" />
                    </a>
                    <div className='lg:block hidden'>
                        <div className="flex gap-8 items-center">
                            {NAV_DATA_LINK.map((obj, index) => (
                                <a onClick={toggleMenu}
                                    key={index}
                                    className="font-normal hover:text-blue-500 transition-all duration-500 text-base leading-custom-base text-white"
                                    href={obj.id}
                                >
                                    {obj.title}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-black max-lg:flex-col max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                        <div className='lg:hidden block'>
                            <div className='flex-col flex gap-6 items-center'>
                                {NAV_DATA_LINK.map((obj, index) => (
                                    <a onClick={toggleMenu}
                                        key={index}
                                        className="font-normal hover:text-blue-500 transition-all duration-500 text-base leading-custom-base text-white"
                                        href={obj.id}
                                    >
                                        {obj.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <CustomButton classStyle={'sm:py-[13.5px] sm:px-8 py-3 p-6'} text={'Get Started'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;