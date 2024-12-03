"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript / React</li>
                <li>C# / .NET</li>
                <li>Java Mobile Development</li>
                <li>MySQL</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Licensed massage therapist 2019-2020</li>
                <li>Engineer of information technology, Savonia University Of Applied Sciences 2022-2025</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Vekomi Oy, Pumpulipoiju | Licensed massage therapist 2020-2022</li>
                <li>Adobe softwares since 2016</li>
                <li>Photograhpy 2016 | Drone Videography 2024 </li>
            </ul>
        ),
    },
];

const AboutMe = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tab) => {
        startTransition(() => {
            setTab(tab);
        });
    };
    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/drone.png" alt='drone_kuva' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>
                        I am a third-year engineering student of information technology in Savonia University of Applied Sciences.
                        I have a passion for web development and UI/UX designing.
                        I have worked with JavaScript, React, C#, .NET, Java mobile development and mySQL. I am also familiar with basics of Python, Git and linux.
                        On my free time I like to improve my content creation skills and my knowledge of full stack development. I have a entrepreneurial mindset
                        but I am a team player and always ready to seek new opportunities to learn and grow.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'Programming Skills'}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'Education'}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'Experience'}>{" "}Experience{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((data) => data.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe